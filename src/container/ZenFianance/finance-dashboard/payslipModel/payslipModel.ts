import { Component } from "@angular/core";
import {  NavParams, ViewController } from "ionic-angular";
import { HttpProvider } from '../../../../providers/http/http';
import { CommonUtilities } from '../../../../providers/commonUtilities/commonUtilities'
import * as CryptoJS from 'crypto-js';
import { GetterSetter } from "../../../../providers/getterSetter/getterSetter";
import { registerLocaleData } from "@angular/common";

import localeIn from '@angular/common/locales/en-IN';
import localeAr from '@angular/common/locales/ar-EG';

registerLocaleData(localeIn);
registerLocaleData(localeAr);

@Component({
    selector: "payslipModel-page",
    templateUrl: "payslipModel.html"
})

export class PaySlipModelPage {
    
    private pageData: any
    private pageTitle : any;
    private paySlipData : any;
    private key: any;
    private headerIcon : any;
    private headerValue : any

    constructor(private utility: CommonUtilities, private httpProvider: HttpProvider, 
        private navParams: NavParams, private viewCtrl: ViewController,private getSet : GetterSetter) {

        this.pageData = this.navParams.get("selected");
        this.key = CryptoJS.enc.Hex.parse(this.getSet.getUserKey());
        this.pageTitle = this.pageData.key;
        this.headerIcon = this.pageData.icon;
        this.headerValue = this.utility.decrptWithKey(this.pageData.value, this.key);

        this.paySlipData = this.pageData.valueList
        for (let i = 0; i < this.paySlipData.length; i++) {
            this.paySlipData[i].decryptValue = this.utility.decrptWithKey(this.paySlipData[i].value, this.key);
            
            // if (this.paySlipData[i].decryptValue.indexOf(',') > -1) {
            //     this.paySlipData[i].decryptValue = this.paySlipData[i].decryptValue.split(',').join('');
            // }
        }
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}
