import { Component, NgZone, EventEmitter, Output } from '@angular/core';
import { ViewController, NavParams, NavController, ModalController, Platform } from "ionic-angular"
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from '../../providers/http/http';
import { TermsConditionsComponent } from '../terms-conditions/terms-conditions';
import { getValueFromFormat } from 'ionic-angular/umd/util/datetime-util';
import { BrowserTab } from '@ionic-native/browser-tab';

/**
 * Generated class for the CoronaSafetyMeasuresAlertComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'dap-alert',
  templateUrl: 'dap-alert.html'
})
export class DapAlertComponent
{

  text: string;
  private leavePageOnBackbtn: boolean = false;
  private dapData: any;
  private isShowDap: any;
  private isShowMentorship: any;
  private isShowTeam: any;

  constructor(private utility: CommonUtilities, private httpProvider: HttpProvider, private viewctrller: ViewController, private navParam: NavParams, private navCtrl: NavController, private zone: NgZone, private modalCtrl: ModalController,
    private browserTab: BrowserTab, private platform: Platform)
  {
    if (!this.utility.isEmptyOrNullOrUndefined(this.navParam.get('data')))
    {
      this.dapData = this.navParam.get('data');
      // this.isShowDap =this.dapData.popupList[0].showDapTile;
      // this.isShowMentorship =this.dapData.popupList[0].showMentorship;
      // this.isShowTeam =this.dapData.popupList[0].showTeamsTile;
    }
  }
  goToDetailPage(pageTitle)
  {
    this.dismiss(pageTitle);

  }
  dismiss(pageTitle)
  {
    this.leavePageOnBackbtn = true
    this.viewctrller.dismiss(pageTitle)
  }
  ionViewCanLeave()
  {

    return this.leavePageOnBackbtn

  }


}
