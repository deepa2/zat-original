import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, Events } from 'ionic-angular';
import { HttpProvider } from '../../../../providers/http/http';
import { CommonUtilities } from '../../../../providers/commonUtilities/commonUtilities';
import { DecimalPipe } from '@angular/common';

/**
 * Generated class for the ApprovalDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-approval-dashboard',
  templateUrl: 'approval-dashboard.html',
})
export class ApprovalDashboardPage {

  // pageTitle: String = "Approval Dashboard";
  // width = 600;
  // height = 400;
  // type = "pie2d";
  // dataFormat: any = "json";
  // dataSource: any = {};
  // data: any = {}
  private data = {
    selectedTab: "approval-timesheet",
    isApiCalled: false
  }
  private timesheet_type: String = "pending";
  private pre_timesheet_type: String = "pending";

  private approvalDashboardData: any;
  private preApprovalDashboardData: any;

  private approvalApprovedCount: number = 0;
  private approvalPendingCount: number = 0;
  private approvalRejectCount: number = 0;
  private preApprovalApprovedCount: number = 0;
  private preApprovalPendingCount: number = 0;
  private preApprovalRejectCount: number = 0;
  private isApprover: String = "no";

  private projectAllocationList: Array<any> = []; //approval project list
  private tsStartDate: any;
  private tsEndDate: any;
  private selectedProject: String = "all";
  private selectedBillablity: String = "ALL";
  // private filteredData: object;
  private tsMinDate: any;
  private tsMaxDate: any;
  private compareFlag: boolean = false;


  private preApprovalProjectAllocationList: Array<any> = []; //approval project list
  private preTsStartDate: any;
  private preTsEndDate: any;
  private preSelectedProject: String = "all";
  private preSelectedBillablity: String = "YES";

  // private filteredData: object;
  private preTsMinDate: any;
  private preTsMaxDate: any;
  private preCompareFlag: boolean = false;

  private approvalDataSource = {
    chart: {
      showlegend: "0",
      showpercentvalues: "0",
      legendposition: "bottom",
      showLabel: 0,
      theme: "fusion",
      pieRadius: 75,
      doughnutRadius: 60,
      showLabels: 0,
      showValues: 0,
      defaultcenterlabel: "",
      showBorder: 0,
      bgColor: "#FFFFFF", //EDEEF3
      showPlotBorder: false,
      showShadow: false,
      bgAlpha: 100,
      enableSlicing: 0,
      use3DLighting: 0,
      centerLabelFontSize: "14"
    }
    , data: []
  }

  private preApprovalDataSource = {
    chart: {
      showlegend: "0",
      showpercentvalues: "0",
      legendposition: "bottom",
      showLabel: 0,
      theme: "fusion",
      pieRadius: 75,
      doughnutRadius: 60,
      showLabels: 0,
      showValues: 0,
      defaultcenterlabel: "",
      showBorder: 0,
      bgColor: "#FFFFFF",
      showPlotBorder: false,
      showShadow: false,
      bgAlpha: 100,
      enableSlicing: 0,
      use3DLighting: 0,
      centerLabelFontSize: "14"
    },
    data: []
  }


  constructor(private navCtrl: NavController, private httpProvider: HttpProvider, private utility: CommonUtilities, private zone: NgZone, public events: Events, private decimalPipe: DecimalPipe) {

    events.subscribe('dashboard:updated', (data: any) => {

      // < 0 indicate timesheet has been rejected, update only pending count.
      if (data.approval_approved < 0) {
        this.approvalRejectCount = this.approvalRejectCount + 1;
        this.approvalDashboardData.rejectedTimesheetsCount = this.approvalRejectCount;

        this.approvalPendingCount = this.approvalPendingCount - 1;
        this.approvalDashboardData.pendingTimesheetsCount = this.approvalPendingCount;
      } else if (data.approval_approved > 0) {
        this.approvalApprovedCount = this.approvalApprovedCount + data.approval_approved;
        this.approvalPendingCount = this.approvalPendingCount - data.approval_approved;
      } else if (data.preapproval_approved < 0) {
        this.preApprovalPendingCount = this.preApprovalPendingCount - 1;
        this.preApprovalRejectCount = this.preApprovalRejectCount + 1;
      }
      else if (data.preapproval_approved > 0) {
        this.preApprovalApprovedCount = this.preApprovalApprovedCount + data.preapproval_approved;
        this.preApprovalPendingCount = this.preApprovalPendingCount - data.preapproval_approved;
      }

      if (this.preApprovalPendingCount <= 0) {
        this.data.selectedTab = "approval-timesheet"
      }

      this.getApprovalTSDataSource();
      this.getPreApprovalTSDataSource();


    });

  }


  ionViewDidLoad() {
    this.getApprovalDashboardData();
  }

  segmentChanged(param) {
  }

  filter() {
  }

  getApprovalDashboardData() {

    this.utility.updateLoader(true);
    this.httpProvider.http.zentsCommonService({ url: "getEmployeeDashBoardNew", data: {}, dashboard: true }).subscribe((res: any) => {

      this.utility.updateLoader(false);
      if (res) {
        this.approvalDashboardData = res;
        this.projectAllocationList = res.projectList;
        this.approvalApprovedCount = res.approvedTimesheetsCount;
        this.approvalPendingCount = res.pendingTimesheetsCount;
        this.approvalRejectCount = res.rejectedTimesheetsCount;
        this.isApprover = res.isApprover;
        this.tsStartDate = res.monthlyLockDate;
        this.tsEndDate = res.serverDate;
        this.tsMinDate = res.timesheetMinDate;
        this.tsMaxDate = res.timesheetMaxDate;

        this.getApprovalTSDataSource();
        if (this.isApprover == 'yes') {
          this.getPreApprovalDashboardData();
        } else {
          this.data.isApiCalled = true;
        }

        if (this.projectAllocationList.length == 1) {
          this.selectedProject = this.projectAllocationList[0].projectId;
        }
      }
    }, (err) => {
      this.utility.updateLoader(false);
    })
  }


  getPreApprovalDashboardData() {
    this.utility.updateLoader(true);
    this.httpProvider.http.zentsCommonGETService({ url: "preapprovaldashboard", data: {}, overtime: true }).subscribe((res: any) => {

      this.utility.updateLoader(false);
      if (res) {
        this.preApprovalDashboardData = res.data;
        this.preApprovalApprovedCount = this.preApprovalDashboardData.approvedCount ? this.preApprovalDashboardData.approvedCount : 0;
        this.preApprovalPendingCount = this.preApprovalDashboardData.pendingCount ? this.preApprovalDashboardData.pendingCount : 0,
          this.preApprovalRejectCount = this.preApprovalDashboardData.rejectedCount ? this.preApprovalDashboardData.rejectedCount : 0,
          this.preTsStartDate = this.preApprovalDashboardData.startDate;
        this.preTsEndDate = this.preApprovalDashboardData.endDate;
        this.preTsMinDate = this.preApprovalDashboardData.startDate;
        this.preTsMaxDate = this.preApprovalDashboardData.endDate;
        this.preApprovalProjectAllocationList = this.preApprovalDashboardData.projects;

        //this has to be uncomment when services are up
        
        if (this.preApprovalProjectAllocationList.length == 1) {
          this.preSelectedProject = this.preApprovalProjectAllocationList[0].projectId;
        }

        this.getPreApprovalTSDataSource();
        this.data.isApiCalled = true;

      }
    }, (err) => {
      this.utility.updateLoader(false);
    })
  }

  getApprovalTSDataSource() {
    this.zone.runOutsideAngular(() => {
      this.approvalDataSource.data = [
        {
          label: "Approved",
          value: this.approvalApprovedCount,
          valuePosition: "Inside",
          showLabel: false,
          color: "#42C147",

        },
        {
          label: "Pending",
          value: this.approvalPendingCount,
          valuePosition: "Inside",
          showLabel: false,
          color: "#FFB829",
        },
        {
          label: "Rejected",
          value: this.approvalRejectCount,
          valuePosition: "Inside",
          showLabel: false,
          color: "#F95454",
        }
      ]

      let calPercent = this.transformDecimal((this.approvalApprovedCount / (this.approvalApprovedCount + this.approvalPendingCount + this.approvalRejectCount)) * 100);
      this.approvalDataSource.chart.defaultcenterlabel = calPercent + "%";

    })
  }

  getPreApprovalTSDataSource() {

    this.zone.runOutsideAngular(() => {
      this.preApprovalDataSource.data = [
        {
          label: "Approved",
          value: this.preApprovalApprovedCount,
          valuePosition: "Inside",
          showLabel: false,
          color: "#42C147"
        },
        {
          label: "Pending",
          value: this.preApprovalPendingCount,
          valuePosition: "Inside",
          showLabel: false,
          color: "#FFB829"
        },
        {
          label: "Rejected",
          value: this.preApprovalRejectCount,
          valuePosition: "Inside",
          showLabel: false,
          color: "#F95454",
        }

      ]

      let calPercent = this.transformDecimal((this.preApprovalApprovedCount / (this.preApprovalApprovedCount + this.preApprovalPendingCount + this.preApprovalRejectCount)) * 100);
      this.preApprovalDataSource.chart.defaultcenterlabel = calPercent + "%";

    })
  }

  ApprovalfilterList() {

    if (this.compareFlag) {
      return;
    }

    if (this.timesheet_type == 'approved') {
      this.navCtrl.push('ApprovalTimesheetApprovedPage', {
        "selectedProject": this.selectedProject,
        "startDate": this.tsStartDate,
        "endDate": this.tsEndDate,
        "tsMinDate": this.tsMinDate,
        "tsMaxDate": this.tsMaxDate,
        "selectedCategory": this.selectedBillablity,
        "projectAllocationList": this.projectAllocationList,
        "type": "approval-approved"
      });
    } else if (this.timesheet_type == 'pending') {
      this.navCtrl.push('ApprovalTimesheetApprovedPage', {
        "selectedProject": this.selectedProject,
        "startDate": this.tsStartDate,
        "endDate": this.tsEndDate,
        "tsMinDate": this.tsMinDate,
        "tsMaxDate": this.tsMaxDate,
        "selectedCategory": this.selectedBillablity,
        "projectAllocationList": this.projectAllocationList,
        "type": "approval-pending"
      });

    } else if (this.timesheet_type == 'rejected') {
      this.navCtrl.push('ApprovalTimesheetApprovedPage', {
        "selectedProject": this.selectedProject,
        "startDate": this.tsStartDate,
        "endDate": this.tsEndDate,
        "tsMinDate": this.tsMinDate,
        "tsMaxDate": this.tsMaxDate,
        "selectedCategory": this.selectedBillablity,
        "projectAllocationList": this.projectAllocationList,
        "type": "approval-rejected"
      });
    }
  }

  preApprovalFilterList() {

    if (this.preCompareFlag) {
      return;
    }

    if (this.pre_timesheet_type == 'approved') {
      this.navCtrl.push('PreApprovalTimesheetPendingPage', {
        "selectedProject": this.preSelectedProject,
        "startDate": this.preTsStartDate,
        "endDate": this.preTsEndDate,
        "tsMinDate": this.preTsMinDate,
        "tsMaxDate": this.preTsMaxDate,
        "selectedCategory": this.preSelectedBillablity,
        "projectAllocationList": this.preApprovalProjectAllocationList,
        "type": "approval-approved"
      });
    } else if (this.pre_timesheet_type == 'pending') {
      this.navCtrl.push('PreApprovalTimesheetPendingPage', {
        "selectedProject": this.preSelectedProject,
        "startDate": this.preTsStartDate,
        "endDate": this.preTsEndDate,
        "tsMinDate": this.preTsMinDate,
        "tsMaxDate": this.preTsMaxDate,
        "selectedCategory": this.preSelectedBillablity,
        "projectAllocationList": this.preApprovalProjectAllocationList,
        "type": "approval-pending"
      });

    } else if (this.pre_timesheet_type == 'rejected') {
      this.navCtrl.push('PreApprovalTimesheetPendingPage', {
        "selectedProject": this.preSelectedProject,
        "startDate": this.preTsStartDate,
        "endDate": this.preTsEndDate,
        "tsMinDate": this.preTsMinDate,
        "tsMaxDate": this.preTsMaxDate,
        "selectedCategory": this.preSelectedBillablity,
        "projectAllocationList": this.preApprovalProjectAllocationList,
        "type": "approval-rejected"
      });
    }
  }

  transformDecimal(num) {
    return this.decimalPipe.transform(num, '1.0-2');
  }

  onEndDateSelect(e) {
    this.compareFlag = new Date(this.tsEndDate) < new Date(this.tsStartDate);
  }

  onStartDateSelect(e) {
    this.compareFlag = new Date(this.tsStartDate) > new Date(this.tsEndDate);
  }

  onPreEndDateSelect(e) {
    this.preCompareFlag = new Date(this.preTsEndDate) < new Date(this.preTsStartDate);
  }

  onPreStartDateSelect(e) {
    this.preCompareFlag = new Date(this.preTsStartDate) > new Date(this.preTsEndDate);
  }

}
