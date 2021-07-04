webpackJsonp([115],{

/***/ 1315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyjobPageModule", function() { return ApplyjobPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__applyjob__ = __webpack_require__(1537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_attachment_attachment__ = __webpack_require__(731);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ApplyjobPageModule = /** @class */ (function () {
    function ApplyjobPageModule() {
    }
    ApplyjobPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__applyjob__["a" /* ApplyjobPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__applyjob__["a" /* ApplyjobPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_attachment_attachment__["a" /* Attachment */]
            ]
        })
    ], ApplyjobPageModule);
    return ApplyjobPageModule;
}());

//# sourceMappingURL=applyjob.module.js.map

/***/ }),

/***/ 1537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplyjobPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_store__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_attachment_attachment__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_download_download__ = __webpack_require__(113);
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
 * Generated class for the ApplyjobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ApplyjobPage = /** @class */ (function () {
    function ApplyjobPage(navCtrl, navParams, store, data, attachment, file, platform, utility, alertCtrl, download, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.store = store;
        this.attachment = attachment;
        this.file = file;
        this.platform = platform;
        this.utility = utility;
        this.alertCtrl = alertCtrl;
        this.download = download;
        this.popoverCtrl = popoverCtrl;
        this.personalDetails = [];
        this.isDataAvailable = false;
        this.internalJobPostingurl = "getAllOpenSRF";
        this._homeDataListner = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subscription"]();
        this._uploadResumeListner = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subscription"]();
        this._uploadResumeData = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subscription"]();
        this._submitResumeListner = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subscription"]();
        this._submitResumeData = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subscription"]();
        this._profileDataListner = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subscription"]();
        this.isResumeUploaded = false;
        this.addText = '';
        this.showDownload = true;
        this.utility.updateLoader(true);
        this.formData = new FormData();
        this.applySelectedJob = this.navParams.get('jobDetails');
    }
    ApplyjobPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.platform.is('ios')) {
            this.showDownload = false;
        }
        this.getHomeData();
        this.loading$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__app_store__["_40" /* getApplyJobLoading */]);
        var params = {
            'userId': this.userId,
            'type': 'ijp',
            'role': 'associate'
        };
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__app_store__["l" /* GetApplyJobAction */]("getUserProfile", params));
        this.utility.updateLoader(false);
        this._profileDataListner = this.store.select(__WEBPACK_IMPORTED_MODULE_2__app_store__["_39" /* getApplyJobData */]).subscribe(function (response) {
            if (response) {
                if (response.details) {
                    if (response.details.userProfiledetails) {
                        _this.isDataAvailable = true;
                        _this.userDetails = response.details;
                        _this.type = _this.userDetails.userProfiledetails[0].key;
                        _this.personalDetails = _this.userDetails.userProfiledetails[0].value;
                    }
                }
            }
        });
    };
    ApplyjobPage.prototype.getHomeData = function () {
        var _this = this;
        //);
        this._homeDataListner = this.store.select(__WEBPACK_IMPORTED_MODULE_2__app_store__["_61" /* getMiscData */]).subscribe(function (response) {
            if (response && response.userDetails && response.userDetails.employeeId)
                _this.userId = response.userDetails.employeeId;
        });
    };
    ApplyjobPage.prototype.submitForm = function () {
        var _this = this;
        if (!this.isResumeUploaded) {
            this.utility.presentAlert("Please upload your resume.");
        }
        else if (this.isResumeUploaded) {
            var alert_1 = this.alertCtrl.create({
                message: 'Do you want to apply this job ?',
                enableBackdropDismiss: false,
                buttons: [
                    {
                        text: 'No',
                        role: 'no',
                        handler: function () { }
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                            _this.applyJob();
                        }
                    }
                ],
            });
            alert_1.present();
        }
    };
    ApplyjobPage.prototype.uploadDoc = function () {
        var _this = this;
        this.attachment.openWordDocument().then(function (response) {
            if (response) {
                _this.startUpload(response);
            }
        });
    };
    ApplyjobPage.prototype.startUpload = function (docFile) {
        var _this = this;
        this.file.resolveLocalFilesystemUrl(docFile).then(function (entry) {
            entry.file(function (file) {
                _this.utility.showDebugLog(file);
                if (file.type != "image/jpeg" && file.type != "image/png" && file.type != "application/pdf") {
                    /* let fileType = file.localURL;
                    let fileExtn = fileType.substring(fileType.lastIndexOf('.') + 1);
          
                    this.utility.showDebugLog(fileExtn);
          
                    if (fileExtn == 'docx' || fileExtn == 'doc') {
           */
                    var fileReader_1 = new FileReader();
                    fileReader_1.readAsArrayBuffer(file);
                    fileReader_1.onload = function (ev) {
                        var typeofFile = file.type;
                        var imgBlob = new Blob([fileReader_1.result], { type: file.type });
                        var fileExt = typeofFile.substring(typeofFile.indexOf('/') + 1);
                        var fileName = new Date().getTime();
                        _this.formData.append('file', imgBlob, fileName + "." + fileExt);
                        _this.formData.append('srfNo', _this.applySelectedJob.requisitionNo);
                        _this.uploadResume();
                        //this.store.dispatch(new fromStore.UploadResumeAction('resumeUplaod', this.formData))
                    };
                    /*   } else {
                        this.utility.presentAlert("Please upload a resume of doc type.");
                      } */
                }
                else {
                    _this.utility.presentAlert("Please upload a resume of doc type.");
                }
            });
        });
    };
    ApplyjobPage.prototype.uploadResume = function () {
        var _this = this;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__app_store__["_26" /* UploadResumeAction */]('resumeUplaod', this.formData));
        this._uploadResumeListner = this.store.select(__WEBPACK_IMPORTED_MODULE_2__app_store__["_93" /* getUploadResumePending */]).subscribe(function (loading) {
            _this.utility.updateLoader(loading);
        });
        this._uploadResumeData = this.store.select(__WEBPACK_IMPORTED_MODULE_2__app_store__["_92" /* getUploadResumeData */]).subscribe(function (data) {
            if (data) {
                if (data.status) {
                    if (data.status.statusCode == 1) {
                        _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__app_store__["_27" /* UploadResumeReset */]());
                        _this.isResumeUploaded = true;
                        _this.utility.presentAlert("Resume uploaded successfully.");
                        _this._uploadResumeData.unsubscribe();
                        _this._uploadResumeListner.unsubscribe();
                    }
                }
                else {
                    _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__app_store__["_27" /* UploadResumeReset */]());
                    _this._uploadResumeData.unsubscribe();
                    _this._uploadResumeListner.unsubscribe();
                }
            }
        });
    };
    ApplyjobPage.prototype.applyJob = function () {
        var _this = this;
        var params = {
            'srfNo': this.applySelectedJob.requisitionNo,
            'associateDescription': this.addText
        };
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__app_store__["L" /* GetSubmitApplyFormAction */]("appliedJob", params));
        this._submitResumeListner = this.store.select(__WEBPACK_IMPORTED_MODULE_2__app_store__["_89" /* getSubmitApplyFormLoading */]).subscribe(function (loading) {
            _this.utility.updateLoader(loading);
        });
        this._submitResumeData = this.store.select(__WEBPACK_IMPORTED_MODULE_2__app_store__["_88" /* getSubmitApplyFormData */]).subscribe(function (data) {
            if (data) {
                if (data.status) {
                    _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__app_store__["_20" /* SubmitApplyFormReset */]());
                    if (data.status.statusCode == 1) {
                        _this.utility.presentAlert("Congratulations!<br> You have successfully applied for this job.").then(function () {
                            // this.store.dispatch(new fromStore.GetInternalJobPostingAction(this.internalJobPostingurl, params));
                            _this.navCtrl.push('InternalJobPostingPage');
                            _this.navCtrl.remove(_this.navCtrl.getActive().index - 2, 3);
                        });
                    }
                }
            }
        });
    };
    ApplyjobPage.prototype.downloadResume = function () {
        if (this.userDetails.resumeUrl)
            this.download.downloadDocument(this.userDetails.resumeUrl, true);
    };
    ApplyjobPage.prototype.ionViewWillLeave = function () {
        this._homeDataListner.unsubscribe();
        this._submitResumeData.unsubscribe();
        this._submitResumeListner.unsubscribe();
        this._uploadResumeData.unsubscribe();
        this._uploadResumeListner.unsubscribe();
        this._profileDataListner.unsubscribe();
    };
    ApplyjobPage.prototype.presentOptions = function (myEvent) {
        var popover = this
            .popoverCtrl
            .create('PopoverPage', { 'type': 'others' });
        popover.present({ ev: myEvent });
    };
    ApplyjobPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-applyjob',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\applyjob\applyjob.html"*/'<!--\n  Generated template for the ApplyjobPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Apply</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentOptions($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <div padding *ngIf="loading$ | async">\n    <ion-spinner></ion-spinner>\n  </div> -->\n  <div *ngIf="!(loading$ | async) ">\n    <div style="font-size: 1.2em;\n    margin-left: 2%;\n    border-bottom: 1px solid;">{{type}}</div>\n    <div style="padding-top: 10px">\n      <ion-grid>\n        <ion-row *ngFor="let details of personalDetails">\n          <ion-col col-6>\n            {{details.key}}\n          </ion-col>\n          <ion-col col-6>\n            {{details.value}}\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-textarea #inputToFocus style="min-height:150px" name=\'addText\' required placeholder="What makes you perfect for this position? "\n        [(ngModel)]="addText">\n      </ion-textarea>\n      <!-- <div *ngIf="showDownload" style="padding-top: 7px">\n        <div style="display: flex;\n        background: #eceaea;\n        height: 30px;\n        align-items: center;border-radius: 3px;">\n         \n          <ion-grid>\n            <ion-row>\n              <ion-col col-5>\n                <span style="padding: 5px">Zensar CV format</span>\n              </ion-col>\n              <ion-col col-7>\n                <div style="display: flex;">\n                  <span class="download" (click)="downloadResume()"><span>Download</span>\n                  </span>\n                  <span class="downloadIcon"><img class="down-img" src="assets/imgs/Download.svg"></span>\n                </div>\n\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </div> -->\n      <div style="padding-top: 7px">\n        <div style="display: flex;\n      background: #eceaea;\n      height: 30px;\n      align-items: center;\n      border-radius: 3px;">\n          <!--  <img class="passwordImg" src="assets/imgs/attach.svg" style="height: 20px;\n              width: 20px;" (click)="uploadDoc()"> -->\n          <ion-grid>\n            <ion-row>\n              <ion-col col-5>\n                <span style="padding: 5px">Upload resume</span>\n              </ion-col>\n              <ion-col col-7>\n                <div style="display: flex;">\n                  <span class="upload" (click)="uploadDoc()"><span style="padding: 10px;">Upload</span></span>\n                  <span class="uploadIcon"><img class="down-img" src="assets/imgs/Upload.svg"></span>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n\n        </div>\n      </div>\n\n\n    </div>\n\n  </div>\n  <div *ngIf="!(loading$ | async) && isDataAvailable" class="justify-cont-center"> <button ion-button\n      class="margin3per border-radius20 width60" style="border-radius: 50px;" (click)="submitForm()">Submit</button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\applyjob\applyjob.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */],
            __WEBPACK_IMPORTED_MODULE_5__providers_data_data__["a" /* Data */], __WEBPACK_IMPORTED_MODULE_6__providers_attachment_attachment__["a" /* Attachment */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_8__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_9__providers_download_download__["a" /* Download */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */]])
    ], ApplyjobPage);
    return ApplyjobPage;
}());

//# sourceMappingURL=applyjob.js.map

/***/ })

});
//# sourceMappingURL=115.js.map