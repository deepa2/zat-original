import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PendingTimesheetListModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pending-timesheet-list-modal',
  templateUrl: 'pending-timesheet-list-modal.html'
})
export class PendingTimesheetListModalComponent {
  private pendingList: Array<any> = [];
  private selectedList: Array<any> = [];
  private selectAllTimesheets: boolean = true;
  private doUpdate:boolean = true;

  constructor(private viewCtrl: ViewController, private navParams: NavParams) {
    this.pendingList = this.navParams.get('dataList');
    this.selectedList = this.navParams.get('selectedList');
    if(this.selectedList.length > 0){
      this.pendingList.map((item)=> {
        item.isSelected = this.selectedList.includes(item) ? true : false;
      })
      this.selectAllTimesheets = this.selectedList.length == this.pendingList.length ? true : false;
      this.doUpdate = this.selectAllTimesheets;
    }else{
      this.updateSelectAll(true);
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  toggleSelection(obj) {
    obj.isSelected = !obj.isSelected;
    let selectedItemsArray = this.pendingList.filter((item) => item.isSelected == true);
    if (selectedItemsArray.length == 0) {
      this.selectAllTimesheets = false;
      this.doUpdate = true;
    } else if (selectedItemsArray.length == this.pendingList.length) {
      this.selectAllTimesheets = true;
      this.doUpdate = true;
    } else if (selectedItemsArray.length < this.pendingList.length) {
      this.selectAllTimesheets = false;
      this.doUpdate = false;
    } 
    // this.selectAllTimesheets = selectedItemsArray.length == this.pendingList.length ? true : false;
    // //console.log('selsctedItemsArray: ', selectedItemsArray);
  }

  updateSelectAll(value) {
    if(value)
    this.doUpdate = value;
    if (this.pendingList.length > 0 && this.doUpdate) {
      this.pendingList.map((item) => {
        item.isSelected = this.selectAllTimesheets ;
      })
    }
  }


  sendSelectedTimesheets(){
    let selectedPendingTimesheets = this.pendingList.filter((item)=>item.isSelected == true);
    this.viewCtrl.dismiss(selectedPendingTimesheets);
  }
}
