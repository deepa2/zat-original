import { Component, OnInit } from '@angular/core';
import { IonicPage, ViewController, NavParams, NavController, ModalController, Platform } from "ionic-angular"
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities'
import { HttpProvider } from '../../providers/http/http';
import { GatePassCheckComponent } from '../../components/gatepass-check/gatepass-check';
import { BrowserTab } from '@ionic-native/browser-tab';


@IonicPage()
@Component({
  selector: 'page-gatepass',
  templateUrl: 'gatepass.html',
})
export class GatePassPage implements OnInit {
  private isShowCheck: boolean = false;

  private userData;
  private userDetails: any;
  constructor(private utility: CommonUtilities, private httpProvider: HttpProvider, private navParam: NavParams, private modalCtrl: ModalController, private browserTab: BrowserTab, private platform: Platform, private navctrl:NavController) {
    this.userData = this.navParam.get('userDetails');
  }
  ngOnInit() {

  }
  goTogatepassCheck() {
    // let modal = this.modalCtrl.create(GatePassCheckComponent, { 'userid': this.userData.userId, 'userDetails': this.userData }, {
    //   cssClass: 'infoModal'
    // });
    // modal.onDidDismiss(() => {
    //   // this.navCtrl.push("GatePassPage", { 'userDetails': this.userData });
    // });

    // modal.present();
  this.navctrl.push("ReturnToOfficePage", { 'userid': this.userData.userId, 'userDetails': this.userData })
  }

  formateDT(data) {
    if (data) {
      return this.utility.formatDate(data)
    }

  }

  openPdfDocument(data) {
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
      this.utility.openAsset(data);
    }


  }



}
