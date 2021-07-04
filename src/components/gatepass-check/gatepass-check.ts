import { Component, NgZone, EventEmitter, Output } from '@angular/core';
import { ViewController, NavParams, NavController, ModalController, Platform } from "ionic-angular"
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from '../../providers/http/http';
import { TermsConditionsComponent } from '../terms-conditions/terms-conditions';
import { getValueFromFormat } from 'ionic-angular/umd/util/datetime-util';
import { BrowserTab } from '@ionic-native/browser-tab';
declare var window;
/**
 * Generated class for the CovidInformationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'gatepass-check',
  templateUrl: 'gatepass-check.html'
})

export class GatePassCheckComponent {

  private userData: any;
  
  constructor(private utility: CommonUtilities, private httpProvider: HttpProvider, private viewCtrl: ViewController, private navParam: NavParams, private navCtrl: NavController, private zone: NgZone, private modalCtrl: ModalController,
    private browserTab: BrowserTab, private platform: Platform) {
      this.userData = this.navParam.get('userDetails');
    }
  dismiss() {
    // alert("hello");
    // let data = this.checkBoxValue;
    // this.viewCtrl.dismiss(data);
     this.viewCtrl.dismiss();
  }

  goToTermsConditions() {
    let modal = this.modalCtrl.create(TermsConditionsComponent, {}, {
      cssClass: 'infoModal'
    });
    modal.present();
  }
  openPDF(data) {
    if (this.platform.is('ios')) {
      this.browserTab.isAvailable().then(isAvailable => {
        if (isAvailable) {
          this.browserTab.openUrl(data)
        } else {
          this.utility.openWithSystemBrowser(data)
        }

      })
        .catch(() => {
          this.utility.openWithSystemBrowser(data)
        })
    } else {
      this.utility.openAsset(data)
    }

  }



}
