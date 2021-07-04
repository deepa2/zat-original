import { Component, NgZone, EventEmitter, Output } from '@angular/core';
import { ViewController, NavParams, NavController, ModalController, Platform } from "ionic-angular"
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from '../../providers/http/http';
import { TermsConditionsComponent } from '../terms-conditions/terms-conditions';
import { getValueFromFormat } from 'ionic-angular/umd/util/datetime-util';
import { BrowserTab } from '@ionic-native/browser-tab';
import { Constants } from "@app/constants";
import { ValueTransformer } from '@angular/compiler/src/util';
/**
 * Generated class for the CoronaSafetyMeasuresAlertComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mentee-alert',
  templateUrl: 'mentee-alert.html'
})
export class MenteeAlertComponent
 {
 private menteeItem;
  text: string;
  private leavePageOnBackbtn: boolean = false;
  private isAccepted: boolean = false;
  private mentorMsg : string='';
  private information;
  constructor(private utility: CommonUtilities, private httpProvider: HttpProvider, private viewctrller: ViewController, private navParam: NavParams, private navCtrl: NavController, private zone: NgZone, private modalCtrl: ModalController,
    private browserTab: BrowserTab, private platform: Platform) {
      this.menteeItem = this.navParam.get('menteeItem');
      this.getMessage()
  }

 
  getMessage() {
    const url: string = "getMenteeMessage";
    const data: any = {
      menteeid: this.menteeItem.menteeid,
      dapId: this.menteeItem.dapId
    }
    this.utility.updateLoader(true);
    this.httpProvider.http
      .commonService({ url, data, zenLearn: true })
      .subscribe(
        (res: any) => {
          if (!this.utility.isEmptyOrNullOrUndefined(res) && !this.utility.isEmptyOrNullOrUndefined(res.details)) {
           
            this.information = res.details.responseList[res.details.responseList.length - 1];
            this.utility.updateLoader(false);
          }
        },
        err => {
          this.utility.updateLoader(false);
        }
      );
  }
  // **********Method for send acceptance**************/
  sendAcceptance(status) {
    const url: string = "getMentorAcceptOrRejected";
    let data: any
    data= {
      message: this.mentorMsg,
      status: status,
      menteeId: this.menteeItem.menteeid,
      role: '',
      category: '',
      dapSectionId: '',
      dapId: this.menteeItem.dapId
    };
    if(this.mentorMsg!=''){
      this.utility.updateLoader(true);
      this.httpProvider.http
        .commonService({ url, data, zenLearn: true })
        .subscribe(
          (res: any) => {
            this.utility.updateLoader(false);
            this.isAccepted = true;
            this.utility.showToast(`Request ${status} successfully`);
            this.dismiss();
          },
          err => {
            this.utility.updateLoader(false);
          }
        );
    }
    else{
      this.utility.showToast("Please enter message");
    }
    
      
  }

  dismiss() {
    this.leavePageOnBackbtn = true
    this.viewctrller.dismiss(this.isAccepted)
  }
  ionViewCanLeave() {

    return this.leavePageOnBackbtn

  }
}
