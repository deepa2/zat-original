import { Component } from "@angular/core";
import { NavParams, ToastController, ViewController } from "ionic-angular";
import { HttpProvider } from '../../../providers/http/http';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities'

@Component({
    selector: "report-drill-model-page",
    templateUrl: "report-drill-model.html"
})
export class ReportDrillModelPage {
    private year: string;
    private date: any;
    private monthList: any = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    private monthShow: any;
    private showMonth: boolean = true;
    private selectedMonth : any;
    private selectedYear : any;
    private loaderOn: boolean = false;
    private tostMsg: any;
    private titleName : any
    constructor(private utility: CommonUtilities, private httpProvider: HttpProvider, private navParams: NavParams, private viewCtrl: ViewController,
        private utilities: CommonUtilities, private toastCtrl: ToastController) {
        this.date = new Date();
        this.titleName = this.navParams.get("title")

    }

    _getYear(event: any) {
        this.selectedYear =this.date.getFullYear()
        if (event.year == this.date.getFullYear()) {
            this.monthShow = this.monthList.slice(0, this.date.getUTCMonth() + 1).toString();
        } else {
            this.monthShow = this.monthList.toString();
        }
        this.showMonth = false
    }

    _geMonth(event: any) {
        this.selectedMonth= ('0' + event.month).slice(-2)
    }

    dismiss() {
        this.viewCtrl.dismiss('data');
    }
    reportGenrationData() {
        let getReportsNotification = {
            url: 'getReport',
            data: {
                year: this.selectedYear,
                month : parseInt(this.selectedMonth),
                reportType: this.titleName
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
