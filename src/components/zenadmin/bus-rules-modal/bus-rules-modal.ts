import { ViewController } from 'ionic-angular/navigation/view-controller';
import { Component } from '@angular/core';
import { AlertController, ModalController } from 'ionic-angular';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { FormBuilder } from '@angular/forms';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from '../../../providers/http/http';

/**
 * Generated class for the BusRulesModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'bus-rules-modal',
  templateUrl: 'bus-rules-modal.html'
})
export class BusRulesModalComponent {

  text: string;
  showNoPasstxt: boolean;
  busDetails: any;
  responseList: any;

  constructor(private viewCtrl: ViewController,
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private utility: CommonUtilities,
    private httpProvider: HttpProvider,
    private modalCtrl: ModalController) {
    this.text = 'Hello World';
  }
  dismiss() {
    this.viewCtrl.dismiss()
  }
  ngOnInit() {
    this.busPassRulesService()
  }

  // bus PassRule service
  busPassRulesService() {
    this.utility.updateLoader(true);
    let home = {
      url: "getBusPassRules",
      data: {},
      isZenAdmin: true,
    };

    this.httpProvider.http.commonService(home).subscribe(
      (response: any) => {
        if (response) {
          this.showNoPasstxt = false;
          this.utility.updateLoader(false);
          if (!this.utility.isEmptyOrNullOrUndefined(response["data"])) {
            this.responseList = response["data"];
          }
          if (response.status["statusCode"] == "16") {
            // no pass available
            this.showNoPasstxt = true;
            // this.routeList = []
          }
        }
      },
      (error) => {
        this.utility.updateLoader(false);
      }
    );
  }

}
