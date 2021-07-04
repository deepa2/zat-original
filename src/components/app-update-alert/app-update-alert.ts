import { CommonUtilities } from "../../providers/commonUtilities/commonUtilities";
import { NavParams, Content } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { Component, ViewChild } from '@angular/core';


/**
 * Generated class for the AppUpdateAlertComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-update-alert',
  templateUrl: 'app-update-alert.html'
})
export class AppUpdateAlertComponent
{
  @ViewChild(Content) content: Content;

  private showSkipbtn: any;
  private whatsNewEncrptedData: any;
  private decryptedWhatsNewData: any;
  private updateVersion: any
  private leavePageOnBackbtn: any = false

  constructor(private viewctrller: ViewController, private navParam: NavParams, private utility: CommonUtilities)
  {
    // this.utility.updateLoader(true)

    this.showSkipbtn = this.navParam.get('showSkipbtn')

    if (!this.utility.isEmptyOrNullOrUndefined(this.navParam.get('whatsNewData')))
    {
      this.whatsNewEncrptedData = this.navParam.get('whatsNewData');
      this.decryptedWhatsNewData = this.toHTML(this.whatsNewEncrptedData)
    }
    if (!this.utility.isEmptyOrNullOrUndefined(this.navParam.get('updateVersion')))
    {
      this.updateVersion = this.navParam.get('updateVersion');
    }
    // this.utility.updateLoader(false)



  }
  ionViewDidLoad()
  {
    // this.getReviewDetails();
    this.content.resize()
  }
  onSkip()
  {
    this.leavePageOnBackbtn = true
    this.viewctrller.dismiss('skip')
  }
  onUpdate()
  {
    this.leavePageOnBackbtn = true
    this.viewctrller.dismiss('update')
  }

  toHTML(input): any
  {
    // this.content.resize()
    return new DOMParser().parseFromString(input, "text/html").documentElement.textContent;
  }
  ionViewCanLeave()
  {

    // alert("can leave called---update app",this.isPopupVisible)
    // this.utility.presentAlert("can leave called---update app", this.leavePageOnBackbtn)
    return this.leavePageOnBackbtn
    // return !this.isPopupVisble;
  }
}
