webpackJsonp([46],{

/***/ 1447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZendeavorAddSubKrasPageModule", function() { return ZendeavorAddSubKrasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_directives_module__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_tooltips__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__zendeavor_add_sub_kras__ = __webpack_require__(1870);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_attachment_attachment__ = __webpack_require__(731);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ZendeavorAddSubKrasPageModule = /** @class */ (function () {
    function ZendeavorAddSubKrasPageModule() {
    }
    ZendeavorAddSubKrasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__zendeavor_add_sub_kras__["a" /* ZendeavorAddSubKrasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__zendeavor_add_sub_kras__["a" /* ZendeavorAddSubKrasPage */]),
                __WEBPACK_IMPORTED_MODULE_1_ionic_tooltips__["a" /* TooltipsModule */],
                __WEBPACK_IMPORTED_MODULE_0__directives_directives_module__["a" /* DirectivesModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__providers_attachment_attachment__["a" /* Attachment */]
            ]
        })
    ], ZendeavorAddSubKrasPageModule);
    return ZendeavorAddSubKrasPageModule;
}());

//# sourceMappingURL=zendeavor-add-sub-kras.module.js.map

/***/ }),

/***/ 1870:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZendeavorAddSubKrasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_download_download__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_speechRecognition_speechRecognition__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_http_angular_http_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_constants__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_attachment_attachment__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_performance_measuretext_area_performance_measuretext_area__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_keyboard__ = __webpack_require__(152);
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
 * Generated class for the ZendeavorAddSubKrasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ZendeavorAddSubKrasPage = /** @class */ (function () {
    function ZendeavorAddSubKrasPage(navCtrl, navParams, httpProvider, utility, httpAngularProvider, formBuilder, alertCtrl, speechRecognitionUtility, zone, cdr, platform, attachment, file, download, modalCtrl, keyBoard) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.utility = utility;
        this.httpAngularProvider = httpAngularProvider;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.speechRecognitionUtility = speechRecognitionUtility;
        this.zone = zone;
        this.cdr = cdr;
        this.platform = platform;
        this.attachment = attachment;
        this.file = file;
        this.download = download;
        this.modalCtrl = modalCtrl;
        this.keyBoard = keyBoard;
        this.KRADetailsUrl = "getKraData";
        this.saveKRAUrl = "saveSubKraData";
        this.addKRAUrl = 'addKra';
        this.deleteKraUrl = 'removeKra';
        this.KRADetails = {};
        this.showMidEndTermValues = false;
        // private selectedGoalYear: any
        this.isServiceCallOn = false;
        this.formDetails = [];
        this.submitted = false;
        this.submitGoalsUrl = 'submitKra';
        this.tooltipEvent = 'click';
        this.showLoader = false;
        this.showMic = true;
        this.performancetext = '';
        this.prevtext = '';
        this.isNewSubKra = false;
        this.subTitleValue = '';
        this.attachmentList = [];
        this.uploadKRADetailsUrl = "uploadKraDetail";
        this.deleteAttachmentUrl = "deleteAttachment";
        this.saveSubKRAMidtermUrl = 'saveSubKraDetails';
        this.userRole = this.navParams.get('userRole');
        this.userID = this.navParams.get('userID');
        this.subKRAList = this.navParams.get('subKRAList');
        this.KRAyear = this.navParams.get('kraYear');
        this.isNewSubKra = this.navParams.get('isNewSubKra');
        this.isMandatoryKra = this.navParams.get('isMandatoryKra');
        this.showSaveKRA = this.navParams.get('showSaveKRA');
        console.log(this.showSaveKRA);
        this.processType = this.navParams.get('processType');
        this.reviewerOption = this.navParams.get('isReviewerOption');
        console.log(this.reviewerOption);
        //this.processType = 'Mid-Term';
        console.log("process type", this.processType);
        this.isManagerOption = this.navParams.get('isManagerOption');
        console.log("isManagerOption", this.isManagerOption);
        platform.registerBackButtonAction(function () {
            if (_this.isMandatoryKra && _this.processType == 'Annual') {
                _this.saveSubKra();
                _this.disableLoaderOnClk = true;
            }
            else {
                _this.navCtrl.pop();
            }
        });
    }
    ZendeavorAddSubKrasPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ZendeavorAddSubKrasPage');
        this.GoalsForm = this.formBuilder.group({
            title: [{ value: '', disabled: false }, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required],
            milestoneDate: [{ value: '', disabled: false }, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required],
            KRAtype: [{ value: '', disabled: false }, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required],
            midTermFloor: [{ value: '', disabled: true }],
            midTermTarget: [{ value: '', disabled: true }],
            endTermFloor: [{ value: '', disabled: true }, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required],
            endTermTarget: [{ value: '', disabled: true }, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required],
            performanceMeasure: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required],
            subTitle: ['']
        }, { validator: this.formValidator });
        // this.getKRADetails(1)
        this.setKRAdetails(this.subKRAList);
        this.cdr.detectChanges();
        this.navBar.backButtonClick = function (e) {
            // this.navCtrl.getPrevious().data.submitStatus = 'false'
            // this.navCtrl.getPrevious().data.title = 'Preview'
            // this.navCtrl.getPrevious().data.kraId = '-1'
            console.log("back btn clicked");
            if (_this.isMandatoryKra) {
                _this.saveSubKra();
                _this.disableLoaderOnClk = true;
            }
            else {
                _this.navCtrl.pop();
            }
        };
    };
    ZendeavorAddSubKrasPage.prototype.setKRAdetails = function (selectedKraItem) {
        var _this = this;
        // if(this.subKRAList)
        this.utility.updateLoader(true);
        if (this.isNewSubKra) {
            this.newSubKralist = this.subKRAList[0];
            console.log("newSubKralist", this.newSubKralist);
            this.KRADetails = this.newSubKralist;
            this.formDetails = this.newSubKralist.subKraFieldList;
        }
        else {
            this.newSubKralist = selectedKraItem;
            console.log("newSubKralist", this.newSubKralist);
            this.KRADetails = this.newSubKralist;
            console.log(this.KRADetails);
            console.log(this.KRADetails.associatesFeildList);
            this.formDetails = this.newSubKralist.subKraFieldList;
        }
        if (this.processType == 'Mid-Term' || this.processType == 'Annual') {
            this.attachmentList = this.KRADetails.attachment;
        }
        this.formDetails.forEach(function (field) {
            // if (field.bindWith == 'year' && field.fieldType == 'label') {
            //   this.selectedGoalYear = field.titleValue
            // }
            if (field.bindWith == "title") {
                _this.kraFormsTitle = field.titleValue;
            }
            if (field.bindWith == 'milestoneDate') {
                _this.milestoneDate = field.titleValue;
            }
            if (field.bindWith == 'midTerm' && !_this.utility.isEmptyOrNullOrUndefined(field.midTermFieldList)) {
                _this.midTermDetails = field.midTermFieldList;
                _this.midtermInfo = field;
            }
            if (field.bindWith == "annual" && !_this.utility.isEmptyOrNullOrUndefined(field.annualFielList)) {
                _this.endTermDetails = field.annualFielList;
                _this.endtermInfo = field;
            }
            if (field.bindWith == "kraType") {
                console.log('kra type', field.titleValue);
                _this.kraTypeValue = field.titleValue;
            }
            if (field.bindWith == 'performanceMeasure') {
                _this.performanceMeasureValue = field.titleValue;
            }
            if (field.bindWith == 'subTitle') {
                _this.subTitleValue = field.titleValue;
            }
        });
        if (!this.utility.isEmptyOrNullOrUndefined(this.midTermDetails)) {
            this.midtermfloorData = this.midTermDetails[0];
            this.midtermTargetData = this.midTermDetails[1];
            console.log("midtermfloorData", this.midtermfloorData);
        }
        if (!this.utility.isEmptyOrNullOrUndefined(this.endTermDetails)) {
            this.endtermfloorData = this.endTermDetails[0];
            this.endtermTargetData = this.endTermDetails[1];
            console.log("midtermfloorData", this.endTermDetails);
        }
        if (!this.utility.isEmptyOrNullOrUndefined(this.kraTypeValue) && this.kraTypeValue == 'Qualitative') {
            // this.isMidtermDisabled = true
            // this.isEndTermDisabled = true
            this.showMidEndTermValues = true;
            // this.GoalsForm.controls.midTermFloor.disable();
            // this.GoalsForm.controls.midTermTarget.disable();
            // this.GoalsForm.controls.endTermFloor.disable();
            // this.GoalsForm.controls.endTermTarget.disable();
        }
        else if (this.utility.isEmptyOrNullOrUndefined(this.kraTypeValue)) {
            // this.GoalsForm.controls.midTermFloor.disable();
            // this.GoalsForm.controls.midTermTarget.disable();
            // this.GoalsForm.controls.endTermFloor.disable();
            // this.GoalsForm.controls.endTermTarget.disable();
            this.showMidEndTermValues = false;
        }
        // incase of Quantitative
        else {
            // this.GoalsForm.controls.midTermFloor.enable();
            // this.GoalsForm.controls.midTermTarget.enable();
            // this.GoalsForm.controls.endTermFloor.enable();
            // this.GoalsForm.controls.endTermTarget.enable();
            this.showMidEndTermValues = true;
        }
        if (this.kraFormsTitle == "Others") {
            this.GoalsForm.get('subTitle').setValidators([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required]);
            this.GoalsForm.get('subTitle').updateValueAndValidity();
        }
        else {
            this.GoalsForm.get('subTitle').clearValidators();
            this.GoalsForm.get('subTitle').updateValueAndValidity();
        }
        console.log("midterm info", this.midtermInfo);
        console.log("end info", this.endtermInfo);
        if (this.midtermInfo.isEditable) {
            this.GoalsForm.controls.midTermFloor.enable();
            this.GoalsForm.controls.midTermTarget.enable();
        }
        if (this.endtermInfo.isEditable) {
            this.GoalsForm.controls.endTermFloor.enable();
            this.GoalsForm.controls.endTermTarget.enable();
        }
        if (!this.midtermInfo.isEditable) {
            this.GoalsForm.controls.midTermFloor.disable();
            this.GoalsForm.controls.midTermTarget.disable();
        }
        if (!this.endtermInfo.isEditable) {
            this.GoalsForm.controls.endTermFloor.disable();
            this.GoalsForm.controls.endTermTarget.disable();
        }
        this.cdr.detectChanges();
        this.GoalsForm.setValue({
            title: this.kraFormsTitle,
            milestoneDate: this.milestoneDate,
            KRAtype: this.kraTypeValue,
            midTermFloor: this.midtermfloorData.titleValue,
            midTermTarget: this.midtermTargetData.titleValue,
            endTermFloor: this.endtermfloorData.titleValue,
            endTermTarget: this.endtermTargetData.titleValue,
            performanceMeasure: this.performanceMeasureValue,
            subTitle: this.subTitleValue
        });
        this.utility.updateLoader(false);
        console.log("this.GoalsForm", this.GoalsForm);
    };
    ZendeavorAddSubKrasPage.prototype.formValidator = function (group) {
        if (group) {
            // console.log(group)
            var midtermFloor = group.get("midTermFloor").value;
            var midtermTarget = group.get("midTermTarget").value;
            var endTermFloor = group.get("endTermFloor").value;
            var endTermTarget = group.get("endTermTarget").value;
            if (midtermFloor) {
                if (midtermTarget == '') {
                    return { midtermTargetIsempty: true };
                }
            }
            if (midtermTarget) {
                if (midtermFloor == '') {
                    return { midtermFloorIsempty: true };
                }
            }
            if (midtermFloor == midtermTarget && midtermFloor != '' && midtermTarget != '') {
                // if (group.get("midTermFloor").value !== group.get("midTermTarget").value) {
                return { midTermMatching: true };
            }
            // }
            if (endTermFloor == endTermTarget && endTermFloor != '' && endTermTarget != '') {
                // if (group.get("midTermFloor").value !== group.get("midTermTarget").value) {
                return { endTermMatching: true };
            }
        }
        return null;
    };
    ZendeavorAddSubKrasPage.prototype.onSelectChange = function (selectedKRAtype) {
        console.log("event", selectedKRAtype);
        this.kraTypeValue = selectedKRAtype;
        // this.GoalsForm.controls.midTermFloor.disable();
        // this.GoalsForm.controls.midTermTarget.disable();
        console.log("Goals form controls", this.GoalsForm.controls);
        if (selectedKRAtype == 'Qualitative' && !this.utility.isEmptyOrNullOrUndefined(selectedKRAtype)) {
            this.showMidEndTermValues = true;
            this.GoalsForm.controls.midTermFloor.disable();
            this.GoalsForm.controls.midTermTarget.disable();
            this.GoalsForm.controls.endTermFloor.disable();
            this.GoalsForm.controls.endTermTarget.disable();
            this.GoalsForm.get('endTermFloor').setValue('0');
            this.GoalsForm.get('endTermTarget').setValue('10');
            this.GoalsForm.get('midTermFloor').setValue('0');
            this.GoalsForm.get('midTermTarget').setValue('10');
            // this.isEndTermDisabled = true
            // this.isMidtermDisabled = true
            this.GoalsForm.get('midTermFloor').updateValueAndValidity();
            this.GoalsForm.get('midTermTarget').updateValueAndValidity();
            this.GoalsForm.get('endTermFloor').updateValueAndValidity();
            this.GoalsForm.get('endTermTarget').updateValueAndValidity();
            // this.cdr.detectChanges();
        }
        else if (!this.utility.isEmptyOrNullOrUndefined(selectedKRAtype)) {
            this.GoalsForm.controls.midTermFloor.enable();
            this.GoalsForm.controls.midTermTarget.enable();
            this.GoalsForm.controls.endTermFloor.enable();
            this.GoalsForm.controls.endTermTarget.enable();
            this.showMidEndTermValues = true;
            this.GoalsForm.get('midTermFloor').updateValueAndValidity();
            this.GoalsForm.get('midTermTarget').updateValueAndValidity();
            this.GoalsForm.get('endTermFloor').updateValueAndValidity();
            this.GoalsForm.get('endTermTarget').updateValueAndValidity();
            // this.isMidtermDisabled = true
            // this.cdr.detectChanges();
        }
    };
    // resetForm(kraId) {
    //   this.GoalsForm.reset()
    // }
    ZendeavorAddSubKrasPage.prototype.resetForm = function (kraId) {
        var _this = this;
        this.formDetails.forEach(function (formField) {
            if (formField.isEditable && formField.bindWith == 'title') {
                _this.GoalsForm.get('title').reset();
            }
            if (formField.isEditable && formField.bindWith == 'subTitle') {
                _this.GoalsForm.get('subTitle').reset();
            }
            if (formField.isEditable && formField.bindWith == 'milestoneDate') {
                _this.GoalsForm.get('milestoneDate').reset();
            }
            if (formField.isEditable && formField.bindWith == 'kraType') {
                _this.GoalsForm.get('KRAtype').reset();
            }
            if (_this.midtermfloorData.isEditable && formField.bindWith == 'midTerm') {
                _this.GoalsForm.get('midTermFloor').reset();
            }
            if (_this.midtermTargetData.isEditable && formField.bindWith == 'midTerm') {
                _this.GoalsForm.get('midTermTarget').reset();
            }
            if (_this.endtermfloorData.isEditable && formField.bindWith == 'annual') {
                _this.GoalsForm.get('endTermFloor').reset();
            }
            if (_this.endtermTargetData.isEditable && formField.bindWith == 'annual') {
                _this.GoalsForm.get('endTermTarget').reset();
            }
            if (formField.isEditable && formField.bindWith == 'performanceMeasure') {
                _this.GoalsForm.get('performanceMeasure').reset();
            }
        });
    };
    ZendeavorAddSubKrasPage.prototype.onTitleChange = function (selectedOption) {
        console.log(selectedOption);
        // this.kraFormsTitle = selectedOption
        var selectKRAItem;
        if (!this.utility.isEmptyOrNullOrUndefined(selectedOption)) {
            // if (!this.utility.isEmptyOrNullOrUndefined(this.subKRAList)){
            this.subKRAList.forEach(function (subKraItem) {
                if (subKraItem.title == selectedOption) {
                    console.log(subKraItem);
                    selectKRAItem = subKraItem;
                }
            });
        }
        // if (selectKRAItem.titleKey == '27')
        //   this.showCustomTitleInput = true
        this.isNewSubKra = false;
        this.setKRAdetails(selectKRAItem);
    };
    ZendeavorAddSubKrasPage.prototype.startSpeech = function () {
        var _this = this;
        // this.prevtext = this.performancetext;
        // this.prevtext = this.performancetext;
        this.prevtext = this.GoalsForm.get('performanceMeasure').value;
        this.showMic = false;
        this.showLoader = true;
        this.speechRecognitionUtility.startListening().subscribe(function (value) {
            if (_this.utility.platformAvailable) {
                // this.showMic = false;
                // this.showLoader = true;
                console.log("value", value);
                _this.performancetext = _this.prevtext + ' ' + value;
                _this.performancetext.trim();
                _this.GoalsForm.get('performanceMeasure').setValue(_this.performancetext);
            }
            _this.zone.run(function () {
                _this.showLoader = false;
                _this.showMic = true;
            });
        }, function (error) {
            _this.zone.run(function () {
                _this.showLoader = false;
                _this.showMic = true;
            });
        });
    };
    ZendeavorAddSubKrasPage.prototype.saveSubKra = function () {
        var _this = this;
        if (this.GoalsForm.invalid) {
            // this.utility.presentAlert("Please fill all the fields")
            this.submitted = true;
            return;
        }
        console.log("save kra details", this.KRADetails);
        this.saveDetails = {
            url: this.saveKRAUrl,
            data: {
                "userId": !this.utility.isEmptyOrNullOrUndefined(this.userID) ? this.userID : '',
                "year": this.KRAyear || '',
                // "role": this.userRole,
                // "kraId": this.kraId,
                "subKraNumber": this.KRADetails.subKraId,
                "title": this.KRADetails.titleKey,
                "subTitle": this.GoalsForm.get('subTitle').value,
                // "milestoneDate": this.GoalsForm.get('milestoneDate').value,
                "annualTarget": this.GoalsForm.get('endTermTarget').value,
                "annualFloor": this.GoalsForm.get('endTermFloor').value,
                "midtermFloor": this.GoalsForm.get('midTermFloor').value,
                "midtermTarget": this.GoalsForm.get('midTermTarget').value,
                "performanceMeasure": this.GoalsForm.get('performanceMeasure').value,
                "kraType": this.kraTypeValue == 'Quantitative' ? '1' : '2',
                "totalSubKra": this.KRADetails.totalSubKra
            },
            zenDeavorURL: true
        };
        this.utility.updateLoader(true);
        this.httpProvider.http.commonService(this.saveDetails).subscribe(function (response) {
            if (response) {
                _this.utility.updateLoader(false);
                if (response['status'] && response['status'].statusCode == '1') {
                    var statusMessage = response['status'].statusMessage;
                    _this.submitted = false;
                    if (_this.disableLoaderOnClk) {
                        _this.navCtrl.pop();
                    }
                    else {
                        _this.utility.presentAlert(statusMessage).then(function (res) {
                            _this.navCtrl.pop();
                        });
                    }
                }
            }
        }, function (err) {
            _this.utility.updateLoader(false);
            _this.utility.showAlert('Goal Setting', __WEBPACK_IMPORTED_MODULE_8__app_constants__["a" /* Constants */]["Server_Error_Message"]);
        });
    };
    ZendeavorAddSubKrasPage.prototype.saveSubKraForMidterm = function () {
        var _this = this;
        console.log("associatesFeildList", this.KRADetails.associatesFeildList);
        console.log("managerFeildList", this.KRADetails.managerFeildList);
        /**
         * this iterates the fields of the form and stores the value entered by the associate.
         */
        if (this.KRADetails.associatesFeildList != null) {
            this.KRADetails.associatesFeildList.filter(function (item) {
                if (item.bindWith == 'achievement')
                    _this.achievement = item.titleValue;
                if (item.bindWith == 'selfAppraisal')
                    _this.selfAppraisal = item.titleValue;
                if (item.bindWith == 'criticalIncident')
                    _this.criticalIncident = item.titleValue;
            });
        }
        /**
       * this iterates the fields of the form and stores the value entered by the 1-Up manager.
       */
        if (this.KRADetails.managerFeildList != null) {
            this.KRADetails.managerFeildList.filter(function (managerItem) {
                //console.log("manager", this.KRADetails.managerFeildList)
                if (managerItem.bindWith == 'appraiserRating') {
                    _this.managerSelfRating = managerItem.titleValue;
                }
                if (managerItem.bindWith == 'appraiserComment') {
                    _this.managerComments = managerItem.titleValue;
                }
            });
        }
        /**
       * this iterates the fields of the form and stores the value entered by the reviewer.
       */
        if (this.KRADetails.reviewerFieldList != null) {
            this.KRADetails.reviewerFieldList.filter(function (reviewer) {
                //console.log("manager", this.KRADetails.managerFeildList)
                if (reviewer.bindWith == 'reviewerRating') {
                    _this.reviewerRating = reviewer.titleValue;
                }
                if (reviewer.bindWith == 'reviewerComment') {
                    _this.reviewerComments = reviewer.titleValue;
                }
            });
        }
        this.saveSubKraMidterm = {
            url: this.saveSubKRAMidtermUrl,
            data: {
                "userId": !this.utility.isEmptyOrNullOrUndefined(this.userID) ? this.userID : '',
                "kraId": this.KRADetails.kraId,
                "subKraId": this.KRADetails.subKraId,
                "role": this.KRADetails.role,
                "achievement": this.achievement,
                "criticalIncident": this.criticalIncident,
                "selfAppraisal": this.selfAppraisal,
                "appraiserRating": this.managerSelfRating,
                "appraiserComment": this.managerComments,
                "processType": this.processType,
                "reviewerRating": this.reviewerRating,
                "reviewerComment": this.reviewerComments,
                "maxTxn": this.KRADetails.tx_key,
            },
            zenDeavorURL: true
        };
        /**
         * A check is being applied on the fields of associate and manager to validate if any of these fields are empty then
         * display a popup to alert the user about it.
         */
        if (this.KRADetails.associatesFeildList != null && this.userRole == '1') {
            if (this.achievement == '' || this.selfAppraisal == '' || this.criticalIncident == '') {
                // this.nameInputRef.setFocus();
                this.utility.presentAlert("Please fill all the mandatory fields.");
                return;
            }
        }
        if (this.KRADetails.managerFeildList != null && this.userRole == '2') {
            if (this.managerSelfRating == '' || this.managerComments == '') {
                this.utility.presentAlert("Please fill all the mandatory fields.");
                return;
            }
        }
        this.utility.updateLoader(true);
        this.httpProvider.http.commonService(this.saveSubKraMidterm).subscribe(function (response) {
            if (response) {
                _this.utility.updateLoader(false);
                if (!_this.utility.isEmptyOrNullOrUndefined(response['status']) && response['status'].statusCode == 1) {
                    _this.utility.presentAlert(response['status'].statusMessage).then(function (res) {
                        _this.navCtrl.pop();
                    });
                }
                else {
                    _this.utility.presentAlert(response['status'].statusMessage);
                }
            }
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    ZendeavorAddSubKrasPage.prototype.pickFile = function (event) {
        var _this = this;
        this.attachment.openDocument('').then(function (response) {
            _this.uploadFile(response);
        }).catch(function (error) {
        });
    };
    /**
    * Upload document service integration.
    * Associate upload the document as  supporting document while filling  KRAs.
    */
    ZendeavorAddSubKrasPage.prototype.uploadFile = function (fileURI) {
        var _this = this;
        this.utility.updateLoader(true);
        var formData = new FormData();
        var uploadDocs = {
            url: this.uploadKRADetailsUrl,
            data: formData,
            zenDeavorURL: true
        };
        this.file.resolveLocalFilesystemUrl(fileURI).then(function (entry) {
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
                            else if (fileType == "application/vnd.ms-excel") {
                                fileExt = "xls";
                            }
                            else if (fileType == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
                                fileExt = "xlsx";
                            }
                            else if (fileType == "text/plain") {
                                fileExt = "txt";
                            }
                            var fileName = new Date().getTime();
                            formData.append("file", imgBlob, fileName + "." + fileExt);
                            formData.append("kraId", _this.KRADetails.kraId);
                            formData.append("subKraId", _this.KRADetails.subKraId);
                            formData.append("userId", _this.userID);
                            formData.append("processType", _this.processType);
                            /**
                             * Upload documents service call : UploadKRADatials
                             */
                            _this.httpAngularProvider.multimediaService(uploadDocs).subscribe(function (response) {
                                _this.utility.updateLoader(false);
                                if (response) {
                                    if (response.status.statusCode == 1) {
                                        _this.utility.presentAlert("File uploaded successfully.");
                                    }
                                    if (response.details) {
                                        if (response.details.attachment)
                                            _this.attachmentList = response.details.attachment;
                                        console.log("response", response.details.attachment);
                                        console.log("attachmentList", _this.attachmentList);
                                    }
                                }
                            });
                        }
                        else {
                            _this.utility.presentAlert("Please upload a photograph/file.");
                            _this.utility.updateLoader(false);
                        }
                    };
                }
                else {
                    _this.utility.presentAlert("Please upload a photograph less than 5mb.");
                    _this.utility.imageLoader(false);
                }
            });
        }).catch(function (error) {
            _this.utility.updateLoader(false);
        });
    };
    /**
     * delete service call integration.
     * associates can delete the document uploaded by them.
     */
    ZendeavorAddSubKrasPage.prototype.deleteUploadedAttachment = function (attachements) {
        var _this = this;
        this.utility.presentConfirmation('Are you sure you want to delete this attachment ?', 'Confirmation').then(function () {
            var deleteDocuments = {
                url: _this.deleteAttachmentUrl,
                zenDeavorURL: true,
                data: {
                    "userId": _this.userID,
                    "kraId": _this.KRADetails.kraId,
                    "subKraId": _this.KRADetails.subKraId,
                    "attachmentId": attachements.attachmentId,
                    "processType": _this.processType
                }
            };
            console.log("delete attachment", deleteDocuments);
            _this.httpProvider.http.commonService(deleteDocuments).subscribe(function (response) {
                _this.attachmentList = response.details.attachment;
                console.log("response", response.details.attachment);
                console.log("attachmentList", _this.attachmentList);
            });
        });
    };
    /**
   * this function opens the document which got uploaded
   * @param uploadKRADetailsUrl
   */
    ZendeavorAddSubKrasPage.prototype.openAsset = function (uploadKRADetailsUrl) {
        console.log("open asset", uploadKRADetailsUrl);
        this.utility.openAsset(uploadKRADetailsUrl);
        // if(this.platform.is('ios')){
        //   this.utility.openBrowserTab(uploadKRADetailsUrl)
        // }
        // else{
        //   this.download.downloadDocument(uploadKRADetailsUrl)
        // }
    };
    ZendeavorAddSubKrasPage.prototype.resetMidTermForm = function () {
        if (this.KRADetails.associatesFeildList != null && this.isManagerOption == false) {
            this.KRADetails.associatesFeildList.filter(function (item) {
                if (item.isShow)
                    item.titleValue = '';
            });
            // this.attachmentList = ''
            if (this.attachmentList.length > 0) {
                for (var i = 0; i < this.KRADetails.attachment.length; i++) {
                    this.resetAttachments(this.attachmentList[i]);
                }
            }
        }
        else if (this.KRADetails.managerFeildList != null && this.isManagerOption == true) {
            this.KRADetails.managerFeildList.filter(function (item) {
                item.titleValue = '';
            });
        }
    };
    ZendeavorAddSubKrasPage.prototype.resetAttachments = function (attachements) {
        var _this = this;
        var deleteDocuments = {
            url: this.deleteAttachmentUrl,
            zenDeavorURL: true,
            data: {
                "userId": this.userID,
                "kraId": this.KRADetails.kraId,
                "subKraId": this.KRADetails.subKraId,
                "attachmentId": attachements.attachmentId,
                "processType": this.processType
            }
        };
        this.httpProvider.http.commonService(deleteDocuments).subscribe(function (response) {
            _this.attachmentList = response.details.attachment;
        });
    };
    ZendeavorAddSubKrasPage.prototype.expandTextArea = function (pageTitle, val, index, sel, updateValue) {
        var _this = this;
        try {
            this.keyBoard.hide();
        }
        catch (e) {
            console.log('Keyboard will not close', e);
        }
        console.log(val, index, sel, updateValue);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__components_performance_measuretext_area_performance_measuretext_area__["a" /* PerformanceMeasuretextAreaComponent */], {
            'data': {
                performanceData: val,
                pageTitle: pageTitle,
            }
        }, { cssClass: '' });
        modal.onDidDismiss(function (data) {
            if (data != null || data != undefined) {
                console.log("Updated value", data, _this.KRADetails);
                _this.KRADetails[sel].map(function (res, i) {
                    if (i == index) {
                        res[updateValue] = data;
                    }
                });
            }
        });
        modal.present();
    };
    ZendeavorAddSubKrasPage.prototype.gotoperformanceMeasure = function (fieldTitle) {
        var _this = this;
        console.log("fieldTitle", fieldTitle);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__components_performance_measuretext_area_performance_measuretext_area__["a" /* PerformanceMeasuretextAreaComponent */], {
            'data': {
                performanceData: this.GoalsForm.get('performanceMeasure').value,
                pageTitle: fieldTitle
            }
        }, { cssClass: '' });
        modal.onDidDismiss(function (data) {
            if (data != null || data != undefined) {
                _this.GoalsForm.get('performanceMeasure').setValue(data);
                _this.GoalsForm.get('performanceMeasure').markAsDirty();
                _this.cdr.detectChanges();
            }
        });
        modal.present();
    };
    ZendeavorAddSubKrasPage.prototype.getFileSize = function (bytes) {
        if (bytes == 0)
            return 'n/a';
        else {
            var num = (bytes / (Math.pow(1024, 2))).toFixed(2);
            return parseFloat(num);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* Navbar */])
    ], ZendeavorAddSubKrasPage.prototype, "navBar", void 0);
    ZendeavorAddSubKrasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-zendeavor-add-sub-kras',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zendeavor\zendeavor-add-sub-kras\zendeavor-add-sub-kras.html"*/'<!--\n  Generated template for the ZendeavorAddSubKrasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Talent Index: Sub KRA</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <!-- KRA form which directs associate to fill KRAs sequentially -->\n    <div class="padding10" [hidden]="isServiceCallOn" [ngClass]="{\'bttmMargin\': processType !=\'Mid-Term\',\'marginbottom10\' : processType ==\'Mid-Term\'}">\n        <div *ngFor="let field of KRADetails.subKraFieldList; index as i ">\n            <form [formGroup]="GoalsForm">\n                <div class="margin-bottom4per dropDown" *ngIf="field.bindWith==\'title\'">\n                    <div class="align-cont-cent">\n                        <ion-label>{{field.title}}<img class="astrick" src="assets/imgs/asterisk.svg" />\n                        </ion-label>\n                    </div>\n                    <!-- kraFormsTitle {{kraFormsTitle}} -->\n                    <ion-select [(ngModel)]="kraFormsTitle" *ngIf="field.fieldType==\'dropDown\'" (ionChange)="onTitleChange($event)" interface="action-sheet" class="borderBottom " style="max-width: 100%" formControlName="title" [class.invalid]="GoalsForm.controls.title.errors  && submitted"\n                        [disableControl]="!field.isEditable">\n                        <ion-option [value]="item" *ngFor="let item of field.valueList;index as i">{{item}}</ion-option>\n                    </ion-select>\n                    <div *ngIf="field.fieldType==\'label\'">\n                        <ion-input class="borderBottom " formControlName="title" [disableControl]="!field.isEditable" [class.invalid]="GoalsForm.controls.title.errors  && submitted">\n                        </ion-input>\n                    </div>\n\n                    <span class="error-msg" *ngIf="GoalsForm.controls.title.errors  && submitted">\n            <p>* Please select Title</p>\n          </span>\n\n                </div>\n                <!-- custom title -->\n\n                <div class="margin-bottom4per" *ngIf="field.bindWith==\'subTitle\'">\n                    <div class="align-cont-cent">\n                        <ion-label>{{field.title}}<img class="astrick" src="assets/imgs/asterisk.svg" /></ion-label>\n                    </div>\n\n                    <ion-input class="borderBottom" [class.invalid]="GoalsForm.controls.subTitle.errors  && submitted" formControlName="subTitle" [disableControl]="!field.isEditable">\n                    </ion-input>\n\n\n                    <span class="error-msg" *ngIf="GoalsForm.controls.subTitle.errors  && submitted">\n            <p>* Please add Sub Title.</p>\n          </span>\n                </div>\n                <!-- <div class="margin-top8" *ngIf="field.bindWith==\'subTitle\'">\n          <ion-input class="borderBottom " [disableControl]="!field.isEditable" formControlName="customTitle"\n            [class.invalid]="GoalsForm.controls.customTitle.errors  && submitted" placeholder="Add Title">\n          </ion-input>\n          Status {{GoalsForm.controls.customTitle}}\n        </div> -->\n                <div class="margin-bottom4per" *ngIf="field.bindWith==\'milestoneDate\'">\n                    <ion-label>{{field.title}}<img class="astrick" src="assets/imgs/asterisk.svg" /></ion-label>\n\n                    <ion-datetime class="borderBottom " displayFormat="DD-MM-YYYY" pickerFormat="DD MMMM YYYY" formControlName="milestoneDate" [class.invalid]="GoalsForm.controls.milestoneDate.errors  && submitted" [(ngModel)]="milestoneDate" [disableControl]="!field.isEditable"\n                        [min]="KRADetails?.minDate" [max]="KRADetails?.maxDate"></ion-datetime>\n\n\n                    <span class="error-msg" *ngIf="GoalsForm.controls.milestoneDate.errors  && submitted">\n            <p>* Please select Milestone Date.</p>\n          </span>\n                </div>\n                <div class="margin-bottom4per dropDown" *ngIf="field.bindWith==\'kraType\'">\n                    <div class="align-cont-cent">\n                        <ion-label>{{field.title}}<img class="astrick" src="assets/imgs/asterisk.svg" />\n                        </ion-label>\n                    </div>\n                    <ion-select (ionChange)="onSelectChange($event)" interface="action-sheet" class="borderBottom " style="max-width: 100%" formControlName="KRAtype" [class.invalid]="GoalsForm.controls.KRAtype.errors  && submitted" [disableControl]="!field.isEditable">\n                        <ion-option [value]="item" *ngFor="let item of field.valueList;index as i">{{item}}</ion-option>\n                    </ion-select>\n                    <span class="error-msg" *ngIf="GoalsForm.controls.KRAtype.errors  && submitted">\n            <p>* Please select KRA Type.</p>\n          </span>\n                </div>\n                <div>\n                    <ion-row *ngIf="field.title==\'Mid-Term\' && showMidEndTermValues">\n                        <ion-col>\n                            <div class="margin-bottom4per">\n                                <ion-label>{{midtermfloorData?.title}}\n                                    <span class="margin10">\n                    <ion-icon [tooltip]="midtermfloorData.tooltip" positionV="bottom" hideOthers="true"\n                      [event]="tooltipEvent" class="formButtonIcon" clear color="dark" item-right>\n                      <img class="info-icon" src="assets/imgs/ZenDeavour/blue-question-mark.svg" />\n                    </ion-icon>\n                  </span>\n                                </ion-label>\n                                <ion-input class="borderBottom " formControlName="midTermFloor" type="number" [disableControl]="GoalsForm.controls.midTermFloor.disabled" [class.invalid]="(GoalsForm.errors?.midTermMatching || GoalsForm.errors?.midtermFloorIsempty )&& submitted">\n                                </ion-input>\n                                <!-- Status {{GoalsForm.controls.midTermFloor.disabled}} -->\n                                <span class="error-msg" *ngIf="GoalsForm.errors?.midtermFloorIsempty && submitted">\n                  <p>* Please enter mid-term floor!</p>\n                </span>\n                            </div>\n                        </ion-col>\n                        <ion-col>\n                            <div class="margin-bottom4per">\n                                <ion-label>{{midtermTargetData?.title}}\n                                    <span class="margin10">\n                    <ion-icon [tooltip]="midtermTargetData.tooltip" positionV="bottom" hideOthers="true"\n                      [event]="tooltipEvent" class="formButtonIcon" clear color="dark" item-right>\n                      <img class="info-icon" src="assets/imgs/ZenDeavour/blue-question-mark.svg" />\n                    </ion-icon>\n                  </span>\n                                </ion-label>\n                                <ion-input class="borderBottom" formControlName="midTermTarget" type="number" [class.invalid]="(GoalsForm.errors?.midtermTargetIsempty ||GoalsForm.errors?.midTermMatching) && submitted" [disableControl]="GoalsForm.controls.midTermTarget.disabled">\n                                </ion-input>\n                                <span class="error-msg" *ngIf="GoalsForm.errors?.midtermTargetIsempty  && submitted">\n                  <p>* Please enter mid-term target!</p>\n                </span>\n\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row *ngIf="field.title==\'Mid-Term\' && showMidEndTermValues">\n                        <span class="error-msg" *ngIf="GoalsForm.errors?.midTermMatching && submitted">\n              <p>* Mid-term floor and mid-term target should be different!</p>\n            </span>\n                    </ion-row>\n                    <ion-row *ngIf="field.title==\'Annual\' && showMidEndTermValues">\n                        <ion-col>\n                            <div class="margin-bottom4per">\n                                <ion-label>{{endtermfloorData.title}}<img class="astrick" src="assets/imgs/asterisk.svg" />\n                                    <span class="margin20px">\n                    <ion-icon [tooltip]="endtermfloorData.tooltip" positionV="bottom" hideOthers="true"\n                      [event]="tooltipEvent" class="formButtonIcon" clear color="dark" item-right>\n                      <img class="info-icon" src="assets/imgs/ZenDeavour/blue-question-mark.svg" />\n                    </ion-icon>\n                  </span>\n                                </ion-label>\n                                <ion-input class="borderBottom" formControlName="endTermFloor" type="number" [class.invalid]="GoalsForm.controls.endTermFloor.errors  && submitted" [disableControl]="GoalsForm.controls.endTermFloor.disabled">\n                                </ion-input>\n                                <span class="error-msg" *ngIf="GoalsForm.controls.endTermFloor.errors  && submitted">\n                  <p>* Please enter annual floor!</p>\n                </span>\n                            </div>\n                        </ion-col>\n                        <ion-col>\n                            <div class="margin-bottom4per">\n                                <ion-label>{{endtermTargetData.title}}<img class="astrick" src="assets/imgs/asterisk.svg" />\n                                    <span class="margin20px">\n                    <ion-icon [tooltip]="endtermTargetData.tooltip" positionV="bottom" hideOthers="true"\n                      [event]="tooltipEvent" class="formButtonIcon" clear color="dark" item-right>\n                      <img class="info-icon" src="assets/imgs/ZenDeavour/blue-question-mark.svg" />\n                    </ion-icon>\n                  </span>\n                                </ion-label>\n                                <ion-input class="borderBottom" formControlName="endTermTarget" type="number" [class.invalid]="GoalsForm.controls.endTermTarget.errors  && submitted" [disableControl]="GoalsForm.controls.endTermTarget.disabled">\n                                </ion-input>\n                                <span class="error-msg" *ngIf="GoalsForm.controls.endTermTarget.errors  && submitted">\n                  <p>* Please enter annual target!</p>\n                </span>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row *ngIf="field.title==\'Annual\'  && showMidEndTermValues">\n                        <span class="error-msg" *ngIf="GoalsForm.errors?.endTermMatching && submitted">\n              <p>* Annual floor and annual target should be different!.</p>\n            </span>\n                    </ion-row>\n                </div>\n                <div class="margin-bottom4per" *ngIf="field.bindWith==\'performanceMeasure\'">\n                    <div class="align-cont-cent">\n                        <ion-label>{{field.title}}<img class="astrick" src="assets/imgs/asterisk.svg" /></ion-label>\n                        <!-- adding mic icon for voice input -->\n                        <div *ngIf="field.isEditable">\n                            <span (click)="startSpeech()" *ngIf="showMic" class="mic-container">\n                <ion-icon name="mic"></ion-icon>\n\n              </span>\n                            <div *ngIf="showLoader" class="spinner-container">\n                                <img src="assets/imgs/ZenDeavour/listening.gif" />\n                            </div>\n                        </div>\n\n                    </div>\n\n\n                    <ion-textarea formControlName="performanceMeasure" class="borderBottom textColor kraTextarea" [class.invalid]="GoalsForm.controls.performanceMeasure.errors  && submitted" [disableControl]="!field.isEditable" (ionFocus)="field.isEditable ? gotoperformanceMeasure(field.title) : null"></ion-textarea>\n\n                    <span class="error-msg" *ngIf="GoalsForm.controls.performanceMeasure.errors  && submitted">\n            <p>* Please add Performance Measure.</p>\n          </span>\n                </div>\n            </form>\n        </div>\n    </div>\n\n    <!-- Save rating as Associate(Associate\'s view)  -->\n    <form #ratingForm="ngForm">\n        <div class="header-cont margin-bottom3per" *ngIf="!showSaveKRA && (processType==\'Mid-Term\' || processType ==\'Annual\')">\n            <div class="header-kra fontSize1p5 font-weight500 font-color-blue">Self Ratings </div>\n            <div class="padding10" *ngFor="let associate of KRADetails?.associatesFeildList; index as i">\n\n                <div class="label-Icon">\n                    <ion-label class="fontSize1p4" [ngClass]="{\'greyColor\':userRole == \'2\' || !associate?.isEditable}">\n                        {{associate?.title}}<img class="astrick" src="assets/imgs/asterisk.svg" />\n                    </ion-label>\n                    <ion-icon *ngIf="associate.tooltip" [tooltip]="associate.tooltip" positionV="bottom" hideOthers="true" [event]="tooltipEvent" class="formButtonIcon" clear color="dark" item-right>\n                        <img class="info-icon" src="assets/imgs/info.svg" />\n                    </ion-icon>\n                </div>\n\n                <ion-input *ngIf="associate.fieldType==\'text\' && associate.regEx!=null" #achievRef type="number" [readonly]="!associate?.isEditable || isManagerOption==\'true\' || isReviewerOption==\'true\'" class="form-control borderBottom" #achievRef="ngModel" required\n                    [(ngModel)]="associate.titleValue" [ngModelOptions]="{standalone: true}" [ngClass]="{\'greyColor\':userRole == \'2\' || !associate?.isEditable}">\n                </ion-input>\n\n                <ion-input *ngIf="associate.fieldType==\'text\'  && associate.regEx==null" #achievRef [readonly]="!associate?.isEditable || isManagerOption==\'true\' || isReviewerOption==\'true\'" class="form-control borderBottom" #achievRef="ngModel" required [(ngModel)]="associate.titleValue"\n                    [ngModelOptions]="{standalone: true}" [ngClass]="{\'greyColor\':userRole == \'2\' || !associate?.isEditable}">\n                </ion-input>\n\n                <!-- <span  *ngIf="name.touched || name.dirty">\n        {{associate.title}} is required\n      </span> -->\n\n                <ion-textarea *ngIf="associate.fieldType == \'textArea\'" [readonly]="!associate?.isEditable" #achievRef class="form-control borderBottom" #achievRef="ngModel" required [(ngModel)]="associate.titleValue" [ngModelOptions]="{standalone: true}" [ngClass]="{\'greyColor\':userRole == \'2\' || !associate?.isEditable}"\n                    (ionFocus)="associate?.isEditable ? expandTextArea(associate.title, associate.titleValue, i, \'associatesFeildList\', \'titleValue\') : null">\n                </ion-textarea>\n            </div>\n\n            <!--   -->\n            <!-- upload attachment -->\n            <div class="attachContainer" *ngIf=" (userRole == \'1\' && attachmentList)  || (userRole == \'2\' && attachmentList?.length > 0) || (userRole == \'2\' && attachmentList?.length > 0)">\n                <div class="attachments">\n                    <div>Upload Document</div>\n                    <div *ngIf="userRole==\'1\'" class="upload" (click)="pickFile($event)">\n                        <ion-icon name="cloud-upload"></ion-icon> Upload\n                    </div>\n                </div>\n\n                <ion-row class="attach-color padding5 align-item-flex-start" *ngFor="let attachements of attachmentList;index as i">\n                    <ion-col col-3>File {{i+1}}</ion-col>\n                    <ion-col (click)="openAsset(attachements.fileUrl)" class="align-cont-cent"><img class="preview-icon" src="assets/imgs/attachment_preview.svg" />Preview\n                    </ion-col>\n                    <ion-col *ngIf="userRole==\'1\'" (click)="deleteUploadedAttachment(attachements)">\n                        <ion-icon name="trash"></ion-icon> Delete\n                    </ion-col>\n                </ion-row>\n\n                <ion-row class="attach-color padding5 center" *ngIf="attachmentList?.length<=0">\n                    <span class="color-blue">No Attachment Available</span>\n                    <div style="padding: 5px;">Please upload (JPEG/JPG/PNG/PDF/XLS/XLSX/MSG/EML) & size should not exceed 5 MB.  </div>\n                </ion-row>\n            </div>\n\n        </div>\n        <!-- 1up Manager\'s appraisal rating section(Manager\'s rating to associates) -->\n        <div class="header-cont" *ngIf="isManagerOption || reviewerOption">\n            <div class="header-kra fontSize1p5 font-weight500 font-color-blue">Appraiser Rating</div>\n            <div *ngFor="let manager of KRADetails.managerFeildList; index as mangerIndex" class="padding10">\n                <div class="label-Icon">\n                    <ion-label class="fontSize1p4">{{manager.title}} <img class="astrick" src="assets/imgs/asterisk.svg" />\n                    </ion-label>\n                    <ion-icon *ngIf="manager.tooltip" [tooltip]="manager.tooltip" positionV="bottom" hideOthers="true" [event]="tooltipEvent" class="formButtonIcon" clear color="dark" item-right>\n                        <img class="info-icon" src="assets/imgs/info.svg" />\n                    </ion-icon>\n                </div>\n                <ion-input *ngIf="manager?.fieldType==\'text\' && manager.regEx!=null" class="form-control borderBottom" [readonly]="!manager?.isEditable" #managerRef type="number" [(ngModel)]="manager.titleValue" [ngModelOptions]="{standalone: true}" #managerRef="ngModel"\n                    [ngClass]="{\'greyColor\':!manager?.isEditable}">\n                </ion-input>\n\n                <ion-input *ngIf="manager?.fieldType==\'text\' && manager.regEx==null" class="form-control borderBottom" #managerRef [readonly]="!manager?.isEditable" [(ngModel)]="manager.titleValue" [ngModelOptions]="{standalone: true}" #managerRef="ngModel" [ngClass]="{\'greyColor\':!manager?.isEditable}">\n                </ion-input>\n\n                <ion-textarea *ngIf="manager?.fieldType==\'textArea\'" class="form-control borderBottom" #managerRef [(ngModel)]="manager.titleValue" [readonly]="!manager?.isEditable" [ngModelOptions]="{standalone: true}" #managerRef="ngModel" [ngClass]="{\'greyColor\':!manager?.isEditable}"\n                    (ionFocus)="manager?.isEditable ? expandTextArea(manager.title, manager.titleValue, mangerIndex, \'managerFeildList\', \'titleValue\') : null"></ion-textarea>\n            </div>\n        </div>\n\n        <!-- Reviewer\'s appraisal rating section(Reviewer\'s rating to associates) -->\n        <div class="header-cont" *ngIf="reviewerOption">\n            <div class="header-kra fontSize1p5 font-weight500 font-color-blue">Reviewer Rating</div>\n            <div *ngFor="let reviewer of KRADetails?.reviewerFieldList;index as reviewerIndex" class="padding10">\n                <div class="label-Icon">\n                    <ion-label class="fontSize1p4">{{reviewer.title}} <img class="astrick" src="assets/imgs/asterisk.svg" />\n                    </ion-label>\n                    <ion-icon *ngIf="reviewer.tooltip" [tooltip]="reviewer.tooltip" positionV="bottom" hideOthers="true" [event]="tooltipEvent" class="formButtonIcon" clear color="dark" item-right>\n                        <img class="info-icon" src="assets/imgs/info.svg" />\n                    </ion-icon>\n                </div>\n                <ion-input *ngIf="reviewer?.fieldType==\'text\' && reviewer.regEx!=null" class="form-control borderBottom" [readonly]="!reviewer?.isEditable" #managerRef type="number" [(ngModel)]="reviewer.titleValue" [ngModelOptions]="{standalone: true}" #managerRef="ngModel"></ion-input>\n\n                <ion-input *ngIf="reviewer?.fieldType==\'text\' && reviewer.regEx==null" class="form-control borderBottom" #managerRef [readonly]="!reviewer?.isEditable" [(ngModel)]="reviewer.titleValue" [ngModelOptions]="{standalone: true}" #managerRef="ngModel">\n                </ion-input>\n\n                <ion-textarea *ngIf="reviewer?.fieldType==\'textArea\'" class="form-control borderBottom" #managerRef [(ngModel)]="reviewer.titleValue" [readonly]="!reviewer?.isEditable" [ngModelOptions]="{standalone: true}" #managerRef="ngModel" (ionFocus)="reviewer?.isEditable ? expandTextArea(reviewer?.title, reviewer?.titleValue, reviewerIndex, \'reviewerFieldList\', \'titleValue\') : null"></ion-textarea>\n            </div>\n        </div>\n    </form>\n\n</ion-content>\n\n\n<ion-footer class="footerBg">\n    <div *ngIf="kraId != \'0\'" class="saveResetFooter">\n        <div *ngIf="processType !=\'Mid-Term\'">\n            <button class="resetbtn textCapitalize" ion-button round (click)="resetForm(kraId)">Reset</button>\n        </div>\n        <div *ngIf="processType ==\'Mid-Term\'">\n            <button class="resetbtn textCapitalize" ion-button round (click)="resetMidTermForm()">Reset</button>\n        </div>\n        <div class="saveSubmitParent">\n            <!-- <button class="savebtn textCapitalize" ion-button round (click)="saveSubKra()">Save</button> -->\n            <button *ngIf="!showSaveKRA && processType !=\'Mid-Term\'\n      && processType !=\'Annual\' " class="submitKraBtn textCapitalize" ion-button round (click)="saveSubKra()">Add Sub\n        KRA</button>\n            <button *ngIf="showSaveKRA && processType !=\'Mid-Term\' && processType !=\'Annual\'" class="submitKraBtn textCapitalize" ion-button round (click)="saveSubKra()">Save Sub\n        KRA</button>\n            <button *ngIf="!showSaveKRA && (processType==\'Mid-Term\' || processType ==\'Annual\')" class="submitKraBtn textCapitalize" ion-button round (click)="saveSubKraForMidterm()">Save Sub KRA\n      </button>\n            <button *ngIf="showSaveKRA && (processType==\'Mid-Term\' || processType ==\'Annual\')" class="submitKraBtn textCapitalize" ion-button round (click)="saveSubKra()">Save Sub KRA\n      </button>\n        </div>\n    </div>\n</ion-footer>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zendeavor\zendeavor-add-sub-kras\zendeavor-add-sub-kras.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_6__providers_http_angular_http_angular__["a" /* HttpAngularProvider */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_speechRecognition_speechRecognition__["a" /* SpeechRecognitionUtility */], __WEBPACK_IMPORTED_MODULE_2__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_2__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* Platform */], __WEBPACK_IMPORTED_MODULE_9__providers_attachment_attachment__["a" /* Attachment */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_0__providers_download_download__["a" /* Download */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_keyboard__["a" /* Keyboard */]])
    ], ZendeavorAddSubKrasPage);
    return ZendeavorAddSubKrasPage;
}());

//# sourceMappingURL=zendeavor-add-sub-kras.js.map

/***/ })

});
//# sourceMappingURL=46.js.map