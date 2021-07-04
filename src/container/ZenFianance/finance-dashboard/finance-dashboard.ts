import { Component, } from "@angular/core";
import { NavController, ModalController } from "ionic-angular";
import { HttpProvider } from '../../../providers/http/http';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities'
import { Constants } from "@app/constants";
import { PaySlipPage } from "./payslip/payslip";
import * as CryptoJS from 'crypto-js';
import { CapPage } from "./cap/cap";
import { PfPage } from "./pfBalance/pfBalance";
import { GetterSetter } from "../../../providers/getterSetter/getterSetter";
import { registerLocaleData } from '@angular/common';

import localeIn from '@angular/common/locales/en-IN';
registerLocaleData(localeIn);

import localeAr from '@angular/common/locales/ar-EG';
registerLocaleData(localeAr);

@Component({
    selector: "finance-dashboard-page",
    templateUrl: "finance-dashboard.html"
})
export class FinanceDashboardPage {

    private showData: boolean = false;
    private gridData: any
    private financeData: any
    private typeofData: any;
    private key: any;
    private value: any;
    private payrollData: any;
    private userprofile: any
    private dashboardData: any;
    private payrollTitle: any;
    private payrolltitle: any;
    private monthWiseDetails: any;
    private yearWiseDetails: any;
    private monthName: string = "";
    private yearName: string = "";
    private typeDoc: string = "";
    private isCurrentMonth = ""
    private yearselectOptions: object = {
        title: 'Year Filter',
        mode: 'ios'
    }
    private selectOptionsMonth: object = {
        title: 'Month Filter',
        mode: 'ios'
    }
    // private selectedOption: string;
    private filterList: any = {
        monthList: [],
        yearList: []
    }

    constructor(private utility: CommonUtilities, private httpProvider: HttpProvider, private navCtrl: NavController,
        private modalCtrl: ModalController, private getSet: GetterSetter) {

        this.key = CryptoJS.enc.Hex.parse(this.getSet.getUserKey());
        this.getDashboardData()
    }

    getDashboardData() {
        const url: string = "getFinanceDashboard";
        const data: any = {};
        this.utility.updateLoader(true);

        this.httpProvider.http.commonService({ url, data, financeURL: true }).subscribe((res: any) => {
            if (!this.utility.isEmptyOrNullOrUndefined(res) && !this.utility.isEmptyOrNullOrUndefined(res.details)) {
                this.utility.updateLoader(false);
                this.dashboardData = res.details.financeYear
                this.financeData = res.details.financeDetails;
                this.monthWiseDetails = res.details.monthList
                this.yearWiseDetails = res.details.yearList;

                this.typeofData = res.details.financeDetails.type
                for (let i = 0; i < this.financeData.length; i++) {
                    this.typeofData = this.financeData[i].type
                    this.financeData[i].decryptValue = this.utility.decrptWithKey(this.financeData[i].value, this.key);

                    // if (this.financeData[i].decryptValue.indexOf(',') > -1) {
                    //     this.financeData[i].decryptValue = this.financeData[i].decryptValue.split(',').join('');
                    // }
                    // this.financeData[i].decryptValue = this.transform(this.financeData[i].decryptValue, 'INR', 'symbol-narrow')
                }
                this.payrollData = res.details.myPayroll.list
                this.userprofile = res.details.myPayroll.userProfilePic
                this.payrolltitle = res.details.myPayroll.title
                this.monthName = this._getselectedMonthandYear(this.monthWiseDetails)
                this.yearName = this.yearWiseDetails[this.yearWiseDetails.length - 1].key;
                this.showData = true;
            } else {
                this.utility.updateLoader(false);
                this.utility.showAlert('ZenFinance', Constants["erroMessageFor No Data"])
            }
        }, err => {
            this.utility.updateLoader(false);
        });
    }

    moveTo(selected) {
        if (!this.utility.isEmptyOrNullOrUndefined(selected.type)) {
            if (selected.key == 'PaySlip') {
                this.navCtrl.push(PaySlipPage, { selected: selected, yearSelected: this.yearWiseDetails[this.yearWiseDetails.length - 1].key, monthSelected: this.isCurrentMonth, yearlist: this.yearWiseDetails })
            } else if (selected.key == 'CAP') {
                let cicoModel = this.modalCtrl.create(CapPage, { selected: selected },
                    { cssClass: 'inset-modal-capPage' });
                cicoModel.present();
            } else if (selected.key == 'PF') {
                this.navCtrl.push(PfPage, { selected: selected, yearSelected: this.yearWiseDetails[this.yearWiseDetails.length - 1].key })
            }
        }
    }

    onMonthDetailChange(event) {
        this.monthName = event
    }

    onYearDetailChange(event) {
        this.yearName = event
    }

    _getselectedMonthandYear(list: any) {
        let selectedValue: string = ""
        list.filter((i) => {
            if (i.isCurrentMonth) {
                selectedValue = i.key
                this.isCurrentMonth = selectedValue
            }
        });
        return selectedValue
    }

    ngOnDestroy() {
        this.getSet.clearUserKey()
    }

    // download 
    getpdfData(selected) {

        // if (!this.utility.isEmptyOrNullOrUndefined(selected.isDisable) && selected.isDisable) {
        //     return
        // }
        const url: string = "getPdfs";
        let data: any = {
            type: selected.key
        };

        if (this.monthName && this.yearName) {
            data.year = this.yearName
            data.month = this.monthName
        }

        this.utility.updateLoader(true);
        this.httpProvider.http.commonService({ url, data, financeURL: true }).subscribe((res: any) => {

            if (!this.utility.isEmptyOrNullOrUndefined(res) && !this.utility.isEmptyOrNullOrUndefined(res.status)
                && !this.utility.isEmptyOrNullOrUndefined(res.status.statusCode) && res.status.statusCode == 1) {
                if (!this.utility.isEmptyOrNullOrUndefined(res.details)) {
                    if (res.details.type.toLowerCase() == "form16") {
                        if (!this.utility.isEmptyOrNullOrUndefined(res.details.executble_link)) {
                            this.utility.openWithSystemBrowser(res.details.executble_link)
                        } else {
                            this.utility.presentAlert(Constants.pdf_error);
                        }
                    } else {
                        if (!this.utility.isEmptyOrNullOrUndefined(res.details.data)) {
                            this.utility.getPermissionsSaveAndOpenPdf(res.details.data, selected.key)
                        } else {
                            this.utility.presentAlert(Constants.pdf_error);
                        }
                    }
                } else {
                    this.utility.showAlert('ZenFinance', Constants["erroMessageFor No Data"])
                }
            }
            this.utility.updateLoader(false);
        }, err => {
            this.utility.updateLoader(false);
            this.utility.showAlert('ZenFinance', Constants["erroMessageFor No Data"])
        });
    }

    // numberWithCommas(number) {
    //     let parts = number.toString().split(".");
    //     parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //     return parts.join(".");
    // }

    // transform(value: any, currencyCode?: string, display?: 'code' | 'symbol' | 'symbol-narrow' | boolean, digitsInfo?: string, locale?: string): string {
    //     if (value != null)
    //         return this.currencyPipe.transform(value, currencyCode, display, digitsInfo, locale);
    //     return this.currencyPipe.transform(0, currencyCode, display, locale).split('0.00')[0];
    // }
}
