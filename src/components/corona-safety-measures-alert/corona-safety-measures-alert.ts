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
  selector: 'corona-safety-measures-alert',
  templateUrl: 'corona-safety-measures-alert.html'
})
export class CoronaSafetyMeasuresAlertComponent
{

  text: string;
  private guidelinesData: any;
  private htmlDataContent: any;
  private leavePageOnBackbtn: boolean = false;
  private htmlData: any;

  constructor(private utility: CommonUtilities, private httpProvider: HttpProvider, private viewctrller: ViewController, private navParam: NavParams, private navCtrl: NavController, private zone: NgZone, private modalCtrl: ModalController,
    private browserTab: BrowserTab, private platform: Platform)
  {
    if (!this.utility.isEmptyOrNullOrUndefined(this.navParam.get('guidelinesData')))
    {
      this.guidelinesData = this.navParam.get('guidelinesData');
      this.htmlData = this.toHTML(this.guidelinesData);
    }
  }
  dismiss()
  {
    this.leavePageOnBackbtn = true
    this.viewctrller.dismiss('dismiss')
  }

  toHTML(input): any
  {
    return new DOMParser().parseFromString(input, "text/html").documentElement.textContent;
  }
  ionViewCanLeave()
  {

    return this.leavePageOnBackbtn

  }
}
