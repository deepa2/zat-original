import { Component } from '@angular/core';
import { ViewController, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'dap-popover',
  templateUrl: 'dap-popover.html',
})
export class DapPopoverPage {

  offeringType: string;
  private filterArray: any;
  private filteredData: any;
  private data: any;
  private showAllFilters : any
  private checkedAll: boolean = false

  constructor(public viewCtrl: ViewController,
    public navCtrl: NavController,
    private navParams: NavParams) {
    this.data = this.navParams.get('data');
    this.showAllFilters = this.data.showAllFilters

    this.offeringType = this.data.offeringType

    if (this.data.filteredData) {
      this.checkedAll = this.data.filteredData.checkedAll
      this.filterArray = this.data.filteredData.filterArray;
    } else {

      this.filterArray = {
        "title": "Filter",
        

        "learningType": [
          {
            "value": "Technical",
            "checked": true
          },
          {
            "value": "Behavioural",
            "checked": true
          }
        ],
        "flowStatus": [
          {
            "value": "Approved",
            "checked": true
          },
          {
            "value": "Completed",
            "checked": true
          },
          {
            "value": "In-progress",
            "checked": true
          },
          {
            "value": "Not Approved",
            "checked": true
          }
        ]
      }
    }
  }

  _applyChanges() {
    this.viewCtrl.dismiss({ filterArray: this.filterArray, checkedAll: this.checkedAll });
  }


  _checkAllBox(array: any, checkedAll: any) {
    for (let i = 0; i < array.length; i++) {
      array[i].checked = checkedAll
    }
  }

  _selectAll(event: any) {
    if (event == 'All') {
      this.checkedAll = true
      this._checkAllBox(this.filterArray.learningType, this.checkedAll)
      this._checkAllBox(this.filterArray.learningMode, this.checkedAll)
    }

  }
}
