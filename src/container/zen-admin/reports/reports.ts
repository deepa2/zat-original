import { Component } from "@angular/core";
import { ModalController, ToastController } from "ionic-angular";
import { HttpProvider } from '../../../providers/http/http';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities'
import { Data } from "../../../providers/data/data";
import { ReportModelPage } from "../report-model/report-model";
import { ReportDrillModelPage } from "../report-drill-model/report-drill-model";

@Component({
    selector: "reports-page",
    templateUrl: "reports.html"
})

export class ReportPage {

    private reportList: any;
    private loaderOn: boolean = false;
    private errorMessage: string;
    private tostMsg: any

    constructor(private utility: CommonUtilities, private httpProvider: HttpProvider, private modalCtrl: ModalController,
        public dataService: Data, private toastCtrl: ToastController) {
        // Retrieve Report list from server
        this.getReportList()
    }

    movetoReortModel(title) {
        if (title == "Search Report") {
            let reportModel = this.modalCtrl.create(ReportModelPage, { title: title }, { cssClass: 'report-model' })
            reportModel.present();
            reportModel.onDidDismiss((response: any) => {
                if (!this.utility.isEmptyOrNullOrUndefined(response)) {
                    this.getReportList()
                }
            })
        } else {
            let reportModel = this.modalCtrl.create(ReportDrillModelPage, { title: title }, { cssClass: '' })
            reportModel.present();
            reportModel.onDidDismiss((response: any) => {
                if (!this.utility.isEmptyOrNullOrUndefined(response)) {
                    this.getReportList()
                }
            })
            // this.reportGenrationData(title)
        }
    }

    getReportList() {
        let getAdminBusReportTypes = {
            url: 'getAdminBusReportTypes',
            data: {},
            isZenAdmin: true
        }

        this.loaderOn = true
        this.utility.updateLoader(this.loaderOn)

        this.httpProvider.http.commonService(getAdminBusReportTypes).subscribe((response) => {
            if (response) {

                this.loaderOn = false
                this.utility.updateLoader(this.loaderOn);
                if (!this.utility.isEmptyOrNullOrUndefined(response['data'])) {
                    this.reportList = response['data']
                }
            }
        }, error => {
            this.loaderOn = false
            this.utility.showDebugLog(error)
            this.utility.updateLoader(false)
        });
    }

    reportGenrationData(titleName) {
        let getReportsNotification = {
            url: 'getReport',
            data: {
                reportType: titleName
            },
            isZenAdmin: true
        }

        this.loaderOn = true
        this.utility.updateLoader(this.loaderOn)

        this.httpProvider.http.commonService(getReportsNotification).subscribe((response) => {
            if (response) {
                this.tostMsg = response['data']
                this.loaderOn = false
                this.utility.updateLoader(this.loaderOn);
                let toast = this.toastCtrl.create({
                    message: this.tostMsg,
                    duration: 4000,
                    position: 'bottom'
                });

                toast.onDidDismiss(() => {
                });

                toast.present();
            }
        }, error => {
            this.loaderOn = false
            this.utility.showDebugLog(error)
            this.utility.updateLoader(false)
        });

    }

}


