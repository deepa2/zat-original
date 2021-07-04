import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities';

import { HttpProvider } from '../../../providers/http/http';

/**
 * Generated class for the MyDaplistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-daplist',
  templateUrl: 'my-daplist.html',
})
export class MyDaplistPage {
  dapData: any;
  role: any;
  dapType: string = '';
  noDataAvailable: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private utilities: CommonUtilities, private httpProvider: HttpProvider) {
    this.role = this.navParams.get('role');
    if (this.navParams.get('dapType')) {
      this.dapType = this.navParams.get('dapType');
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyDaplistPage');
  }
  ionViewWillEnter() {
    this.utilities.updateLoader(true);
    let param = {
      url: 'getMyDapsList',
      data: {
        userId: '0',
        flowStatus: "",
        learningType: this.dapType
      },
      zenLearn: true
    }
    this.httpProvider.http.commonService(param).subscribe((response: any) => {
      console.log(response);
      this.utilities.updateLoader(false);
      if (response && response.details.responseList) {
        this.noDataAvailable = false;
        if (!response.details.isMyDapAvailable) {
          this.utilities.presentAlert(response.details.message)
          // this.navCtrl.pop();
          //this.navCtrl.push("CreateDapPage");

        } else {
          this.dapData = response.details;
        }

      } else {
        this.noDataAvailable = true;
      }
    },
      error => {
        this.utilities.updateLoader(false);
      })

  }

  viewDap(data) {
    console.log(data);
    let selectedDap = {
      role: this.role,
      data: data
    }
    if (data.status == 'Pending Manager Approval' || data.status == 'Manager Rejected' || data.status == 'Not Approved') {
      //this.utilities.presentAlert("Your dap is in Pending Manager Approval");
      this.navCtrl.push("CreateDapPage", { 'dapId': data.dapId, dapStatus:data.status});
    } else {
      this.navCtrl.push('DapDetailPage', { 'viewDapDetails': selectedDap });
    }

    // this.navCtrl.push('DapDetailPage', { 'viewDapDetails': data })
  }

  openCreateDap() {
    this.navCtrl.push("CreateDapPage");
  }

}
