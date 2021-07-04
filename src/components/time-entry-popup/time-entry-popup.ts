import { CommonUtilities } from './../../providers/commonUtilities/commonUtilities';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import {NavParams,NavController,ViewController } from 'ionic-angular';

/**
 * Generated class for the AdditionalHourListItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'time-entry-popup-item',
  templateUrl: 'time-entry-popup.html'
})
export class TimeEntryPopupComponent {
private subPages;
  constructor(private utility: CommonUtilities,
    private navParams:NavParams,
    public ViewCtr : ViewController,
    private navCtrl : NavController) {
    this.subPages = this.navParams.get('submainData');
    //console.log(this.navParams.data)
    //console.log(this.subPages)
    
  }
  
  goToMyPage(data) {

    // if (data.isAvailable) {
    //   if (data.homePageConfigrationName == 'Approval Dashboard') {
    //     this.navCtrl.push("ApprovalDashboardPage");
    //   }
    //   else if (data.homePageConfigrationName == 'My Timesheet') {
    //     this.navCtrl.push('MyAttendanceTimesheetPage')
    //   }
    //   // for zenDeavor redirection 
    //   else {
    //     this.navCtrl.push(data.pageName, {
    //       'pageTitle': data.title
    //     });
    //   }
    this.dismiss(data);
    }


  
  dismiss(data) {
    this.ViewCtr.dismiss(data);
  }

}
