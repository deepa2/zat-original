import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { LoadingController, AlertController, Loading } from 'ionic-angular';
import { Store } from "@ngrx/store";
import * as fromStore from '../../store';
import { Subscription } from 'rxjs/Subscription';
import { HttpProvider } from '../../providers/http/http';


@IonicPage()
@Component({
  selector: 'page-on-bording-change-password',
  templateUrl: 'on-bording-change-password.html',
})
export class OnBordingChangePasswordPage {

  private viewPassword = false;
  type = 'password';
  private oldPassword: string;
  private newPassword: string;
  private verifyPassword: string;
  private passData: any = {};
  loader: Loading;

  private _changePasswordLoading: Subscription = new Subscription();
  private _changePasswordData: Subscription = new Subscription();

  constructor(private navCtrl: NavController, private navParams: NavParams,
    private loading: LoadingController,
    private loadingController: LoadingController,
    private popoverCtrl: PopoverController,
    private http: HttpProvider,
    private alertCtrl: AlertController, private store: Store<fromStore.AppState>) {
  }


  ionViewWillEnter() {
    // this._changePasswordLoading = this.store.select<any>(fromStore.getOnboardingChangePasswordLoading).subscribe(loading => {
    //   this.updateLoader(loading);
    // })
  }


  updatePass() {
    this.viewPassword = !this.viewPassword
    if (this.viewPassword) {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

  changePassword() {
    if ((this.newPassword != undefined && this.verifyPassword != undefined && this.oldPassword != undefined) && (this.newPassword != "" && this.verifyPassword != "" && this.oldPassword != "")) {
      if (this.newPassword === this.verifyPassword) {
        this.passData = {
          oldPssword: this.oldPassword,
          newPassword: this.newPassword
        }
        this.updateLoader(true)
        // this.store.dispatch(new fromStore.OBChangePassword(this.passData))

        // return new Promise(resolve => {
        //   this._changePasswordData = this.store.select<any>(fromStore.getOBchangePasswordData).subscribe((response) => {
        //     this.store.dispatch(new fromStore.OBChangePasswordReset())
        //     if (response) {

        //       if (response.status.statusCode < 0) {
        //         this.errorAlert(response.status.statusMessage);
        //       } else if (response.status.statusCode == 1) {
        //         this.presentAlert();
        //       }
        //       resolve();
        //     }

        //   }, err => {
        //   })
        // })

        this.http.http.OBChangePassword(this.passData).subscribe((response: any) => {
         
          if (response) {
            this.updateLoader(false)
            if (response.status.statusCode < 0) {
              this.errorAlert(response.status.statusMessage);
            } else if (response.status.statusCode == 1) {
              this.presentAlert();
            }

          }
        },error=>{
          this.updateLoader(false);
        })

      } else {

        this.errorAlert("New password and verify password should be same.");
      }
    } else if ((this.newPassword == undefined || this.verifyPassword == undefined || this.oldPassword == undefined) || (this.newPassword == "" || this.verifyPassword == "" || this.oldPassword == "")) {
      this.errorAlert("Please fill all the fields.");
    }
  }

  updateLoader(loading) {

    if (loading) {
      this.loader = this.loadingController.create();
      this.loader.present()
    } else {
      if (this.loader) {
        this.loader.dismiss();
        this.loader = null;
      }
    }

  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      // title: 'Confirmation',
      enableBackdropDismiss: false,
      subTitle: 'Password Changed successfully.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.navCtrl.setRoot('LoginPage');
          }
        }
      ]
    });
    alert.present();
  }

  errorAlert(message) {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: message,
      buttons: ['Ok']
    });
    alert.present();
  }

  presentOptions(myEvent) {
    let popover = this.popoverCtrl.create('PopoverPage', { 'type': 'obChangePassword' });
    popover.present({ ev: myEvent });
  }

  ionViewWillLeave() {
    this._changePasswordData.unsubscribe();
    this._changePasswordLoading.unsubscribe();
  }

}
