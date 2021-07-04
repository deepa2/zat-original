import { Component } from "@angular/core";
import { NavParams, ViewController } from "ionic-angular";
import { HttpProvider } from '../../../../providers/http/http';
import { CommonUtilities } from '../../../../providers/commonUtilities/commonUtilities'
// import { jsPDF } from 'jspdf';
import { Constants } from "@app/constants";
import *as CryptoJS from 'crypto-js';
import { GetterSetter } from "../../../../providers/getterSetter/getterSetter";
import { registerLocaleData } from "@angular/common";

import localeIn from '@angular/common/locales/en-IN';
import localeAr from '@angular/common/locales/ar-EG';

registerLocaleData(localeIn);
registerLocaleData(localeAr);

@Component({
    selector: "cap-page",
    templateUrl: "cap.html"
})

export class CapPage {

    private pageTitle: any
    private capData: any
    private key: any;
    private headerValue: any

    constructor(private utility: CommonUtilities, private httpProvider: HttpProvider, private navParams: NavParams,
        private viewCtrl: ViewController, private getSet: GetterSetter) {

        this.key = CryptoJS.enc.Hex.parse(this.getSet.getUserKey());
        this.pageTitle = this.navParams.get("selected");
        this.headerValue = this.utility.decrptWithKey(this.pageTitle.value, this.key);
        this.getCapData()
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    getCapData() {
        const url: string = "getFinanceSpecificationDetails";
        const data: any = {
            type: this.pageTitle.type
        };
        this.utility.updateLoader(true);

        this.httpProvider.http.commonService({ url, data, financeURL: true }).subscribe((res: any) => {
            if (!this.utility.isEmptyOrNullOrUndefined(res) && !this.utility.isEmptyOrNullOrUndefined(res.details)) {
                this.utility.updateLoader(false);
                this.capData = res.details.cap;
                for (let i = 0; i < res.details.cap.length; i++) {
                    this.capData[i].decryptValue = this.utility.decrptWithKey(res.details.cap[i].value, this.key);
                }
            } else {
                this.utility.updateLoader(false);
                this.utility.showAlert('ZenFinance', Constants["erroMessageFor No Data"])
            }
        }, err => {
            this.utility.updateLoader(false);
            this.utility.showAlert('ZenFinance', Constants["erroMessageFor No Data"])
        });
    }
}
