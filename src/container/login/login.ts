import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, NavController, LoadingController, Events, App } from 'ionic-angular';
import { Data } from '../../providers/data/data';
import { Store } from "@ngrx/store";
import * as fromStore from '../../store';
import { Subscription } from 'rxjs/Subscription';
import { FCMUtility } from '../../providers/pushNotification/fcm';
import { Constants } from '@app/constants';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';

import { GetterSetter } from '../../providers/getterSetter/getterSetter';
import { HttpProvider } from '../../providers/http/http';

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})

export class LoginPage {
    //  private password_type: string = 'password';
    private user: FormGroup;
    private _loginListener: Subscription = new Subscription();
    private type = 'password';
    private showPass = false;
    private versionNo: string;
    private showfooter: boolean = true;
    private userData: any;
    // private showNewUser = false

    constructor(private navCtrl: NavController,
        private store: Store<fromStore.Login>,
        private data: Data,
        private formBuilder: FormBuilder,
        private loading: LoadingController,
        private loadingController: LoadingController,
        private fcm: FCMUtility,
        private utility: CommonUtilities,
        private events: Events,
        private app: App,
        private getSet: GetterSetter,
        private httpProvider: HttpProvider) {

        let self = this;
        window.addEventListener('native.keyboardshow', keyboardShowHandler);

        function keyboardShowHandler(e) {
            self.showfooter = false;
        }
        window.addEventListener('native.keyboardhide', keyboardHideHandler);
        function keyboardHideHandler(e) {
            self.showfooter = true;
        }
        this.versionNo = this.getSet.getVersionNo();
        this.user = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    // this function checks user credentials, user type and redirects to a particular page.
    async login() {
        this.userData = this.user.value;
        //this.store.dispatch(new fromStore.Login(this.user.value));
        const loading = await this.loadingController.create({
            content: 'Loading'
        });

        await loading.present();

        // this._loginListener = this.store.select<any>(fromStore.getLoginState)

        //     .subscribe((res) => {

        //         if (res.data) {
        //             let result = res.data;
        //             if (result.details.encryptedToken) {
        //                 this.store.dispatch(new fromStore.OverallSearchClear());
        //                 this.user.reset();
        //                 this.data.saveData('loginStatus', true);
        //                 this.events.publish('loginS')
        //                 this.data.saveData('loginDetails', result);
        //                 this.data.saveData('access-allowed', "N");
        //                 this.data.saveData('encryptedToken', result.details.encryptedToken)
        //                 this.data.saveData('switchUser', result.details.role.isSwitchUser)
        //                 this.events.publish('loginUserType', result.details.userDetails.userType)


        //                 if (result.details.role.isSwitchUser) {
        //                     // this.zenwenLogin();
        //                     // this.navCtrl.setRoot('SwitchUserPage');
        //                     this.app.getRootNav().setRoot('SwitchUserPage')
        //                     //this.navCtrl.setRoot('NewHomePage');

        //                 } else {
        //                     if (result.details.userDetails.userType == Constants["PRE-ONBOARDING"]) {

        //                         if (!(result.details.userDetails.isPasswordChanged)) {

        //                             this.navCtrl.setRoot('OnBordingChangePasswordPage');
        //                         }
        //                         if (result.details.userDetails.isPasswordChanged && result.details.userDetails.isFirstTimeLogin) {
        //                             this.navCtrl.setRoot('ObLandingPage');
        //                         }
        //                         if (result.details.userDetails.isPasswordChanged && !(result.details.userDetails.isFirstTimeLogin)) {
        //                             //this.navCtrl.setRoot('ObDashboardPage');
        //                             this.navCtrl.setRoot('ObLandingPage');
        //                         }
        //                     } else if (result.details.userDetails.userType == Constants["POST-ONBOARDING"]) {
        //                         //this.navCtrl.setRoot('HomePage');
        //                         // this.zenwenLogin();
        //                         this.navCtrl.setRoot('NewHomePage');
        //                     }
        //                 }
        //                 this.fcm.registerToken();
        //                 loading.dismiss();
        //             } else {
        //                 loading.dismiss();
        //                 this._loginListener.unsubscribe();
        //             }
        //         } else {
        //             loading.dismiss();
        //             this._loginListener.unsubscribe();
        //         }
        //     }, (err) => {
        //         //;
        //         this._loginListener.unsubscribe();
        //         loading.dismiss();
        //     });


        this.httpProvider.http.authenticate(this.user.value, "login").subscribe((response) => {
            loading.dismiss();
            this.user.reset();
            console.log(response);

            if (response.details) {
                let result = response;
                if (result.details.encryptedToken) {
                    this.store.dispatch(new fromStore.OverallSearchClear());
                    this.user.reset();
                    this.data.saveData('loginStatus', true);
                    this.events.publish('loginS')
                    this.data.saveData('loginDetails', result);
                    this.data.saveData('access-allowed', "N");
                    this.data.saveData('encryptedToken', result.details.encryptedToken)
                    this.data.saveData('switchUser', result.details.role.isSwitchUser)
                    this.events.publish('loginUserType', result.details.userDetails.userType)


                    if (result.details.role.isSwitchUser) {
                        // this.zenwenLogin();
                        // this.navCtrl.setRoot('SwitchUserPage');
                        this.app.getRootNav().setRoot('SwitchUserPage')
                        //this.navCtrl.setRoot('NewHomePage');

                    } else {
                        if (result.details.userDetails.userType == Constants["PRE-ONBOARDING"]) {

                            if (!(result.details.userDetails.isPasswordChanged)) {

                                this.navCtrl.setRoot('OnBordingChangePasswordPage');
                            }
                            if (result.details.userDetails.isPasswordChanged && result.details.userDetails.isFirstTimeLogin) {
                                this.navCtrl.setRoot('ObLandingPage');
                            }
                            if (result.details.userDetails.isPasswordChanged && !(result.details.userDetails.isFirstTimeLogin)) {
                                //this.navCtrl.setRoot('ObDashboardPage');
                                this.navCtrl.setRoot('ObLandingPage');
                            }
                        } else if (result.details.userDetails.userType == Constants["POST-ONBOARDING"]) {
                            //this.navCtrl.setRoot('HomePage');
                            // this.zenwenLogin();
                            this.navCtrl.setRoot('NewHomePage');
                        }
                        else if (result.details.userDetails.userType == Constants["SECURITY"]) {
                            this.navCtrl.setRoot('SecurityPersonnelBuseslistPage');
                        }
                    }
                    this.fcm.registerToken();
                    loading.dismiss();
                }
            }
        },
            (error) => {
                loading.dismiss();

            }
        )
    }

    //show and hide user password
    togglePassword() {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
        } else {
            this.type = 'password';
        }
    }

    // on leaving the page, will unsubscribe all the subscriptions
    ionViewWillLeave() {
        this._loginListener.unsubscribe();
    }

    //checks the input fields for user credentials
    checkLoginCredentials() {
        let username = this.user.value.username
        let passwd = this.user.value.password
        if (this.utility.isEmptyOrNullOrUndefined(username) && this.utility.isEmptyOrNullOrUndefined(passwd)) {
            this.utility.showToast('User Name and Password can not be empty')
            return
        } else if (this.utility.isEmptyOrNullOrUndefined(username)) {
            this.utility.showToast('User Name can not be empty')
            return
        } else if (this.utility.isEmptyOrNullOrUndefined(passwd)) {
            this.utility.showToast('Password can not be empty')
            return
        } else {
            this.login()
        }

    }

    eventHandler(event) {
        ////console.log(event.keyCode);
        if (event.keyCode == 13) {
            event.preventDefault();
        }
    }

    // zenwenLogin() {
    //     let url = "/zenWenLogin/authenticate";
    //     let user = this.userData;
    //     //console.log(user)
    //     this.httpProvider.http.ZenWENauthService(url, user).subscribe((res) => {
    //         if (res && res.accessToken) {
    //             this.data.saveData('zenwenLoginDetails', res);
    //         }
    //     }, (err) => {
    //         //console.log('err: ', err);
    //         this.data.saveData('zenwenLoginDetails', null);
    //     })
    // }
}