import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../../../providers/http/http';
import { CommonUtilities } from '../../../../providers/commonUtilities/commonUtilities'
import { Data } from '../../../../providers/data/data';

/**
 * Generated class for the MyTimesheetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-timesheets',
  templateUrl: 'my-timesheets.html',
})
export class MyTimesheetsPage {

  // pageTitle: String = "My Timesheets";
  // projectName: any;
  // iconName: string;
  private startDate: any;
  private endDate: any;
  private projectId: any;
  private projectIds: any;
  private status: any;
  private myTimesheetData: Array<any> = [];
  private flag = {
    isPageLoaded: false
  }
  private type:string = null;
  private resolve:Function;

  constructor(private navCtrl: NavController, public navParams: NavParams, private httpProvider: HttpProvider, private utility: CommonUtilities, private dataStorage: Data) {

    this.startDate = navParams.get("startDate");
    this.endDate = navParams.get("endDate");
    // this.projectName = navParams.get("projectName");
    this.projectId = navParams.get("projectId");
    this.projectIds = navParams.get("projectIds");
    this.status = navParams.get("status");

    this.type = this.navParams.get('type');
    this.resolve = this.navParams.get('resolve');
    let dataList = this.navParams.get('dataList');
    
    if(this.type == 'chat-bot' && dataList){
      this.myTimesheetData = dataList;
    }else{
      this.getMyTimesheets()
    }

  }

  ionViewDidLoad() {
  }

  getMyTimesheets() {

    this.utility.updateLoader(true);

    let statusArr: Array<any> = [];

    if (this.status == "all") {
      statusArr = ["-1", "1", "2", "3"]
    } else {
      statusArr = [this.status];
    }
    const params = {
      "startDate": this.startDate,
      "endDate": this.endDate,
      "projectId": this.projectId,
      "approvalStatusId": statusArr

    }

    this.httpProvider.http.zentsCommonService({ url: "v1/mytimesheets", data: params, dashboard: true }).subscribe((res: any) => {

      this.utility.updateLoader(false);
      if (res) {
        this.flag.isPageLoaded = true;
        this.myTimesheetData = res.data.timesheetList;
      }
    }, (err) => {
      this.utility.updateLoader(false);
    })

  }

  emailTimeshets() {

    this.utility.updateLoader(true);

    let statusArr: Array<any> = [];

    if (this.status == "all") {
      statusArr = ["-1", "1", "2", "3"]
    } else {
      statusArr = [this.status];
    }

    const params = {
      "startDate": this.startDate,
      "endDate": this.endDate,
      "selectedProjectIDs": this.projectIds,
      "selectedapprovalStatus": statusArr
    }

    this.httpProvider.http.zentsCommonService({ url: "consignDocuments", data: params, timeentry: true }).subscribe((res: any) => {

      this.utility.updateLoader(false);
      if (res) {
        this.utility.showToast("Timesheet report has been sent to your zensar email.");
      }
    }, (err) => {
      this.utility.updateLoader(false);
    })

  }



  // getApproverStatusType(status: any) {



  //   return {

  //     'approval-statustype-saved': status == 0 ? true : false,
  //     'approval-statustype-approved': status == 1 ? true : false,
  //     'approval-statustype-submited': status == 2 ? true : false,
  //     'approval-statustype-rejected': status == 3 ? true : false
  //   }

  // }

  getTimesheetTypeIcon(status: any) {

    // -1 - saved
    // 1 - approved
    // 2 - submited
    // 3 - rejected

    // switch (status) {
    //   case '0': return 'assets/zents-imgs/blue.svg';
    //   case '1': return 'assets/zents-imgs/green.svg';
    //   case '2': return 'assets/zents-imgs/orange.svg';
    //   case '3': return 'assets/zents-imgs/red.svg';
    //   default: return 'assets/zents-imgs/blue.svg';
    // }


    switch (status) {
      case '-1': return 'assets/zents-imgs/ts-saved-icon.svg';
      case '1': return 'assets/zents-imgs/ts-approved-icon.svg';
      case '2': return 'assets/zents-imgs/ts-submitted-icon.svg';
      case '3': return 'assets/zents-imgs/ts-rejected-icon.svg';
      default: return 'assets/zents-imgs/ts-saved-icon.svg';
    }

  }


  getApproverStatusBoxType(status: any) {
    // -1 - saved
    // 1 - approved
    // 2 - submited
    // 3 - rejected

    return {
      'statustype-box-saved': status == -1 ? true : false,
      'statustype-box-approved': status == 1 ? true : false,
      'statustype-box-submited': status == 2 ? true : false,
      'statustype-box-rejected': status == 3 ? true : false,
    }


  }

  getDataSource() {
    return this.myTimesheetData;
  }

  isAnyRecord() {

    if (this.myTimesheetData) {
      if (this.myTimesheetData.length > 0) {
        return true;
      }
    }
    return false;
  }


  //dummy logout for ZenTs
  logout() {
    this.dataStorage.clearData();
    this.navCtrl.setRoot('BackdoorEntryPage');
  }

  //Confirm save 
  showConfirmAlert() {
    let alert = this.utility.presentConfirmation('Are you sure you want to email timesheets ?', '');
    alert.then((res) => {

      this.emailTimeshets();
    })
  }

  ionViewWillLeave(){
    if(this.resolve){
      this.resolve();
    }
  }

}
