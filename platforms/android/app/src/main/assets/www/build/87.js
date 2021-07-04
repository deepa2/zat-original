webpackJsonp([87],{

/***/ 1347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnToOfficePageModule", function() { return ReturnToOfficePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__return_to_office__ = __webpack_require__(1767);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReturnToOfficePageModule = /** @class */ (function () {
    function ReturnToOfficePageModule() {
    }
    ReturnToOfficePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__return_to_office__["a" /* ReturnToOfficePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__return_to_office__["a" /* ReturnToOfficePage */]),
            ],
        })
    ], ReturnToOfficePageModule);
    return ReturnToOfficePageModule;
}());

//# sourceMappingURL=return-to-office.module.js.map

/***/ }),

/***/ 1767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReturnToOfficePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_terms_conditions_terms_conditions__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_browser_tab__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_gatepass_check_gatepass_check__ = __webpack_require__(769);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ReturnToOfficePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReturnToOfficePage = /** @class */ (function () {
    function ReturnToOfficePage(utility, httpProvider, navParam, navCtrl, zone, modalCtrl, browserTab, platform, alertCtrl) {
        this.utility = utility;
        this.httpProvider = httpProvider;
        this.navParam = navParam;
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.modalCtrl = modalCtrl;
        this.browserTab = browserTab;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.showfooter = false;
        this.checkboxStatus = false;
        this.isAndroid = false;
        this.recordAgreementUrl = "recordAgreement";
        if (this.platform.is('android')) {
            this.isAndroid = true;
        }
        this.userId = this.navParam.get('userid');
        this.userData = this.navParam.get('userDetails');
        this.checkBoxValue = this.userData.isSignAgreement;
        this.checkboxStatus = this.checkBoxValue;
        //////console.log(this.userData)
    }
    ReturnToOfficePage.prototype.ionViewDidLoad = function () {
    };
    ReturnToOfficePage.prototype.chnageCheckBoxStatus = function (status) {
        this.checkBoxValue = status;
    };
    ReturnToOfficePage.prototype.encodeURI = function (url) {
        return window.encodeURI(url);
    };
    // Video Play event 
    ReturnToOfficePage.prototype.VideoEventInit = function () {
        if (!this.userData.isSignAgreement) {
            this.showfooter = true;
        }
        var param = {
            url: 'setEngagementData',
            data: {
                type: 'vedio'
            },
            miscellaneous: true
        };
        this.httpProvider.http.commonService(param).subscribe(function (response) {
            ////console.log(response)
        }, function (error) {
            //console.log(error);
        });
    };
    ReturnToOfficePage.prototype.goToTermsConditions = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__components_terms_conditions_terms_conditions__["a" /* TermsConditionsComponent */], {}, {
            cssClass: 'infoModal'
        });
        modal.present();
    };
    ReturnToOfficePage.prototype.goToTermsGuidelines = function () {
        this.myVideo.nativeElement.pause();
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_gatepass_check_gatepass_check__["a" /* GatePassCheckComponent */], { 'userDetails': this.userData }, {
            cssClass: 'guidelinesModal'
        });
        modal.present();
    };
    ReturnToOfficePage.prototype.openPDF = function (data) {
        var _this = this;
        if (this.platform.is('ios')) {
            this.browserTab.isAvailable().then(function (isAvailable) {
                if (isAvailable) {
                    _this.browserTab.openUrl(data);
                }
                else {
                    _this.utility.openWithSystemBrowser(data);
                }
            })
                .catch(function () {
                _this.utility.openWithSystemBrowser(data);
            });
        }
        else {
            this.utility.openAsset(data);
        }
        var param = {
            url: 'setEngagementData',
            data: {
                type: 'file'
            },
            miscellaneous: true
        };
        this.httpProvider.http.commonService(param).subscribe(function (response) {
            ////console.log(response)
        }, function (error) {
            //console.log(error);
        });
    };
    ReturnToOfficePage.prototype.submitServey = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var params = {
            "userId": this.userId.toString()
        };
        var data = {
            url: this.recordAgreementUrl, data: params, miscellaneous: true
        };
        return new Promise(function (resolve) {
            _this.httpProvider.http.commonService(data).subscribe(function (res) {
                if (res) {
                    _this.utility.updateLoader(false);
                    if (_this.userData.isUKLocation) {
                        _this.utility.presentAlert("Thank-you for submitting the Return to Office (RTO) Declaration. <br>Please adhere to the Covid-19 Policy, Workplace Plan and obligations in the Declaration, to ensure a safe working environment for yourself and your colleagues.").then(function () {
                            _this.navCtrl.pop();
                        }).catch(function () { });
                    }
                    else if (_this.userData.isUSLocation) {
                        if (_this.userData.isEligibleForUSQuestionnaires) {
                            _this.presentConfirmation("Are you going to office ?").then(function () {
                                _this.navCtrl.push('RtoQuestionnariesPage');
                            }).catch(function () {
                                //this.navCtrl.pop();
                                _this.utility.presentAlert("Thank-you for submitting the Return to Office (RTO) Declaration & policy agreement. <br>Please adhere to the RTO policy and obligations in the Declaration, to ensure a safe working environment for yourself and your colleagues.").then(function () {
                                    _this.navCtrl.pop();
                                }).catch(function () { });
                            });
                        }
                        else {
                            _this.utility.presentAlert("Thank-you for submitting the Return to Office (RTO) Declaration & policy agreement. <br>Please adhere to the RTO policy and obligations in the Declaration, to ensure a safe working environment for yourself and your colleagues.").then(function () {
                                _this.navCtrl.pop();
                            }).catch(function () { });
                        }
                    }
                    else if (!_this.userData.isUKLocation && !_this.userData.isUSLocation) {
                        _this.userData.isSignAgreement = true;
                        // this.userData.isBackButtonEnable = false;
                        _this.navCtrl.push("GatePassPage", { 'userDetails': _this.userData });
                        _this.navCtrl.remove(_this.navCtrl.getActive().index, 1);
                    }
                    resolve();
                }
            }, function (error) {
                _this.utility.updateLoader(false);
            });
        });
    };
    ReturnToOfficePage.prototype.presentConfirmation = function (message, title) {
        var _this = this;
        if (title === void 0) { title = ''; }
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                enableBackdropDismiss: false,
                title: title,
                subTitle: message,
                buttons: [
                    {
                        text: 'No',
                        handler: function () {
                            reject();
                        }
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                            resolve();
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myVideo'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ReturnToOfficePage.prototype, "myVideo", void 0);
    ReturnToOfficePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-return-to-office',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\return-to-office\return-to-office.html"*/'<!--\n  Generated template for the ReturnToOfficePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar [hideBackButton]="!userData?.isBackButtonEnable">\n    <ion-title>Return to Office Guidelines</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content [ngClass]="{\'footerContent\':showfooter}">\n\n  <div class="video-wrapper videoMargin">\n    <!-- <video src="userData.videoUrl" ></video> -->\n    <video muted playsinline autoplay preload="false" controls controlsList="nodownload" #myVideo\n      style="width:100%; height: 230px;" (ended)="VideoEventInit($event)">\n\n      <source src="{{encodeURI(userData?.videoUrl)}}" type=\'video/mp4;codecs="avc1.42E01E, mp4a.40.2"\' />\n    </video>\n  </div>\n  <div class="signin-wrapper">\n    <div class="signin-con">\n      <img src="assets/imgs/guidline-image.svg">\n      <div class="sign-text">\n        <span *ngIf="userData?.isEligibleForConsent">Please go through the Return to Office Declaration and provide your\n          acknowledgement stating that you have\n          read and understood the COVID-19 guidelines. You are committed to follow guidelines outlined in the\n          declaration.</span>\n        <span *ngIf="!userData?.isEligibleForConsent">Please go through the Return to Office Declaration and awareness\n          video. You are committed to follow guidelines outlined.</span>\n        <div class="rto-con">\n          <img src="assets/imgs/computer.svg">\n          <span class="rto">Return to Office</span>\n          <div class="guidlines" (click)="goToTermsGuidelines()">Declaration</div>\n        </div>\n      </div>\n\n    </div>\n    <div>\n\n      <!-- <div *ngIf="userData?.isAssociatePlayBook" class="viewPdf" (click)="openPDF(userData?.associatePlayBookDoc)">\n        <img class="pdfImg" src="assets/imgs/gatePass-red-pdf.svg">\n        <span>{{userData?.associatePlayBookDocName}}</span>\n        <span class="view">View</span>\n      </div> -->\n      <p>Please go through the Return to Office documents to understand the best practices and guidelines. </p>\n      <div *ngIf="userData?.isAssociatePlayBook" class="viewPdf" (click)="openPDF(userData?.associatePlayBookDoc)">\n        <img class="pdfImg" src="assets/imgs/gatePass-red-pdf.svg">\n        <span>{{userData?.associatePlayBookDocName}}</span>\n        <span class="view">View</span>\n      </div>\n      <div *ngIf="userData?.isCovidPolicy" class="viewPdf" (click)="openPDF(userData?.covid19PoliyDoc)">\n        <img class="pdfImg" src="assets/imgs/gatePass-red-pdf.svg">\n        <span>{{userData?.covid19PoliyDocName}}</span>\n        <span class="view">View</span>\n      </div>\n      <div *ngIf="userData?.isWorkPlacePlan1" class="viewPdf" (click)="openPDF(userData?.workPlacePlan1Doc)">\n        <img class="pdfImg" src="assets/imgs/gatePass-red-pdf.svg">\n        <span>{{userData?.workPlacePlan1DocName}}</span>\n        <span class="view">View</span>\n      </div>\n      <div *ngIf="userData?.isNoteAvaibale" class="viewPdf">\n        Note : You can also view the Covid-19 Policy and Workplace Plans on Zenlounge+\n      </div>\n    </div>\n  </div>\n\n  \n  <!-- <div style="padding:10px;" [innerHTML]="userData.htmlConsent"></div> -->\n</ion-content>\n<ion-footer *ngIf="!userData?.isSignAgreement && userData?.isEligibleForConsent" class="fotterBtn">\n  <div class="btmPara">\n    <div class="checkBox">\n      <ion-checkbox color="dark" (ionChange)="chnageCheckBoxStatus(checkboxStatus)" [(ngModel)]="checkboxStatus"\n        [checked]="checkBoxValue"></ion-checkbox>\n\n        <span class="marleft-5">{{userData?.decalartionContent}}<img class="more"\n          src="assets/imgs/asterisk.svg" /></span>\n      <!-- <span *ngIf="!userData?.isUKLocation" class="marleft-5"><img class="more" src="assets/imgs/asterisk.svg" /></span> -->\n      \n        <!-- <span *ngIf="userData?.isUKLocation" class="marleft-5"> <img class="more"\n          src="assets/imgs/asterisk.svg" /></span> -->\n    </div>\n  </div>\n  <button ion-button [disabled]="checkBoxValue?false:!checkboxStatus" (click)="submitServey()">Submit</button>\n\n</ion-footer>\n<ion-footer *ngIf="userData?.isSignAgreement" class="fotterBtn 2">\n  <div class="btmPara">\n    <div class="checkBox">\n      <ion-checkbox color="dark" [disabled]="true" [checked]="true"></ion-checkbox>\n      <span class="marleft-5">{{userData?.decalartionContent}}<img class="more"\n        src="assets/imgs/asterisk.svg" /></span>\n      <!-- <span *ngIf="!userData?.isUKLocation" class="marleft-5">I recognize that the obligations of this Declaration are ongoing, and I make this\n        Declaration truthfully, knowingly, and voluntarily.<img class="more" src="assets/imgs/asterisk.svg" /></span>\n\n        <span *ngIf="userData?.isUKLocation" class="marleft-5"> I have read, understand, and agree to abide by the\n          Covid-19 policy and Workplace Plan. I recognise that the obligations in the Declaration are ongoing and I make\n          the declaration, truthfully, knowingly and voluntarily.<img class="more"\n            src="assets/imgs/asterisk.svg" /></span> -->\n    </div>\n  </div>\n  <button ion-button [disabled]="true">Submit</button>\n</ion-footer>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\return-to-office\return-to-office.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_browser_tab__["a" /* BrowserTab */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ReturnToOfficePage);
    return ReturnToOfficePage;
}());

//# sourceMappingURL=return-to-office.js.map

/***/ })

});
//# sourceMappingURL=87.js.map