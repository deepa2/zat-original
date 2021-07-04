import { Component, ElementRef, ViewChild } from "@angular/core";
import { NavParams, NavController, ModalController } from "ionic-angular";
import { HttpProvider } from '../../../../providers/http/http';
import { CommonUtilities } from '../../../../providers/commonUtilities/commonUtilities'
// import { jsPDF } from 'jspdf';
import { Constants } from "@app/constants";
import *as CryptoJS from 'crypto-js';
import { PopoverController } from 'ionic-angular';
import { ZenfinancePopoverPage } from "../zenfinance-popover/zenfinance-popover";
import { PaySlipModelPage } from "../payslipModel/payslipModel";
import { GetterSetter } from "../../../../providers/getterSetter/getterSetter";
import { registerLocaleData } from "@angular/common";

import localeIn from '@angular/common/locales/en-IN';
import localeAr from '@angular/common/locales/ar-EG';

registerLocaleData(localeIn);
registerLocaleData(localeAr);

@Component({
    selector: "pfBalance-page",
    templateUrl: "pfBalance.html"
})

export class PfPage {

    @ViewChild('pdfTable') pdfTable: ElementRef;

    private pageTitle: any;
    private yearselected: any
    private pfData: any;
    private key: any;
    private intrestData: any;
    private drillData: any;
    private monthWiseDetails: any = [];
    private yearWiseDetails: any;
    private monthName: any;
    private yearName: any = "";
    private pfdata: any

    private monthselectOptions: object = {
        title: 'Month',
        mode: 'ios'
    }
    private yearselectOptions: object = {
        title: 'Year',
        mode: 'ios'
    }
    private selectedMonthDetails: any;

    constructor(private utility: CommonUtilities, private httpProvider: HttpProvider, private navParams: NavParams,
        public popoverCtrl: PopoverController, private modalCtrl: ModalController, private getSet: GetterSetter) {

        this.pageTitle = this.navParams.get("selected");
        this.yearName = this.navParams.get("yearSelected");
        this.key = CryptoJS.enc.Hex.parse(this.getSet.getUserKey());
        this.getPFData()
    }

    presentPopover(myEvent) {
        let popover = this.popoverCtrl.create(ZenfinancePopoverPage);
        popover.present({
            ev: myEvent
        });
    }

    getPFData() {
        const url: string = "getFinanceSpecificationDetails";
        let data: any = {
            type: this.pageTitle.type,
            year: this.yearName,
            month: this.monthName
        };
        this.utility.updateLoader(true);

        this.httpProvider.http.commonService({ url, data, financeURL: true }).subscribe((res: any) => {
            if (!this.utility.isEmptyOrNullOrUndefined(res) && !this.utility.isEmptyOrNullOrUndefined(res.details)) {
                this.utility.updateLoader(false);
                this.pfdata = res.details
                this.intrestData = res.details.pfData.interestDetails;
                this.monthWiseDetails.length = 0;
                this.monthWiseDetails = res.details.pfData.monthWiseDetails;
                this.yearWiseDetails = res.details.pfData.yearList
                if (!this.utility.isEmptyOrNullOrUndefined(this.monthWiseDetails) && this.monthWiseDetails.length > 0) {
                    this.selectedMonthDetails = this.monthWiseDetails[0].valueList;
                    for (let i = 0; i < this.monthWiseDetails[0].valueList.length; i++) {
                        this.selectedMonthDetails[i].decryptValue = this.utility.decrptWithKey(this.monthWiseDetails[0].valueList[i].value, this.key);
                    }
                }
                for (let i = 0; i < res.details.pfData.interestDetails.length; i++) {
                    this.intrestData[i].decryptValue = this.utility.decrptWithKey(res.details.pfData.interestDetails[i].value, this.key);
                }
                this.pfData = res.details.pfData.pfDetails
                for (let i = 0; i < res.details.pfData.pfDetails.length; i++) {
                    this.pfData[i].decryptValue = this.utility.decrptWithKey(res.details.pfData.pfDetails[i].value, this.key);
                }
                this.drillData = res.details.pfData.pfDetails.valueList
                // this.yearName = this.yearWiseDetails[this.yearWiseDetails.length - 1].key
                this.monthName = this._getselectedMonthandYear(this.monthWiseDetails)
                // if (this.yearName && this.yearName.length <= 0)
                //     this.yearName = this.yearWiseDetails[this.yearWiseDetails.length - 1].key
                this.onMonthDetailChange(this.monthName)
            } else {
                this.utility.updateLoader(false);
                this.utility.showAlert('ZenFinance', Constants["erroMessageFor No Data"])
            }
        }, err => {
            this.utility.updateLoader(false);
        });
    }

    movetopfdrill(selected) {
        if (!this.utility.isEmptyOrNullOrUndefined(selected.valueList)) {
            let cicoModel = this.modalCtrl.create(PaySlipModelPage, { selected: selected },
                { cssClass: 'inset-modal-payslip' });
            cicoModel.present();
        }
    }

    onMonthDetailChange(event) {
        this.monthName = event
        this.monthWiseDetails.filter(i => {
            if (i.key == event) {
                this.selectedMonthDetails = i.valueList;
                for (let j = 0; j < i.valueList.length; j++) {
                    this.selectedMonthDetails[j].decryptValue = this.utility.decrptWithKey(i.valueList[j].value, this.key);
                }
            }
        });
    }

    onYearDetailChange(event) {
        this.yearName = event
        this.getPFData()
    }

    _getselectedMonthandYear(list: any) {
        let selectedValue: string = ""
        list.filter((i) => {
            if (i.isCurrentMonth)
                selectedValue = i.key
        });
        return selectedValue
    }

    getpdfData() {
        const url: string = "getPdfs";
        let data: any = {
            type: this.pageTitle.type,
        }
        if (this.monthName && this.yearName) {
            data.year = this.yearName
            data.month = this.monthName
        }
        this.utility.updateLoader(true);
        this.httpProvider.http.commonService({ url, data, financeURL: true }).subscribe((res: any) => {
            this.utility.getPermissionsSaveAndOpenPdf(res.details.data, "pf")
            if (!this.utility.isEmptyOrNullOrUndefined(res) && !this.utility.isEmptyOrNullOrUndefined(res.details)) {
                this.utility.updateLoader(false);
            } else {
                this.utility.updateLoader(false);
                this.utility.showAlert('ZenFinance', Constants["erroMessageFor No Data"])
            }
        }, err => {
            this.utility.updateLoader(false)
        });
    }
}
