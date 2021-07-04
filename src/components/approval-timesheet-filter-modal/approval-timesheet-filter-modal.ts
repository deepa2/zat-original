import { Component, Renderer } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ApprovalTimesheetFilterModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'approval-timesheet-filter-modal',
  templateUrl: 'approval-timesheet-filter-modal.html'
})
export class ApprovalTimesheetFilterModalComponent {

  private data = {
    projectAllocationList: []
  }
  private startDate: string;
  private endDate: string;
  private selectedBillablity: String = "ALL";
  private selectedProject: String = "all";
  private filterData: object;
  private timesheet_type: String = "";
  private dash_type: String = "";
  // private selectedCategory: String = "";

  private tsDates = {
    tsMinDate: null,
    tsMaxDate: null
  }
  private compareFlag: boolean = false;


  constructor(public params: NavParams, private viewCtrl: ViewController, private renderer: Renderer) {
    this.renderer.setElementClass(viewCtrl.pageRef().nativeElement, 'bottom-sheet', true);
    this.data.projectAllocationList = params.get("projectAllocationList");
    this.startDate = params.get("startDate");
    this.endDate = params.get("endDate");
    this.timesheet_type = params.get("timesheet_type");
    this.tsDates.tsMinDate = params.get("tsMinDate");
    this.tsDates.tsMaxDate = params.get("tsMaxDate");
    this.selectedProject =  params.get("selectedProject");
    this.selectedBillablity =  params.get("selectedCategory");
    this.dash_type =  params.get("dash_type");

    if(this.data.projectAllocationList.length == 1) {
      this.selectedProject = this.data.projectAllocationList[0].projectId;
    }

    if(this.dash_type == "pre-approval-dashboard"){
      this.selectedBillablity = "YES";
    }
  }

  closeModal(data: any) {
    this.viewCtrl.dismiss(data);
  }

  ApprovalfilterList() {

    if(this.compareFlag){
      return;
    }

    this.filterData = {
      "selectedProject": this.selectedProject,
      "startDate": (this.startDate),
      "endDate": this.endDate,
      "category": this.selectedBillablity,
      "type": this.timesheet_type
    }

    this.closeModal({ "filterData": this.filterData });
  }

  closeFilterModal() {
    this.closeModal({});
  }

  onEndDateSelect(e) {
    this.compareFlag = new Date(this.endDate) < new Date(this.startDate);
  }

  onStartDateSelect(e) {
    this.compareFlag = new Date(this.startDate) > new Date(this.endDate);
  }


}
