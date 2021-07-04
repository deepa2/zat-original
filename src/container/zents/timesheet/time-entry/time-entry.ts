import { Subscription } from 'rxjs/Subscription';
import { Component, ViewChild, NgZone } from '@angular/core';
import { IonicPage, NavController, ModalController, Slides, NavParams, ToastController } from 'ionic-angular';
import { CalenderModel } from '../../../../components/calender-model/calender-model';
import { CommonUtilities } from '../../../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from '../../../../providers/http/http';
import { version } from '@app/env';
import moment from 'moment';
import { DatePipe } from '@angular/common';
import { TsEditModalComponent } from '../../../../components/ts-edit-modal/ts-edit-modal';
import { TimeEntryPopupComponent } from '../../../../components/time-entry-popup/time-entry-popup';

/**
 * Generated class for the TimeEntryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-time-entry',
  templateUrl: 'time-entry.html',
})
export class TimeEntryPage {

  private pageTitle: string = null;
  private data = {
    loginDetails: null,
    projectMigratedData: null,
    type: 'time-entry'
  }
  private calendarDates: Array<any> = [];
  private enabledDates: Array<any> = [];
  private calendarInfo: any;
  private calenderStartDate: string;
  private calenderEndDate: string;
  private timesheetData: any;
  private selectedDate: string = null;
  private subPages: any = [];
  private notificationData: any;
  private months = {
    currentMonth: null,
    lastMonth: null
  }
  private tsFlags = {
    disableSubmit: false,
    showZencoreMigratedMessage: false
  }

  @ViewChild(Slides) slides: Slides;

  private _calendarInfoSubsciption: Subscription = new Subscription();
  private _getTimeEntryInfoSubsciption: Subscription = new Subscription();

  constructor(private navCtrl: NavController, private modalCtrl: ModalController,
    private utility: CommonUtilities, private httpProvider: HttpProvider, public datePipe: DatePipe,
    private navParams: NavParams, private toastCtrl: ToastController, private zone: NgZone) {

    //check for notification data;
    if (this.navParams.get('isComingfromNotification')) {
      this.notificationData = this.navParams.get('isComingfromNotification');
      //console.log(this.notificationData);
      this.pageTitle = this.notificationData.pageTitle;
      // this.utility.presentAlert(JSON.stringify(this.pageTitle),"pagetitle")
    } else {
      this.pageTitle = this.navParams.get('pageTitle');
      // this.subPages = this.navParams.get('subData');
      // this.utility.presentAlert(JSON.stringify(this.pageTitle),"pagetitle")
    }

  }

  ionViewDidLoad() {

    // this.getCalendarInfo();
    this.getAccessData();

    //check whether coming through notification
    // if (this.notificationData) {
    //   this.getAccessData();
    // } else {
    //   this.getCalendarInfo();
    // }
  }

  ionViewWillEnter() {
  }

  addTask() {
    if (this.selectedDate) {
      new Promise((resolve, reject) => {
        let reqData = {
          "selectedDate": this.selectedDate,
          "hideProjectTask": this.timesheetData.onlyZenCOREProjectAllocation,
          "taskAndTimesheetDetails": this.timesheetData.taskAndTimesheetDetails,
          "isPayrollToBeFilledZeroHours": this.canFillZeroHoursFlag(),
          resolve: resolve
        }
        this.navCtrl.push('AddTaskPage', { 'timeEntryData': reqData });
      }).then((userMessage: string) => {
        this.getTimeEntryDetails(this.selectedDate, userMessage);
      });
    }
  }


  getAccessData() {
    let data = {};
    let url = 'accessDetails';
    this.utility.updateLoader(true)
    this.httpProvider.http.zentsCommonGETService({ url, data, overtime: true }).subscribe((res: any) => {
      //console.log(res);
      //this.utility.presentAlert(JSON.stringify(res.data),"access data")
      if (res && res.data) {
        if (res.data.AdditionalHoursApplicable && res.data.IsExcempt) {
          this.subPages.push({ 'pageName': "AdditionalHoursPage", 'title': 'Additional Hours' });
        }
        if (res.data.AdditionalHoursApplicable && !res.data.IsExcempt) {
          this.subPages.push({ 'pageName': "AdditionalHoursPage", 'title': 'Overtime' });
        }
        if (res.data.IsApprover) {
          this.subPages.push({ 'pageName': "ApprovalDashboardPage", 'title': 'Timesheet Approval' });

        }
        if (res.data.reportAccess) {
          this.subPages.push({ 'pageName': "ReportPage", 'title': 'Reports' });
        }
        this.subPages.push({ 'pageName': "MyAttendanceTimesheetPage", 'title': 'My Timesheet' });
      }

      // this.utility.updateLoader(false)
      this.getCalendarInfo();
    },
      (error) => {
        this.utility.updateLoader(false);
      })

    // console.log(this.subPages);
  }


  getMonthwiseCompliancePercentage(month: string, monthseq: string) {
    this.utility.updateLoader(true);

    let url = 'getMonthwiseCompliancePercentage';
    let data = { "month": month }

    this.httpProvider.http.zentsCommonService({ url, data, dashboard: true }).subscribe((res: any) => {
      this.utility.updateLoader(false);
      if (res && res.data) {
        let percentage = res.data.percentage;
        let details = res.data.dateDetails;
        let data = {
          pendingDates: details.notFilledDates,
          rejectedDates: details.rejectedDates,
          percentage: percentage
        }
        this.openModal(monthseq, data);
      }
    }, (err) => {
      this.utility.updateLoader(false);
    })
  }

  /**
   * Open Calendar Modal to show compliance and not submitted dates
   * @param monthseq : Specifies the month sequence .i.e lastmonth or currentmonth
   * @param dataObj : Data to be passed to calendar-modal .i.e rejected dates,pending dates,compliance percentage
   */
  openModal(monthseq, dataObj) {
    let modal = this.modalCtrl.create(CalenderModel, {
      dataParams: {
        rejectedDates: dataObj.rejectedDates,
        pendingDates: dataObj.pendingDates,
        percentage: dataObj.percentage,
        key: monthseq,
        type: 'time-entry',
        calendarDates: this.enabledDates,
        selectedDate: this.selectedDate
      }

    }, {
      cssClass: 'calendermodel',
    });

    modal.present();
    modal.onDidDismiss((res) => {
      if (res) {
        let d = this.enabledDates.filter((obj) => obj.date == res)
        if (d && d.length > 0) {
          this.calendarDates = this.enabledDates;
          this.getTimeEntryDetails(res, '', true);
        } else {
          this.calendarDates = this.getDates(res);
          this.getTimeEntryDetails(res, '', true);
        }
      }
    })
  }
  /**************** Modal for Time Entry Sub-Menu****************/
  openTimeEntryModal() {
    let modal = this.modalCtrl.create(TimeEntryPopupComponent, { 'submainData': this.subPages }, {
      cssClass: 'time-entry-modal',
      enableBackdropDismiss: true,
      showBackdrop: true
    })
    modal.onDidDismiss((data) => {
      if (data) {
        if (data.homePageConfigrationName == 'Approval Dashboard') {
          this.navCtrl.push("ApprovalDashboardPage");
        }
        else if (data.homePageConfigrationName == 'My Timesheet') {
          this.navCtrl.push('MyAttendanceTimesheetPage')
        }
        // for zenDeavor redirection 
        else {
          this.navCtrl.push(data.pageName, {
            'pageTitle': data.title
          });
        }
      }
    })

    modal.present();

  }

  /**
   * Get Calendar Specific Data
   */
  getCalendarInfo() {
    if (!this.notificationData) {
      this.utility.updateLoader(true);
    }

    const url = 'calenderInfo';
    const data = {
      "version": version
    }
    this._calendarInfoSubsciption = this.httpProvider.http.zentsCommonService({ url, data, timeentry: true }).subscribe((res: any) => {


      // to resolve calander display issue on some devices zone is added
      this.zone.run(() => {
        this.calendarInfo = res.data;
        //this.utility.presentAlert(JSON.stringify(this.calendarInfo),"calender data")
        let dates = this.calendarInfo.CalendarDates;

        //set calendar start date and end date
        this.calenderStartDate = dates.timesheetStartDate;
        this.calenderEndDate = dates.endDate;
        this.months.currentMonth = dates.currentMonth;
        this.months.lastMonth = dates.lastMonth;

        //get range of dates in an array to maintain slider
        this.calendarDates = this.getDateArray(this.calenderStartDate, this.calenderEndDate);

        //Used in month wise compliance calender
        this.enabledDates = this.getDateArray(this.calenderStartDate, this.calenderEndDate);
        if (this.notificationData) {
          this.getTimeEntryDetails(this.notificationData.notificationData.startDate);
        } else {
          this.getTimeEntryDetails(this.calenderEndDate);
        }

        if (this.calendarInfo.ProjectAllocationFlag) {
          this.presentToast(this.calendarInfo.ProjectAllocationFlag);
        }
      })



    }, (err) => {
      this.utility.updateLoader(false);
    })
  }

  /**
   * Get Time-entry details for the selected date
   * @param selDate : get time-entry details for this date
   * @param message : dispaly message in toast if there is any action performed(save,submit,delete)
   * @param refreshLoader : true only when no action(save,submit,delete) is performed
   */
  getTimeEntryDetails(selDate, message = "", refreshLoader = false) {
    this.selectedDate = selDate;
    if (refreshLoader) {
      this.utility.updateLoader(true);
    }
    const url = 'timeEntryDetails';
    const data = {
      "version": version,
      "selectedDate": selDate
    }
    this._getTimeEntryInfoSubsciption = this.httpProvider.http.zentsCommonService({ url, data, timeentry: true }).subscribe((res: any) => {
      this.utility.updateLoader(false);
      //this.utility.presentAlert(JSON.stringify(res.data),"time entry details")
      if (res && res.data) {
        let data = res.data;
        let list = [];
        this.timesheetData = data;
        this.data.loginDetails = this.timesheetData.staffLoginLogoutDetails;

        this.calendarDates.map((obj, index) => {
          if (obj.date == selDate) {
            this.slides.slideTo(index, 500);
          }
        })

        //disable submit if there are no saved timesheet
        if (data.taskAndTimesheetDetails.length > 0) {
          data.taskAndTimesheetDetails.map((timesheet: any) => {
            if (timesheet.taskList.length > 0) {
              timesheet.taskList.map((task: any) => {
                if (task.approvalStatus == '-1' || task.approvalStatus == '3') {
                  list.push(task);
                }
              })
            }
          })
        }
        this.tsFlags.disableSubmit = list.length > 0 ? false : true;

        //show message for migrated projects
        if (data.taskAndTimesheetDetails.length == 0) {
          this.getProjectList();
        }
      }

      this.utility.showToast(message);

    }, (err) => {
      this.timesheetData = null;
      this.utility.updateLoader(false);
    })
  }

  onDateSelect(obj: any) {
    if (!obj.isRejectedTimesheet) {
      this.selectedDate = obj.date;
      this.getTimeEntryDetails(this.selectedDate, '', true);
    }
  }

  //open edit tasks modal
  async presentEditModal(task: any, timesheet: any, taskAndTimesheetDetails: Array<any>) {

    let editModal = this.modalCtrl.create(TsEditModalComponent, {
      taskObj: task,
      isFixedBidProject: timesheet.isFixedBidProject,
      milestoneDetails: timesheet.milestoneDetails,
      billability: timesheet.billability,
      selectedDate: this.selectedDate,
      isTimesheetEditable: this.timesheetData.isTimesheetEditable,
      isPayrollToBeFilledZeroHours: this.canFillZeroHoursFlag()
    });
    editModal.present();
    editModal.onDidDismiss((res: any) => {
      if (res) {
        this.editAndSaveTimesheet(res, task, taskAndTimesheetDetails);
      }
    });
  }

  /**
   * Method to Perform Save Action
   * @param obj : It contains the edited data
   * @param taskData : Task object
   * @param taskAndTimesheetDetails : Task and timesheet details list 
   */
  editAndSaveTimesheet(obj: any, taskData: any, taskAndTimesheetDetails: Array<any>) {
    this.utility.updateLoader(true);
    //reset timesheet if submitted timesheet edited to save
    let taskIds = this.getResetTaskIds(taskAndTimesheetDetails);

    //update required fields after edit
    taskData.selectedDate = this.selectedDate;
    taskData.totalEfforts = this.utility.convertTime(obj.efforts, 1);
    taskData.nonbillableEffort = this.utility.convertTime(obj.efforts, 1);;
    taskData.billableEffort = '0.00';
    if (obj.comments) {
      taskData.comments = obj.comments;
    }
    if (obj.billability) {
      taskData.billablityFlag = obj.billability;
      taskData.billabilityFlag = obj.billability;
    } else if (obj.defaultBillability) {             //default value set if user doesn't select billability
      taskData.billablityFlag = obj.defaultBillability;
      taskData.billabilityFlag = obj.defaultBillability;
    }
    if (obj.milestoneName) {
      taskData.milestoneName = obj.milestoneName;
    }
    if (obj.bapPaymentScheduleKey) {
      taskData.bapPaymentScheduleKey = obj.bapPaymentScheduleKey;
    }
    if (taskIds && taskIds.length > 0) {
      taskData.resetTaskIds = taskIds;
    }

    const url: string = "processtimeentrytimesheet";
    const data = taskData;
    this.httpProvider.http.zentsCommonService({ url, data, timeentry: true }).subscribe((res: any) => {

      if (res && res.userMessage) {
        this.getTimeEntryDetails(this.selectedDate, res.userMessage);
      }
    }, (err) => {
      this.utility.updateLoader(false);
      this.getTimeEntryDetails(this.selectedDate); //if save error occurs restore old state of timesheet
    })
  }

  /**
   * Method to Perform Delete Action
   * @param taskObj 
   * @param ts_tasklist 
   */
  deleteTimesheet(taskObj: any, ts_taskAndTimesheetlist?: any) {

    let taskIdList = [];
    if (ts_taskAndTimesheetlist.length > 0) {
      ts_taskAndTimesheetlist.map((timesheetList) => {
        if (timesheetList && timesheetList.taskList.length > 0) {
          timesheetList.taskList.map(task => {
            if (task.approvalStatus != 0) {
              taskIdList.push(task.taskId);
            }
          })
        }
      })
    }
    const url: string = "detachtimesheet";
    const data: any = {
      "taskUpdateDate": taskObj.taskUpdateDate,
      "taskId": taskObj.taskId,
      "taskIdList": taskIdList
    }
    this.utility.updateLoader(true);
    this.httpProvider.http.zentsCommonService({ url, data, timeentry: true }).subscribe((res: any) => {

      if (res && res.userMessage) {
        this.getTimeEntryDetails(this.selectedDate, res.userMessage);
      } else {
        this.getTimeEntryDetails(this.selectedDate, res.userMessage);
      }
    }, (err) => {
      this.utility.updateLoader(false);
    })
  }

  refreshTimesheet() {
    this.getTimeEntryDetails(this.selectedDate, '', true);
  }

  /**
   * Return all task id's except fixed holiday
   * @param timesheetList : Timesheet details list
   */
  getResetTaskIds(timesheetList: Array<any>) {
    let taskIds = [];
    if (timesheetList.length > 0) {
      timesheetList.map((timesheet: any) => {
        if (timesheet && timesheet.taskList.length > 0) {
          timesheet.taskList.map((task: any) => {
            if (task.approvalStatus == 2) {
              // if (task.taskName !== 'FIXED HOLIDAY') {
              taskIds.push(task.taskId);
              // }
            }
          })
        }
      })
    }
    if (taskIds.length > 0) {
      return taskIds;
    }
  }

  /**
   * Retrieve all dates between start and end date
   */
  getDateArray = function (start, end) {
    let dates: Array<{ date: any, day: any, isWeekEnd: boolean }> = [];
    let startDate = moment(start);
    let endDate = moment(end);

    while (startDate <= endDate) {
      dates.push({
        date: moment(startDate).format("YYYY-MM-DD"),
        day: moment(startDate, "YYYY-MM-DD").format('ddd'),
        isWeekEnd: (startDate.day() == 6 || startDate.day() == 0) ? true : false
      });
      startDate = moment(startDate).add(1, 'days');
    }
    return dates.reverse();
  }

  /**
   * Retrieve all dates through the rejected date
   * @param d : rejected date
   */
  getDates(d) {
    let dateArr = [];
    let endDate = moment(d);
    let j = 5;
    let i = 0;
    while (i <= j) {
      dateArr.push({
        date: moment(endDate).format("YYYY-MM-DD"),
        day: moment(endDate, "YYYY-MM-DD").format('ddd'),
        isWeekEnd: (endDate.day() == 6 || endDate.day() == 0) ? true : false,
        isRejectedTimesheet: i == 0 ? false : true
      });
      if (endDate.day() == 6 || endDate.day() == 0) {
        j++;
      }
      // endDate.setDate(endDate.getDate() - 1);
      endDate = moment(endDate).subtract(1, "days");
      i++;
    }
    return dateArr;
  }

  //Confirm submit 
  showSubmitConfirmAlert(timesheetList: Array<any>) {
    let alert = this.utility.presentConfirmation('Are you sure you want to submit this timesheet ?');
    alert.then(() => {
      this.submitTimesheet(timesheetList);
    });
  }

  /**
   * 
   * Method to Perform Submit Action
   */
  submitTimesheet(list: Array<any>) {
    let rejectedTimesheetFlag: boolean = false;
    let rejectedTaskName: string = null;

    let timesheetList: Array<any> = [];
    if (list && list.length > 0) {
      list.map(item => {
        if (item.taskList.length > 0) {
          item.taskList.map(task => {
            if (task.approvalStatus !== '0') {
              //comments mandatory while submitting rejected timesheet
              if (task.approvalStatus == '3' && task.tsRejected && !task.comments && !rejectedTimesheetFlag) {
                rejectedTimesheetFlag = true;
                rejectedTaskName = task.taskName;
              }
              timesheetList.push(task);
            }
          })
        }
      })
    }

    if (timesheetList.length > 0 && !rejectedTimesheetFlag) {
      const url: string = "concludetimeentryprocessing";
      const data: any = {
        "versions": version,
        "selectedDate": this.selectedDate,
        "timesheetList": timesheetList,
        "extendTimesheetFillingDate": this.calendarInfo.CalendarDates.extendTimesheetFillingDate
      }
      this.utility.updateLoader(true);
      this.httpProvider.http.zentsCommonService({ url, data, timeentry: true }).subscribe((res: any) => {
        this.getTimeEntryDetails(this.selectedDate, res.userMessage);
      }, (err) => {
        this.utility.updateLoader(false);
      })
    }
    else if (rejectedTimesheetFlag) {
      // this.utility.presentAlert('Please add remarks for ' + rejectedTaskName + ' task');
      this.utility.presentAlert('Please add remarks for rejected timesheets');
    }
  }

  /**
   * Get data to check if the project is migrated to ZenCore
   */
  getProjectList() {
    const url = 'projectList';
    const data = {
      "currentDate": this.selectedDate
    };

    this.httpProvider.http.zentsCommonService({ url, data, addTask: true }).subscribe((res: any) => {
      if (res && res.data) {
        let list = res.data;
        if (list.length > 0) {
          list.map(item => {
            if (item.isZencoreMigrated == 'YES' &&
              (this.selectedDate > item.zencoreMigratedDate || this.selectedDate == item.zencoreMigratedDate)) {
              this.tsFlags.showZencoreMigratedMessage = true;
              this.data.projectMigratedData = item;
            }
          });
        }
      }
    }, (err) => { })
  }

  ionViewWillLeave() {
    this._calendarInfoSubsciption.unsubscribe();
    this._getTimeEntryInfoSubsciption.unsubscribe();
  }

  /**
   * Check if the associate can fill zero hours
   */
  canFillZeroHoursFlag() {
    if (this.calendarInfo.AssociatesBU) {
      return this.calendarInfo.PayrollToBeFilledZeroHours.includes(this.calendarInfo.AssociatesBU);
    }
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 5000,
      position: 'bottom',
      cssClass: 'timesheetToastMsg'
    });
    toast.onDidDismiss(() => { });
    toast.present();
  }

}
