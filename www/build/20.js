webpackJsonp([20],{

/***/ 1441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProfilePageModule", function() { return NewProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_profile__ = __webpack_require__(1863);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_linky__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_preloader_directive__ = __webpack_require__(1864);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NewProfilePageModule = /** @class */ (function () {
    function NewProfilePageModule() {
    }
    NewProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__new_profile__["a" /* NewProfilePage */],
                __WEBPACK_IMPORTED_MODULE_4__img_preloader_directive__["a" /* ImagePreloaderDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_profile__["a" /* NewProfilePage */]),
                __WEBPACK_IMPORTED_MODULE_3_ngx_linky__["a" /* LinkyModule */]
            ],
        })
    ], NewProfilePageModule);
    return NewProfilePageModule;
}());

//# sourceMappingURL=new-profile.module.js.map

/***/ }),

/***/ 1863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_digital_id_card_digital_id_card__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_calender_model_calender_model__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Subscription__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_constants__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_app_version__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_browser_tab__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_http_angular_http_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_crop__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_user_asset_details_modal_user_asset_details_modal__ = __webpack_require__(786);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_direct_reporties_direct_reporties__ = __webpack_require__(790);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var NewProfilePage = /** @class */ (function () {
    function NewProfilePage(navCtrl, navParams, httpProvider, utility, modalCtrl, popoverCtrl, store, appversion, browserTab, platform, camera, httpAngularProvider, actionSheetController, file, crop) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.utility = utility;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        this.store = store;
        this.appversion = appversion;
        this.browserTab = browserTab;
        this.platform = platform;
        this.camera = camera;
        this.httpAngularProvider = httpAngularProvider;
        this.actionSheetController = actionSheetController;
        this.file = file;
        this.crop = crop;
        this.selectedTab = 0;
        this.profileUrl = "getUserProfile";
        this.bloodGroups = [];
        this.hideSwipeMiss = true;
        this.userProfileDetails = {
            'key': 'Records'
        };
        this._roleListener = new __WEBPACK_IMPORTED_MODULE_8_rxjs_Subscription__["Subscription"]();
        this._notificationListener = new __WEBPACK_IMPORTED_MODULE_8_rxjs_Subscription__["Subscription"]();
        this._profileListener = new __WEBPACK_IMPORTED_MODULE_8_rxjs_Subscription__["Subscription"]();
        this.croppedImagepath = "";
        // private isLoading = false;
        this.uploadImageUrl = 'uploadProfilePic';
        this.showUploadedImg = false;
        this.imagePickerOptions = {
            maximumImagesCount: 1,
            quality: 50
        };
        this.userId = this.navParams.get('userId');
        this.profileType = this.navParams.get('profileType');
        this.fromNotification = this.navParams.get('fromNotification');
        this.fromHomeSkills = this.navParams.get('formSkills');
        this.fromZeno = this.navParams.get('fromZeno');
        this.resolve = this.navParams.get('resolve');
        if (this.navParams.get('paramsFromChatBot')) {
            var paramsFromChatBot = this.navParams.get('paramsFromChatBot');
            this.userId = paramsFromChatBot.userId;
            this.profileType = paramsFromChatBot.profileType;
            // this.fromZeno = paramsFromChatBot.fromZeno
            // this.fromZenoslideTo = paramsFromChatBot.slideTo
            this.actionName = paramsFromChatBot.actionName;
        }
        if (this.profileType == undefined || this.profileType == null) {
            this.profileType = "interaction";
        }
    }
    NewProfilePage.prototype.ionViewDidLoad = function () { };
    NewProfilePage.prototype.ngOnInit = function () {
    };
    NewProfilePage.prototype.ionViewWillEnter = function () {
        this.getRole();
        this.getProfileDetails();
    };
    NewProfilePage.prototype.getRole = function () {
        var _this = this;
        this._roleListener = this.store.select(__WEBPACK_IMPORTED_MODULE_7__store__["_84" /* getRole */]).subscribe(function (role) {
            _this.role = role;
        });
    };
    NewProfilePage.prototype.slideChanged = function () {
        if (this.slides.isEnd()) {
            this.slides.lockSwipeToNext(true);
        }
        else if (!this.slides.isEnd()) {
            this.slides.lockSwipeToNext(false);
        }
        var currentIndex = this.slides.getActiveIndex();
        this.selectedTab = currentIndex;
    };
    NewProfilePage.prototype.setSlide = function (index) {
        if (this.slides) {
            this.slides.slideTo(index, 500);
        }
    };
    NewProfilePage.prototype.getProfileDetails = function () {
        var _this = this;
        this.utility.updateLoader(true);
        if (this.utility.platformAvailable()) {
            this.appversion.getVersionNumber().then(function (response) {
                ////console.log(response)
                var profile = {
                    url: _this.profileUrl,
                    data: {
                        'userId': _this.userId,
                        'type': _this.profileType,
                        'role': _this.role,
                        'versionNo': response
                    },
                    associate: true
                };
                _this.httpProvider.http.commonService(profile).subscribe(function (response) {
                    if (response) {
                        _this.utility.updateLoader(false);
                        _this.profileDetails = response['details'];
                        _this.userProfileDetails = response['details'].userProfiledetails;
                        setTimeout(function () {
                            if (_this.slides && _this.fromNotification) {
                                _this.slides.slideTo(2, 0);
                                _this.openCalenderModel(_this.userProfileDetails[2].value[0]);
                            }
                            else if (_this.slides && _this.fromHomeSkills) {
                                _this.slides.slideTo(3, 0);
                                // ;
                                // this.openCalenderModel(this.userProfileDetails[2].value[0]);
                            }
                            else if (_this.slides && _this.fromZeno) {
                                _this.slides.slideTo(3, 0);
                            }
                            else if (_this.slides && _this.actionName == 'getAssetDetails') {
                                _this.slides.slideTo(2, 0);
                            }
                        }, 500);
                        // setTimeout(() => {
                        //   if (this.slides && this.fromHomeSkills) {
                        //     this.slides.slideTo(3, 0);
                        //     // ;
                        //     // this.openCalenderModel(this.userProfileDetails[2].value[0]);
                        //   }
                        // }, 1000);
                        // setTimeout(() => {
                        //   if (this.slides && this.fromZeno) {
                        //     this.slides.slideTo(3, 0);
                        //   }
                        // }, 100);
                    }
                }, function (error) {
                    _this.utility.updateLoader(false);
                });
            });
        }
        else {
            var profile = {
                url: this.profileUrl,
                data: {
                    'userId': this.userId,
                    'type': this.profileType,
                    'role': this.role,
                    'versionNo': __WEBPACK_IMPORTED_MODULE_9__constants_constants__["a" /* Constants */].new_version
                },
                associate: true
            };
            this.httpProvider.http.commonService(profile).subscribe(function (response) {
                if (response) {
                    _this.utility.updateLoader(false);
                    _this.profileDetails = response['details'];
                    _this.userProfileDetails = response['details'].userProfiledetails;
                    setTimeout(function () {
                        // if (this.slides && this.fromNotification) {
                        //   this.slides.slideTo(2, 0);
                        //   this.openCalenderModel(this.userProfileDetails[2].value[0]);
                        // }
                        if (_this.slides && _this.fromNotification) {
                            _this.slides.slideTo(2, 0);
                            _this.openCalenderModel(_this.userProfileDetails[2].value[0]);
                        }
                        else if (_this.slides && _this.fromHomeSkills) {
                            _this.slides.slideTo(3, 0);
                            // ;
                            // this.openCalenderModel(this.userProfileDetails[2].value[0]);
                        }
                        else if (_this.slides && _this.fromZeno) {
                            _this.slides.slideTo(3, 0);
                        }
                        else if (_this.slides && _this.actionName == 'getAssetDetails') {
                            _this.slides.slideTo(2, 0);
                        }
                    }, 500);
                    //   setTimeout(() => {
                    //     if (this.slides && this.fromHomeSkills) {
                    //       this.slides.slideTo(3, 0);
                    //       // ;
                    //       // this.openCalenderModel(this.userProfileDetails[2].value[0]);
                    //     }
                    //   }, 1000);
                    //   setTimeout(() => {
                    //     if (this.slides && this.fromZeno) {
                    //       this.slides.slideTo(3, 0);
                    //     }
                    //   }, 100);
                }
            }, function (error) {
                _this.utility.updateLoader(false);
            });
        }
    };
    NewProfilePage.prototype.openCalenderModel = function (tempProfileItem) {
        if (tempProfileItem.key == 'Swipe Miss') {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_calender_model_calender_model__["a" /* CalenderModel */], {
                // profileItem: tempProfileItem,
                dataParams: {
                    swipeMissDates: tempProfileItem.dates,
                    type: 'profile'
                }
            }, {
                cssClass: 'calendermodel',
            });
            modal.present();
        }
        else {
        }
    };
    NewProfilePage.prototype.formatDate = function (obj) {
        return this.utility.formatDate(obj);
    };
    NewProfilePage.prototype.checkEditableField = function (values) {
        var editableFields = values.filter(function (item) {
            if (item.isEditable == true) {
                return item;
            }
        });
        if (editableFields.length > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    NewProfilePage.prototype.action = function (data) {
        if (data.type == 'email' && data.value != "") {
            this.utility.openEmailClient(data.value);
        }
    };
    // gotToEditProfile(value: any) {
    //   
    //   let type: string = null;
    //   if (value.type == 'experience') {
    //     type = 'experience';
    //     this.navCtrl.push('EditProfilePage', {
    //       'type': type,
    //       'hasRequested': value.hasRequested,
    //       'hasRequestedShowMsg': value.hasRequestedShowMsg
    //     });
    //   } else {
    //     type = 'personal';
    //     let selectedfield = {
    //       'section': type,
    //       'formMessage': value.hasRequestedShowMsg,
    //       'isAvailableForFinalSubmit': value.hasRequested
    //     }
    //     this.navCtrl.push('ObAddDetailsPage', { 'selectedField': selectedfield });
    //   }
    // }
    /**
     * Edit profile click along with parameters pushing forward for experience data.
     * parameter isComingFromProfile separates this for only profile editors.
     * @param value
     */
    NewProfilePage.prototype.gotToEditProfile = function (value) {
        var experienceData;
        value.value.filter(function (item) {
            if (item.type == 'experience') {
                experienceData = item;
            }
        });
        var selectedfield = {
            'section': 'personal',
            'formMessage': value.hasRequestedShowMsg,
            'isAvailableForFinalSubmit': value.hasRequested,
            'isComingFromProfile': true,
            'experienceData': experienceData
        };
        this.navCtrl.push('ObAddDetailsPage', { 'selectedField': selectedfield });
    };
    NewProfilePage.prototype.call = function (number) {
        this.utility.callNumber(number);
    };
    NewProfilePage.prototype.goToMySkills = function (data, add) {
        var _this = this;
        var skillsData = {
            "section": "skills",
            "skillTypeId": data.skillTypeId,
            "competencyElementId": data.competencyElementId,
            "objectVersionId": null,
            "userSkillChangeRequestId": data.userSkillChangeRequestId,
            "from": data.from,
            "skillId": data.skillId,
            "mode": add,
            "isSkillAvailableForSubmit": data.hasRequested
        };
        if (data.hasRequested) {
            this.utility.confirmationMsgForSkills(data.hasRequestedShowMsg).then(function () {
                _this.navCtrl.push('ObAddDetailsPage', { 'selectedField': skillsData });
            });
        }
        else {
            this.navCtrl.push('ObAddDetailsPage', { 'selectedField': skillsData });
        }
    };
    NewProfilePage.prototype.presentPopover = function (myEvent) {
        var popover = this
            .popoverCtrl
            .create('PopoverPage', { 'type': 'profile' });
        popover.present({ ev: myEvent });
    };
    NewProfilePage.prototype.ionViewWillLeave = function () {
        this._roleListener.unsubscribe();
        this._profileListener.unsubscribe();
        this._notificationListener.unsubscribe();
        if (this.resolve) {
            this.resolve();
        }
    };
    NewProfilePage.prototype.goToMail = function (data) {
        this.utility.openEmailClient(data);
    };
    NewProfilePage.prototype.skillUpdationMessage = function (data, $event) {
        $event.stopPropagation();
        this.utility.presentAlert(data.toolTip, data.key);
    };
    NewProfilePage.prototype.viewResume = function (resumeUrl) {
        var _this = this;
        //console.log(resumeUrl);
        if (this.platform.is('ios')) {
            this.browserTab.isAvailable().then(function (isAvailable) {
                if (isAvailable) {
                    _this.browserTab.openUrl(resumeUrl);
                }
                else {
                    _this.utility.openWithSystemBrowser(resumeUrl);
                }
            })
                .catch(function () {
                _this.utility.openWithSystemBrowser(resumeUrl);
            });
        }
        else {
            this.utility.openAsset(resumeUrl);
        }
    };
    NewProfilePage.prototype.openDigitalIDModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__components_digital_id_card_digital_id_card__["a" /* DigitalIdCardComponent */], {
            // profileItem: tempProfileItem,
            dataParams: {
                // swipeMissDates: tempProfileItem.dates,
                role: this.role,
                userId: this.userId
            }
        }, {
            cssClass: 'digitalIdCard-modalCss',
        });
        modal.present();
    };
    NewProfilePage.prototype.uploadProfilepic = function () {
        this.selectImage();
    };
    NewProfilePage.prototype.selectImage = function () {
        var _this = this;
        // alert("click")
        var actionSheet = this.actionSheetController.create({
            title: "Select Image source",
            buttons: [{
                    text: 'Load from Library',
                    handler: function () {
                        _this.pickImage(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.pickImage(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    NewProfilePage.prototype.pickImage = function (sourceType) {
        var _this = this;
        console.log("pick image", sourceType);
        var options = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            console.log(" getPicture", imageData);
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            // let base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.cropImage(imageData);
        }, function (err) {
            // Handle error
            console.log("error", err);
        });
    };
    NewProfilePage.prototype.cropImage = function (fileUrl) {
        var _this = this;
        this.crop.crop(fileUrl, { quality: 50, targetHeight: 200, targetWidth: 200 })
            .then(function (newPath) {
            console.log("event on done", newPath);
            if (!_this.utility.isEmptyOrNullOrUndefined(newPath)) {
                _this.croppedImagepath = newPath.split('?')[0];
                // alert("pic captured")
                _this.uploadFile();
            }
            // this.showCroppedImage(newPath.split('?')[0])
        }, function (error) {
            if (error.code == "userCancelled") {
                console.log("error", error);
            }
            else {
                alert('Error in showing image' + error.message);
            }
            _this.utility.updateLoader(false);
            // this.isLoading = false;
            // alert('Error cropping image' + error);
        });
    };
    NewProfilePage.prototype.uploadFile = function () {
        var _this = this;
        console.log("response ", this.croppedImagepath);
        var fileURI = this.croppedImagepath;
        this.utility.updateLoader(true);
        var formData = new FormData();
        var uploadDocs = {
            url: this.uploadImageUrl,
            data: formData,
            associate: true
        };
        this.file.resolveLocalFilesystemUrl(fileURI).then(function (entry) {
            entry.file(function (file) {
                // let s = this.getFileSize(file.size)
                // if (s <= 5.00) {
                var fileReader = new FileReader();
                fileReader.readAsArrayBuffer(file);
                fileReader.onloadend = function (ev) {
                    var fileType = file.type;
                    // if (fileType != "image/gif") {
                    var imgBlob = new Blob([fileReader.result], { type: fileType });
                    var fileExt = fileType.substring(fileType.indexOf('/') + 1);
                    var fileName = new Date().getTime();
                    formData.append("file", imgBlob, fileName + "." + fileExt);
                    // formData.append("kraId", this.KRADetails.kraStatusList[this.kraId].kraId)
                    // formData.append("subKraId", this.KRADetails.kraStatusList[this.kraId].subKraId)
                    // formData.append("userId", this.KRADetails.userId)
                    // formData.append("processType", this.kraType)
                    /**
                     * Upload documents service call : UploadKRADatials
                     */
                    console.log("file ", uploadDocs);
                    _this.httpAngularProvider.multimediaService(uploadDocs).subscribe(function (response) {
                        _this.utility.updateLoader(false);
                        console.log("response ", response);
                        if (response) {
                            if (response.status.statusCode == 1) {
                                _this.utility.presentAlert("Photo uploaded successfully.");
                                _this.showUploadedImg = true;
                                _this.newIMagePath = response['details'].profilePicUrl;
                                // this.getProfileDetails();
                            }
                        }
                    });
                    // } else {
                    //   this.utility.presentAlert("Please upload a photograph/file.")
                    //   this.utility.updateLoader(false)
                    // }
                };
                // } else {
                //   this.utility.presentAlert("Please upload a photograph less than 5mb.")
                //   this.utility.imageLoader(false)
                // }
            });
        }).catch(function (error) {
            _this.utility.updateLoader(false);
            console.log("error", error);
        });
    };
    NewProfilePage.prototype.openAssetDetailsModal = function (clickedTitle) {
        if (clickedTitle == 'assetCount' || clickedTitle == 'visaCount') {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_16__components_user_asset_details_modal_user_asset_details_modal__["a" /* UserAssetDetailsModalComponent */], {
                // profileItem: tempProfileItem,
                dataParams: {
                    // swipeMissDates: tempProfileItem.dates,
                    // role: this.role,
                    // userID: this.userId,
                    // profileType: this.profileType,
                    // versionNo: "11.0.0"
                    requestName: clickedTitle
                }
            }, {
                cssClass: 'asset-details-modal',
            });
            modal.present();
        }
    };
    NewProfilePage.prototype.openZendeavorProfile = function (data) {
        if (data.type) {
            var modalCtrl = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_17__components_direct_reporties_direct_reporties__["a" /* DirectReportiesComponent */], { 'type': data.type, 'userId': this.userId, 'wholedata': data });
            modalCtrl.present();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["D" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["D" /* Slides */])
    ], NewProfilePage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('input'),
        __metadata("design:type", Object)
    ], NewProfilePage.prototype, "bloodGroupInput", void 0);
    NewProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-new-profile',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\new-profile\new-profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Profile</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce class="contentBg">\n  <div>\n    <ion-card class="profileBgImg">\n      <div>\n        <div *ngIf="profileDetails" class="flex width100per padding8">\n          <div class="profileContainer">\n            <div class="flex-dir-col-center positionRelative">\n              <img *ngIf="!showUploadedImg" class="profileImg" [img-preloader]="profileDetails?.profilePic"\n                onErrorImage="assets/imgs/dummy-profile.png" defaultImage="assets/imgs/dummy-profile.png"\n                (click)="profileDetails?.isProfilePicUpdate ? uploadProfilepic() : false" tappable />\n              <!-- show immediately when user uploads new profile photo -->\n              <img *ngIf="showUploadedImg" class="profileImg" [src]="newIMagePath"\n                onErrorImage="assets/imgs/dummy-profile.png" defaultImage="assets/imgs/dummy-profile.png"\n                (click)="profileDetails?.isProfilePicUpdate ? uploadProfilepic() : false" tappable />\n              <!-- show edit icon for uploading profile pic -->\n              <div class="editImage-icon" (click)="uploadProfilepic()" *ngIf="profileDetails?.isProfilePicUpdate"\n                tappable>\n                <!-- <img class="editprofileImg" src="assets/imgs/Edit.svg" /> -->\n                <ion-icon class="pencilIcon-profile" md="md-create"></ion-icon>\n              </div>\n              <div class="center margin-top8">\n                <img class="iconID" src="assets/imgs/ID icon.svg" />\n                <div class="font0-9 text-white">{{profileDetails?.userId}}</div>\n              </div>\n            </div>\n          </div>\n          <div class="introContainer">\n\n            <div class="introSec">\n\n              <div class="line-height">\n\n                <div class="text-white font1em">{{profileDetails?.userName}}</div>\n\n                <div *ngIf="profileDetails?.designation" class="flex padding4 al-item-cen">\n                  <div style="width: 10%;"><img class="iconID" src="assets/imgs/designation.svg" /></div>\n                  <div class="font0-9 text-white  padding-left10 ">{{profileDetails?.designation}}</div>\n                </div>\n\n                <div *ngIf="profileDetails?.emailId" class="flex al-item-cen"\n                  (click)="goToMail(profileDetails?.emailId)">\n                  <div style="width: 10%;"><img class="mailD" src="assets/imgs/mail id.svg" /></div>\n                  <div class="font0-9 text-white padding-left10 mailEllipsis">{{profileDetails?.emailId}}</div>\n                </div>\n\n                <div *ngIf="profileDetails?.personalNumber" class="flex al-item-cen"\n                  (click)="call(profileDetails?.personalNumber)">\n                  <div class="width10">\n                    <img class="mailD" src="assets/imgs/personal no.svg" />\n                  </div>\n                  <div class="font0-9 text-white padding-left10 width90">{{profileDetails?.personalNumber}}</div>\n                </div>\n\n\n                <div *ngIf="profileDetails?.myExtension" class="flex al-item-cen"\n                  (click)="call(profileDetails?.myExtension)">\n                  <div class="width10">\n                    <img class="mailD" src="assets/imgs/office no.svg" />\n                  </div>\n                  <div class="font0-9 text-white padding-left10 width90">{{profileDetails?.myExtension}}</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </ion-card>\n  </div>\n\n  <div>\n    <ion-slides id="slides" #ionSlides (ionSlideWillChange)="slideChanged()" pager>\n      <ion-slide *ngFor="let profiles of profileDetails?.userProfiledetails;index as j">\n        <div class="slideContainer">\n          <div class="cardHeading">\n            <div color="black_20">{{profiles.key}}</div>\n            <div class="" *ngIf="profiles.key == \'Personal\' ">\n              <img class="" src="assets/imgs/Edit.svg" (click)="gotToEditProfile(profiles)" />\n            </div>\n          </div>\n          <div class="keyBorder"></div>\n\n          <ion-card *ngIf="profiles.key !=\'Records\' && profiles.key !=\'Skills\' && profiles.key !=\'ZenDeavor Profile\'"\n            class="profile-details-card" text-left>\n            <div *ngFor="let profileItem of profiles.value" [ngSwitch]="profileItem.key">\n\n              <div [class.isRequested]="profileItem.hasRequested">\n                <div class="infoContent width100per">\n                  <div class="width25">\n                    <img class="infoImg" [src]="profileItem.icon" />\n                  </div>\n                  <div class="width74" (click)="action(profileItem)">\n                    <div class="column">\n                      <div class="text-grey font0-9">{{profileItem.key}}</div>\n\n                      <span class="text-black  font1em" *ngSwitchCase="\'email\'"\n                        [innerHTML]="profileItem.value | linky"></span>\n\n                      <span [ngClass]="profileItem.hasRequested ?\'isRequested\' : \'text-black\'" class="font1em"\n                        *ngIf="profileItem.type == \'date\'">{{formatDate(profileItem.value)\n                        | date}}</span>\n\n                      <span class="font1em text-black" style="text-decoration: underline; color:#0E7AC7;"\n                        (click)="viewResume(profileItem.value)" *ngIf="profileItem.key == \'Resume\'"> View Resume</span>\n\n                      <span *ngSwitchDefault><span\n                          *ngIf="profileItem.type != \'date\' && profileItem.key != \'Resume\'">{{profileItem.value\n                          || \'-\'}}</span></span>\n                    </div>\n                  </div>\n                  <div class="width8">\n                    <p float-right *ngIf="profileItem.type==\'call\' && profileItem.value !=\'\' && profileItem.value !=\'-\'"\n                      (click)="call(profileItem.value)">\n                      <ion-icon class="call-icon" name="call"></ion-icon>\n                    </p>\n                    <p float-right *ngIf="profileItem.showArrow" (click)="openDigitalIDModal()">\n                      <ion-icon class="call-icon" name="ios-arrow-forward"></ion-icon>\n                    </p>\n                  </div>\n                </div>\n                <div class="border-bottom"></div>\n              </div>\n            </div>\n            <div *ngFor="let projectList of profiles.projectList ; index as i">\n\n              <div *ngFor="let projectDetails of projectList.projectFieldList">\n                <div class="infoContent width100per" style="margin-top: 10px;">\n                  <div class="width25">\n                    <img *ngIf="projectDetails.key == \'Project\'" class="infoImg" [src]="projectDetails.icon" />\n                  </div>\n                  <div class="width74">\n                    <div class="column">\n                      <div class="text-grey font0-9">{{projectDetails.key}}</div>\n                      <span>{{projectDetails.value}}</span>\n                    </div>\n\n                  </div>\n                </div>\n\n              </div>\n              <div *ngIf="profiles.projectList.length > i+1" class="border-bottom profileMargin"></div>\n            </div>\n          </ion-card>\n          <!-- records code starts -->\n\n          <ion-card padding *ngIf="profiles.key==\'Records\'" class="profile-details-card card-contents" text-left>\n\n            <div *ngFor="let profileItem of profiles.value" [ngSwitch]="profileItem.type">\n\n              <div class="displayItems" [class.isRequested]="profileItem.hasRequested">\n\n\n                <div class="width25">\n                  <img class="infoImg" [src]="profileItem.icon" />\n                </div>\n                <div class="width70">\n                  <div class="text-grey font0-9" style="font-size: 1em">{{profileItem.key}}</div>\n                  <div class="width100  text-black  font1em" (click)="action(profileItem)">\n\n                    <span *ngSwitchCase="\'email\'" [innerHTML]="profileItem.value | linky"></span>\n\n\n\n                    <span class="text-black  font1em" [ngClass]="{\'myclass\':profileItem.id==23}"\n                      (click)="openCalenderModel(profileItem)">{{profileItem.value\n                      || \'-\'}}\n                      <ion-icon class="padding-calender" name="calendar" *ngIf="profileItem.id==\'23\'"\n                        [ngClass]="{\'display\':profileItem.value==0}">\n                      </ion-icon>\n                    </span>\n\n                    <p float-right *ngIf="profileItem.type==\'call\' && profileItem.type !=\'\' && profileItem.value !=\'-\'"\n                      (click)="call(profileItem.value)">\n                      <ion-icon class="call-icon" name="call"></ion-icon>\n                    </p>\n                  </div>\n                </div>\n                <p float-right (click)="openAssetDetailsModal(profileItem.bandWidth)" *ngIf="profileItem.showArrow">\n                  <ion-icon class="call-icon" name="ios-arrow-forward"></ion-icon>\n                </p>\n              </div>\n              <div class="border-bottomRec" style="margin-left: 25%;"></div>\n            </div>\n          </ion-card>\n\n          <!-- Skill slide  -->\n          <ion-card class="profile-details-card card-contents padding8" text-left  *ngIf="profiles.key==\'Skills\'">\n            <div>\n              <div *ngFor="let skillItems of profiles.value">\n                <div style="margin-top: 10px;">\n\n\n                  <div class="skillBg text-grey font0-9">\n                    <div style="width: 24%;"><img class="infoImg" [src]="skillItems.icon" /></div>\n                    <div style="width: 60%; display: flex; justify-content: left; align-items: center;">\n                      {{skillItems.key}}\n\n                      <img class="skillUpdateIcon" *ngIf="skillItems.toolTip"\n                        (click)="skillUpdationMessage(skillItems,$event)" src="assets/imgs/new_information.svg" />\n\n                    </div>\n                    <div *ngIf="!skillItems.hasRequested" (click)="goToMySkills(skillItems,\'add\')" clear item-end\n                      class="skillsBtn"><img class="addImg" src="assets/imgs/Add_skill.svg" /></div>\n                  </div>\n\n                  <!-- messege to show when no primary/secondary skills added -->\n                  <div class="skillMsg" *ngIf="!skillItems.value">No {{skillItems.key}} added</div>\n\n                  <ion-row *ngFor="let skillDetails of skillItems.value index as i" (click)="goToMySkills(skillDetails)"\n                    [class.isRequested]="skillDetails.hasRequested" class="skillsBtm">\n\n                    <ion-row>\n                      <ion-col class="font1em">{{skillDetails.key}}</ion-col>\n                    </ion-row>\n                    <!-- <div class="clearfix"></div> -->\n\n                    <ion-row class="skillsDispFlex">\n                      <ion-col *ngIf="skillItems.key!= \'Certification\'"\n                        [class.skillsExpertise]="!skillDetails.hasRequested">\n                        {{skillDetails.value}}</ion-col>\n\n                    </ion-row>\n\n\n                  </ion-row>\n                  <!-- <div class="border-bottomRec"></div> -->\n                </div>\n              </div>\n            </div>\n          </ion-card>\n\n          <ion-card  *ngIf="profiles.key==\'ZenDeavor Profile\'" class="profile-details-card card-contents"\n            text-left>\n\n            <div *ngFor="let profileItem of profiles.value" [ngSwitch]="profileItem.type">\n\n              <div class="displayItems" [class.isRequested]="profileItem.hasRequested">\n\n\n                <div class="width25">\n                  <img class="infoImg" [src]="profileItem.icon" />\n                </div>\n                <div class="width70" (click)="openZendeavorProfile(profileItem)">\n                  <div class="text-grey font0-9" style="font-size: 1em">{{profileItem.key}}</div>\n                  <div class="width100  text-black  font1em">\n                    <span class="text-black  font1em">{{profileItem.value|| \'-\'}}\n                    </span>\n                  </div>\n                </div>\n                <p float-right *ngIf="profileItem.showArrow">\n                  <ion-icon class="call-icon" name="ios-arrow-forward"></ion-icon>\n                </p>\n              </div>\n              <div class="border-bottomRec" style="margin-left: 25%;"></div>\n            </div>\n          </ion-card>\n\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\new-profile\new-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["w" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["C" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["b" /* Store */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_app_version__["a" /* AppVersion */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_browser_tab__["a" /* BrowserTab */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["B" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_13__providers_http_angular_http_angular__["a" /* HttpAngularProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_crop__["a" /* Crop */]])
    ], NewProfilePage);
    return NewProfilePage;
}());

//# sourceMappingURL=new-profile.js.map

/***/ }),

/***/ 1864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagePreloaderDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImagePreloaderDirective = /** @class */ (function () {
    function ImagePreloaderDirective() {
    }
    ImagePreloaderDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.finalImage = this.defaultImage;
        this.downloadingImage = new Image();
        this.downloadingImage.onload = function () {
            _this.finalImage = _this.targetSource;
        };
        this.downloadingImage.onerror = function () {
            _this.finalImage = _this.errorImgSource;
        };
        this.downloadingImage.src = this.targetSource;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('img-preloader'),
        __metadata("design:type", String)
    ], ImagePreloaderDirective.prototype, "targetSource", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('defaultImage'),
        __metadata("design:type", String)
    ], ImagePreloaderDirective.prototype, "defaultImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('onErrorImage'),
        __metadata("design:type", String)
    ], ImagePreloaderDirective.prototype, "errorImgSource", void 0);
    ImagePreloaderDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[img-preloader]',
            host: {
                '[attr.src]': 'finalImage'
            }
        }),
        __metadata("design:paramtypes", [])
    ], ImagePreloaderDirective);
    return ImagePreloaderDirective;
}());

//# sourceMappingURL=img-preloader.directive.js.map

/***/ })

});
//# sourceMappingURL=20.js.map