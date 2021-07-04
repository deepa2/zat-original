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
  selector: 'carnival-alert',
  templateUrl: 'carnival-alert.html'
})
export class CarnivalAlertComponent {

  text: string;
  private leavePageOnBackbtn: boolean = false;
  private url: any;

  constructor(private utility: CommonUtilities, private httpProvider: HttpProvider, private viewctrller: ViewController, private navParam: NavParams, private navCtrl: NavController, private zone: NgZone, private modalCtrl: ModalController,
    private browserTab: BrowserTab, private platform: Platform) {
    if (!this.utility.isEmptyOrNullOrUndefined(this.navParam.get('imgUrl'))) {
      this.url = this.navParam.get('imgUrl');
    }
  }
  dismiss() {
    this.leavePageOnBackbtn = true
    this.viewctrller.dismiss('dismiss')
  }
  ionViewCanLeave() {

    return this.leavePageOnBackbtn

  }
}
