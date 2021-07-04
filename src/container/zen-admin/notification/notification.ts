import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { HttpProvider } from '../../../providers/http/http';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities'
import { Data } from "../../../providers/data/data";
import { CustomNotificationPage } from "../custom-notification/custom-notification";
import moment from "moment";

@Component({
    selector: "notification-page",
    templateUrl: "notification.html"
})

export class NotificationPage
{

    private notificationList: any = [];
    private errorMessage: string;
    private resultPending: boolean = true;
    private limits: any = {
        limit: 0,
        offset: 10
    }

    constructor(private utility: CommonUtilities,
        private httpProvider: HttpProvider,
        public dataService: Data,
        private navCtrl: NavController)
    {
        // this.getNotificationData()
    }

    ionViewWillEnter()
    {
        this.notificationList = [];
        this.resultPending = true;
        this.limits = {
            limit: 0,
            offset: 10
        }
        this.getNotificationData()
    }


    // service call to get notification list

    getNotificationData()
    {
        const url: string = "getNotificationHistory";
        const data: any = {
            "limit": this.limits.limit,
            "offset": this.limits.offset,
        };

        this.utility.updateLoader(true);

        this.httpProvider.http.commonService({ url, data, isZenAdmin: true }).subscribe((res: any) =>
        {
            if (!this.utility.isEmptyOrNullOrUndefined(res) && !this.utility.isEmptyOrNullOrUndefined(res.data))
            {
                if (!this.utility.isEmptyOrNullOrUndefined(res.data) && res.data.length > 0)
                {
                    this.notificationList = this.notificationList.concat(res.data)
                } else
                {
                    this.resultPending = false
                    this.errorMessage = 'No Data Available!'
                }
            } else
            {
                this.errorMessage = 'No Data Available!'
            }
            this.utility.updateLoader(false)
        }, err =>
        {
            this.errorMessage = 'No Data Available!'
            this.utility.updateLoader(false)
        });
    }

    // infinite scroll function

    loadData(infiniteScroll)
    {
        if (this.resultPending)
        {
            setTimeout(() =>
            {
                this.limits.limit = this.limits.limit + 10
                this.limits.offset = 10;
                this.getNotificationData()
                infiniteScroll.complete();
            }, 1000);
        } else
        {
            infiniteScroll.enable(false);
        }
    }

    // date and time format functions using moment.js

    _getFormatDate(date)
    {
        return moment(date).format('DD');
    }

    _getFormatMonth(date)
    {
        return moment(date).format('MMM')
    }

    _getFormatTime(time)
    {
        return moment(time).format('LT')
    }
    // date and time format functions ends


    // page navigation

    customNotification()
    {
        this.navCtrl.push(CustomNotificationPage)
    }
}
