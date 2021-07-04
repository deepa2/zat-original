webpackJsonp([96],{

/***/ 1441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObAddDetailsPageModule", function() { return ObAddDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ob_add_details__ = __webpack_require__(1863);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_formService_form_control_service__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_attachment_attachment__ = __webpack_require__(731);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ObAddDetailsPageModule = /** @class */ (function () {
    function ObAddDetailsPageModule() {
    }
    ObAddDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ob_add_details__["a" /* ObAddDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ob_add_details__["a" /* ObAddDetailsPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__providers_attachment_attachment__["a" /* Attachment */],
                __WEBPACK_IMPORTED_MODULE_3__providers_formService_form_control_service__["a" /* FormControlService */]
            ]
        })
    ], ObAddDetailsPageModule);
    return ObAddDetailsPageModule;
}());

//# sourceMappingURL=ob-add-details.module.js.map

/***/ }),

/***/ 1863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObAddDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_formService_form_control_service__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_attachment_attachment__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ObAddDetailsPage = /** @class */ (function () {
    function ObAddDetailsPage(navCtrl, navParams, store, formBuilder, formCtrlService, attachment, file, utility, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.store = store;
        this.formBuilder = formBuilder;
        this.formCtrlService = formCtrlService;
        this.attachment = attachment;
        this.file = file;
        this.utility = utility;
        this.alertCtrl = alertCtrl;
        this.data = {};
        this.AddDetailsForm = this.formBuilder.group({});
        this.obGroup = this.formBuilder.group({});
        this.wholeDetails = [];
        this._getobData = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__["Subscription"]();
        this._getobUploadData = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__["Subscription"]();
        this._getAddDetailsSubscription = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__["Subscription"]();
        this._addLoadingListener = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__["Subscription"]();
        this._uploadLoadingListener = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__["Subscription"]();
        this._addSuccessListener = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__["Subscription"]();
        this.showForm = false;
        this.showAddOptions = false;
        this.isAvailableForSubmit = false;
        this.isUserProfile = false;
        this.isComingFromProfile = false;
        this.highlightField = null;
        this.isImageLoading = false;
        this.btnDisabled = false;
        this.formData = new FormData();
    }
    ObAddDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.data = this.navParams.get('selectedField');
        console.log('Skill Data', this.data);
        this.resolve = this.navParams.get('resolve');
        this.highlightField = this.navParams.get('highlightField');
        setTimeout(function () {
            _this.highlightField = null;
        }, 5000);
        this.section = this.data.section;
        this.formMessage = this.data.formMessage;
        this.isAvailableForSubmit = this.data.isAvailableForSubmit;
        if (this.section == 'onboarding') {
            if (this.data && this.data.mode != 'add') {
                if (this.data.selectedTab != 0) {
                    this.showAddOptions = true;
                }
            }
            else {
                this.showAddOptions = false;
            }
        }
        if (this.section == "personal" || this.section == "experience") {
            this.isUserProfile = this.data.isAvailableForFinalSubmit;
        }
        if (this.section == 'skills') {
            if (this.data.mode != 'add') {
                this.showAddOptions = true;
            }
            else {
                this.showAddOptions = false;
            }
            this.isSkillDataAvaliable = this.data.isSkillAvailableForSubmit;
        }
        //for showing expeience
        if (this.data.experienceData) {
            this.expLabel = this.data.experienceData.key;
            this.expValue = this.data.experienceData.value;
        }
        this.loading$ = this.store.select(__WEBPACK_IMPORTED_MODULE_3__store__["_68" /* getObAddDetailLoading */]);
        this._addLoadingListener = this.store.select(__WEBPACK_IMPORTED_MODULE_3__store__["X" /* ObAddDetailsSubmitLoading */]).subscribe(function (state) {
            _this.utility.updateLoader(state);
        });
        this._uploadLoadingListener = this.store.select(__WEBPACK_IMPORTED_MODULE_3__store__["_71" /* getObAddDetailsUploadLoading */]).subscribe(function (state) {
            _this.utility.updateLoader(state);
        });
        this._addSuccessListener = this.store.select(__WEBPACK_IMPORTED_MODULE_3__store__["_69" /* getObAddDetailState */]).subscribe(function (data) {
            if (data.submitData) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["W" /* ObAddDetailsResetAction */]());
                _this.utility.presentAlert('Saved successfully').then(function () {
                    _this.navCtrl.pop();
                });
            }
            if (data.deleteData) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["W" /* ObAddDetailsResetAction */]());
                _this.utility.presentAlert('Deleted successfully').then(function () {
                    _this.navCtrl.pop();
                });
            }
        });
        this.getData();
        this.setBackButtonAction();
    };
    ObAddDetailsPage.prototype.setBackButtonAction = function () {
        var _this = this;
        this.navBar.backButtonClick = function () {
            if (_this.obGroup.dirty) {
                _this.utility.presentConfirmation('Do you want to discard your changes?').then(function () {
                    _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["W" /* ObAddDetailsResetAction */]());
                    _this.navCtrl.pop();
                }).catch(function () {
                });
            }
            else {
                _this.navCtrl.pop();
            }
        };
    };
    Object.defineProperty(ObAddDetailsPage.prototype, "obDetails", {
        get: function () {
            return this.obGroup.controls['myprofile'];
        },
        enumerable: true,
        configurable: true
    });
    ObAddDetailsPage.prototype.getData = function () {
        var _this = this;
        var url, data;
        if (this.section == 'onboarding') {
            url = 'getTypeSpecificAllDetails';
            data = this.data;
        }
        else if (this.section == 'experience') {
            url = "getAssociateSingleExperienceData";
            data = this.data;
        }
        if (this.section == 'personal') {
            url = 'getAssociatePersonalData';
            data = {};
        }
        if (this.section == 'skills') {
            url = 'getAssociateSingleSkillDetails';
            data = this.data;
        }
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["F" /* GetObAddDetailAction */](url, this.section, data));
        this._getobData = this.store.select(__WEBPACK_IMPORTED_MODULE_3__store__["_67" /* getObAddDetailEditData */]).subscribe(function (response) {
            if (response) {
                if (_this.section == "personal") {
                    _this.fieldArray = response.persnalInfoDetails;
                    _this.presonalSaveBtn = response.showSubmit;
                }
                if (_this.section == 'experience') {
                    _this.fieldArray = response.responseList;
                }
                if (_this.section == 'onboarding') {
                    _this.fieldArray = response.responseList;
                }
                if (_this.section == 'skills') {
                    _this.fieldArray = response;
                }
                _this.obGroup = _this.formBuilder.group({
                    myprofile: _this.formBuilder.array([])
                });
                _this.obDetails.push(_this.formCtrlService.toFormGroup(_this.fieldArray));
                _this.showForm = true;
            }
        });
        this._getobUploadData = this.store.select(__WEBPACK_IMPORTED_MODULE_3__store__["_70" /* getObAddDetailsUploadData */]).subscribe(function (response) {
            var _a;
            if (response) {
                if (response.details.responseList) {
                    var uploadData_1 = response.details.responseList;
                    var parentKey = uploadData_1.parentBindWith;
                    if (!parentKey) {
                        var key = uploadData_1.bindWith;
                        var profile_formArray = _this.obDetails;
                        var file_formArray = profile_formArray.controls[0].get(key);
                        file_formArray.controls[0].patchValue((_a = {}, _a[key] = uploadData_1.docURL, _a));
                    }
                    else {
                        var key_1 = uploadData_1.bindWith;
                        var profile_formArray = _this.obDetails;
                        var file_formArray = profile_formArray.controls[0].get(parentKey);
                        var controls = file_formArray.controls;
                        controls.forEach(function (control) {
                            if (control.get(key_1)) {
                                control.get(key_1).setValue(uploadData_1.docURL);
                            }
                        });
                    }
                    if (response.status.statusCode == 1) {
                        _this.isImageLoading = false;
                        _this.utility.presentAlert("File uploaded successfully").then(function () {
                            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["_2" /* ObUploadDocumentActionReset */]());
                        });
                    }
                }
            }
        });
    };
    ObAddDetailsPage.prototype.dropDownListChange = function (dropObject) {
        // if(this.fieldArray.)
        if (this.fieldArray[0].fieldType == "checkbox") {
            if (dropObject.isChecked) {
                this.fieldArray[0]['Yes'].map(function (item) {
                    if (item.bindWith == dropObject.bindWith) {
                        //item.lov = dropObject.dropDownValue;
                        item.lov = dropObject.dropDownValue;
                    }
                });
            }
            else {
                this.fieldArray[0]['No'].map(function (item) {
                    if (item.bindWith == dropObject.bindWith) {
                        //item.lov = dropObject.dropDownValue;
                        item.lov = dropObject.dropDownValue;
                    }
                });
            }
        }
        else {
            this.fieldArray.map(function (item) {
                if (item.bindWith == dropObject.bindWith) {
                    item.lov = dropObject.dropDownValue;
                }
                if (dropObject.bindWith == "skillFamilyCode" && item.bindWith == 'skillId') {
                    item.lov = [];
                }
            });
        }
    };
    ObAddDetailsPage.prototype.startFileUpload = function (event) {
        var _this = this;
        if (this.data.mode == 'add') {
            var referenceId = parseInt(this.data.addReferenceId) + 1;
            event.referenceId = referenceId.toString();
        }
        else {
            event.referenceId = parseInt(this.data.referenceId);
        }
        this.attachment.openDocument(event.docType).then(function (response) {
            _this.docList = response;
            _this.uploadFile(event);
        }).catch(function (error) {
        });
    };
    ObAddDetailsPage.prototype.uploadFile = function (params) {
        var _this = this;
        this.utility.imageLoader(true);
        var uploadURL;
        if (this.section == 'onboarding') {
            uploadURL = 'uploadAttachment';
        }
        else if (this.section == 'experience') {
            uploadURL = 'uploadExperienceDocuments';
        }
        if (this.section == 'personal') {
            uploadURL = 'uploadPersonalDocuments';
        }
        if (this.section == 'skills') {
            uploadURL = 'uploadSkillDocuments';
        }
        this.formData = new FormData();
        for (var _i = 0, _a = Object.entries(params); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            var objValue = value;
            //if(objValue){
            this.formData.append(key, objValue);
            //}
        }
        this.file.resolveLocalFilesystemUrl(this.docList).then(function (entry) {
            entry.file(function (file) {
                var s = _this.getFileSize(file.size);
                if (s <= 5.00) {
                    var fileReader_1 = new FileReader();
                    fileReader_1.readAsArrayBuffer(file);
                    fileReader_1.onloadend = function (ev) {
                        var fileType = file.type;
                        if (fileType != "image/gif" && fileType != 'video/mp4') {
                            var imgBlob = new Blob([fileReader_1.result], { type: fileType });
                            var fileExt = fileType.substring(fileType.indexOf('/') + 1);
                            var fileName = new Date().getTime();
                            _this.formData.append('file', imgBlob, fileName + "." + fileExt);
                            _this.utility.imageLoader(false);
                            _this.isImageLoading = true;
                            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["_1" /* ObUploadDocumentAction */](uploadURL, _this.section, _this.formData));
                        }
                        else {
                            _this.isImageLoading = false;
                            _this.utility.presentAlert("Please upload a photograph/file.");
                            _this.utility.imageLoader(false);
                        }
                    };
                }
                else {
                    _this.isImageLoading = false;
                    _this.utility.presentAlert("Please upload a photograph less than 5mb.");
                    _this.utility.imageLoader(false);
                }
            });
        }).catch(function (error) {
            _this.isImageLoading = false;
        });
    };
    ObAddDetailsPage.prototype.markFormGroupTouched = function (formGroup) {
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
        });
    };
    ObAddDetailsPage.prototype.save = function (form) {
        var _this = this;
        var url, overallItems = [], overallObject;
        Object.keys(form.controls)
            .forEach(function (key) {
            var currentControl = form.controls[key].controls;
            currentControl.forEach(function (item) {
                Object.values(item.controls).forEach(function (fromArray) {
                    // if (fromArray.controls[0].status != 'DISABLED') {
                    if (_this.section == 'personal' && fromArray.controls[0].dirty && fromArray.controls[0].status != 'DISABLED') {
                        overallItems.push(fromArray.controls[0].value);
                    }
                    var formControls = fromArray.controls;
                    formControls.forEach(function (item, j) {
                        _this.markFormGroupTouched(fromArray.controls[j]);
                        if (_this.section != 'personal') {
                            overallItems.push(fromArray.controls[j].value);
                        }
                    });
                    // }
                });
                overallObject = Object.assign.apply(Object, [{}].concat(overallItems.flat()));
            });
        });
        if (form.valid) {
            if (this.section == 'onboarding') {
                url = 'submitOnboardingDetails';
                if (this.data && this.data.mode == 'add') {
                    overallObject.referenceId = parseInt(this.data.addReferenceId) + 1;
                }
                else {
                    overallObject.referenceId = this.data.referenceId;
                }
                overallObject.type = this.data.type;
            }
            else if (this.section == 'experience') {
                url = "updateAssociateExperienceData";
                if (this.data && this.data.mode == 'add') {
                    overallObject.experienceId = parseInt(this.data.addReferenceId) + 1;
                }
                else {
                    overallObject.experienceId = this.data.experienceId;
                }
            }
            if (this.section == 'personal') {
                url = 'updateAssociatePersonalData';
            }
            if (this.section == 'skills') {
                url = 'updateAssociateSkills';
            }
            if (Object.keys(overallObject).length > 0) {
                var alert_1 = this.alertCtrl.create({
                    message: 'Do you want to save the data ?',
                    enableBackdropDismiss: false,
                    buttons: [
                        {
                            text: 'No',
                            role: 'no',
                            handler: function () {
                            }
                        },
                        {
                            text: 'Yes',
                            handler: function () {
                                // previously only one service call for submitting the data
                                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["V" /* ObAddDataAction */](url, _this.section, overallObject));
                                // this.navCtrl.pop();
                                //two apis called on save click for saving details through rejected documents.
                                /* let  urlRejected: string = "getRejectedDocumentDashboard";
                                this.store.dispatch(new fromStore.RejectedDocsAction(urlRejected)) */
                            }
                        }
                    ],
                });
                alert_1.present();
            }
            else {
                this.utility.presentAlert("Please update your details to save the form.");
            }
            /*  this.store.dispatch(new fromStore.ObAddDataAction(url, this.section, overallObject)); */
        }
    };
    ObAddDetailsPage.prototype.ionViewWillLeave = function () {
        this._getobData.unsubscribe();
        this._getobUploadData.unsubscribe();
        this._addSuccessListener.unsubscribe();
        this._addLoadingListener.unsubscribe();
        this._getAddDetailsSubscription.unsubscribe();
        this._uploadLoadingListener.unsubscribe();
        if (this.resolve) {
            this.resolve();
        }
    };
    ObAddDetailsPage.prototype.removeItem = function () {
        var _this = this;
        this.utility.presentConfirmation('Do you want to delete?', 'Confirmation').then(function () {
            var url = 'deleteInfo';
            var params = {
                "type": _this.data.type,
                "referenceId": _this.data.referenceId
            };
            if (_this.data.mode == 'add') {
                params.referenceId = parseInt(_this.data.addReferenceId) + 1;
            }
            else {
                params.referenceId = _this.data.referenceId;
            }
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["Y" /* ObDeleteDataAction */](url, params));
        });
    };
    ObAddDetailsPage.prototype.getFileSize = function (bytes) {
        if (bytes == 0)
            return 'n/a';
        else {
            var num = (bytes / (Math.pow(1024, 2))).toFixed(2);
            return parseFloat(num);
        }
    };
    ObAddDetailsPage.prototype.removeSkilss = function (form) {
        var _this = this;
        var overallItems = [], overallObject;
        var url = 'updateAssociateSkills';
        var profile_formArray = this.obDetails;
        var file_formArray = profile_formArray.controls[0].get('hrmsStatus');
        file_formArray.controls[0].patchValue({ 'hrmsStatus': "Delete" });
        Object.keys(form.controls)
            .forEach(function (key) {
            var currentControl = form.controls[key].controls;
            currentControl.forEach(function (item) {
                Object.values(item.controls).forEach(function (fromArray) {
                    //if (fromArray.controls[0].status != 'DISABLED') {
                    if (_this.section == 'personal' && fromArray.controls[0].dirty) {
                        overallItems.push(fromArray.controls[0].value);
                    }
                    var formControls = fromArray.controls;
                    formControls.forEach(function (item, j) {
                        //this.markFormGroupTouched(fromArray.controls[j]);
                        if (_this.section != 'personal') {
                            overallItems.push(fromArray.controls[j].value);
                        }
                    });
                    // }
                });
                overallObject = Object.assign.apply(Object, [{}].concat(overallItems.flat()));
                var alert = _this.alertCtrl.create({
                    message: 'Do you want to delete your skill data ?',
                    enableBackdropDismiss: false,
                    buttons: [
                        {
                            text: 'No',
                            role: 'no',
                            handler: function () {
                            }
                        },
                        {
                            text: 'Yes',
                            handler: function () {
                                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["V" /* ObAddDataAction */](url, _this.section, overallObject));
                            }
                        }
                    ],
                });
                alert.present();
            });
        });
    };
    ObAddDetailsPage.prototype.toggleBtn = function (value) {
        console.log(value);
        this.btnDisabled = value;
    };
    /**
     *New method for total experience click navigation */
    ObAddDetailsPage.prototype.goToEditExp = function () {
        this.navCtrl.push('EditProfilePage', {
            'type': this.data.experienceData.type,
            'hasRequested': this.data.experienceData.hasRequested,
            'hasRequestedShowMsg': this.data.experienceData.hasRequestedShowMsg
        });
    };
    ObAddDetailsPage.prototype.ionViewCanLeave = function () {
        return !this.isImageLoading;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* Navbar */])
    ], ObAddDetailsPage.prototype, "navBar", void 0);
    ObAddDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ob-add-details',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\ob-add-details\ob-add-details.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title class="pageTitile" *ngIf="data?.title">{{data?.title}}</ion-title>\n    <ion-title class="pageTitile" *ngIf="!data?.title">{{section ==\'skills\' ? \'Skill \': \'\'}}Details</ion-title>\n\n    <ion-buttons end *ngIf="isAvailableForSubmit">\n      <!-- for onboarding -->\n      <button *ngIf="showAddOptions" ion-button icon-only (click)="removeItem()">\n        <img class="headerIcons" src="assets/imgs/Delete.svg" />\n      </button>\n      <button class="submit" form="ngForm" ion-button (click)="save(obGroup)">\n        Save\n      </button>\n      <!-- <div class="submit" form="ngForm" ion-button (click)="save(obGroup)">\n        Save\n      </div> -->\n    </ion-buttons>\n    <!-- for userprofile(experience) -->\n\n    <ion-buttons end *ngIf="!isUserProfile && section == \'experience\'">\n      <button *ngIf="showAddOptions" ion-button icon-only (click)="removeItem()">\n        <img class="headerIcons" src="assets/imgs/Delete.svg" />\n      </button>\n      <button class="submit" form="ngForm" ion-button (click)="save(obGroup)">\n        Save\n      </button>\n      <!-- <div class="submit" form="ngForm" ion-button (click)="save(obGroup)">\n        Save\n      </div> -->\n    </ion-buttons>\n\n    <ion-buttons end *ngIf="section ==\'personal\' && !presonalSaveBtn">\n      <button *ngIf="showAddOptions" ion-button icon-only (click)="removeItem()">\n        <img class="headerIcons" src="assets/imgs/Delete.svg" />\n      </button>\n      <button class="submit" form="ngForm" ion-button (click)="save(obGroup)">\n        Save\n      </button>\n      <!-- <div class="submit" form="ngForm" ion-button (click)="save(obGroup)">\n          Save\n        </div> -->\n    </ion-buttons>\n\n    <!-- rejected docs -->\n    <ion-buttons end *ngIf="this.data?.isRejected">\n\n      <button class="submit" form="ngForm" ion-button (click)="save(obGroup)">\n        Save\n      </button>\n      <!-- <div class="submit" form="ngForm" ion-button (click)="save(obGroup)">\n            Save\n          </div> -->\n    </ion-buttons>\n\n    <ion-buttons end *ngIf="section ==\'skills\' && !isSkillDataAvaliable">\n      <button [disabled]="btnDisabled" *ngIf="showAddOptions" ion-button  (click)="removeSkilss(obGroup)" class="submit headerBtn">\n        <!-- <img class="headerIcons" src="assets/imgs/Delete.svg" /> -->\n        Delete\n      </button>\n      <button [disabled]="btnDisabled" class="submit headerBtn" form="ngForm" ion-button (click)="save(obGroup)">\n        Save\n      </button>\n      <!-- <div class="submit" form="ngForm" ion-button (click)="save(obGroup)">\n          Save\n        </div> -->\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-spinner *ngIf="loading$ | async"></ion-spinner>\n\n  <div class="alert-area">\n    <div *ngIf="!(loading$ | async) && formMessage" margin class="formMessage">\n      <img class="alert-image" src="assets/imgs/alert.svg">\n      {{formMessage}}</div>\n  </div>\n\n  <div *ngIf="showForm" [formGroup]="obGroup">\n\n    <div formArrayName="myprofile">\n\n      <div *ngFor="let p of obDetails.controls;index as i">\n        <form [formGroupName]="i">\n          <div margin class="experienceCard">\n            <div class="sectionDetails" *ngFor="let item of fieldArray">\n              <form-field (startFileUpload)="startFileUpload($event)" (dropDownListChange)="dropDownListChange($event)"\n                (focusSkillEvent)="toggleBtn($event)" [info]="item" [form]="obDetails.controls[i]" [type]=\'section\'\n                [typeObject]=\'data\' [mode]=\'data.mode\' [highlightField]="highlightField">\n              </form-field>\n            </div>\n          </div>\n        </form>\n      </div>\n\n    </div>\n\n  </div>\n\n  <div style="margin: 16px;" *ngIf="this.data?.isComingFromProfile && showForm">\n    <!-- [ngStyle]="{\'border-bottom\': data?.experienceData?.section === highlightField ? \'1px solid #0e89c8\' : \'none\' }" -->\n    <!-- [ngStyle]="{\'color\': data?.experienceData?.section === highlightField ? \'#0e89c8\' : \'#999\' }" -->\n    <ion-item [ngClass]="{\'fadeIn\':data?.experienceData?.section === highlightField}">\n      <ion-label floating>\n        <span>{{expLabel}}</span>\n      </ion-label>\n      <ion-input type="text" readonly value={{expValue}} (click)=\'goToEditExp()\'>\n      </ion-input>\n    </ion-item>\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\ob-add-details\ob-add-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__providers_formService_form_control_service__["a" /* FormControlService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_attachment_attachment__["a" /* Attachment */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_9__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ObAddDetailsPage);
    return ObAddDetailsPage;
}());

//# sourceMappingURL=ob-add-details.js.map

/***/ })

});
//# sourceMappingURL=96.js.map