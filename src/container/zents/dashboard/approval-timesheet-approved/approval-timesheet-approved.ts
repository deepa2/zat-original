import { Component, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavParams, ModalController, Events } from 'ionic-angular';
import { HttpProvider } from '../../../../providers/http/http';
import { CommonUtilities } from '../../../../providers/commonUtilities/commonUtilities';
import { ApprovalTimesheetApproveModalComponent } from '../../../../components/approval-timesheet-approve-modal/approval-timesheet-approve-modal';
import { ApprovalTimesheetFilterModalComponent } from '../../../../components/approval-timesheet-filter-modal/approval-timesheet-filter-modal';
import { ApprovalTimesheetPendingModalComponent } from '../../../../components/approval-timesheet-pending-modal/approval-timesheet-pending-modal';
/**
 * Generated class for the ApprovalTimesheetApprovedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-approval-timesheet-approved',
  templateUrl: 'approval-timesheet-approved.html',
})
export class ApprovalTimesheetApprovedPage {

  @Output() dashboardDataUpdated: EventEmitter<number> = new EventEmitter();
  private approvedTimesheets: Array<any> = [];
  private filteredApprovedTimesheets: Array<any> = [];

  private pendingTimesheets: Array<any> = [];
  private filteredPendingTimesheets: Array<any> = [];

  private rejectedTimesheets: Array<any> = [];
  private filteredRejectedTimesheets: Array<any> = [];

  private searchText: any = "";
  private type: String = "";
  private TYPE_APPROVED: String = "approval-approved";
  private TYPE_PENDING: String = "approval-pending";
  private TYPE_REJECTED: String = "approval-rejected";

  private TYPE_NONE: any = 0;
  private TYPE_APPROVE: any = 1;
  private TYPE_REJECT: any = 2;
  private TYPE_APPROVE_ALL: any = 3;

  private projectAllocationList: Array<any> = [];
  private startDate: string;
  private endDate: string;
  private filteredData: any;
  // private masterIds: any;
  // private approvedTSCount: any = 0
  private tsMinDate: any;
  private tsMaxDate: any;
  private FLAG_TOAST_TYPE: any;
  private TOAST_MSG: String = "";
  private flags = {
    showSearchBox: false,
    isApiCalled: false
  }
  private selectAllTimesheets: boolean = true;
  private doUpdate: boolean = true;

  constructor(public navParams: NavParams, private httpProvider: HttpProvider, private utility: CommonUtilities, private modalController: ModalController, private events: Events) {

    this.filteredData = {
      "selectedProject": navParams.get("selectedProject") ? navParams.get("selectedProject") : "ALL",
      "startDate": navParams.get("startDate"),
      "endDate": navParams.get("endDate"),
      "category": navParams.get("selectedCategory") ? navParams.get("selectedCategory") : "ALL"
    }

    this.projectAllocationList = navParams.get("projectAllocationList");
    this.startDate = navParams.get("startDate");
    this.endDate = navParams.get("endDate");
    this.type = navParams.get("type");
    this.tsMinDate = navParams.get("tsMinDate");
    this.tsMaxDate = navParams.get("tsMaxDate");

    // this.updateSelectAll();
  }

  ionViewDidLoad() {
    if (this.type == this.TYPE_APPROVED) {
      this.getApprovalTsData(this.filteredData);
    } else if (this.type == this.TYPE_PENDING) {
      this.getPendingTsData(this.filteredData);
    } else if (this.type == this.TYPE_REJECTED) {
      this.getRejectedTsData(this.filteredData);
    }
  }

  getApprovalTsData(params: any) {
    let category = "ALL";
    if (params.category) {
      if (params.category == "OVERTIME") {
        category = "ALL";
      } else {
        category = params.category;
      }
    }

    let filteredData = {
      "projectId": params.selectedProject ? params.selectedProject : "ALL",
      "startDate": params.startDate,
      "endDate": params.endDate,
      "category": category
    }


    this.utility.updateLoader(true);
    this.httpProvider.http.zentsCommonService({ url: "getEmployeeApprovedList", data: filteredData, dashboard: true }).subscribe((res: any) => {

      this.utility.updateLoader(false);
      if (res) {
        this.flags.isApiCalled = true;
        if (res.allApprovedTimesheetList) {
          this.approvedTimesheets = res.allApprovedTimesheetList;
        } else {
          this.approvedTimesheets = [];
        }
        this.getFilteredApprovedTimesheets();
      }
    }, (err) => {
      this.utility.updateLoader(false);
    })
  }

  getFilteredApprovedTimesheets() {
    this.filteredApprovedTimesheets = [];
    if (this.searchText == "") {
      this.filteredApprovedTimesheets = this.approvedTimesheets;
    } else {
      this.filteredApprovedTimesheets = this.filterApprovedItems(this.searchText);
    }
    if (this.filteredData.category == "OVERTIME") {
      this.filteredApprovedTimesheets = this.filterOvertimeApprovedItems();
    }
  }

  filterOvertimeApprovedItems() {
    return this.filteredApprovedTimesheets.filter(item => {
      return (item.additionalHrsFlag == "YES");
    });
  }

  filterApprovedItems(searchTerm) {
    return this.approvedTimesheets.filter(item => {
      return item.staffName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  async openApprovalModalPage(item: any) {

    let editModal = this.modalController.create(ApprovalTimesheetApproveModalComponent, {
      selectedItem: item
    },
      {
        showBackdrop: true,
        enableBackdropDismiss: true,
        cssClass: "custom-modal"
      }
    );

    editModal.present();
    editModal.onDidDismiss((res: any) => {
      if (res) {
      }
    });
  }

  showSearchBar() {
    this.flags.showSearchBox = true;
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

    this.flags.showSearchBox = false;
  }

  onSearchClear() {

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
      "dash_type": "approval-dashboard"
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
            this.flags.isApiCalled = false;
            this.type = this.TYPE_APPROVED;
            this.startDate = res.filterData.startDate;
            this.endDate = res.filterData.endDate;
            this.filteredData.startDate = res.filterData.startDate;
            this.filteredData.endDate = res.filterData.endDate;
            this.filteredData.category = res.filterData.category;
            this.getApprovalTsData(res.filterData);
          } else if (res.filterData.type == this.TYPE_PENDING) {
            this.flags.isApiCalled = false;
            this.type = this.TYPE_PENDING;
            this.startDate = res.filterData.startDate;
            this.endDate = res.filterData.endDate;
            this.filteredData.startDate = res.filterData.startDate;
            this.filteredData.endDate = res.filterData.endDate;
            this.filteredData.category = res.filterData.category;
            this.getPendingTsData(res.filterData);
          } else if (res.filterData.type == this.TYPE_REJECTED) {
            this.flags.isApiCalled = false;
            this.type = this.TYPE_REJECTED;
            this.startDate = res.filterData.startDate;
            this.endDate = res.filterData.endDate;
            this.filteredData.startDate = res.filterData.startDate;
            this.filteredData.endDate = res.filterData.endDate;
            this.filteredData.category = res.filterData.category;
            this.getRejectedTsData(res.filterData);
          }
        }
      }
    });
  }

  getPendingTsData(params: any) {

    let category = "ALL";
    if (params.category) {
      if (params.category == "OVERTIME") {
        category = "ALL";
      } else {
        category = params.category;
      }
    }

    let filteredData = {
      "projectId": params.selectedProject ? params.selectedProject : "ALL",
      "startDate": params.startDate,
      "endDate": params.endDate,
      "category": category
    }

    this.utility.updateLoader(true);
    this.httpProvider.http.zentsCommonService({ url: "getEmployeePendingList", data: filteredData, dashboard: true }).subscribe((res: any) => {
      this.utility.updateLoader(false);
      if (res) {
        this.flags.isApiCalled = true;
        if (res.allPendingTimesheetList) {
          this.pendingTimesheets = res.allPendingTimesheetList;
          // this.pendingTimesheets.map(item => item.checked = true);
        } else {
          this.pendingTimesheets = [];
        }
        this.getFilteredPendingTimesheets();

        if (this.FLAG_TOAST_TYPE > this.TYPE_NONE) {
          this.showToastMsg();
        }
      }
    }, (err) => {
      this.utility.updateLoader(false);
    })
  }


  getFilteredPendingTimesheets() {
    this.filteredPendingTimesheets = [];
    if (this.searchText == "") {
      this.filteredPendingTimesheets = this.pendingTimesheets;
    } else {
      this.filteredPendingTimesheets = this.filterPendingItems(this.searchText);
    }
    if (this.filteredData.category == "OVERTIME") {
      this.filteredPendingTimesheets = this.filterOvertimePendingItems();
    }

    this.updateSelectAll();
    return this.filteredPendingTimesheets;
  }


  filterOvertimePendingItems() {
    return this.filteredPendingTimesheets.filter(item => {
      return item.additionalHrsFlag == "YES" ? true : false;
    });
  }

  filterPendingItems(searchTerm) {
    return this.pendingTimesheets.filter(item => {
      return item.staffName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }



  async openPendingDetailModalPage(item: any, fromReject?: boolean) {

    let modal = this.modalController.create(ApprovalTimesheetPendingModalComponent, {
      selectedItem: item,
      fromReject: fromReject
    }, {
        showBackdrop: true,
        enableBackdropDismiss: true,
        cssClass: "custom-modal"

      });

    modal.present();
    modal.onDidDismiss((res: any) => {
      if (res) {
        // Reject case
        if (res.result == 'success') {
          this.FLAG_TOAST_TYPE = this.TYPE_REJECT;
          this.TOAST_MSG = res.msg;
          this.getPendingTsData(this.filteredData);
          this.raiseEvent(-1);

        }
        // Approved case
        else if (res.result == 'approved-success') {
          this.FLAG_TOAST_TYPE = this.TYPE_APPROVE;
          this.TOAST_MSG = res.msg;
          this.getPendingTsData(this.filteredData);
          this.raiseEvent(1);
        }
      }
    });
  }


  isAnyRecord() {

    if (this.type == this.TYPE_APPROVED) {
      if (this.filteredApprovedTimesheets.length > 0) {
        return true;
      }
    } else if (this.type == this.TYPE_PENDING) {
      if (this.filteredPendingTimesheets.length > 0) {
        return true;
      }
    } else if (this.type == this.TYPE_REJECTED) {
      if (this.filteredRejectedTimesheets.length > 0) {
        return true;
      }
    }
    return false;
  }

  getDataSource() {
    if (this.type == this.TYPE_APPROVED) {
      return this.filteredApprovedTimesheets;
    } else if (this.type == this.TYPE_PENDING) {
      return this.filteredPendingTimesheets;
    } else if (this.type == this.TYPE_REJECTED) {
      return this.filteredRejectedTimesheets;
    } else {
      return [];
    }
  }

  presentAlertConfirmDialog(data) {
    let text = data.length == this.pendingTimesheets.length ? 'all the' : 'selected';
    let alert = this.utility.presentConfirmation(`Are you sure you would like to approve ${text} timesheets ?`, '');
    alert.then(() => {
      this.onApproveAllClicked(data);
    })
  }

  onApproveAllClicked(selectedPendingTimesheets) {

    const params = {
      "approvalStatus": "1", // 1- Approved , 2 - pending , 3 - Rejected 
      "comments": "",
      "timesheetList": selectedPendingTimesheets
    }
    // this.approvedTSCount = this.filteredPendingTimesheets.length;

    this.utility.updateLoader(true);
    this.httpProvider.http.zentsCommonService({ url: "v1/sanctiontimesheets", data: params, dashboard: true }).subscribe((res: any) => {
      this.utility.updateLoader(false);
      if (res) {
        this.FLAG_TOAST_TYPE = this.TYPE_APPROVE_ALL;
        this.TOAST_MSG = "Timesheets approved successfully."
        // this.raiseEvent(this.filteredPendingTimesheets.length);
        this.raiseEvent(selectedPendingTimesheets.length);
        this.getPendingTsData(this.filteredData);
      }
    }, (err) => {
      this.utility.updateLoader(false);
    })

  }

  raiseEvent(count: any) {
    this.events.publish('dashboard:updated', { "approval_approved": count });
  }

  showToastMsg() {
    if (this.TOAST_MSG) {
      this.utility.showToast(this.TOAST_MSG);
      this.TOAST_MSG = "";
      this.FLAG_TOAST_TYPE = this.TYPE_NONE;
    }
  }

  onApprovalRejectClicked(item: any) {
    this.openPendingDetailModalPage(item, true);
  }

  onApprovalApproveClicked(item?: any) {


    this.utility.updateLoader(true);
    item.comments = "";
    const params = {
      "approvalStatus": "1", // 1- Approved , 2 - pending , 3 - Rejected 
      "comments": "",
      "timesheetList": [
        item
      ]
    }
    this.httpProvider.http.zentsCommonService({ url: "/v1/sanctiontimesheets", data: params, dashboard: true }).subscribe((res: any) => {

      this.utility.updateLoader(false);
      if (res) {
        // Approved Event
        this.FLAG_TOAST_TYPE = this.TYPE_APPROVE;
        this.TOAST_MSG = "Timesheet approved successfully.";
        this.getPendingTsData(this.filteredData);
        this.raiseEvent(1);
      }
    }, (err) => {
      this.utility.updateLoader(false);
    })
  }


  getRejectedTsData(params: any) {
    let category = "ALL";
    if (params.category) {
      if (params.category == "OVERTIME") {
        category = "ALL";
      } else {
        category = params.category;
      }
    }

    let filteredData = {
      "projectId": params.selectedProject ? params.selectedProject : "ALL",
      "startDate": params.startDate,
      "endDate": params.endDate,
      "category": category
    }


    this.utility.updateLoader(true);
    this.httpProvider.http.zentsCommonService({ url: "getEmployeeRejectedList", data: filteredData, dashboard: true }).subscribe((res: any) => {

      this.utility.updateLoader(false);
      if (res) {
        this.flags.isApiCalled = true;
        if (res.allRejectedTimesheetList) {
          this.rejectedTimesheets = res.allRejectedTimesheetList;
        } else {
          this.rejectedTimesheets = [];
        }
        this.getFilteredRejectedTimesheets();
      }
    }, (err) => {
      this.utility.updateLoader(false);
    })
  }

  getFilteredRejectedTimesheets() {
    this.filteredRejectedTimesheets = [];
    if (this.searchText == "") {
      this.filteredRejectedTimesheets = this.rejectedTimesheets;
    } else {
      this.filteredRejectedTimesheets = this.filterRejectedItems(this.searchText);
    }
    if (this.filteredData.category == "OVERTIME") {
      this.filteredRejectedTimesheets = this.filterOvertimeRejectedItems();
    }
  }

  filterOvertimeRejectedItems() {
    return this.filteredRejectedTimesheets.filter(item => {
      return (item.additionalHrsFlag == "YES");
    });
  }

  filterRejectedItems(searchTerm) {
    return this.rejectedTimesheets.filter(item => {
      return item.staffName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  updateSelectAll(value = true) {
    if (value)
      this.doUpdate = value;
    if (this.filteredPendingTimesheets.length > 0 && this.doUpdate) {
      this.filteredPendingTimesheets.map((item) => {
        item.checked = this.selectAllTimesheets;
      })
    }
  }

  toggleCheck(obj) {
    obj.checked = !obj.checked;
    let selectedItemsArray = this.filteredPendingTimesheets.filter((item) => item.checked == true);
    if (selectedItemsArray.length == 0) {
      this.selectAllTimesheets = false;
      this.doUpdate = true;
    } else if (selectedItemsArray.length == this.filteredPendingTimesheets.length) {
      this.selectAllTimesheets = true;
      this.doUpdate = true;
    } else if (selectedItemsArray.length < this.filteredPendingTimesheets.length) {
      this.selectAllTimesheets = false;
      this.doUpdate = false;
    }
    // this.selectAllTimesheets = selectedItemsArray.length == this.pendingList.length ? true : false;
    // console.log('selsctedItemsArray: ', selectedItemsArray);
  }

  approveSelectedTimesheets() {
    let selectedTimesheets = this.filteredPendingTimesheets.filter(item => item.checked == true)
    if (selectedTimesheets.length > 0) {
      this.presentAlertConfirmDialog(selectedTimesheets);
    }
  }


}




