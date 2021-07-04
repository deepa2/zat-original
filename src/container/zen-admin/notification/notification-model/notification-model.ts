import { Component } from '@angular/core';
import { NavController, App, ViewController, NavParams, ModalController } from 'ionic-angular';
import { CommonUtilities } from '../../../../providers/commonUtilities/commonUtilities'
import { AlertController, ToastController } from 'ionic-angular';
import { HttpProvider } from '../../../../providers/http/http';
import { Constants } from "@app/constants";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'notification-model-page',
    templateUrl: 'notification-model.html'
})

/**
 * Dashboard Page contains two Tabs.
 */
export class NotificationModelPage {

    private actionCheck: boolean = false;
    private subject: string = ""
    private routes: any = ""
    private templateNotificationData: any;
    private emailText: any = ""
    private errorMessage: string;
    private routeName: any = ''
    private notificationType: string

    constructor(private fb: FormBuilder, private navCtrl: NavController, private utilities: CommonUtilities,
        private navParams: NavParams,
        private viewCtrl: ViewController,
        public alertCtrl: AlertController,
        private httpProvider: HttpProvider,
        private modalCtrl: ModalController,
        private formBuilder: FormBuilder,
        private utility: CommonUtilities,
        private toastCtrl: ToastController) {

        this.templateNotificationData = this.navParams.get("data")
        this.notificationType = this.navParams.get("type")
        
        if (!this.utilities.isEmptyOrNullOrUndefined(this.templateNotificationData)) {
            this.emailText = this.templateNotificationData.textContent
            this.subject = this.templateNotificationData.subjectOfMail
        }
        this.getRouteData()

    }

    checkboxClick(e) {
        this.actionCheck = e.checked
    }

    showConfirm() {
        if (this.subject.trim().length <= 0 || this.emailText.trim().length <= 0 || this.routeName.length <= 0) {
            // if (this.utilities.isEmptyOrNullOrUndefined(this.subject) && this.utilities.isEmptyOrNullOrUndefined(this.emailText) && this.utilities.isEmptyOrNullOrUndefined(this.routeName)) {
            this.utilities.showAlert('Notification-Module', 'Field Cannot be Empty')
            return;
        } else {
            const confirm = this.alertCtrl.create({
                title: 'Submit Notification',
                message: 'Do you want to submit this notification?',
                buttons: [{
                        text: 'No',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    },{
                        text: 'Yes',
                        handler: () => {
                            this.pushNotification()
                        }
                    }
                ],
                cssClass: 'addDig-alert'
            });
            confirm.present();
        }
    }

    getRouteData() {
        const url: string = "getRoutesList";
        const data: any = {};
        this.utility.updateLoader(true);
        this.httpProvider.http.commonService({ url, data, isZenAdmin: true }).subscribe((res: any) => {
            if (!this.utility.isEmptyOrNullOrUndefined(res) && !this.utility.isEmptyOrNullOrUndefined(res.data)) {
                this.routes = res.data
            } else {
                this.errorMessage = 'No Data Available!'
                this.utility.showAlert('Routes', res.status.statusMessage)
            }
            this.utility.updateLoader(false)
        }, err => {
            this.errorMessage = 'No Data Available!'
            this.utility.updateLoader(false)
        });
    }

    pushNotification() {
        const url: string = "sendPushNotifications";
        const data: any = {
            notificationFlag: this.actionCheck,
            subject: this.subject,
            emailText: this.emailText,
            routeName: this.routeName,
            notificationType: this.notificationType
        };
        this.utility.updateLoader(true);
        this.httpProvider.http.commonService({ url, data, isZenAdmin: true }).subscribe((res: any) => {
            if (!this.utility.isEmptyOrNullOrUndefined(res) && !this.utility.isEmptyOrNullOrUndefined(res.data)) {
                let toast = this.toastCtrl.create({
                    message: 'Notification sent successfully',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                this.dismiss()
            } else {
                this.errorMessage = 'No Data Available!'
                this.utility.showAlert('Routes', res.status.statusMessage)
            }
            this.utility.updateLoader(false)
        }, err => {
            this.errorMessage = 'No Data Available!'
            this.utility.updateLoader(false)
        });
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
    
    onRouteChange(routeName) {
        this.routeName = routeName.busRouteName
    }

}
