webpackJsonp([140],{

/***/ 1331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalDetailsPageModule", function() { return PersonalDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personal_details__ = __webpack_require__(1751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_attachment_attachment__ = __webpack_require__(731);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PersonalDetailsPageModule = /** @class */ (function () {
    function PersonalDetailsPageModule() {
    }
    PersonalDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__personal_details__["a" /* PersonalDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__personal_details__["a" /* PersonalDetailsPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__providers_attachment_attachment__["a" /* Attachment */]
            ]
        })
    ], PersonalDetailsPageModule);
    return PersonalDetailsPageModule;
}());

//# sourceMappingURL=personal-details.module.js.map

/***/ }),

/***/ 1751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_download_download__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_attachment_attachment__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_http_angular_http_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_data_data__ = __webpack_require__(31);
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
 * Generated class for the PersonalDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PersonalDetailsPage = /** @class */ (function () {
    function PersonalDetailsPage(navCtrl, navParams, httpProvider, utility, download, attachment, platform, file, httpAngularProvider, data) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.utility = utility;
        this.download = download;
        this.attachment = attachment;
        this.platform = platform;
        this.file = file;
        this.httpAngularProvider = httpAngularProvider;
        this.data = data;
        this.uploadedDocumentUrl = '';
        this.personalDetailedData = this.navParams.get('peronalDetails');
        this.data.getData('loginDetails').then(function (details) {
            console.log(details);
            _this.profileData = details.details.userDetails.profilePic;
        });
    }
    PersonalDetailsPage.prototype.ionViewDidLoad = function () {
        if (!this.personalDetailedData.isExitUserEntry) {
            this.utility.presentAlert(this.personalDetailedData.userProfileAlert);
        }
        if (this.personalDetailedData.uploadedDocumentUrl) {
            this.uploadedDocumentUrl = this.personalDetailedData.uploadedDocumentUrl;
        }
    };
    PersonalDetailsPage.prototype.uploadDoc = function () {
        var _this = this;
        this.attachment.openDocument('').then(function (response) {
            _this.uploadFile(response);
        }).catch(function (error) {
        });
    };
    PersonalDetailsPage.prototype.uploadFile = function (Uri) {
        var _this = this;
        var fileURI = Uri;
        this.utility.updateLoader(true);
        var formData = new FormData();
        var uploadDocs = {
            url: "uploadAnnexure",
            data: formData,
            zenExit: true
        };
        this.file.resolveLocalFilesystemUrl(fileURI).then(function (entry) {
            entry.file(function (file) {
                var fileReader = new FileReader();
                fileReader.readAsArrayBuffer(file);
                fileReader.onloadend = function (ev) {
                    var fileType = file.type;
                    var fileExt = fileURI.substring(fileURI.lastIndexOf('.') + 1);
                    if (fileType == "application/msword") {
                        fileExt = "doc";
                    }
                    else if (fileType == "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
                        fileExt = "docx";
                    }
                    else if (fileType == "application/pdf") {
                        fileExt = "pdf";
                    }
                    else if (fileType == "application/vnd.oasis.opendocument.text") {
                        fileExt = "odt";
                    }
                    if (fileType == "application/pdf" || fileExt == "doc" || fileExt == "odt" || fileExt == "docx" || fileType == "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
                        var fileSize = _this.getFileSize(file.size);
                        if (fileSize <= 5.00) {
                            var imgBlob = new Blob([fileReader.result], { type: fileType });
                            var fileName = new Date().getTime();
                            formData.append("uploadFile", imgBlob, fileName + "." + fileExt);
                            console.log("uploadFile", imgBlob, fileName + "." + fileExt);
                            /**
                             * Upload documents service call : upload annexture file
                             */
                            _this.httpAngularProvider.multimediaService(uploadDocs).subscribe(function (response) {
                                _this.utility.updateLoader(false);
                                if (response) {
                                    if (response.status.statusCode == 1) {
                                        _this.utility.presentAlert("Annexure uploaded and submitted successfully.");
                                        if (response && response.details) {
                                            _this.uploadedDocumentUrl = response.details.uploadedDocumentUrl;
                                        }
                                        // this.selectedFile = file.localURL.substring(file.localURL.lastIndexOf('/') + 1
                                    }
                                }
                            }, function (error) {
                                _this.utility.updateLoader(false);
                            });
                        }
                        else {
                            _this.utility.updateLoader(false);
                            _this.utility.presentAlert("Please upload a file less than 5mb.");
                        }
                    }
                    else {
                        _this.utility.presentAlert("Please upload a valid file.");
                        _this.utility.updateLoader(false);
                    }
                };
            });
        }).catch(function (error) {
            _this.utility.updateLoader(false);
        });
    };
    PersonalDetailsPage.prototype.getFileSize = function (bytes) {
        if (bytes == 0)
            return 'n/a';
        else {
            var num = (bytes / (Math.pow(1024, 2))).toFixed(2);
            return parseFloat(num);
        }
    };
    PersonalDetailsPage.prototype.downloadDoc = function (url) {
        if (this.platform.is('android')) {
            this.download.downloadDocument(url, true);
        }
        else {
            this.utility.openBrowserTab(url);
        }
    };
    PersonalDetailsPage.prototype.removeDoc = function () {
        var _this = this;
        this.utility.presentConfirmation("Do you want to delete the file ?").then(function () {
            var param = {
                url: 'deleteDocument',
                data: {},
                zenExit: true
            };
            _this.httpProvider.http.commonService(param).subscribe(function (response) {
                if (response && response.status.statusCode == 1) {
                    _this.uploadedDocumentUrl = '';
                }
            });
        }).catch(function () { });
    };
    PersonalDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-personal-details',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\Exit-Module\personal-details\personal-details.html"*/'<!--\n  Generated template for the PersonalDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Personal Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="personal-details">\n    <div class="personal-section">\n      <!-- <img src="assets/imgs/Person.png" class="imgStyle"> -->\n      <img src="assets/ZenExit-Imgs/outerImg.svg" style="height: 100px;">\n      <img class="userPic" [src]="profileData">\n    </div>\n    <div class="personal-details-container">\n      <div class="textPadding fontWeight">{{personalDetailedData?.userName}}</div>\n      <div class="textPadding">Designation &nbsp; &nbsp;&nbsp; :&nbsp;{{personalDetailedData?.designation}}</div>\n      <div class="textPadding">Employee ID &nbsp; &nbsp;:&nbsp;{{personalDetailedData?.userId}}</div>\n      <div class="textPadding">Geo HR Name : {{personalDetailedData?.geoARName}}</div>\n    </div>\n  </div>\n\n  <div class="detailed-list">\n    <div class="detailed-list-note">\n      <span class="annexture-flex-note">\n        <img class="imgMrgin" src="assets/ZenExit-Imgs/papers.svg">\n        <span class="fontStyle">\n          Note: <span style="font-weight: 300;">{{personalDetailedData?.userProfileNote}}</span>\n        </span>\n        \n      </span> </div>\n    <ion-list>\n      <ion-item class="itemPadding" *ngFor="let userIfo of personalDetailedData?.userPersonalInfo">\n        <ion-icon class="icon-margin" item-start><img [src]="userIfo?.icon"></ion-icon>\n        <p>{{userIfo?.key}}</p>\n        <p>{{userIfo?.value}}</p>\n        <!-- <ion-icon name="rose" item-end></ion-icon> -->\n      </ion-item>\n    </ion-list>\n    <div class="annexture" *ngIf="personalDetailedData?.isAnnexureEnable">\n      <div class="annexture-container border-btm">\n        <span class="annexture-flex">\n          <span class="imgMrgin"> <img src="assets/ZenExit-Imgs/papers.svg"></span>\n          <span class="fontColor">Exit Annexure</span>\n        </span>\n        <span class="annexture-download" (click)="downloadDoc(personalDetailedData?.annexureDocumentUrl)">\n          Download Template\n        </span>\n      </div>\n      <div class="annexture-container">\n        <span class="fontStyle note-width">Note: <span style="font-weight: 300;">Please upload and submit the signed copy of the annexure.</span> </span>\n        <span class="annexture-upload" (click)="uploadDoc()">\n          Upload and Submit\n        </span>\n      </div>\n      <div class="annexture-container" *ngIf="uploadedDocumentUrl">\n        <span class="annexture-flex">\n          <span class="imgMrgin"><img src="assets/ZenExit-Imgs/papers.svg"></span>\n          <span class="fontColor">Exit-Annexure</span>\n        </span>\n        <span>\n          <span class="fileMargin" (click)="downloadDoc(uploadedDocumentUrl)"><img\n              src="assets/ZenExit-Imgs/view.svg"></span>\n          <span class="fileMargin" (click)="removeDoc()"><img src="assets/ZenExit-Imgs/delete.svg"></span>\n        </span>\n      </div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\Exit-Module\personal-details\personal-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */],
            __WEBPACK_IMPORTED_MODULE_4__providers_download_download__["a" /* Download */], __WEBPACK_IMPORTED_MODULE_5__providers_attachment_attachment__["a" /* Attachment */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_7__providers_http_angular_http_angular__["a" /* HttpAngularProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_data_data__["a" /* Data */]])
    ], PersonalDetailsPage);
    return PersonalDetailsPage;
}());

//# sourceMappingURL=personal-details.js.map

/***/ })

});
//# sourceMappingURL=140.js.map