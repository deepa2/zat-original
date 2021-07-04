import { getSearchText } from './../../store/reducers/index';
import { Data } from '../../providers/data/data';
import { CommonUtilities } from './../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from './../../providers/http/http';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { Component } from '@angular/core';

/**
 * Generated class for the SearchAssociatesConsultationModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-associates-consultation-modal',
  templateUrl: 'search-associates-consultation-modal.html'
})
export class SearchAssociatesConsultationModalComponent {

  private text: string;
  private items: any = [];
  private searchResult: any = []
  private searchText: string = ''
  private showLoader: boolean
  private selectedAssociateList: Array<any> = []
  private startList: number = 0;
  private endList: number = 50;
  private infiniteListData: any = [];
  private infiniteScroll: any = '';
  private searchInputText: any



  constructor(private viewCtrl: ViewController, private httpProvider: HttpProvider,
    private utility: CommonUtilities, private dataService: Data) {

    this.infiniteListData = []
    // this.getAssociateData()

  }

  initializeItems() {
    this.items = [
      {
        "name": "Deepa Nair",
        "id": 51437,
        "img": "",
        "isSelected": true
      },
      {
        "name": "Deepa Nair",
        "id": 51437,
        "img": "",
        "isSelected": true
      },
      {}
    ];
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    // this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;
    //console.log("value", val)
    this.searchText = val;
    this.searchResult = []
    if (val == "") {
      this.startList = 0
      this.endList = 50
    }
    this.getAssociateData()
    // if the value is an empty string don't filter the items
    // if (val && val.trim() != '') {
    //   this.items = this.items.filter((item) => {
    //     //console.log("item",item)
    //     return (item.name.indexOf(val.toLowerCase()) > -1);
    //   })
    // }
  }

  dismiss() {
    this.viewCtrl.dismiss()
  }


  getAssociateData() {
    if (!this.infiniteScroll)
      this.showLoader = true
    // this.showLoader = true
    let teamListUrl = {
      // zenDeavorURL: this.url
      url: "getActiveUsers",
      zenDeavorURL: true,
      data: {
        "searchText": this.searchText,
        "start": this.startList,
        "end": this.endList
        // "role": this.userRole,
        // "processType": this.kraType
      }
    }


    this.httpProvider.http.commonService(teamListUrl).subscribe((res) => {
      // this.utility.updateLoader(false)
      this.showLoader = false
      // this.searchResult = res['details']
      this.infiniteListData = res['details']
      if (!this.utility.isEmptyOrNullOrUndefined(this.infiniteListData))
        this.searchResult = this.searchResult.concat(this.infiniteListData);
      //console.log("search list", this.searchResult)
      if (!this.utility.isEmptyOrNullOrUndefined(this.searchResult)) {
        this.searchResult.filter((item) => {
          if (item.isSelected == undefined) {
            item.isSelected = false
          }
        })
      }

      if (this.infiniteScroll) {
        this.infiniteScroll.complete();
        this.infiniteScroll = "";
      }
      else {
        this.utility.updateLoader(false)
      }



    }, (err) => {
      this.utility.updateLoader(false)
    })
  }

  // selectAssociate(associateData) {
  //   if (!this.utility.isEmptyOrNullOrUndefined(this.searchResult)) {
  //     this.searchResult.filter((item) => {

  //       if (associateData.employeeId == item.employeeId) {
  //         item.isSelected = !item.isSelected

  //         if (item.isSelected)
  //           this.selectedAssociateList.push(item)
  //         else {
  //           let indexOfElement = this.selectedAssociateList.map(function (itemToRemove) { return itemToRemove.employeeId; }).indexOf(item.employeeId);
  //           this.selectedAssociateList.splice(indexOfElement, 1)
  //         }
  //       }

  //     })


  //     //console.log("selected users list", this.selectedAssociateList)
  //   }
  // }

  sendAssociateDetails() {
    if (this.utility.isEmptyOrNullOrUndefined(this.selectedAssociateList) || !this.selectedAssociateList['isSelected']) {
      this.utility.presentAlert("Please select associate")
      return
    }
    //console.log("selected associate list", this.selectedAssociateList)
    if (this.selectedAssociateList['isSelected'])
      this.viewCtrl.dismiss(this.selectedAssociateList)
  }

  // doInfinite(infiniteScroll) {

  //   // if (!this.resultPending) {
  //   if (infiniteScroll) {
  //     this.startList = this.endList;
  //     this.endList = this.startList + 10;
  //     this.getAssociateData()
  //     infiniteScroll.complete();
  //   }


  // }

  selectUser(associateData) {
    // associateData.isSelected = !associateData.isSelected
    this.searchResult.filter((item) => {
      if (associateData.employeeId == item.employeeId && associateData.isSelected == false) {
        item.isSelected = true
        this.selectedAssociateList = associateData
      }
      else {
        item.isSelected = false

      }
    })
    // if(associateData.isSelected){
    //   this.selectedAssociateList=associateData
    // }

  }


  doInfinite(infiniteScroll) {
    //console.log('Begin async operation');
    this.infiniteScroll = infiniteScroll;
    // return new Promise((resolve) => {
    // setTimeout(() => {
    this.startList = this.endList;
    this.endList = this.startList + 50;
    this.getAssociateData()
    // infiniteScroll.complete();

    //console.log('Async operation has ended');
    // resolve();
    // }, 500);
    // })
  }

  onCancel(event) {
    //console.log("cancel called")
    this.startList = 0
    this.endList = 50
    this.searchText = ""
  }
}
