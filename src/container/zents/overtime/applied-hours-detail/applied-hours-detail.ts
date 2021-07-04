import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../../../providers/http/http';
import { CommonUtilities } from '../../../../providers/commonUtilities/commonUtilities';

/**
 * Generated class for the AppliedHoursDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-applied-hours-detail',
  templateUrl: 'applied-hours-detail.html',
})
export class AppliedHoursDetailPage implements OnInit {
  private data: any = null;
  private dataObj = {
    overTimedetails: null,
    type: 'applied-hours'
  }

  constructor(private navParams: NavParams,
    private httpProvider: HttpProvider, private utility: CommonUtilities) {
    this.data = this.navParams.get('appliedHourItem');
  }

  ionViewDidLoad() {
  }

  ngOnInit() {
    if (this.data && this.data.additionalHrsId) {
      this.getAdditionalHrDetails(this.data.additionalHrsId);
    }
  }

  getAdditionalHrDetails(id) {
    this.utility.updateLoader(true);
    let url = 'overtimmehistorydetail';
    let data = {
      'addhrId': id
    }
    this.httpProvider.http.zentsCommonService({ url, data, overtime: true }).subscribe((res: any) => {
      this.utility.updateLoader(false);
      if (res && res.data) {
        this.dataObj.overTimedetails = res.data;
      }
    }, (err) => {
      this.utility.updateLoader(false);
    })
  }

}
