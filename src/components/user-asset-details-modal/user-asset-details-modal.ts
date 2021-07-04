import { NavParams } from 'ionic-angular';
import { HttpProvider } from './../../providers/http/http';
import { CommonUtilities } from './../../providers/commonUtilities/commonUtilities';
import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the UserAssetDetailsModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-asset-details-modal',
  templateUrl: 'user-asset-details-modal.html'
})
export class UserAssetDetailsModalComponent {

  private assetDetailsUrl: string = "getAssetDetails";
  private visaDetailsUrl: string = "getVisaDetails";
  private userId: any
  private profileType: any;
  private role: any;
  private versionNo: any
  private detailList: any = []
  private requestName: string = '';
  private requestUrl: string = ''

  constructor(private utility: CommonUtilities, private httpProvider: HttpProvider, private navParams: NavParams, private viewCtrl: ViewController) {
    this.userId = this.navParams.get('dataParams').userID
    this.profileType = this.navParams.get('dataParams').profileType;
    this.role = this.navParams.get('dataParams').role;
    this.versionNo = this.navParams.get('dataParams').versionNo;
    this.requestName = this.navParams.get('dataParams').requestName;
    if (this.requestName == 'assetCount') {
      this.requestUrl = this.assetDetailsUrl
      this.getAssetDetails()
    } else if (this.requestName == 'visaCount') {
      this.requestUrl = this.visaDetailsUrl
      this.getAssetDetails()
    }
  }

  getAssetDetails() {
    this.utility.updateLoader(true)
    let assetData = {
      url: this.requestUrl,
      financeURL: true,
      data: {},
    }
    this.httpProvider.http.commonService(assetData).subscribe((response: any) => {

      if (response) {
        this.utility.updateLoader(false)
        if (response && response['details']) {
          this.detailList = response['details'].responseList
          if (this.detailList == null || this.detailList.length <=0) {
            this.utility.showAlert('AssetDetails', "No data available")
            this.dismiss()
          }
        }
      }
    }, (err) => {
      this.utility.updateLoader(false)
      this.utility.showAlert('AssetDetails', "Something went wrong; \n please try again later")
    })

  }

  dismiss() {
    this.viewCtrl.dismiss()
  }
}
