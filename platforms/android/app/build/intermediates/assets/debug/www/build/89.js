webpackJsonp([89],{

/***/ 1346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZenrichRefDetailPageModule", function() { return ZenrichRefDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__referral_info__ = __webpack_require__(1766);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_emojione__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_attachment_attachment__ = __webpack_require__(731);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ZenrichRefDetailPageModule = /** @class */ (function () {
    function ZenrichRefDetailPageModule() {
    }
    ZenrichRefDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__referral_info__["a" /* ReferralInfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular_emojione__["a" /* EmojiModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__referral_info__["a" /* ReferralInfoPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__providers_attachment_attachment__["a" /* Attachment */]
            ]
        })
    ], ZenrichRefDetailPageModule);
    return ZenrichRefDetailPageModule;
}());

//# sourceMappingURL=referral-info.module.js.map

/***/ }),

/***/ 1766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferralInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_attachment_attachment__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_submit_referral_submit_referral__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_zenrich_terms_conditions_zenrich_terms_conditions__ = __webpack_require__(775);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ReferralInfoPage = /** @class */ (function () {
    function ReferralInfoPage(navCtrl, navParams, httpProvider, modalCtrl, popoverctr, attachment, file, utility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.modalCtrl = modalCtrl;
        this.popoverctr = popoverctr;
        this.attachment = attachment;
        this.file = file;
        this.utility = utility;
        this.checkBoxValue = false;
        this.checkboxStatus = false;
        this.referralInfo = this.navParams.get('ReferralInfo');
        this.title = this.navParams.get('title');
        this.gender = this.navParams.get('gender');
        this.candidateProfileId = this.navParams.get('candidateProfileId');
        this.srfNo = this.navParams.get('srfNo');
    }
    ReferralInfoPage.prototype.submitReferral = function (ev) {
        var _this = this;
        this.utility.updateLoader(true);
        var url = "submitReferral";
        var data = {
            "srfNumber": this.srfNo,
            "candidateProfileId": this.candidateProfileId
        };
        //////console.log(data)
        this.httpProvider.http
            .commonService({ url: url, data: data, zenRich: true })
            .subscribe(function (res) {
            //////console.log(res);
            _this.submitResponce = res;
            _this.utility.updateLoader(false);
            if (_this.submitResponce != undefined) {
                if (_this.submitResponce.status.statusCode == 1) {
                    _this.utility.showToast("Referral saved successfully.");
                    _this.presentOptions();
                }
            }
        }, function (error) {
            //////console.log(error);
            // this.submitResponce = error
            _this.utility.updateLoader(false);
            // this.presentOptions(ev)
        });
    };
    ReferralInfoPage.prototype.presentOptions = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_submit_referral_submit_referral__["a" /* SubmitReferralComponent */], { "response": this.submitResponce }, {
            cssClass: 'submitModal'
        });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data && data == 'home') {
                var getIndex = _this.navCtrl.getViews();
                //////console.log(getIndex);
                _this.navCtrl.push('ZenRichLandingPage');
                //////console.log(this.navCtrl.getActive().index)
                var pagesToRemove = _this.navCtrl.getActive().index;
                var pushOnIndex = _this.navCtrl.getActive().index - 1;
                _this.navCtrl.remove(pagesToRemove - pushOnIndex, pagesToRemove);
            }
            else if (data && data == 'myReferrals') {
                var getIndex = _this.navCtrl.getViews();
                //////console.log(this.navCtrl.getActive().index);
                //////console.log(getIndex);
                // 
                var data_1 = {
                    'icon': "https://zentalentapp.zensar.com/fileviewer-zenhelp/zentalent/Icon/UserProfileIcons/Location.svg",
                    'key': "My Referrals",
                    'parameter': "MY_REFERRALS",
                    'type': null,
                    'value': "My Referrals"
                };
                var index_1 = _this.navCtrl.getActive().index - 1;
                var removeCount = _this.navCtrl.getActive().index - 2;
                _this.navCtrl.push('ZenrichPage', {
                    'getData': data_1
                }).then(function () {
                    _this.navCtrl.remove(2, index_1);
                });
            }
        });
    };
    ReferralInfoPage.prototype.editInformation = function () {
        this.navCtrl.pop();
    };
    ReferralInfoPage.prototype.goToTermsConditions = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__components_zenrich_terms_conditions_zenrich_terms_conditions__["a" /* ZenrichTermsConditionsComponent */], {}, {
            cssClass: 'zenrichinfoModal'
        });
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('createReferral'),
        __metadata("design:type", Object)
    ], ReferralInfoPage.prototype, "form", void 0);
    ReferralInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-referral-info',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\referral-info\referral-info.html"*/'<!--\n  Generated template for the WowPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Review Application</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="form-wrapper">\n    <div class="basic-info">\n      \n      <div class="ref-title">\n        <img class="info-icon" src="assets/imgs/new_information.svg" />\n      <span> Candidate Information</span> \n      <div class="edit" (click)="editInformation()" end>\n        <img class="info-icon" src="assets/imgs/Edit.svg" /></div>\n      </div>\n      <ion-item no-border>\n        <ion-label class="form-label" class="noColor">Title :\n        </ion-label>\n        <ion-label class="form-value">{{title}}</ion-label>\n      </ion-item>\n      <ion-item no-border>\n        <ion-label class="form-label">First Name :\n        </ion-label>\n        <ion-label class="form-value">{{referralInfo.firstName}}</ion-label>\n      </ion-item>\n      <ion-item no-border>\n        <ion-label class="form-label">Middle Name :\n        </ion-label>\n        <ion-label class="form-value">{{referralInfo.middleName}}</ion-label>\n      </ion-item>\n      <ion-item no-border>\n        <ion-label class="form-label">Last Name :\n        </ion-label>\n        <ion-label class="form-value">{{referralInfo.lastName}}</ion-label>\n      </ion-item>\n      <ion-item no-border>\n        <ion-label class="form-label">Email Address :\n        </ion-label>\n        <ion-label class="form-value">{{referralInfo.emailAddress}}</ion-label>\n      </ion-item>\n        <ion-item no-border>\n          <ion-label class="form-label" class="noColor">Gender :\n          </ion-label>\n          <ion-label class="form-value">{{gender}}</ion-label>\n          \n        </ion-item>\n        <ion-item no-border>\n          <ion-label class="form-label" class="noColor">DOB :\n          </ion-label>\n          <ion-label class="form-value" >{{referralInfo.dateOfBirth | date }}</ion-label>\n         </ion-item>\n      \n        <ion-item no-border>\n          <ion-label class="form-label">Contact Number :\n          </ion-label>\n          <ion-label class="form-value">{{referralInfo.cellularNumber}}</ion-label>\n        </ion-item>\n        <ion-item no-border *ngIf="referralInfo.homePhone != \'\' || referralInfo.homePhone != undefined">\n          <ion-label class="form-label">Alternate Number :\n          </ion-label>\n          <ion-label class="form-value">{{referralInfo.homePhone}}</ion-label>\n        </ion-item>\n        <!-- <ion-item no-border *ngIf="referralInfo.workNumber != \'\'">\n          <ion-label class="form-label">Work Number\n          </ion-label>\n          <ion-label>{{referralInfo.workNumber}}</ion-label>\n        </ion-item> -->\n      <ion-item no-border>\n        <ion-label class="form-label">PAN :\n        </ion-label>\n        <ion-label class="form-value">{{referralInfo.panCard}}</ion-label>\n      </ion-item>\n      <ion-item no-border>\n        <ion-label class="form-label">City :\n        </ion-label>\n        <ion-label class="form-value">{{referralInfo.city}}</ion-label>\n      </ion-item>\n      <ion-item no-border>\n        <ion-label class="form-label">About Candidate :\n        </ion-label>\n      </ion-item>\n      <div class="abt-con form-value">{{referralInfo.aboutCandidate}}</div> \n      \n     \n    </div>\n</ion-content>\n<ion-footer  class="fotterBtn">\n  \n  <div class="refer-friend-btn">\n    <div class="btmPara">\n      <div class="checkBox">\n         <ion-checkbox color="dark"  [(ngModel)]="checkboxStatus"></ion-checkbox>\n         <span class="marleft-5">I agree to the <span class="agreement" (click)="goToTermsConditions()"><b>Policy Term & Conditions</b></span> \n        </span>\n   \n       </div>\n     </div>\n    <button ion-button class="nextBtn" [disabled]="!checkboxStatus" (click)="submitReferral($event)">Submit Application</button>\n  </div>\n</ion-footer>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\referral-info\referral-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_attachment_attachment__["a" /* Attachment */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */]])
    ], ReferralInfoPage);
    return ReferralInfoPage;
}());

//# sourceMappingURL=referral-info.js.map

/***/ })

});
//# sourceMappingURL=89.js.map