import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities'
/**
 * Generated class for the VersionHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-version-history',
  templateUrl: 'version-history.html',
})
export class VersionHistoryPage {

  versionData;
  appInfo;
  buildDetails;
  releaseData;
  pageName;
  constructor(private utils: CommonUtilities,
    private httpProvider: HttpProvider) { }

    ionViewWillEnter() {
      console.log("ionViewWillEnter");
      this.getMenuData();
    }

  getMenuData() {

    try {
      //   if (this.connectivityService.isOnline()) {
      try {
        // service call
        this.utils.updateLoader(true);
        const url: string = "tazVersionHistory";
        const data: any = {};
        this.httpProvider.http.commonService({ url, data,miscellaneous:true})
      .subscribe(
        (res: any) => {

          if (!this.utils.isEmptyOrNullOrUndefined(res)) {
              this.versionData = res['details'];
              this.appInfo = this.versionData.appdetails;
              // this.buildDetails = this.appInfo.buildDetails;
              this.releaseData = this.versionData.versionDetails;

              // this.dataService.setVersionDetails =this.menuData;
         
          }
          this.utils.updateLoader(false);
        });

      } catch (error) {
        error.message = "catch error - :" + error.message;
        error.catchError = true;
        this.utils.showAlert(error.message,'');
      }
    } catch (error) {
      error.message = "catch error -:" + error.message;
      error.catchError = true;
    }
  }
}
