import { Component } from "@angular/core";
import { Events, ModalController, NavController, NavParams, ViewController } from "ionic-angular";
import { HttpProvider } from '../../../providers/http/http';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities'
import { Constants } from "@app/constants";
import { Data } from "../../../providers/data/data";
import { NotificationModelPage } from "../../zen-admin/notification/notification-model/notification-model";
@Component({
    selector: "custom-notification-page",
    templateUrl: "custom-notification.html"
})

export class CustomNotificationPage {
    private notificationTemplate: any;
    private errorMessage: string;
    private resultPending: boolean = true;
    private limits: any = {
        limit: 0,
        offset: 10
    }

    constructor(private utility: CommonUtilities, private httpProvider: HttpProvider, private navParams: NavParams,
        private viewCtrl: ViewController, private modalCtrl: ModalController, private events: Events,
        public dataService: Data, private navCtrl: NavController) {
        this.getCustomNotificationData(this.limits.limit, this.limits.offset)
    }


    getCustomNotificationData(limit, offset) {
        const url: string = "getEmailTemplates";
        const data: any = {
            "limit": this.limits.limit,
            "offset": this.limits.offset,
        };
        this.utility.updateLoader(true);

        this.httpProvider.http.commonService({ url, data, isZenAdmin: true }).subscribe((res: any) => {
            if (!this.utility.isEmptyOrNullOrUndefined(res) && !this.utility.isEmptyOrNullOrUndefined(res.data.emailTemplatesData)) {
                this.notificationTemplate = res.data.emailTemplatesData
                if (!this.utility.isEmptyOrNullOrUndefined(res.data) && res.data.length > 0) {
                    this.notificationTemplate = this.notificationTemplate.concat(res.data.emailTemplatesData)
                } else {
                    this.resultPending = false
                    this.errorMessage = 'No Notification!'
                }
            } else {
                this.resultPending = false
                this.errorMessage = 'No Data Available!'
                this.utility.showAlert('', this.errorMessage)
            }
            this.utility.updateLoader(false)
        }, err => {
            this.errorMessage = 'No Data Available!'
            this.utility.updateLoader(false)
        });
    }

    addNotification(data, type) {
        let notificationModel = this.modalCtrl.create(NotificationModelPage, { data: data, type: type })
        notificationModel.present();
    }

    loadData(infiniteScroll) {
        if (this.resultPending) {
            setTimeout(() => {
                this.limits.limit = this.limits.limit + 10
                this.limits.offset = 10;
                this.getCustomNotificationData(this.limits.limit, this.limits.offset)
                infiniteScroll.complete();
            }, 1000);
        } else {
            infiniteScroll.enable(false);
        }
    }

}
