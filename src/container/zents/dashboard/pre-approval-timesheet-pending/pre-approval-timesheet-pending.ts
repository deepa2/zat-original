import { Component } from '@angular/core';
import { IonicPage, ModalController, Events } from 'ionic-angular';
import { HttpProvider } from '../../../../providers/http/http';
import { CommonUtilities } from '../../../../providers/commonUtilities/commonUtilities'
import { PreApprovalTimesheetPendingModalComponent } from '../../../../components/pre-approval-timesheet-pending-modal/pre-approval-timesheet-pending-modal';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ApprovalTimesheetFilterModalComponent } from '../../../../components/approval-timesheet-filter-modal/approval-timesheet-filter-modal';


/**
 * Generated class for the PreApprovalTimesheetPendingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pre-approval-timesheet-pending',
  templateUrl: 'pre-approval-timesheet-pending.html',
})
export class PreApprovalTimesheetPendingPage {
  private pendingtasks: Array<any> = [];
  private filteredPendingTask: Array<any> = [];

  private approvedtasks: Array<any> = [];
  private filteredApprovedTask: Array<any> = [];

  private rejectedtasks: Array<any> = [];
  private filteredRejectedTask: Array<any> = [];

  private projects;
  private selectedProject = "all";
  private masterIds: Array<any> = [];
  private flag = {
    isDataAvailable: false,
    showSearchBox: false
  }

  private TOAST_TYPE = {
    "TYPE_NONE": 0,
    "TYPE_APPROVE": 1,
    "TYPE_REJECT": 2,
    "TYPE_APPROVE_ALL": 3,
  }

  private FLAG_TOAST_TYPE: any;
  private TOAST_MSG: String = "";

  //select options
  customAlertOptions: any = {
    header: 'Select Category',
    cssClass: 'error-modal'
  };

  private type: String = "";

  private TYPE_APPROVED: String = "approval-approved";
  private TYPE_PENDING: String = "approval-pending";
  private TYPE_REJECTED: String = "approval-rejected";

  private projectAllocationList: Array<any> = [];
  private startDate: string;
  private endDate: string;
  private filteredData: any;
  private tsMinDate: any;
  private tsMaxDate: any;
  private searchText: any = "";


  constructor(public navParams: NavParams, private httpProvider: HttpProvider, private utility: CommonUtilities, private modalController: ModalController, private events: Events) {
    this.filteredData = {
      "selectedProject": navParams.get("selectedProject") ? navParams.get("selectedProject") : "ALL",
      "startDate": navParams.get("startDate"),
      "endDate": navParams.get("endDate")
    }

    this.projectAllocationList = navParams.get("projectAllocationList");
    this.startDate = navParams.get("startDate");
    this.endDate = navParams.get("endDate");
    this.type = navParams.get("type");
    this.tsMinDate = navParams.get("tsMinDate");
    this.tsMaxDate = navParams.get("tsMaxDate");

  }

  ionViewDidLoad() {

    if (this.type == this.TYPE_APPROVED) {
      this.getPreApprovalApprovedData(this.filteredData);
    } else if (this.type == this.TYPE_PENDING) {
      this.getPreApprovalPendingData(this.filteredData);
    } else if (this.type == this.TYPE_REJECTED) {
      this.getPreApprovalRejectedData(this.filteredData);
    }

  }

  getPreApprovalPendingData(params: any) {
    let filteredData = {
      "projectId": params.selectedProject ? params.selectedProject : "all",
      "startDate": params.startDate,
      "endDate": params.endDate,
    }

    this.utility.updateLoader(true);
    this.httpProvider.http.zentsCommonService({ url: "/preapprovaltask", data: filteredData, overtime: true }).subscribe((res: any) => {
      this.utility.updateLoader(false);
      if (res.data) {

        this.pendingtasks = [];
        if (res.data.hasOwnProperty('pendingtasks')) {
          this.pendingtasks = res.data.pendingtasks;
        }

        this.getFilteredPendingTimesheets();
        this.flag.isDataAvailable = true;

        if (this.FLAG_TOAST_TYPE > this.TOAST_TYPE.TYPE_NONE) {
          this.showToastMsg();
        }
      }

    }, (err) => {
      this.utility.updateLoader(false);
    })

  }


  onRejectClicked(item: any) {
    this.openPendingDetailModalPage(item, true);
  }

  compareFn(e1: any, e2: any): boolean {
    return e1 && e2 ? e1.id === e2.id : e1 === e2;
  }

  // getFilteredProjectByCriteria() {
  //   this.filteredPendingTask = [];
  //   if (this.selectedProject == "all") {
  //     if (this.pendingtasks) {
  //       this.filteredPendingTask = this.pendingtasks;
  //     } else {
  //       this.filteredPendingTask = [];
  //     }
  //   } else {
  //     if (this.pendingtasks && this.pendingtasks.length > 0) {
  //       this.pendingtasks.map((element: any) => {
  //         if (element.projectId == this.selectedProject) {
  //           this.filteredPendingTask.push(element);
  //         }
  //       });
  //     }
  //   }
  //   return this.filteredPendingTask;
  // }

  // onProjectChange() {
  //   this.getFilteredProjectByCriteria();
  // }



  async openPendingDetailModalPage(item: any, fromReject?: boolean) {
    let modal = this.modalController.create(PreApprovalTimesheetPendingModalComponent, {
      selectedItem: item,
      fromReject: fromReject,
      type: this.type
    });
    modal.present();
    modal.onDidDismiss((res: any) => {
      if (res) {
        // Reject case
        if (res.result == 'success') {
          this.FLAG_TOAST_TYPE = this.TOAST_TYPE.TYPE_REJECT;
          this.TOAST_MSG = res.msg;

          this.getPreApprovalPendingData(this.filteredData);
          this.raiseEvent(-1);
        } // Approved case
        else if (res.result == 'approved-success') {
          this.FLAG_TOAST_TYPE = this.TOAST_TYPE.TYPE_APPROVE;
          this.TOAST_MSG = res.msg;

          this.getPreApprovalPendingData(this.filteredData);
          this.raiseEvent(1);
        }

      }
    });
  }

  presentAlertConfirmDialog() {

    let alertDialog = this.utility.presentConfirmation('Are you sure you would like to approve all the timesheets ?', '');
    alertDialog.then((res) => {

      this.onApproveAllClicked();
    })


  }

  onApproveAllClicked() {

    this.masterIds = [];
    if (this.pendingtasks && this.pendingtasks.length > 0) {
      this.pendingtasks.forEach((element: any) => {
        this.masterIds.push(element.apprmasterId);
      });
    }

    let params = {
      "masterIds": this.masterIds,
    }

    if (this.masterIds.length > 0) {
      this.utility.updateLoader(true);
      this.httpProvider.http.zentsCommonService({ url: "/approveallovertimetask", data: params, overtime: true }).subscribe((res: any) => {
        this.utility.updateLoader(false);
        if (res) {
          this.FLAG_TOAST_TYPE = this.TOAST_TYPE.TYPE_APPROVE_ALL;
          this.TOAST_MSG = "Timesheets approved successfully."

          this.getPreApprovalPendingData(this.filteredData);
          this.raiseEvent(this.masterIds.length);
        }
      }, (err) => {
        this.utility.updateLoader(false);
      })
    }
  }

  get key() {
    if (this.projects) {
      return Object.keys(this.projects);
    } else {
      return [];
    }
  }

  raiseEvent(count: any) {
    this.events.publish('dashboard:updated', { "preapproval_approved": count });
  }

  showToastMsg() {
    if (this.TOAST_MSG) {
      this.utility.showToast(this.TOAST_MSG);
      this.TOAST_MSG = "";
      this.FLAG_TOAST_TYPE = this.TOAST_TYPE.TYPE_NONE;
    }
  }

  onApproveClicked(selectedItem: any) {

    this.utility.updateLoader(true);
    selectedItem.comments = "";
    const params = {
      "apprmasterId": selectedItem.apprmasterId,
      "comments": ""
    }
    this.httpProvider.http.zentsCommonService({ url: "approveovertimetask", data: params, overtime: true }).subscribe((res: any) => {
      this.utility.updateLoader(false);
      if (res) {
        this.FLAG_TOAST_TYPE = this.TOAST_TYPE.TYPE_APPROVE;
        this.TOAST_MSG = "Timesheet approved successfully.";

        this.getPreApprovalPendingData(this.filteredData);
        this.raiseEvent(1);
      }
    }, (err) => {
      this.utility.updateLoader(false);
    })
  }


  getPreApprovalApprovedData(params: any) {
    let filteredData = {
      "projectId": params.selectedProject ? params.selectedProject : "all",
      "startDate": params.startDate,
      "endDate": params.endDate
    }

    this.utility.updateLoader(true);
    this.httpProvider.http.zentsCommonService({ url: "/preapprovalapprovedtask", data: filteredData, overtime: true }).subscribe((res: any) => {
      this.utility.updateLoader(false);
      if (res.data) {
        this.approvedtasks =[];
        if (res.data.hasOwnProperty('approvedtasks')) {
          this.approvedtasks = res.data.approvedtasks;
        }
        this.getFilteredApprovedTimesheets();
        this.flag.isDataAvailable = true;

        if (this.FLAG_TOAST_TYPE > this.TOAST_TYPE.TYPE_NONE) {
          this.showToastMsg();
        }

      }

    }, (err) => {
      this.utility.updateLoader(false);
    })

  }

  getPreApprovalRejectedData(params: any) {
    let filteredData = {
      "projectId": params.selectedProject ? params.selectedProject : "all",
      "startDate": params.startDate,
      "endDate": params.endDate
    }

    this.utility.updateLoader(true);
    this.httpProvider.http.zentsCommonService({ url: "/preapprovalrejectedtask", data: filteredData, overtime: true }).subscribe((res: any) => {
      this.utility.updateLoader(false);
      if (res.data) {

        this.rejectedtasks = [];
        if (res.data.hasOwnProperty('rejectedtasks')) {
          this.rejectedtasks = res.data.rejectedtasks;
        }
        this.getFilteredRejectedTimesheets();
        this.flag.isDataAvailable = true;

        if (this.FLAG_TOAST_TYPE > this.TOAST_TYPE.TYPE_NONE) {
          this.showToastMsg();
        }

      }

    }, (err) => {
      this.utility.updateLoader(false);
    })

  }


  getFilteredApprovedTimesheets() {
    this.filteredApprovedTask = [];
    if (this.searchText == "") {
      this.filteredApprovedTask = this.approvedtasks;
    } else {
      this.filteredApprovedTask = this.filterApprovedItems(this.searchText);
    }
  }

  filterApprovedItems(searchTerm) {
    return this.approvedtasks.filter(item => {
      return item.staffName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  getFilteredPendingTimesheets() {
    this.filteredPendingTask = [];
    if (this.searchText == "") {
      this.filteredPendingTask = this.pendingtasks;
    } else {
      this.filteredPendingTask = this.filterPendingItems(this.searchText);
    }
  }

  filterPendingItems(searchTerm) {
    return this.pendingtasks.filter(item => {
      return item.staffName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  getFilteredRejectedTimesheets() {
    this.filteredRejectedTask = [];
    if (this.searchText == "") {
      this.filteredRejectedTask = this.rejectedtasks;
    } else {
      this.filteredRejectedTask = this.filterRejectedItems(this.searchText);
    }
  }

  filterRejectedItems(searchTerm) {
    return this.rejectedtasks.filter(item => {
      return item.staffName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }


  getDataSource() {
    if (this.type == this.TYPE_APPROVED) {
      return this.filteredApprovedTask;
    } else if (this.type == this.TYPE_PENDING) {
      return this.filteredPendingTask;
    } else if (this.type == this.TYPE_REJECTED) {
      return this.filteredRejectedTask;
    } else {
      return [];
    }
  }
  
  isAnyRecord() {

    if (this.type == this.TYPE_APPROVED) {
      if (this.filteredApprovedTask.length > 0) {
        return true;
      }
    } else if (this.type == this.TYPE_PENDING) {
      if (this.filteredPendingTask.length > 0) {
        return true;
      }
    } else if (this.type == this.TYPE_REJECTED) {
      if (this.filteredRejectedTask.length > 0) {
        return true;
      }
    }
    return false;
  }


  async openFilterModal() {

    let modal = this.modalController.create(ApprovalTimesheetFilterModalComponent, {
      "projectAllocationList": this.projectAllocationList,
      "startDate": this.startDate,
      "endDate": this.endDate,
      "timesheet_type": this.type,
      "tsMinDate": this.tsMinDate,
      "tsMaxDate": this.tsMaxDate,
      "selectedProject": this.filteredData.selectedProject,
      "selectedCategory": this.filteredData.category,
      "dash_type": "pre-approval-dashboard"
    }, {
        showBackdrop: true,
        enableBackdropDismiss: true,
        cssClass: "custom-modal"
      });

    modal.present();
    modal.onDidDismiss((res: any) => {
      if (res) {

        if (res.filterData) {
          if (res.filterData.type == this.TYPE_APPROVED) {
            this.flag.isDataAvailable = false;
            this.type = this.TYPE_APPROVED;
            this.startDate = res.filterData.startDate;
            this.endDate = res.filterData.endDate;
            this.filteredData.startDate = res.filterData.startDate;
            this.filteredData.endDate = res.filterData.endDate;
            // this.filteredData.category = res.filterData.category;
            this.getPreApprovalApprovedData(res.filterData);
          } else if (res.filterData.type == this.TYPE_PENDING) {
            this.flag.isDataAvailable = false;
            this.type = this.TYPE_PENDING;
            this.startDate = res.filterData.startDate;
            this.endDate = res.filterData.endDate;
            this.filteredData.startDate = res.filterData.startDate;
            this.filteredData.endDate = res.filterData.endDate;
            // this.filteredData.category = res.filterData.category;
            this.getPreApprovalPendingData(res.filterData);
          } else if (res.filterData.type == this.TYPE_REJECTED) {
            this.flag.isDataAvailable = false;
            this.type = this.TYPE_REJECTED;
            this.startDate = res.filterData.startDate;
            this.endDate = res.filterData.endDate;
            this.filteredData.startDate = res.filterData.startDate;
            this.filteredData.endDate = res.filterData.endDate;
            // this.filteredData.category = res.filterData.category;
            this.getPreApprovalRejectedData(res.filterData);
          }
        }
      }
    });
  }

  showSearchBar() {
    this.flag.showSearchBox = true;
  }
  onSearchTextChange() {
    if (this.type == this.TYPE_APPROVED) {
      this.getFilteredApprovedTimesheets();
    } else if (this.type == this.TYPE_PENDING) {
      this.getFilteredPendingTimesheets();
    } else if (this.type == this.TYPE_REJECTED) {
      this.getFilteredRejectedTimesheets();
    }
  }

  onSearchCancel() {
    this.flag.showSearchBox = false;
  }

  onSearchClear() {
  }

}
