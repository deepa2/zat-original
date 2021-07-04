import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, FabContainer } from 'ionic-angular';
import { CommonUtilities } from '../../../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from '../../../../providers/http/http';
import { version } from '@app/env';
import { OtEditModalComponent } from '../../../../components/ot-edit-modal/ot-edit-modal';
import moment from 'moment';
import { CalenderModel } from '../../../../components/calender-model/calender-model';
/**
 * Generated class for the AdditionalHoursPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-additional-hours',
  templateUrl: 'additional-hours.html',
})
export class AdditionalHoursPage {
  @ViewChild('fab') fab: FabContainer;

  additionalHourTimesheetData: any = null;
  disableSubmit: boolean = false;
  private showOverlay: boolean = false;
  private calendarData: any;
  private dates: any;
  private selectedDate: string;
  private dateRange ={
    minDate: null,
    maxDate: null
  }
  private months = {
    currentMonth: null,
    lastMonth: null
  }
  private rejectedDatesArr: Array<any> = [];
  private pageTitle: String;

  constructor(private navCtrl: NavController, private navParams: NavParams,
    private utility: CommonUtilities, private httpProvider: HttpProvider,
    private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.pageTitle = this.navParams.get('pageTitle');
    this.getCalendarInfo();
  }

   /**
   * Get Calendar Specific Data
   */
  getCalendarInfo() {
    this.utility.updateLoader(true);
    const url = 'calenderInfo';
    const data = {
      "version": version
    }
    this.httpProvider.http.zentsCommonService({ url, data, timeentry: true }).subscribe((res: any) => {
      if (res && res.data) {
        this.calendarData = res.data;
        this.rejectedDatesArr = this.calendarData.AdditionalHrsRejectedTimesheetsDates;
        this.dates = this.calendarData.CalendarDates;
        this.dateRange.minDate = this.dates.additionalHrsSaveSubmitStartDate;
        this.dateRange.maxDate = this.dates.endDate;
        this.selectedDate = this.dates.endDate;
        this.months.currentMonth = this.dates.currentMonth;
        this.months.lastMonth = this.dates.lastMonth;
        this.getAdditionalHourTimesheetDetails(this.selectedDate);
      }
    }, (err) => {
      this.utility.updateLoader(false);
    })
  }

  applyAdditionalHours() {
    this.fabClicked();
    this.fab.close();
    if (this.dates) {
      new Promise((resolve, reject) => {
        let dates = {
          'pageTitle': this.pageTitle,
          'applyCalendarMinDate': this.dates.additionalHrsStartDate,
          'applyCalendarMaxDate': this.dates.additionalHrsEndDate,
          resolve: resolve
        }
        this.navCtrl.push('ApplyAdditionalHoursPage', { 'calendarDates': dates });
      }).then((userMessage:string) => {
        this.getAdditionalHourTimesheetDetails(this.selectedDate,userMessage);
      });
    }
  }

  fabClicked() {
    this.showOverlay = !this.showOverlay;
  }

  onDateChange(e) {
    this.selectedDate = this.utility.changeToDateString(e);
    this.getAdditionalHourTimesheetDetails(this.selectedDate,'',true);
  }

  /**
   * 
   * Get Additional Hour Time-entry details for the selected date
   * @param selDate : get data for this date
   * @param message : dispaly message in toast if there is any action performed(save,submit,delete)
   * @param refreshLoader : true only when no action(save,submit,delete) is performed
   */
  getAdditionalHourTimesheetDetails(selDate: string, message = '', refreshLoader = false) {

    if (refreshLoader) {
      this.utility.updateLoader(true);
    }
    const url = 'overtimeentry';
    const data = {
      "selectedDate": selDate
    }

    this.httpProvider.http.zentsCommonService({ url, data, overtime: true }).subscribe((res: any) => {

      this.utility.updateLoader(false);
      if (res && res.data) {
        let data = res.data;
        this.additionalHourTimesheetData = data;
        let list = [];
        if (data.taskAndTimesheetDetails.length > 0) {
          data.taskAndTimesheetDetails.map((timesheet) => {
            if (timesheet.taskList.length > 0) {
              list = timesheet.taskList.filter((item: any) => item.approvalStatus == '-1' || item.approvalStatus == '3')
            }
          })
        }
        this.disableSubmit = list.length > 0 ? false : true;

        this.utility.showToast(message);
      }
    }, err => {
      this.utility.updateLoader(false);
    })
  }

  /**
   * Method to Perform Save Action
   * @param taskData 
   * @param dataObj 
   */
  saveAddHrsTimesheet(taskData: any, dataObj: any) {
    this.utility.updateLoader(true);
    const url: string = "processovertimetimesheet";
    const data = {
      "taskUpdateDate": taskData.taskUpdateDate,
      "totalEfforts": this.utility.convertTime(dataObj.efforts, 1),
      "billablityFlag": dataObj.billability ? dataObj.billability : taskData.billablityFlag,
      "comments": dataObj.remarks ? dataObj.remarks : taskData.comments,
      "taskId": taskData.taskId,
      "taskInformationId": 0,
      "billabilityFlag": dataObj.billability ? dataObj.billability : taskData.billabilityFlag,
      "additionalHrsFlag": "YES",
      "poInvoiceKey": taskData.poInvoiceKey,
      "uuId": taskData.uuId,
      "taskActualEffort": taskData.taskActualEffort
    }

    this.httpProvider.http.zentsCommonService({ url, data, overtime: true }).subscribe((res: any) => {

      if (res && res.userMessage) {
        this.getAdditionalHourTimesheetDetails(this.selectedDate, res.userMessage);
      }
    }, (err) => {
      this.utility.updateLoader(false);
      this.getAdditionalHourTimesheetDetails(this.selectedDate);  //if save error occurs restore old state of timesheet
    })
    //}
  }

  //open edit tasks modal
  async presentEditModal(task: any) {

    let editModal = this.modalCtrl.create(OtEditModalComponent, {
      taskObj: task
    });
    editModal.present();
    editModal.onDidDismiss((res: any) => {
      if (res) {
        this.saveAddHrsTimesheet(task, res);
      }
    });
  }

  /**
   * Method to Delete Timesheet
   * @param taskObj 
   */
  deleteTimesheet(taskObj: any) {
    const url: string = "detachovertimetimesheet";
    const data: any = {
      "taskUpdateDate": taskObj.taskUpdateDate,
      "taskId": taskObj.taskId
    }
    this.utility.updateLoader(true);
    this.httpProvider.http.zentsCommonService({ url, data, overtime: true }).subscribe((res: any) => {
      if (res && res.userMessage) {
        this.getAdditionalHourTimesheetDetails(this.selectedDate, res.userMessage);
      }else{
        this.getAdditionalHourTimesheetDetails(this.selectedDate, res.userMessage);
      }
    }, (err) => {
      this.utility.updateLoader(false);
    })
  }

  //Confirm submit 
  showSubmitConfirmAlert(timesheetList: Array<any>) {
    let alert = this.utility.presentConfirmation('Are you sure you want to submit this timesheet ?');
    alert.then(() => {
      this.submitTimesheet(timesheetList);
    }, (err) => {});
  }

  /**
   * Method to Submit Timesheet
   * @param timesheet 
   */
  submitTimesheet(timesheet: Array<any>) {
    let rejectedTimesheetFlag: boolean = false;
    let rejectedTaskName: string = null;

    let timesheetList: Array<any> = [];
    if (timesheet && timesheet.length > 0) {
      timesheet.map(item => {
        if (item.taskList.length > 0) {
          item.taskList.map(task => {
            if (task.approvalStatus !== '0') {
              //comments mandatory while submitting rejected timesheet
              if (task.approvalStatus == '3' && !task.comments && !rejectedTimesheetFlag) {
                rejectedTimesheetFlag = true;
                rejectedTaskName = task.taskName;
              }
              timesheetList.push(
                {
                  "taskUpdateDate": task.taskUpdateDate,
                  "totalEfforts": task.totalEfforts,
                  "approvalStatus": task.approvalStatus,
                  "taskId": task.taskId,
                  "billabilityFlag": task.billabilityFlag
                }
              );
            }
          })
        }
      })
    }

    if (timesheetList.length > 0 && !rejectedTimesheetFlag) {
      const url: string = "processovertimefinaltimesheet";
      const data: any = {
        "timesheets": timesheetList
      }
      this.utility.updateLoader(true);
      this.httpProvider.http.zentsCommonService({ url, data, overtime: true }).subscribe((res: any) => {
        if (res && res.userMessage) {
          this.getAdditionalHourTimesheetDetails(this.selectedDate,res.userMessage);
        }
      }, err => {
        this.utility.updateLoader(false);
      })
    }
    else if (rejectedTimesheetFlag) {
      this.utility.presentAlert('Please add remarks for ' + rejectedTaskName + ' task before submission');
    }
  }

  goToAppliedHoursList() {
    this.fabClicked();
    this.fab.close();
    this.navCtrl.push('AppliedHoursListPage');
  }

  refreshTimesheet() {
    this.getAdditionalHourTimesheetDetails(this.selectedDate,'',true);
  }

  getDatesOfSelectedMonth(monthName: String, monthSeq: String) {
    let dates = this.rejectedDatesArr.filter(date => moment(date).format('MMMM').toLowerCase() == monthName.toLowerCase());
    let data = {
      rejectedDates: dates
    }
    this.openCalenderModel(monthSeq, data);
  }

  /**
   * Open Calendar Modal to highlight rejected timesheets
   * @param monthseq: Specifies the month sequence .i.e lastmonth or currentmonth 
   * @param dataObj 
   */
  openCalenderModel(monthseq, dataObj) {
    let modal = this.modalCtrl.create(CalenderModel, {
      dataParams: {
        rejectedDates: dataObj.rejectedDates,
        key: monthseq,
        type: 'add-hrs'
      }
    }, {
      cssClass: 'calendermodel',
    });

    modal.present();
    modal.onDidDismiss((res) => {
      if (res) {
        
        this.selectedDate = res;
      }
    })
  }

}
