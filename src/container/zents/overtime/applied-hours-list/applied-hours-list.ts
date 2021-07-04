import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HttpProvider } from '../../../../providers/http/http';
import { CommonUtilities } from '../../../../providers/commonUtilities/commonUtilities';
/**
 * Generated class for the AppliedHoursListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-applied-hours-list',
  templateUrl: 'applied-hours-list.html',
})
export class AppliedHoursListPage {
  private start: number = 0;
  private perpage: number = 15;
  private dataObj = {
    appliedHourData: [],
    type: 'applied-hours',
    showData: false
  }

  constructor(private navCtrl: NavController, private httpProvider: HttpProvider, private utility: CommonUtilities) {
  }

  ionViewDidLoad() {
  }

  ngOnInit() {
    this.getAppliedHourList();
  }

  getAppliedHourList() {
    this.utility.updateLoader(true);

    let url = 'overtimehistory';
    let data = {
      'start': this.start,
      'end': this.perpage
    }

    this.httpProvider.http.zentsCommonService({ url, data, overtime: true }).subscribe((res: any) => {
      this.utility.updateLoader(false);
      if (res && res.data) {
        this.dataObj.showData = true;
        this.dataObj.appliedHourData = res.data;
      }
    }, (err) => {
      this.utility.updateLoader(false);
    })

  }

  goToNextPage(item) {
    this.navCtrl.push('AppliedHoursDetailPage', { 'appliedHourItem': item });
  }

}
