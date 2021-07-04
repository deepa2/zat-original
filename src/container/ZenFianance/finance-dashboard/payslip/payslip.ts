import { Component, ElementRef, ViewChild } from "@angular/core";
import { NavParams, ModalController } from "ionic-angular";
import { HttpProvider } from '../../../../providers/http/http';
import { CommonUtilities } from '../../../../providers/commonUtilities/commonUtilities'
import { Constants } from "@app/constants";
import * as CryptoJS from 'crypto-js';
import { PaySlipModelPage } from "../payslipModel/payslipModel";
import { GetterSetter } from "../../../../providers/getterSetter/getterSetter";
import { registerLocaleData } from "@angular/common";

import localeIn from '@angular/common/locales/en-IN';
import localeAr from '@angular/common/locales/ar-EG';

registerLocaleData(localeIn);
registerLocaleData(localeAr);

@Component({
    selector: "payslip-page",
    templateUrl: "payslip.html"
})

export class PaySlipPage {
    @ViewChild('pdfTable') pdfTable: ElementRef;

    private financeData: any;
    private pageTitle: any;
    private type: any;
    private key: any;
    private paysilpHeader: any;
    private listData: any;
    private yearselected: any;
    private yearList: any;
    private monthSelected: any
    private monthWiseDetails: any;
    private yearName: any;
    private monthselectOptions: object = {
        title: 'Month',
        mode: 'ios'
    }
    private yearselectOptions: object = {
        title: 'Year Filter',
        mode: 'ios'
    }

    constructor(private utility: CommonUtilities, private httpProvider: HttpProvider, private navParams: NavParams, private modalCtrl: ModalController,
        private getSet: GetterSetter) {

        this.key = CryptoJS.enc.Hex.parse(this.getSet.getUserKey());
        this.pageTitle = this.navParams.get("selected");
        this.yearselected = this.navParams.get("yearSelected");
        this.monthSelected = this.navParams.get("monthSelected");
        this.yearList = this.navParams.get("yearlist")
        this.getPayslipData();
    }

    getPayslipData(month: string = '') {

        const url: string = "getFinanceSpecificationDetails";
        const data: any = {
            type: this.pageTitle.type,
            year: this.yearselected,
            month: this.monthSelected
        };
        this.utility.updateLoader(true);

        this.httpProvider.http.commonService({ url, data, financeURL: true }).subscribe((res: any) => {
            if (!this.utility.isEmptyOrNullOrUndefined(res) && !this.utility.isEmptyOrNullOrUndefined(res.details)) {
                this.utility.updateLoader(false);

                this.financeData = res.details.paySlipData.paySlipDetails;
                if (this.financeData != null && this.financeData.length > 0) {
                    for (let i = 0; i < this.financeData.length; i++) {
                        this.financeData[i].decryptValue = this.utility.decrptWithKey(this.financeData[i].value, this.key);
                        // if (this.financeData[i].decryptValue.indexOf(',') > -1) {
                        //     this.financeData[i].decryptValue = this.financeData[i].decryptValue.split(',').join('');
                        // }
                    }
                }

                this.paysilpHeader = res.details.paySlipData.paySlipHeaderData
                if (this.paysilpHeader != null && this.paysilpHeader.length > 0) {
                    for (let i = 0; i < this.paysilpHeader.length; i++) {
                        this.paysilpHeader[i].decryptValue = this.utility.decrptWithKey(this.paysilpHeader[i].value, this.key);
                        // if (this.paysilpHeader[i].decryptValue.indexOf(',') > -1) {
                        //     this.paysilpHeader[i].decryptValue = this.paysilpHeader[i].decryptValue.split(',').join('');
                        // }
                    }
                }
                this.monthWiseDetails = res.details.paySlipData.monthList;
                this.monthSelected = this._getselectedMonthandYear(this.monthWiseDetails)
            } else {
                this.utility.updateLoader(false);
                this.utility.showAlert('ZenFinance', Constants["erroMessageFor No Data"])
            }
        }, err => {
            this.utility.updateLoader(false);
        });
    }

    movetoEarningDetails(selected) {
        if (selected.valueList.length > 0) {
            let cicoModel = this.modalCtrl.create(PaySlipModelPage, { selected: selected },
                { cssClass: 'inset-modal-capPage' });
            cicoModel.present();
        }
    }

    onMonthDetailChange(event) {
        this.monthSelected = event
        this.getPayslipData()
    }

    onYearDetailChange(event) {
        this.yearselected = event;
        this.getPayslipData();
    }

    _getselectedMonthandYear(list: any) {
        let selectedValue: string = ""
        list.filter((i) => {
            if (i.isCurrentMonth)
                selectedValue = i.key
        });
        return selectedValue
    }

    // pdf download
    getpdfData() {
        const url: string = "getPdfs";
        let data: any = {
            type: this.pageTitle.type,
        };
        if (this.monthSelected && this.yearselected) {
            data.year = this.yearselected,
                data.month = this.monthSelected
        }
        this.utility.updateLoader(true);
        this.httpProvider.http.commonService({ url, data, financeURL: true }).subscribe((res: any) => {
            if (!this.utility.isEmptyOrNullOrUndefined(res) && !this.utility.isEmptyOrNullOrUndefined(res.status)
                && !this.utility.isEmptyOrNullOrUndefined(res.status.statusCode) && res.status.statusCode == 1) {
                if (!this.utility.isEmptyOrNullOrUndefined(res.details) && !this.utility.isEmptyOrNullOrUndefined(res.details.data)) {
                    this.utility.getPermissionsSaveAndOpenPdf(res.details.data, "pf")
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

}
