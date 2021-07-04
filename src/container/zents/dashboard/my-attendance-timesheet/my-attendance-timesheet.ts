import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpProvider } from '../../../../providers/http/http';
import { CommonUtilities } from '../../../../providers/commonUtilities/commonUtilities'
import moment from 'moment';
/**
 * Generated class for the MyAttendanceTimesheetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-attendance-timesheet',
  templateUrl: 'my-attendance-timesheet.html',
})

export class MyAttendanceTimesheetPage {

  // pageTitle: String = "Attendance / Timesheets"
  // onlyHours: number;
  isSubmitted: boolean = false;
  private data = {
    isDataAvailable: false,
    attendanceList: []
  }
  private tsDates = {
    tsMinDate: null,
    tsMaxDate: null
  }
  private timeSheetForm: FormGroup;
  private selectedProject: any;
  private selectedStatus: any;

  private tsStartDate: String;
  private tsEndDate: String;
  private compareFlag: boolean = false;
  private oneMonthMessageFlag: boolean = false;
  private invalidDateMessageFlag: boolean = false;

  private projectAllocationList: Array<any> = [];

  constructor(private navCtrl: NavController, private fb: FormBuilder, private httpProvider: HttpProvider, private utility: CommonUtilities) {
  }

  ionViewDidLoad() {
    // this.getApprovalDashboardData();
    this.getMyTimesheetDashboardData();
  }

  checkDateToHighlight(date) {
    let splitdate = date.split(" ");
    if (splitdate[0] <= 8) {
      return true;
    }
    else {
      return false;
    }
  }

  ngOnInit() {
    this.timeSheetForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      projName: ['', Validators.required],
      status: ['', Validators.required]
    });

  }

  // getApprovalDashboardData() {
  //   this.utility.updateLoader(true);
  //   this.httpProvider.http.zentsCommonService({ url: "getEmployeeDashBoardNew", data: {}, dashboard: true }).subscribe((res: any) => {
  //     this.utility.updateLoader(false);
  //     if (res) {
  //       this.projectAllocationList = res.projectAllocationList;
  //       this.tsStartDate = (res.monthlyLockDate);
  //       this.tsEndDate = (res.serverDate);
  //       // let myTimesheetCalendarMinDate = moment(res.serverDate).subtract(1, 'years').format('YYYY-MM-DD');
  //       this.tsDates.tsMinDate = res.myTimesheetCalendarMinDate;
  //       this.tsDates.tsMaxDate = res.timesheetMaxDate;
  //       this.data.isDataAvailable = true;

  //       if (res.attendanceList) {
  //         this.data.attendanceList = res.attendanceList;
  //       }
  //       if (res.projectAllocationList.length == 1) {
  //         this.selectedProject = res.projectAllocationList[0];
  //       }
  //     }
  //   }, (err) => {
  //     this.utility.updateLoader(false);
  //   })
  // }

  getMyTimesheetDashboardData() {
    this.utility.updateLoader(true);
    this.httpProvider.http.zentsCommonService({ url: "getMyTimesheetDashboard", data: {}, dashboard: true }).subscribe((res: any) => {
      this.utility.updateLoader(false);
      if (res) {
        this.projectAllocationList = res.projectAllocationList;
        this.tsStartDate = (res.monthlyLockDate);
        this.tsEndDate = (res.serverDate);
        // let myTimesheetCalendarMinDate = moment(res.serverDate).subtract(1, 'years').format('YYYY-MM-DD');
        this.tsDates.tsMinDate = res.myTimesheetCalendarMinDate;
        this.tsDates.tsMaxDate = res.timesheetMaxDate;
        this.data.isDataAvailable = true;

        if (res.attendanceList) {
          this.data.attendanceList = res.attendanceList;
        }
        if (res.projectAllocationList.length == 1) {
          this.selectedProject = res.projectAllocationList[0];
        }
      }
    }, (err) => {
      this.utility.updateLoader(false);
    })
  }

  openMyTimesheetPage() {
    this.isSubmitted = true;
    if (this.timeSheetForm.valid && !this.compareFlag && !this.oneMonthMessageFlag) {
      let selectedProjIds: Array<any> = [];
      let selProjectByUser = this.selectedProject == 'all' ? "all" : this.selectedProject.projectId;

      if (this.selectedProject == 'all') {
        this.projectAllocationList.map((data: any) => {
          selectedProjIds.push(data.projectId);
        });
      } else {
        selectedProjIds.push(this.selectedProject.projectId);
      }

      this.navCtrl.push('MyTimesheetsPage', {
        "startDate": (this.tsStartDate),
        "endDate": (this.tsEndDate),
        "projectName": this.selectedProject.projectName,
        "projectId": selProjectByUser,
        "projectIds": selectedProjIds,
        "status": this.selectedStatus,
        "type": "myTimesheet"
      });


    } else {
      return false;
    }
  }

  onEndDateSelect(e) {
    this.compareFlag = moment(this.timeSheetForm.get('endDate').value) < moment(this.timeSheetForm.get('startDate').value);
    this.oneMonthMessageFlag = this.checkThirtyDaysDifference();
    if (!this.oneMonthMessageFlag) {
      this.getProjectListOnDateChange();
    }
    // if(moment(this.timeSheetForm.get('endDate').value) < moment(this.tsDates.tsMinDate) || moment(this.timeSheetForm.get('endDate').value) >  moment(this.tsDates.tsMaxDate) ){
    //   this.invalidDateMessageFlag = true;
    // } 
  }

  onStartDateSelect(e) {
    this.compareFlag = moment(this.timeSheetForm.get('startDate').value) > moment(this.timeSheetForm.get('endDate').value);
    this.oneMonthMessageFlag = this.checkThirtyDaysDifference();
    if (!this.oneMonthMessageFlag) {
      this.getProjectListOnDateChange();
    }
    this.invalidDateMessageFlag = moment(this.timeSheetForm.get('startDate').value) < moment(this.tsDates.tsMinDate) || moment(this.timeSheetForm.get('startDate').value) > moment(this.tsDates.tsMaxDate);
  }

  checkThirtyDaysDifference() {
    let endDate = moment(this.timeSheetForm.get('endDate').value);
    let startDate = moment(this.timeSheetForm.get('startDate').value);
    let diff = endDate.diff(startDate, 'days');
    // console.log('diff: ', diff);
    return diff >= 0 && diff <= 30 ? false : true;
  }

  get t() {
    return this.timeSheetForm.controls;
  }

  getProjectListOnDateChange() {
    this.utility.updateLoader(true);
    let data = {
      "startDate": this.timeSheetForm.get('startDate').value,
      "endDate": this.timeSheetForm.get('endDate').value
    }

    this.httpProvider.http.zentsCommonService({ url: "getProjectListData", data: data, dashboard: true }).subscribe((res: any) => {
      this.utility.updateLoader(false);
      if (res && res.length > 0) {
        if (!(JSON.stringify(this.projectAllocationList) === JSON.stringify(res))) {
          this.projectAllocationList = res;
          if (this.projectAllocationList.length == 1) {
            this.selectedProject = this.projectAllocationList[0];
          }
        }
      }
    }, (err) => {
      this.utility.updateLoader(false);
    })

  }

}
