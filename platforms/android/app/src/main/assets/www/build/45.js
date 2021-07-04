webpackJsonp([45],{

/***/ 1448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZendeavorGoalSettingPageModule", function() { return ZendeavorGoalSettingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_directives_module__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_tooltips__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_formService_form_control_service__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__zendeavor_goal_setting__ = __webpack_require__(1871);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ZendeavorGoalSettingPageModule = /** @class */ (function () {
    function ZendeavorGoalSettingPageModule() {
    }
    ZendeavorGoalSettingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__zendeavor_goal_setting__["a" /* ZendeavorGoalSettingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__zendeavor_goal_setting__["a" /* ZendeavorGoalSettingPage */]),
                __WEBPACK_IMPORTED_MODULE_1_ionic_tooltips__["a" /* TooltipsModule */],
                __WEBPACK_IMPORTED_MODULE_0__directives_directives_module__["a" /* DirectivesModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__providers_formService_form_control_service__["a" /* FormControlService */]
            ]
        })
    ], ZendeavorGoalSettingPageModule);
    return ZendeavorGoalSettingPageModule;
}());

//# sourceMappingURL=zendeavor-goal-setting.module.js.map

/***/ }),

/***/ 1871:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZendeavorGoalSettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_performance_measuretext_area_performance_measuretext_area__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_speechRecognition_speechRecognition__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_formService_form_control_service__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_http_angular_http_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular_navigation_nav_params__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_constants__ = __webpack_require__(37);
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
 * Generated class for the ZendeavorGoalSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ZendeavorGoalSettingPage = /** @class */ (function () {
    function ZendeavorGoalSettingPage(navCtrl, navParams, httpProvider, utility, modalCtrl, httpAngularProvider, zone, actionSheetCtrl, formBuilder, formCtrlService, alertCtrl, cdr, inappbrowser, speechRecognitionUtility, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.utility = utility;
        this.modalCtrl = modalCtrl;
        this.httpAngularProvider = httpAngularProvider;
        this.zone = zone;
        this.actionSheetCtrl = actionSheetCtrl;
        this.formBuilder = formBuilder;
        this.formCtrlService = formCtrlService;
        this.alertCtrl = alertCtrl;
        this.cdr = cdr;
        this.inappbrowser = inappbrowser;
        this.speechRecognitionUtility = speechRecognitionUtility;
        this.popoverCtrl = popoverCtrl;
        this.KRADetailsUrl = "getKraData";
        this.saveKRAUrl = "saveKraData";
        this.addKRAUrl = 'addKra';
        this.deleteKraUrl = 'removeKra';
        this.KRADetails = {};
        this.kraId = '0';
        this.isServiceCallOn = false;
        this.formDetails = [];
        this.tooltipEvent = 'click';
        this.submitted = false;
        this.submitGoalsUrl = 'submitKra';
        this.isMidtermDisabled = true;
        this.isEndTermDisabled = true;
        this.reviewedKRACheckbx = false;
        this.showMidEndTermValues = false;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'yes',
            shouldPauseOnSuspend: 'yes',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'yes',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        this.performancetext = '';
        this.prevtext = '';
        this.showLoader = false;
        this.showMic = true;
        this.deleteSubKraUrl = 'removeSubKra';
        this.maxEndDateArray = [];
        this.invalidMilestoneDate = false;
        this.userRole = this.navParams.get('userRole');
        this.userID = this.navParams.get('userID');
        this.selectedGoalYear = this.navParams.get('kraYear');
        this.isDirectApprove = this.navParams.get('isDirectApprove');
        console.log('isDirectApprove', this.isDirectApprove);
    }
    ZendeavorGoalSettingPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var isSubmitted = this.navParams.get('submitStatus');
        var kraId = this.navParams.get('kraId');
        var title = this.navParams.get('title');
        if (!this.utility.isEmptyOrNullOrUndefined(isSubmitted) && isSubmitted == 'false' && this.userRole == '1') {
            this.kraId = kraId;
            this.getKRADetails(this.kraId);
        }
        /**
           * If the status of the KRA is submitted and the userRole is manager then user should redirected to Goals TeamList page.
           */
        if (!this.utility.isEmptyOrNullOrUndefined(isSubmitted) && isSubmitted == 'true' && this.userRole == '2') {
            this.navCtrl.popTo('TeamListForGoalSettingPage');
        }
        else if (!this.utility.isEmptyOrNullOrUndefined(isSubmitted) && isSubmitted == 'false' && this.userRole == '2') {
            this.kraId = kraId;
            this.getKRADetails(this.kraId);
        }
        else {
            this.getKRADetails(this.kraId);
        }
        // this.KRAFormGroup.valueChanges
        this.GoalsForm.valueChanges.subscribe(function (response) {
            console.log("response", response);
            console.log("this.GoalsForm.controls", _this.GoalsForm.controls);
        });
    };
    ZendeavorGoalSettingPage.prototype.ngOnInit = function () {
        this.GoalsForm = this.formBuilder.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required],
            milestoneDate: [{ value: '', disabled: false }, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required],
            weightage: [{ value: '', disabled: false }, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required],
            KRAtype: [{ value: '', disabled: false }, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required],
            midTermFloor: [{ value: '', disabled: true }],
            midTermTarget: [{ value: '', disabled: true }],
            endTermFloor: [{ value: '', disabled: true }, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required],
            endTermTarget: [{ value: '', disabled: true }, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required],
            performanceMeasure: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required]
        }, { validator: this.formValidator });
        // this.GoalsForm.controls.midTermFloor.disable();
        // this.GoalsForm.controls.midTermTarget.disable();
        // this.GoalsForm.controls.endTermFloor.disable();
        // this.GoalsForm.controls.endTermTarget.disable();
        // this.GoalsForm.get('midTermFloor').disable()
        // this.GoalsForm.get('midTermTarget').disable()
        // this.GoalsForm.get('endTermFloor').disable()
        // this.GoalsForm.get('endTermTarget').disable()
        // this.GoalsForm.get('midTermFloor').updateValueAndValidity()
        // this.GoalsForm.get('midTermTarget').updateValueAndValidity()
        // this.GoalsForm.get('endTermFloor').updateValueAndValidity()
        // this.GoalsForm.get('endTermTarget').updateValueAndValidity()
        // this.formInitialValues = this.GoalsForm.value
        // setTimeout(() => this.GoalsForm.disable(), 2000);
        // this.GoalsForm.statusChanges.subscribe((res) => {
        //   console.log("msdjs", this.GoalsForm)
        // })
    };
    ZendeavorGoalSettingPage.prototype.getKRADetails = function (kraId) {
        var _this = this;
        this.utility.updateLoader(true);
        var kraDetails = {
            url: this.KRADetailsUrl,
            data: {
                "userId": !this.utility.isEmptyOrNullOrUndefined(this.userID) ? this.userID : '',
                "kraId": kraId,
                // "subKraId": "1432011",
                "role": this.userRole,
                "year": this.selectedGoalYear || '',
                // "processType": "Annual",
                "isDirectApprove": this.isDirectApprove
            },
            zenDeavorURL: true
        };
        this.isServiceCallOn = true;
        this.httpProvider.http.commonService(kraDetails).subscribe(function (response) {
            _this.isServiceCallOn = false;
            if (response) {
                _this.showMidEndTermValues = false;
                _this.utility.updateLoader(false);
                _this.GoalsForm.reset();
                if (response['details']) {
                    _this.KRADetails = response['details'];
                    _this.formDetails = response['details'].fieldDetails;
                    _this.userID = _this.KRADetails.userId;
                    _this.goalsDetails = _this.KRADetails.goalsDetails;
                    _this.finalStatus = _this.KRADetails.finalStatus;
                    _this.milestoneEndDate = _this.KRADetails.maxDate;
                    if (!_this.utility.isEmptyOrNullOrUndefined(_this.milestoneEndDate)) {
                        _this.maxEndDateArray = _this.milestoneEndDate.split('-');
                        _this.maxYear = _this.maxEndDateArray[0];
                        _this.maxMonth = _this.maxEndDateArray[1];
                    }
                    // this.GoalsForm.get('milestoneDate').valueChanges.subscribe(
                    //   milesDate => {
                    //     console.log('Username changed:' + milesDate);
                    //     if (!this.utility.isEmptyOrNullOrUndefined(milesDate)) {
                    //       this.GoalsForm.get('milestoneDate').setValidators([this.maxDateValidator])
                    //       // this.GoalsForm.get('milestoneDate').updateValueAndValidity()
                    //     }
                    //   }
                    // );
                    // console.log("fromDetails", this.formDetails)
                    // this.isEndTermReadonly = false
                    if (_this.kraId != '-1') {
                        _this.formDetails.forEach(function (field) {
                            if (field.bindWith == 'year' && field.fieldType == 'label') {
                                _this.selectedGoalYear = field.titleValue;
                            }
                            if (field.bindWith == 'contributor' && _this.kraId == '0') {
                                _this.associateRoleStatus = field.titleValue;
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
                                // console.log('kra type', field.titleValue)
                                _this.kraTypeValue = field.titleValue;
                            }
                            if (field.bindWith == "weightage") {
                                _this.kraWeightageValue = field.titleValue;
                            }
                            if (field.bindWith == "title") {
                                _this.kraFormsTitle = field.titleValue;
                            }
                            if (field.bindWith == 'performanceMeasure') {
                                _this.performanceMeasureValue = field.titleValue;
                            }
                        });
                        // console.log("midTermDetails", this.midTermDetails)
                        if (!_this.utility.isEmptyOrNullOrUndefined(_this.midTermDetails)) {
                            _this.midtermfloorData = _this.midTermDetails[0];
                            _this.midtermTargetData = _this.midTermDetails[1];
                            // console.log("midtermfloorData", this.midtermfloorData)
                        }
                        if (!_this.utility.isEmptyOrNullOrUndefined(_this.endTermDetails)) {
                            _this.endtermfloorData = _this.endTermDetails[0];
                            _this.endtermTargetData = _this.endTermDetails[1];
                            // console.log("midtermfloorData", this.endTermDetails)
                        }
                    }
                    if (_this.kraId != '-1' && _this.kraId != '0') {
                        _this.GoalsForm.setValue({
                            title: _this.kraFormsTitle,
                            milestoneDate: _this.milestoneDate,
                            weightage: _this.kraWeightageValue,
                            KRAtype: _this.kraTypeValue,
                            midTermFloor: _this.midtermfloorData.titleValue,
                            midTermTarget: _this.midtermTargetData.titleValue,
                            endTermFloor: _this.endtermfloorData.titleValue,
                            endTermTarget: _this.endtermTargetData.titleValue,
                            performanceMeasure: _this.performanceMeasureValue
                        });
                        _this.cdr.detectChanges();
                        // console.log("this.midtermfloorData.titleValue", this.midtermfloorData.titleValue)
                        // console.log("this.midtermTargetData.titleValue", this.midtermTargetData.titleValue)
                        // console.log(" this.endtermfloorData.titleValue", this.endtermfloorData.titleValue)
                        // console.log("this.endtermTargetData.titleValue", this.endtermTargetData.titleValue)
                        if (!_this.utility.isEmptyOrNullOrUndefined(_this.kraTypeValue) && _this.kraTypeValue == 'Qualitative') {
                            // this.isMidtermDisabled = true
                            // this.isEndTermDisabled = true
                            _this.showMidEndTermValues = true;
                            // this.GoalsForm.controls.midTermFloor.disable();
                            // this.GoalsForm.controls.midTermTarget.disable();
                            // this.GoalsForm.controls.endTermFloor.disable();
                            // this.GoalsForm.controls.endTermTarget.disable();
                        }
                        else if (_this.utility.isEmptyOrNullOrUndefined(_this.kraTypeValue)) {
                            // this.GoalsForm.controls.midTermFloor.disable();
                            // this.GoalsForm.controls.midTermTarget.disable();
                            // this.GoalsForm.controls.endTermFloor.disable();
                            // this.GoalsForm.controls.endTermTarget.disable();
                            _this.showMidEndTermValues = false;
                        }
                        // incase of Quantitative
                        else {
                            // this.GoalsForm.controls.midTermFloor.enable();
                            // this.GoalsForm.controls.midTermTarget.enable();
                            // this.GoalsForm.controls.endTermFloor.enable();
                            // this.GoalsForm.controls.endTermTarget.enable();
                            _this.showMidEndTermValues = true;
                        }
                        if (_this.midtermInfo.isEditable) {
                            _this.GoalsForm.controls.midTermFloor.enable();
                            _this.GoalsForm.controls.midTermTarget.enable();
                        }
                        if (_this.endtermInfo.isEditable) {
                            _this.GoalsForm.controls.endTermFloor.enable();
                            _this.GoalsForm.controls.endTermTarget.enable();
                        }
                        if (!_this.midtermInfo.isEditable) {
                            _this.GoalsForm.controls.midTermFloor.disable();
                            _this.GoalsForm.controls.midTermTarget.disable();
                        }
                        if (!_this.endtermInfo.isEditable) {
                            _this.GoalsForm.controls.endTermFloor.disable();
                            _this.GoalsForm.controls.endTermTarget.disable();
                        }
                        _this.cdr.detectChanges();
                    }
                    // console.log("GoalsForm.setValue", this.GoalsForm.value)
                }
                // this.GoalsForm.patchValue({
                //   "milestoneDate": this.milestoneDate
                // })
                // changed from uncommented
                // this.GoalsForm.get('milestoneDate').setValue(this.milestoneDate);
                // this.GoalsForm.get('KRAtype').setValue(this.kraTypeValue);
                // changed from uncommented
                // console.log("after setting values form", this.GoalsForm.value)
            }
        }, function (err) {
            _this.utility.updateLoader(false);
            _this.utility.showAlert('Goal Setting', __WEBPACK_IMPORTED_MODULE_11__app_constants__["a" /* Constants */]["Server_Error_Message"]);
        });
    };
    ZendeavorGoalSettingPage.prototype.saveKRA = function (gotonextStatus, form, btnType) {
        var _this = this;
        // console.log("GoalsForm", form)
        // console.log("btnType", btnType)
        this.submitted = true;
        // let tempvalue = this.GoalsForm.get('milestoneDate').setValidators([this.maxDateValidator])
        // let tempvalue=this.GoalsForm.get('milestoneDate').setValidators([this.maxDateValidator])
        // console.log("tempvalue", tempvalue)
        if (this.invalidMilestoneDate) {
            this.submitted = true;
            return;
        }
        if (this.GoalsForm.invalid && this.kraId != '0') {
            // this.utility.presentAlert("Please fill all the fields")
            this.submitted = true;
            return;
        }
        if (this.kraId == '1' && this.KRADetails.isSubKraIncomplete) {
            var alertMsg = this.KRADetails.subKraErrorAlert;
            this.utility.presentAlert(alertMsg);
            return;
        }
        if (this.kraId == '0') {
            if (this.utility.isEmptyOrNullOrUndefined(this.selectedGoalYear)) {
                this.utility.presentAlert('Please select year');
                return;
            }
            if (this.utility.isEmptyOrNullOrUndefined(this.associateRoleStatus)) {
                this.utility.presentAlert('Please select Role');
                return;
            }
            if (this.utility.isEmptyOrNullOrUndefined(this.selectedGoalYear) && (this.utility.isEmptyOrNullOrUndefined(this.associateRoleStatus))) {
                this.utility.presentAlert('Please select year and Role');
                return;
            }
            if (this.KRADetails.isNewKra) {
                // this.utility.presentAlert('New KRA')
                this.showAlertForNewGoalSetting().then((function (response) {
                    // console.log("response", response)
                    if (true) {
                        _this.savekraForHomePage();
                        _this.gotoNextButton();
                    }
                }));
                return;
            }
            this.saveDetails = {
                url: this.saveKRAUrl,
                data: {
                    "userId": !this.utility.isEmptyOrNullOrUndefined(this.userID) ? this.userID : '',
                    "role": this.userRole,
                    "kraId": 0,
                    "year": this.selectedGoalYear,
                    "contributor": this.associateRoleStatus == 'Individual Contributor' ? 1 : 2,
                    "isNew": true,
                    "finalStatus": this.finalStatus
                },
                zenDeavorURL: true
            };
        }
        else {
            // this.GoalsForm.get('midTermFloor').setValidators(this.passwordMatchValidator)
            // this.GoalsForm.get('midTermFloor').updateValueAndValidity()
            // this.GoalsForm.get('midTermTarget').value,
            // let kratypeNumber = this.GoalsForm.get('KRAtype').value == 'Qualitative' ? '1' : '2'
            // console.log('kratype number', kratypeNumber)
            this.saveDetails = {
                url: this.saveKRAUrl,
                data: {
                    "userId": !this.utility.isEmptyOrNullOrUndefined(this.userID) ? this.userID : '',
                    "year": this.selectedGoalYear || '',
                    "role": this.userRole,
                    "kraId": this.kraId,
                    "title": this.GoalsForm.get('title').value,
                    "weightage": this.GoalsForm.get('weightage').value,
                    "milestoneDate": this.GoalsForm.get('milestoneDate').value,
                    "annualTarget": this.GoalsForm.get('endTermTarget').value,
                    "annualFloor": this.GoalsForm.get('endTermFloor').value,
                    "midtermFloor": this.GoalsForm.get('midTermFloor').value,
                    "midtermTarget": this.GoalsForm.get('midTermTarget').value,
                    "performanceMeasure": this.GoalsForm.get('performanceMeasure').value,
                    "kraType": this.kraTypeValue == 'Quantitative' ? '1' : '2',
                    "totalKra": this.KRADetails.totalKra
                },
                zenDeavorURL: true
            };
        }
        this.utility.updateLoader(true);
        this.httpProvider.http.commonService(this.saveDetails).subscribe(function (response) {
            if (response) {
                _this.utility.updateLoader(false);
                if (response['status'] && response['status'].statusCode == '1') {
                    var statusMessage = response['status'].statusMessage;
                    _this.submitted = false;
                    _this.utility.presentAlert(statusMessage).then(function (res) {
                        if (gotonextStatus && btnType == 'saveOnFooterClick') {
                            // this.GoalsForm.reset()
                            _this.gotoNextButton();
                        }
                        else if (btnType == 'saveOnHeaderClick') {
                            // this.getKRADetails(this.currentKraId)
                            // this.gotoNextButton()
                            _this.gotoSelectedKRA();
                        }
                        // else{
                        // }
                    });
                }
            }
        }, function (err) {
            _this.utility.updateLoader(false);
            _this.utility.showAlert('Goal Setting', __WEBPACK_IMPORTED_MODULE_11__app_constants__["a" /* Constants */]["Server_Error_Message"]);
        });
    };
    ZendeavorGoalSettingPage.prototype.goToQuestion = function () {
        // this.navCtrl.push("QuestionsPage")
        this.navCtrl.push('AddPage', { 'type': 'addQuestion', 'questionId': null, 'answerType': null });
    };
    /**
     * Toggle the  button for selection
     * @param kraId contain the selceted KRA no.(unique)
     * @param subKraId contain the subKRA no. (unique)
     * @param kraTitle contain the selected KRA Name
     * @param kraWeightage contain the weightage of selceted KRA
     */
    ZendeavorGoalSettingPage.prototype._getSelectedData = function (kraId, kraTitle, kraWeightage) {
        // console.log("hello id", this.kraId);
        // console.log("this.GoalsForm.dirty", this.GoalsForm.dirty);
        this.submitted = false;
        this.previouskraId = this.kraId;
        this.currentKraId = kraId;
        if (this.previouskraId == '-1' || this.previouskraId == '0') {
            this.kraId = kraId;
            if (this.previouskraId == '0')
                this.savekraForHomePage();
            this.getKRADetails(kraId);
        }
        else {
            if (this.GoalsForm.dirty && this.GoalsForm.touched)
                this.saveDataOnNextAlert(this.kraId);
            else {
                this.kraId = kraId;
                this.getKRADetails(kraId);
            }
        }
        // this.kraId = previouskraId
        // if (this.GoalsForm.touched) {
        //   this.presentConfirmAlert(kraId)
        // } else {
        // this.submitted = false;
        // this.getKRADetails(kraId)
        // }
        // let alert = this.utility.presentConfirmation("You have made some changes.Do you want to save changes", 'Save changes?')
        // alert.then((res) => {
        //   console.log("response", res)
        //   // this.onApproveAllClicked();
        // })
        // this.kraId = kraId
        // this.showWhenData = kraTitle
        // this.kraWeightage = kraWeightage
        // if (kraTitle == 'Preview')
        //   this.KRADetailsUrl = 'getKraDetails'
        // this.getKRADetails(kraId)
        // this.resetKraScore(this.kraId);
        // if (!this.utility.isEmptyOrNullOrUndefined(this.achievement))
        //   this.displayScore(event, this.achievement)
    };
    ZendeavorGoalSettingPage.prototype.urlify = function (text) {
        if (text != undefined) {
            var newText = text.replace(/\n/g, "<br/>");
            // console.log(newText)
            return newText;
        }
    };
    ZendeavorGoalSettingPage.prototype.onRoleSelected = function (roleValue) {
        this.associateRoleStatus = roleValue;
        // console.log("this.associateRoleStatus", this.associateRoleStatus)
    };
    /**
    * clicked on next button to move to next section
    */
    ZendeavorGoalSettingPage.prototype.gotoNextButton = function () {
        for (var i = 0; i < this.KRADetails.kraStatusList.length; i++) {
            if (this.KRADetails.kraStatusList[i].kraId == this.kraId) {
                var count = (i != this.KRADetails.kraStatusList.length - 1) ? (i + 1) : i;
                // this.showWhenData = this.KRADetails.kraStatusList[count].title
                this.kraId = this.KRADetails.kraStatusList[count].kraId;
                break;
            }
        }
        this.getKRADetails(this.kraId);
        // console.log("this.kraId", this.kraId);
        // this.resetKraScore(this.kraId);
    };
    ZendeavorGoalSettingPage.prototype.gotoSelectedKRA = function () {
        // for (let i = 0; i < this.KRADetails.kraStatusList.length; i++) {
        //   if (this.KRADetails.kraStatusList[i].kraId == this.kraId) {
        //     // let count = (i != this.KRADetails.kraStatusList.length - 1) ? (i + 1) : i
        //     // this.showWhenData = this.KRADetails.kraStatusList[count].title
        //     this.kraId = this.KRADetails.kraStatusList[i].kraId
        //     break
        //   }
        // }
        this.kraId = this.currentKraId;
        this.getKRADetails(this.kraId);
        // console.log("this.kraId", this.kraId);
        // this.resetKraScore(this.kraId);
    };
    ZendeavorGoalSettingPage.prototype.onSelectChange = function (selectedKRAtype) {
        // console.log("event", selectedKRAtype)
        this.kraTypeValue = selectedKRAtype;
        // this.KRAFormGroup.patchValue({
        //   "Mid Term Floor": "100"
        // }) endTermFloor: [{ value: '', disabled: true }, Validators.required],
        // console.log("GoalsForm", this.GoalsForm)
        // this.GoalsForm.controls.midTermFloor.enable();
        // this.GoalsForm.controls.midTermTarget.enable();
        // this.GoalsForm.controls.endTermFloor.enable();
        // this.GoalsForm.controls.endTermTarget.enable();
        // this.GoalsForm.get('midTermFloor').enable()
        // this.GoalsForm.get('midTermTarget').enable()
        // this.GoalsForm.get('endTermFloor').enable()
        // this.GoalsForm.get('endTermTarget').enable()
        // this.GoalsForm.controls['midTermFloor'].enable();
        // console.log("GoalsForm", this.GoalsForm)
        // if(this.utility.isEmptyOrNullOrUndefined())
        // this.GoalsForm.get('midTermFloor').updateValueAndValidity()
        // this.GoalsForm.get('midTermTarget').updateValueAndValidity()
        // this.GoalsForm.get('endTermFloor').updateValueAndValidity()
        // this.GoalsForm.get('endTermTarget').updateValueAndValidity()
        // this.cdr.detectChanges()
        // this.isMidtermDisabled = false
        // this.isEndTermDisabled = false
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
            this.cdr.detectChanges();
        }
        else if (!this.utility.isEmptyOrNullOrUndefined(selectedKRAtype)) {
            this.GoalsForm.controls.midTermFloor.enable();
            this.GoalsForm.controls.midTermTarget.enable();
            this.GoalsForm.controls.endTermFloor.enable();
            this.GoalsForm.controls.endTermTarget.enable();
            this.showMidEndTermValues = true;
            this.cdr.detectChanges();
        }
    };
    ZendeavorGoalSettingPage.prototype.onWeightageChange = function (event) {
    };
    ZendeavorGoalSettingPage.prototype.addNewKRA = function (kraid) {
        var _this = this;
        if (kraid == '5')
            kraid = '6';
        else
            kraid = '7';
        this.utility.updateLoader(true);
        var kraDetails = {
            url: this.addKRAUrl,
            data: {
                "userId": !this.utility.isEmptyOrNullOrUndefined(this.userID) ? this.userID : '',
                "kraId": kraid,
                // "subKraId": "1432011",
                "role": this.userRole,
                "year": this.selectedGoalYear
                // "processType": "Annual",
                // "isDirectApprove": this.isDirectApproveStatus
            },
            zenDeavorURL: true
        };
        // this.isServiceCallOn = true
        this.httpProvider.http.commonService(kraDetails).subscribe(function (response) {
            _this.isServiceCallOn = false;
            if (response) {
                _this.utility.updateLoader(false);
                if (response['status']) {
                    _this.kraId = kraid;
                    _this.getKRADetails(kraid);
                }
            }
        }, function (err) {
            _this.utility.updateLoader(false);
            _this.utility.showAlert('Goal Setting', __WEBPACK_IMPORTED_MODULE_11__app_constants__["a" /* Constants */]["Server_Error_Message"]);
        });
    };
    ZendeavorGoalSettingPage.prototype.deleteKra = function (kraid) {
        var _this = this;
        // console.log("kraid on delte", kraid)
        this.utility.updateLoader(true);
        var kraDetails = {
            url: this.deleteKraUrl,
            data: {
                "userId": !this.utility.isEmptyOrNullOrUndefined(this.userID) ? this.userID : '',
                "kraId": kraid,
                // "subKraId": "1432011",
                "role": this.userRole,
                "year": this.selectedGoalYear
                // "processType": "Annual",
                // "isDirectApprove": this.isDirectApproveStatus
            },
            zenDeavorURL: true
        };
        // this.isServiceCallOn = true
        this.httpProvider.http.commonService(kraDetails).subscribe(function (response) {
            _this.isServiceCallOn = false;
            if (response) {
                _this.utility.updateLoader(false);
                if (response['status'] && response['status'].statusCode == '1') {
                    if (kraid == '6')
                        _this.kraId = '5';
                    else if (kraid == '7')
                        _this.kraId = '6';
                    _this.getKRADetails(_this.kraId);
                }
            }
        }, function (err) {
            _this.utility.updateLoader(false);
            _this.utility.showAlert('Goal Setting', __WEBPACK_IMPORTED_MODULE_11__app_constants__["a" /* Constants */]["Server_Error_Message"]);
        });
    };
    /**
    * Open Summary / Review Page
    */
    ZendeavorGoalSettingPage.prototype.openReview = function () {
        this.navCtrl.push('ReviewGoalsPage', {
            userID: this.userID,
            // userID: this.KRADetails.userId,
            userRole: this.userRole,
            kraYear: this.selectedGoalYear,
            isDirectApprove: this.isDirectApprove
        });
    };
    // "You have made some changes.Do you want to save changes", 'Save changes?'
    ZendeavorGoalSettingPage.prototype.presentConfirmAlert = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                // title: 'Submit KRA',
                message: 'Are you sure you want to submit?',
                buttons: [
                    {
                        text: 'Cancel',
                        handler: function () {
                            // reject(false);
                            // return 
                            // reject();
                        }
                    },
                    {
                        text: 'Submit',
                        handler: function () {
                            resolve(true);
                            // return 
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    /**
     *Final submit kra
     */
    ZendeavorGoalSettingPage.prototype.submitkra = function () {
        var _this = this;
        // if (!this.isDirectApproveStatus) {
        for (var i = 0; i < this.KRADetails.kraStatusList.length; i++) {
            if (this.KRADetails.kraStatusList.kraId != '0' && this.KRADetails.kraStatusList.kraId != '-1') {
                if (this.KRADetails.kraStatusList[i].status == "incomplete") {
                    this.utility.presentAlert("Please fill all the KRAs");
                    return;
                }
            }
        }
        if (!this.reviewedKRACheckbx) {
            this.utility.presentAlert("Please select the check-box for final submission");
            return;
        }
        if (!this.KRADetails.isWeightageCorrect) {
            this.utility.presentAlert(this.KRADetails.weightageAlert);
            return;
        }
        this.presentConfirmAlert().then(function (userResponse) {
            if (!_this.utility.isEmptyOrNullOrUndefined(userResponse) && userResponse) {
                _this.utility.updateLoader(true);
                var kraDetails = {
                    url: _this.submitGoalsUrl,
                    data: {
                        "userId": !_this.utility.isEmptyOrNullOrUndefined(_this.userID) ? _this.userID : '',
                        // "kraId": ,
                        // "subKraId": "1432011",
                        "role": _this.userRole,
                        "year": _this.selectedGoalYear,
                        // "processType": "Annual",
                        "isDirectApprove": _this.isDirectApprove
                    },
                    zenDeavorURL: true
                };
                // this.isServiceCallOn = true
                _this.httpProvider.http.commonService(kraDetails).subscribe(function (response) {
                    _this.isServiceCallOn = false;
                    if (response) {
                        _this.utility.updateLoader(false);
                        if (response['status'] && response['status'].statusCode == '1') {
                            var statusMessage = response['status'].statusMessage;
                            _this.utility.presentAlert(statusMessage).then(function (res) {
                                _this.getKRADetails('-1');
                            });
                        }
                    }
                }, function (err) {
                    _this.utility.updateLoader(false);
                    _this.utility.showAlert('Goal Setting', __WEBPACK_IMPORTED_MODULE_11__app_constants__["a" /* Constants */]["Server_Error_Message"]);
                });
            }
        });
    };
    ZendeavorGoalSettingPage.prototype.resetForm = function (kraId) {
        var _this = this;
        this.formDetails.forEach(function (formField) {
            if (formField.isEditable && formField.bindWith == 'title') {
                _this.GoalsForm.get('title').reset();
            }
            if (formField.isEditable && formField.bindWith == 'weightage') {
                _this.GoalsForm.get('weightage').reset();
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
        // this.GoalsForm.reset()
        // if (kraId == '1') {
        //   if (this.kraTypeValue == 'Quantitative') {
        //     this.GoalsForm.patchValue({
        //       KRAtype: '',
        //       midTermFloor: '',
        //       midTermTarget: '',
        //       endTermFloor: '',
        //       endTermTarget: ''
        //     })
        //   }
        //   else if (this.kraTypeValue == 'Qualitative') {
        //     this.GoalsForm.patchValue({
        //       KRAtype: '',
        //     })
        //   }
        // }
        // else {
        //   this.GoalsForm.reset()
        // }
    };
    ZendeavorGoalSettingPage.prototype.goToDashboard = function () {
        this.navCtrl.pop();
    };
    ZendeavorGoalSettingPage.prototype.formValidator = function (group) {
        if (group) {
            console.log(group);
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
            // if (milestoneDateVal != '' && this.milestoneEndDate != "") {
            //   let datesArray = milestoneDateVal.split('-')
            //   // ["2021", "03", "31"]
            //   console.log("datesArray", datesArray)
            //   if (datesArray[0] == this.maxYear) {
            //     console.log("in 2021")
            //     if (datesArray[1] > this.maxMonth) {
            //       console.log(">03", datesArray[1] > '03')
            //       return { invalidMilestoneDate: true };
            //     }
            //   }
            // }
        }
        return null;
    };
    ZendeavorGoalSettingPage.prototype.openRedirectCommentsModal = function (commentData, redirectType) {
        var alert = this.alertCtrl.create({
            title: 'Appraiser Comments :' + redirectType,
            message: commentData,
            // header: 'Response Pending',
            mode: 'md',
            cssClass: 'redirectedCommentsAlert',
            // message: 'Ur msg',
            buttons: [
                // {
                //   text: 'Cancel',
                //   role: 'cancel',
                //   handler: () => {
                //     console.log('Cancel clicked');
                //     this.getKRADetails(kraid)
                //   }
                // },
                {
                    text: 'OK',
                    role: 'cancel',
                    // cssClass: 'btnround btncancel',
                    handler: function () {
                        // console.log('Buy clicked');
                        // this.saveKRA(true, this.GoalsForm, 'saveOnHeaderClick')
                        // this.getKRADetails(this.kraId)
                    }
                }
            ]
        });
        alert.present();
    };
    ZendeavorGoalSettingPage.prototype.saveDataOnNextAlert = function (kraId) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Save ',
            message: 'Do you want to Save/Discard.',
            // header: 'Response Pending',
            mode: 'md',
            cssClass: 'redirectedCommentsAlert',
            // message: 'Ur msg',
            buttons: [
                {
                    text: 'Discard',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.kraId = _this.currentKraId;
                        _this.getKRADetails(_this.kraId);
                        // this.gotoNextButton()
                    }
                },
                {
                    text: 'Save',
                    // role: 'cancel',
                    // cssClass: 'btnround btncancel',
                    handler: function () {
                        _this.kraId = kraId;
                        _this.saveKRA(true, _this.GoalsForm, 'saveOnHeaderClick');
                        // this.getKRADetails(kraId)
                    }
                }
            ]
        });
        alert.present();
    };
    ZendeavorGoalSettingPage.prototype.savekraForHomePage = function () {
        // if (this.utility.isEmptyOrNullOrUndefined(this.selectedGoalYear)) {
        //   this.utility.presentAlert('Please select year')
        //   return;
        // }
        // if (this.utility.isEmptyOrNullOrUndefined(this.associateRoleStatus)) {
        //   this.utility.presentAlert('Please select Role')
        //   return;
        // }
        var _this = this;
        // if (this.utility.isEmptyOrNullOrUndefined(this.selectedGoalYear) && (this.utility.isEmptyOrNullOrUndefined(this.associateRoleStatus))) {
        //   this.utility.presentAlert('Please select year and Role')
        //   return;
        // }
        if (this.userRole == '1') {
            this.saveDetails = {
                url: this.saveKRAUrl,
                data: {
                    "userId": !this.utility.isEmptyOrNullOrUndefined(this.userID) ? this.userID : '',
                    "role": this.userRole,
                    "kraId": 0,
                    "year": this.selectedGoalYear,
                    "contributor": this.associateRoleStatus == 'Individual Contributor' ? 1 : 2,
                    "isNew": true,
                    "finalStatus": this.finalStatus
                },
                zenDeavorURL: true
            };
            this.utility.updateLoader(true);
            this.httpProvider.http.commonService(this.saveDetails).subscribe(function (response) {
                if (response) {
                    _this.utility.updateLoader(false);
                    if (response['status'] && response['status'].statusCode == '1') {
                        // let statusMessage = response['status'].statusMessage
                        _this.submitted = false;
                        // this.utility.presentAlert(statusMessage).then((res) => {
                        // if () {
                        // this.GoalsForm.reset()
                        // this.gotoNextButton()
                        // }
                        // else{
                        // }
                        // })
                    }
                }
            }, function (err) {
                _this.utility.updateLoader(false);
                _this.utility.showAlert('Goal Setting', __WEBPACK_IMPORTED_MODULE_11__app_constants__["a" /* Constants */]["Server_Error_Message"]);
            });
        }
    };
    ZendeavorGoalSettingPage.prototype.openGuidelinesPdf = function () {
        var encodedUrl = encodeURI(this.KRADetails.kraGuideLinesPdfUrl);
        var target = "_system";
        var browser = this.inappbrowser.create(encodedUrl, target, this.options);
    };
    ZendeavorGoalSettingPage.prototype.startSpeech = function () {
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
                // console.log("value", value)
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
    ZendeavorGoalSettingPage.prototype.gotoAddSubKra = function (subKRAList, isNewKra) {
        // console.log("subKRAList", subKRAList)
        if (this.KRADetails.isMaxLimitReached) {
            this.utility.presentAlert(this.KRADetails.maxLimitAlert);
            return;
        }
        this.navCtrl.push('ZendeavorAddSubKrasPage', {
            userID: this.userID,
            // userID: this.KRADetails.userId,
            userRole: this.userRole,
            kraYear: this.selectedGoalYear,
            isDirectApprove: this.isDirectApprove,
            subKRAList: subKRAList,
            isNewSubKra: isNewKra
        });
    };
    ZendeavorGoalSettingPage.prototype.showAlertForNewGoalSetting = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                // title: 'Submit KRA',
                message: _this.KRADetails.newKraAlertMessage,
                buttons: [
                    {
                        text: 'Cancel',
                        handler: function () {
                            // reject(false);
                            // return 
                            // reject();
                        }
                    },
                    {
                        text: 'OK',
                        handler: function () {
                            resolve(true);
                            // return 
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    ZendeavorGoalSettingPage.prototype.gotoperformanceMeasure = function (fieldTitle) {
        var _this = this;
        console.log("fieldTitle", fieldTitle);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__components_performance_measuretext_area_performance_measuretext_area__["a" /* PerformanceMeasuretextAreaComponent */], {
            'data': {
                // userData: this.userID,
                // redirectGoals: true,
                // year: this.kraYear
                performanceData: this.GoalsForm.get('performanceMeasure').value,
                pageTitle: fieldTitle
            }
        }, { cssClass: '' });
        modal.onDidDismiss(function (data) {
            // if (data === "SUBMITTED_DATA_SUCCESSFULLY") {
            //   this.navCtrl.pop()
            //   this.navCtrl.getPrevious().data.submitStatus = "true"
            //   // this.getAssociateData();
            // }
            console.log("data", data);
            if (data != null || data != undefined) {
                _this.GoalsForm.get('performanceMeasure').setValue(data);
                _this.GoalsForm.get('performanceMeasure').markAsDirty();
                _this.cdr.detectChanges();
            }
        });
        modal.present();
    };
    ZendeavorGoalSettingPage.prototype.editSubKRA = function (event, subKraItem, isNewKra) {
        // this.showEditButton(subKraItem.isMandatory,subKraItem.isEditable)
        // showEdit: subKraItem.isMandatory && subKraItem.isEditable ? true : false
        var _this = this;
        // this.showEditButton(subKraItem.isMandatory, subKraItem.isEditable)
        var popover = this
            .popoverCtrl
            .create('PopoverPage', {
            type: 'editSubKra', showEdit: this.showEditButton(subKraItem.isMandatory, subKraItem.isEditable), showDelete: this.showDeleteBtn(subKraItem.isMandatory, subKraItem.isEditable)
        });
        popover.present({ ev: event });
        popover.onDidDismiss(function (res) {
            console.log('response', res);
            if (res == 'edit') {
                _this.navCtrl.push('ZendeavorAddSubKrasPage', {
                    userID: _this.userID,
                    // userID: this.KRADetails.userId,
                    userRole: _this.userRole,
                    kraYear: _this.selectedGoalYear,
                    isDirectApprove: _this.isDirectApprove,
                    subKRAList: subKraItem.subKraFieldList,
                    isNewSubKra: isNewKra,
                    showSaveKRA: true,
                    processType: 'Annual'
                });
            }
            if (res == 'delete') {
                _this.deleteSubKra(subKraItem);
            }
        });
    };
    ZendeavorGoalSettingPage.prototype.showEditButton = function (isMandatory, isEditable) {
        if (isMandatory && isEditable)
            return true;
        else if (!isMandatory)
            return true;
        else
            return false;
    };
    ZendeavorGoalSettingPage.prototype.showDeleteBtn = function (isMandatory, isEditable) {
        if (isMandatory)
            return false;
        else
            return true;
    };
    ZendeavorGoalSettingPage.prototype.showMoreOptions = function (subkraItem) {
        if (subkraItem.isMandatory && !subkraItem.isEditable)
            return false;
        else
            return true;
    };
    ZendeavorGoalSettingPage.prototype.deleteSubKra = function (kraItem) {
        var _this = this;
        // if (this.userRole == '1') {
        this.deleteDetails = {
            url: this.deleteSubKraUrl,
            data: {
                "userId": !this.utility.isEmptyOrNullOrUndefined(this.userID) ? this.userID : '',
                "subKraNumber": kraItem.subKraId,
                "titleKey": kraItem.titleKey,
                // "role": this.userRole,
                // "kraId": 0,
                "year": this.selectedGoalYear,
            },
            zenDeavorURL: true
        };
        this.utility.updateLoader(true);
        this.httpProvider.http.commonService(this.deleteDetails).subscribe(function (response) {
            if (response) {
                _this.utility.updateLoader(false);
                if (response['status'] && response['status'].statusCode == '1') {
                    var statusMessage = response['status'].statusMessage;
                    _this.utility.presentAlert(statusMessage).then(function (res) {
                        // if () {
                        // this.GoalsForm.reset()
                        // this.gotoNextButton()
                        // }
                        // else{
                        // }
                        _this.getKRADetails(1);
                    });
                }
            }
        }, function (err) {
            _this.utility.updateLoader(false);
            _this.utility.showAlert('Goal Setting', __WEBPACK_IMPORTED_MODULE_11__app_constants__["a" /* Constants */]["Server_Error_Message"]);
        });
        // }
    };
    ZendeavorGoalSettingPage.prototype.viewSubKra = function (subKRAList, isNewKra, isMandatoryKra) {
        this.navCtrl.push('ZendeavorAddSubKrasPage', {
            userID: this.userID,
            // userID: this.KRADetails.userId,
            userRole: this.userRole,
            kraYear: this.selectedGoalYear,
            isDirectApprove: this.isDirectApprove,
            subKRAList: subKRAList,
            isNewSubKra: isNewKra,
            isMandatoryKra: isMandatoryKra,
            showSaveKRA: true,
            processType: 'Annual'
        });
    };
    ZendeavorGoalSettingPage.prototype.maxDateValidator = function () {
        var enteredmilestoneDate = this.GoalsForm.get('milestoneDate').value;
        if (!this.utility.isEmptyOrNullOrUndefined(enteredmilestoneDate)) {
            console.log("milestone validator value", enteredmilestoneDate);
            var datesArray = enteredmilestoneDate.split('-');
            if (datesArray[0] == this.maxYear) {
                console.log("in 2021");
                if (datesArray[1] > this.maxMonth) {
                    console.log(">03", datesArray[1] > '03');
                    this.invalidMilestoneDate = true;
                    // return { invalidMilestoneDate: true };
                }
                else {
                    this.invalidMilestoneDate = false;
                }
            }
            // let midtermFloor = group.get("midTermFloor").value
            // let midtermTarget = group.get("midTermTarget").value
            // let endTermFloor = group.get("endTermFloor").value
            // let endTermTarget = group.get("endTermTarget").value
            // let milestoneDateVal = group.get("milestoneDate").value
            // let milestoneDateVal = group.value
            // if (milestoneDateVal != '' && this.milestoneEndDate != "") {
            //   let datesArray = milestoneDateVal.split('-')
            //   // ["2021", "03", "31"]
            //   console.log("datesArray", datesArray)
            //   if (datesArray[0] == this.maxYear) {
            //     console.log("in 2021")
            //     if (datesArray[1] > this.maxMonth) {
            //       console.log(">03", datesArray[1] > '03')
            //       return { invalidMilestoneDate: true };
            //     }
            //   }
            // }
        }
        // return null;
    };
    ZendeavorGoalSettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["Component"])({
            selector: 'page-zendeavor-goal-setting',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zendeavor\zendeavor-goal-setting\zendeavor-goal-setting.html"*/'<!--\n  Generated template for the ZendeavorGoalSettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Set KRA</ion-title>\n\n    <ion-buttons end (click)="openTeamMeanModal()" *ngIf="kraId !=\'0\'">\n\n      <div class="kra-weightage-parent">\n        <div class="kra-weight-text">\n          Total KRA Weightage\n        </div>\n        <div class="weightage-score">\n          {{KRADetails?.totalWeightage}}\n        </div>\n      </div>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="padding8">\n  <!-- KRA header -->\n  <div class="justify-content-space-btw overflowX header-fixed">\n\n    <div class="display-inline kra-title-flex" [ngClass]="{\'activeColor\': kraId == kraList.kraId}" *ngFor="let kraList of KRADetails.kraStatusList"\n      (click)="!KRADetails.isPreview && userRole==\'1\'?$event.stopPropagation():_getSelectedData(kraList.kraId,kraList.title,kraList.kraWeightage)">\n      <img *ngIf="(kraList.kraId == 0 || kraList.kraId == -1 || kraList.kraId == -2)&& kraId != kraList.kraId" class="icon-border imgPadding"\n        [src]=kraList.icon [ngClass]="{\'greenClass\':kraList.status == \'completed\'}" />\n      <img *ngIf="(kraList.kraId == 0 || kraList.kraId == -1 || kraList.kraId == -2) && kraId == kraList.kraId" class="icon-border imgPadding"\n        [src]=kraList.selectedIcon />\n      <!-- <img class="icon-border" [src]=kraList.icon /> -->\n      <span class="icon-border" [ngClass]="{\'greenClass\':kraList.status == \'completed\'}" [hidden]="(kraList.kraId == 0 || kraList.kraId == -1 || kraList.kraId == -2)">{{kraList.kraId}}</span>\n\n\n      <!-- condition for adding goal icon when goals are completed -->\n      <!-- <span class="icon-border" [hidden]></span> -->\n      <span class="kra-title" [ngClass]="{\'font-color-blue\': kraId == kraList.kraId}">{{kraList.title}}</span>\n    </div>\n  </div>\n\n\n  <!-- display when home is selected -->\n  <div class="bgColor-white" *ngIf="kraId ==\'0\'" [hidden]="isServiceCallOn">\n    <ion-card padding>\n\n      <ion-row *ngFor="let fields of KRADetails.fieldDetails" class="rowCls">\n        <ion-col col-6 class="colCls">\n          <span class="mrginRt">\n            <img class="width80" class="imgSize" [src]=fields.icon />\n          </span>\n          <span class="font-weight500">{{fields.title}}</span>\n          <span *ngIf="fields.title==\'Appraiser\'">\n            <ion-icon [tooltip]="KRADetails?.appaiserToolTip" positionV="bottom" hideOthers="true" [event]="tooltipEvent"\n              class="appraiserToolTip" clear color="dark">\n              <img class="info-icon" src="assets/imgs/ZenDeavour/blue-question-mark.svg" />\n            </ion-icon>\n          </span>\n\n        </ion-col>\n        <ion-col col-6 *ngIf="fields.title!=\'Role\' && fields.fieldType !=\'dropDown\'">\n          <span class="color-gray">{{fields.titleValue}}</span>\n          <!-- <span *ngIf="fields.titleValue2" class="color-gray">{{fields.titleValue2}}</span> -->\n\n        </ion-col>\n        <ion-col col-6 *ngIf="fields.title==\'Role\' && fields.fieldType !=\'label\'">\n          <ion-icon [tooltip]="KRADetails?.icToolTip" positionV="bottom" hideOthers="true" [event]="tooltipEvent" class="role-tooltip"\n            clear color="dark">\n            <img class="info-icon" src="assets/imgs/ZenDeavour/blue-question-mark.svg" />\n          </ion-icon>\n          <ion-icon [tooltip]="KRADetails?.pmToolTip" positionV="bottom" hideOthers="true" [event]="tooltipEvent" class="pmToolTip"\n            clear color="dark">\n            <img class="info-icon" src="assets/imgs/ZenDeavour/blue-question-mark.svg" />\n          </ion-icon>\n          <div radio-group class="roleRadio-btn-parent color-gray">\n\n            <div class="radioButton-div">\n              <ion-label>Individual Contributor\n              </ion-label>\n\n              <ion-radio value="1" item-left (ionSelect)="onRoleSelected(\'Individual Contributor\')" [checked]="associateRoleStatus == \'Individual Contributor\'?true:false"></ion-radio>\n\n            </div>\n            <div class="radioButton-div">\n              <ion-label>People Manager</ion-label>\n              <ion-radio value="2" item-left (ionSelect)="onRoleSelected(\'People Manager\')" [checked]="associateRoleStatus == \'People Manager\'?true:false"></ion-radio>\n\n            </div>\n          </div>\n        </ion-col>\n        <ion-col col-6 *ngIf="fields.title==\'Role\' && fields.fieldType ==\'label\'">\n          <span class="color-gray">{{fields.titleValue}}</span>\n        </ion-col>\n        <ion-col col-6 *ngIf="KRADetails.isConfirmationEligible && fields.fieldType==\'dropDown\'" class="yearDropdown">\n          <!-- <ion-list> -->\n          <!-- <ion-item>\n              <ion-label class="font1em">Role</ion-label>\n              <ion-select class="font1em" [(ngModel)]="reviewerViewRole" [ngModelOptions]="{standalone: true}"\n                interface="action-sheet" (ionChange)="reviewerRoleSelection(reviewerViewRole)" >\n                <div *ngFor="let item of icList">\n                  <ion-option [value]="item.title">{{item.title}}</ion-option>\n                </div>\n                <ion-option value="2020-2021">2020-2021</ion-option>\n                <ion-option value="2020-2021">2020-2021</ion-option>\n              </ion-select>\n            </ion-item> -->\n          <!-- </ion-list> -->\n          <!-- <ion-list> -->\n          <!-- <ion-item> -->\n          <!-- <ion-label>Select year</ion-label> -->\n          <ion-select [(ngModel)]="selectedGoalYear" style="max-width: 100%" placeholder="Select Year" interface="popover"\n            class="color-gray">\n            <ion-option [value]="item" *ngFor="let item of fields.valueList">{{item}}</ion-option>\n            <!-- <ion-option [value]="item">{{item}}</ion-option> -->\n            <!-- <ion-option value="ps">PlayStation</ion-option>\n                  <ion-option value="genesis">Sega Genesis</ion-option>\n                  <ion-option value="saturn">Sega Saturn</ion-option>\n                  <ion-option value="snes">SNES</ion-option> -->\n          </ion-select>\n          <!-- </ion-item> -->\n          <!-- </ion-list> -->\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n    <!-- tracker content -->\n    <ion-card style="padding: 0 0 23px 0;">\n      <div class="justify-spac-bt-align-cent padding10-20 font-weight500 fontSize1p1">\n        <span class="align-cont-cent">\n          <img class="status-icon mrginRt" src="assets/imgs/annual-status.svg" />\n          <span>Status</span>\n        </span>\n        <div class="statusValues">\n          <span class="alertCustomCss" (click)="goToQuestion()">Need Help</span>\n          <span class="kraGuideline" (click)="openGuidelinesPdf()">KRA Guidelines</span>\n        </div>\n      </div>\n      <div class="padng0to5">\n        <ion-row class="align-item-center margin0-5 position-relative" *ngFor="let activity of KRADetails.kraActivity"\n          [ngClass]="{\'completed-status\': (activity.colorCode == \'green\'),\'pending-status\': (activity.colorCode == \'red\') ,\'incomplete-status\': (activity.colorCode == \'grey\')}">\n          <span class="tracker center">\n            <!-- [ngStyle]="{\'border-color\': activity.colorCode}" -->\n            <div class="tracker-inner-circle"></div>\n            <!-- [ngStyle]="{\'background\': activity.colorCode}" -->\n          </span>\n          <ion-col col-10>\n\n            <div class="marginBtm">{{activity.status}}</div>\n            <div class="color-blue fontSize9" *ngIf="activity.bindwidth !=\'redirected\'">{{activity.statusValue}}</div>\n            <span class="display-flex" (click)="openRedirectCommentsModal(KRADetails?.redirectedComments,KRADetails?.redirectType)">\n              <div class="redirectedCommntcss colorRed" *ngIf="activity.bindwidth==\'redirected\'">{{activity.statusValue}}</div>\n\n              <ion-icon *ngIf="activity.bindwidth==\'redirected\'" name="ios-arrow-forward" class="arrowIconSize colorRed"></ion-icon>\n            </span>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-card>\n  </div>\n\n  <!-- KRA form which directs associate to fill KRAs sequentially -->\n  <div *ngIf="kraId > \'0\' && kraId != \'-1\'" class="padding10 bttmMargin" [hidden]="isServiceCallOn">\n    <div *ngFor="let field of KRADetails.fieldDetails; index as i ">\n      <form [formGroup]="GoalsForm">\n        <div class="margin-bottom4per" *ngIf="field.bindWith==\'title\'">\n          <ion-label>{{field.title}}<img class="astrick" src="assets/imgs/asterisk.svg" /></ion-label>\n          <ion-input class="borderBottom" [class.invalid]="GoalsForm.controls.title.errors  && submitted"\n            formControlName="title" [disableControl]="!field.isEditable">\n          </ion-input>\n\n          <span class="error-msg" *ngIf="GoalsForm.controls.title.errors  && submitted">\n            <p>* Please add Title.</p>\n          </span>\n        </div>\n        <!-- <span class="error-msg" *ngIf="GoalsForm.controls.title.errors">\n            <p>* Please add title.</p>\n          </span> -->\n        <div class="margin-bottom4per" *ngIf="field.bindWith==\'milestoneDate\'">\n          <ion-label>{{field.title}}<img class="astrick" src="assets/imgs/asterisk.svg" /></ion-label>\n\n          <ion-datetime class="borderBottom " displayFormat="DD-MM-YYYY" pickerFormat="YYYY MMMM DD" formControlName="milestoneDate"\n            [class.invalid]="GoalsForm.controls.milestoneDate.errors  && submitted" [(ngModel)]="milestoneDate"\n            [disableControl]="!field.isEditable" [min]="KRADetails?.minDate" [max]="KRADetails?.maxDate" (ionChange)="maxDateValidator()"></ion-datetime>\n\n\n          <span class="error-msg" *ngIf="GoalsForm.controls.milestoneDate.errors  && submitted">\n            <p>* Please select Milestone Date.</p>\n          </span>\n          <span class="error-msg" *ngIf="invalidMilestoneDate  && submitted">\n            <!-- <p>* Milestone Date cannot be greater than {{KRADetails?.maxDate}}.</p> -->\n            <p> Milestone date should be within the current financial year</p>\n          </span>\n        </div>\n\n        <div class="margin-bottom4per dropDown" *ngIf="field.bindWith==\'weightage\'">\n          <ion-label>{{field.title}}<img class="astrick" src="assets/imgs/asterisk.svg" />\n          </ion-label>\n\n\n          <ion-select (ionChange)="onWeightageChange($event)" interface="action-sheet" class="borderBottom " style="max-width: 100%"\n            formControlName="weightage" [class.invalid]="GoalsForm.controls.weightage.errors  && submitted" [(ngModel)]="kraWeightageValue"\n            [disableControl]="!field.isEditable">\n            <ion-option [value]="item" *ngFor="let item of field.valueList;index as i">{{item}}</ion-option>\n            <!-- <ion-option [value]="i">{{item}}</ion-option> -->\n            <!-- <ion-option value="1">Qualitative</ion-option>\n              <ion-option value="2">Quantitative</ion-option> [selected]="field.valueList == \'Quantitative\'"-->\n\n          </ion-select>\n          <span class="error-msg" *ngIf="GoalsForm.controls.weightage.errors  && submitted">\n            <p>* Please add Weightage.</p>\n          </span>\n        </div>\n\n\n\n\n\n\n        <!-- <div class="margin-bottom4per" *ngIf="field.bindWith==\'weightage\'">\n          <ion-label>{{field.title}}<img class="astrick" src="assets/imgs/asterisk.svg" /></ion-label>\n          <ion-input class="borderBottom" [class.invalid]="GoalsForm.controls.weightage.errors  && submitted" value="{{field.titleValue}}"\n            formControlName="weightage">\n          </ion-input>\n          <span class="error-msg" *ngIf="GoalsForm.controls.weightage.errors  && submitted">\n            <p>* Please add weightage.</p>\n          </span>\n        </div> -->\n        <div class="margin-bottom4per dropDown" *ngIf="field.bindWith==\'kraType\'">\n          <div class="align-cont-cent">\n            <ion-label>{{field.title}}<img class="astrick" src="assets/imgs/asterisk.svg" />\n              <!-- <span class="margin10">\n                <ion-icon [tooltip]="field.tooltip" positionV="bottom" hideOthers="true" [event]="tooltipEvent" class="formButtonIcon"\n                  clear color="dark" item-right>\n                  <img class="info-icon" src="assets/imgs/ZenDeavour/blue-question-mark.svg" />\n                </ion-icon>\n              </span> -->\n\n            </ion-label>\n\n          </div>\n\n          <ion-select (ionChange)="onSelectChange($event)" interface="action-sheet" class="borderBottom " style="max-width: 100%"\n            formControlName="KRAtype" [class.invalid]="GoalsForm.controls.KRAtype.errors  && submitted"\n            [disableControl]="!field.isEditable">\n            <ion-option [value]="item" *ngFor="let item of field.valueList;index as i">{{item}}</ion-option>\n            <!-- <ion-option [value]="i">{{item}}</ion-option> -->\n            <!-- <ion-option value="1">Qualitative</ion-option>\n            <ion-option value="2">Quantitative</ion-option> [selected]="field.valueList == \'Quantitative\'"-->\n\n          </ion-select>\n          <span class="error-msg" *ngIf="GoalsForm.controls.KRAtype.errors  && submitted">\n            <p>* Please select KRA Type.</p>\n          </span>\n        </div>\n        <div>\n          <ion-row *ngIf="field.title==\'Mid-Term\' && showMidEndTermValues">\n            <ion-col>\n              <div class="margin-bottom4per">\n                <ion-label>{{midtermfloorData?.title}}\n                  <span class="margin10">\n                    <ion-icon [tooltip]="midtermfloorData.tooltip" positionV="bottom" hideOthers="true" [event]="tooltipEvent"\n                      class="formButtonIcon" clear color="dark" item-right>\n                      <img class="info-icon" src="assets/imgs/ZenDeavour/blue-question-mark.svg" />\n                    </ion-icon>\n                  </span>\n                  <!-- <img class="astrick" src="assets/imgs/asterisk.svg" /> -->\n                </ion-label>\n                <ion-input class="borderBottom " formControlName="midTermFloor" type="number" [disableControl]="GoalsForm.controls.midTermFloor.disabled"\n                  [class.invalid]="(GoalsForm.errors?.midTermMatching || GoalsForm.errors?.midtermFloorIsempty )&& submitted">\n                </ion-input>\n                <span class="error-msg" *ngIf="GoalsForm.errors?.midtermFloorIsempty && submitted">\n                  <p>* Please enter mid-term floor!</p>\n                </span>\n\n              </div>\n              <!-- <span class="error-msg" *ngIf="GoalsForm.get(\'midTermFloor\').invalid && GoalsForm.get(\'midTermFloor\').touched">\n                <p>* Please add MidTerm Floor.</p>\n              </span> -->\n\n\n            </ion-col>\n            <ion-col>\n              <div class="margin-bottom4per">\n                <ion-label>{{midtermTargetData?.title}}\n                  <!-- <img class="astrick" src="assets/imgs/asterisk.svg" /> -->\n                  <span class="margin10">\n                    <ion-icon [tooltip]="midtermTargetData.tooltip" positionV="bottom" hideOthers="true" [event]="tooltipEvent"\n                      class="formButtonIcon" clear color="dark" item-right>\n                      <img class="info-icon" src="assets/imgs/ZenDeavour/blue-question-mark.svg" />\n                    </ion-icon>\n                  </span>\n                </ion-label>\n                <ion-input class="borderBottom" formControlName="midTermTarget" type="number" [class.invalid]="(GoalsForm.errors?.midtermTargetIsempty ||GoalsForm.errors?.midTermMatching) && submitted"\n                  [disableControl]="GoalsForm.controls.midTermTarget.disabled">\n                </ion-input>\n                <span class="error-msg" *ngIf="GoalsForm.errors?.midtermTargetIsempty  && submitted">\n                  <p>* Please enter mid-term target!</p>\n                </span>\n\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf="field.title==\'Mid-Term\' && showMidEndTermValues">\n            <span class="error-msg" *ngIf="GoalsForm.errors?.midTermMatching && submitted">\n              <p>* Mid-term floor and mid-term target should be different!</p>\n            </span>\n          </ion-row>\n          <ion-row *ngIf="field.title==\'Annual\' && showMidEndTermValues">\n            <ion-col>\n              <div class="margin-bottom4per">\n                <ion-label>{{endtermfloorData.title}}<img class="astrick" src="assets/imgs/asterisk.svg" />\n                  <span class="margin20px">\n                    <ion-icon [tooltip]="endtermfloorData.tooltip" positionV="bottom" hideOthers="true" [event]="tooltipEvent"\n                      class="formButtonIcon" clear color="dark" item-right>\n                      <img class="info-icon" src="assets/imgs/ZenDeavour/blue-question-mark.svg" />\n                    </ion-icon>\n                  </span>\n                </ion-label>\n                <ion-input class="borderBottom" formControlName="endTermFloor" type="number" [class.invalid]="GoalsForm.controls.endTermFloor.errors  && submitted"\n                  [disableControl]="GoalsForm.controls.endTermFloor.disabled">\n                </ion-input>\n                <span class="error-msg" *ngIf="GoalsForm.controls.endTermFloor.errors  && submitted">\n                  <p>* Please enter annual floor!</p>\n                </span>\n              </div>\n            </ion-col>\n            <ion-col>\n              <div class="margin-bottom4per">\n                <ion-label>{{endtermTargetData.title}}<img class="astrick" src="assets/imgs/asterisk.svg" />\n                  <span class="margin20px">\n                    <ion-icon [tooltip]="endtermTargetData.tooltip" positionV="bottom" hideOthers="true" [event]="tooltipEvent"\n                      class="formButtonIcon" clear color="dark" item-right>\n                      <img class="info-icon" src="assets/imgs/ZenDeavour/blue-question-mark.svg" />\n                    </ion-icon>\n                  </span>\n                </ion-label>\n                <ion-input class="borderBottom" formControlName="endTermTarget" type="number" [class.invalid]="GoalsForm.controls.endTermTarget.errors  && submitted"\n                  [disableControl]="GoalsForm.controls.endTermTarget.disabled">\n                </ion-input>\n                <span class="error-msg" *ngIf="GoalsForm.controls.endTermTarget.errors  && submitted">\n                  <p>* Please enter annual target!</p>\n                </span>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf="field.title==\'Annual\'  && showMidEndTermValues">\n            <span class="error-msg" *ngIf="GoalsForm.errors?.endTermMatching && submitted">\n              <p>* Annual floor and annual target should be different!.</p>\n            </span>\n          </ion-row>\n        </div>\n        <div class="margin-bottom4per" *ngIf="field.bindWith==\'performanceMeasure\'">\n          <div class="align-cont-cent">\n            <ion-label>{{field.title}}<img class="astrick" src="assets/imgs/asterisk.svg" /></ion-label>\n            <!-- adding mic icon for voice input -->\n            <!-- <span (click)="startSpeech()" *ngIf="showMic" class="mic-container">\n              <ion-icon name="mic"></ion-icon>\n\n            </span> -->\n            <!-- <div *ngIf="showLoader" class="spinner-container">\n              <img src="assets/imgs/ZenDeavour/listening.gif" />\n            </div> -->\n          </div>\n\n\n          <ion-textarea formControlName="performanceMeasure" class="borderBottom textColor kraTextarea" [class.invalid]="GoalsForm.controls.performanceMeasure.errors  && submitted"\n            [disableControl]="!field.isEditable" (ionFocus)="gotoperformanceMeasure(field.title)"></ion-textarea>\n\n          <span class="error-msg" *ngIf="GoalsForm.controls.performanceMeasure.errors  && submitted">\n            <p>* Please add Performance Measure.</p>\n          </span>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div *ngIf="kraId==\'-1\'">\n    <!-- overall score -->\n    <ion-card class="preview-card" *ngIf="KRADetails.isPreview && (userRole==\'1\' || userRole==\'2\')">\n      <ion-card-header class="preview-header">Overall Score</ion-card-header>\n      <div class="preview-cont">\n        <div class="width100">\n          <div class=" display-flex  fontSize1p2 align-item-center padding-bottom10" *ngFor="let item of KRADetails.previewData">\n            <div col-6 class="paddingRtLf10">{{item?.key}}</div>\n            <div col-6 class="font-weight500 padding25pxRtLf" *ngIf="item.key!=\'KRA\'">{{item?.value}}</div>\n            <div col-6 *ngIf="item.key==\'KRA\'"> <button ion-button round (click)="openReview()" class="textCapitalize reviewBtn">{{item?.value}}</button></div>\n          </div>\n        </div>\n\n        <!-- <ion-item style="background-image: linear-gradient(to right, #e9f0fb, #afccfc);">\n          <ion-label>I have reviewed my KRAs before final submission</ion-label>\n          <ion-checkbox></ion-checkbox>\n        </ion-item> -->\n        <div class="consentStatus-parent padding-top10" *ngIf="userRole==\'1\'">\n          <ion-label>{{KRADetails?.kraReviewText}}</ion-label>\n          <ion-checkbox [(ngModel)]="reviewedKRACheckbx"></ion-checkbox>\n        </div>\n        <button ion-button round (click)="submitkra()" class="textCapitalize submitApprovalBtn" *ngIf="userRole==\'1\'">Submit\n          For Approval</button>\n      </div>\n    </ion-card>\n    <!-- on kra completion -->\n    <div *ngIf="!KRADetails.isPreview && userRole == \'1\'">\n      <ion-card class="preview-card congratulation-bg-img">\n        <div class="preview-cont">\n          <span class="completed-kra-heading">\n            <span class="completed-kra-status"><img src="assets/imgs/ZenDeavour/kra-tick.svg" /> </span><span class="fontSize1p8">\n              Congratulations</span>\n          </span>\n          <div [innerHTML]="KRADetails?.successMessage"></div>\n        </div>\n      </ion-card>\n      <div text-center> <button class="" ion-button round (click)="goToDashboard()">Back to Dashboard</button></div>\n    </div>\n  </div>\n\n  <!-- when KRA 1 is selected -->\n\n  <div class="talentIndex-parent " *ngIf="kraId==\'1\' && KRADetails?.subKraList">\n\n    <div class="fontWeight-bold">\n      Talent Index\n    </div>\n    <div class="addMore-parent">\n      <span class="padding10 subKRA-title ">Sub KRA: {{KRADetails?.actualSubkra}}/{{KRADetails?.maxLimit}}</span>\n      <span>\n        <button class="textCapitalize addMoreBtn" ion-button round (click)="gotoAddSubKra(KRADetails?.addSubKraList,true)">Add\n          More</button>\n      </span>\n    </div>\n  </div>\n  <div *ngIf="kraId==\'1\'">\n    <div class="paddingRtLf10">\n      <p *ngIf="KRADetails?.minMaxSubKraMessage" class="minKRAmsg">Note: {{KRADetails?.minMaxSubKraMessage}}</p>\n      <!-- <p *ngIf="KRADetails?.minMaxSubKraMessage" class="font0-95"> * {{KRADetails?.minMaxSubKraMessage}}</p> -->\n      <!-- <p *ngIf="KRADetails?.mandatorySubKraMessage" class="font0-95"> * {{KRADetails?.mandatorySubKraMessage}}</p> -->\n    </div>\n    <div class="main-card" *ngFor="let subKraItem of KRADetails.subKraList" (click)="viewSubKra(subKraItem?.subKraFieldList,false,subKraItem?.isMandatory)">\n      <div class="upper-card-parent padding5">\n        <div class="icon-div">\n          <img [src]="subKraItem.icon">\n        </div>\n        <div class="learningHrs-parent">\n          <div class="learning-hrs-div marginBottom-8px">\n            <span>{{subKraItem.title}} </span>\n            <span class="mandatory" *ngIf="subKraItem.isMandatory">Mandatory</span>\n            <!-- <span>Technical/Behavioural</span> -->\n          </div>\n          <div class="displayFlex margin-bottm-6 alignItemCenter" *ngFor="let item of subKraItem.value">\n            <div>\n              <img class="kraType-icon" [src]="item.icon" />\n            </div>\n            <div class="padding5" *ngIf="item.key">{{item.key}}</div>\n            <div class="padding5">{{item.value}}</div>\n\n          </div>\n          <!-- <div class="displayFlex ">\n            <div>\n              <img class="kraType-icon" src="assets/imgs/designation-digitalID.svg" />\n            </div>\n            <div class="padding5">Milestone Date:</div>\n            <div class="padding5">29/05/2021</div>\n          </div> -->\n        </div>\n        <div class="arrow-parent">\n          <div *ngIf="showMoreOptions(subKraItem)">\n            <!-- <ion-icon name="ios-arrow-forward"></ion-icon> -->\n            <span class="iconSize " (click)="editSubKRA($event,subKraItem,false);$event.stopPropagation()">\n              <ion-icon name="more"></ion-icon>\n            </span>\n          </div>\n          <!-- <div (click)="deleteSubKra($event.stopPropagation(),subKraItem.subKraId)">\n            <ion-icon class="font20" name="trash"></ion-icon>\n          </div> -->\n        </div>\n      </div>\n      <div class="lower-card-parent">\n        <div class="midTerm-parent">\n          <div>\n            <div class="fontWeight-bold marginbtm5">{{subKraItem.midTermTitle}}:</div>\n            <div class="floorTarget-parent ">\n              <div>\n                <span>Target:</span>\n                <span>{{subKraItem.midTermTarget}}</span>\n              </div>\n              <div>\n                <span>Floor:</span>\n                <span>{{subKraItem.midTermFloor}}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class="endTerm-parent">\n          <div class="fontWeight-bold marginbtm5">{{subKraItem.annualTitle}}:</div>\n          <div class="floorTarget-parent">\n            <div>\n              <span>Target:</span>\n              <span>{{subKraItem.annualTarget}}</span>\n            </div>\n            <div>\n              <span>Floor:</span>\n              <span>{{subKraItem.annualFloor}}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <!-- KRA 1 css ends -->\n\n  <ion-fab right bottom *ngIf="kraId > 0 && kraId != \'-1\'">\n    <button ion-fab (click)="openGuidelinesPdf()" class="delete-button" *ngIf="kraId > 0">\n      <ion-icon name="help"></ion-icon>\n    </button>\n    <button ion-fab (click)="deleteKra(kraId)" class="delete-button" *ngIf="KRADetails?.isDeleteButtonEnable">\n      <ion-icon name="trash"></ion-icon>\n    </button>\n    <button ion-fab *ngIf="KRADetails?.isAddButtonEnable" (click)="addNewKRA(kraId)">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n\n</ion-content>\n\n<ion-footer class="footerBg" [hidden]="kraId==\'-1\'">\n  <!-- <div>\n    <div class="fab" *ngIf="KRADetails?.isAddButtonEnable" (click)="addNewKRA(kraId)"> + </div>\n    <div class="delete-button" *ngIf="KRADetails?.isDeleteButtonEnable" (click)="deleteKra(kraId)">\n      <ion-icon name="trash"></ion-icon>\n    </div>\n  </div> -->\n  <!-- <span class="ts-fab"> -->\n\n\n  <!-- </span> -->\n\n  <!-- <div style="display: flex; justify-content: center;"> -->\n  <!-- <button *ngIf="showSaveResetBtn()" (click)="saveKRA()" class="nextBtn" ion-button round>Save</button> -->\n  <!-- <button *ngIf="showSaveResetBtn()" (click)="resetData()" class="nextBtn" ion-button round>Reset</button> -->\n  <div class="text-center" *ngIf="kraId==\'0\' && userRole==\'1\'">\n    <button class="nextBtn" ion-button round (click)="saveKRA(true,GoalsForm,\'saveOnFooterClick\')">Next</button>\n\n  </div>\n  <div class="text-center" *ngIf="kraId==\'0\' && userRole==\'2\'">\n    <button class="nextBtn" ion-button round (click)="gotoNextButton()">Next</button>\n\n  </div>\n  <!-- (showWhenData==\'KRA\'  || showWhenData == \'Goals\') && KRADetails?.isEligibleForPromotion -->\n  <!-- </div> -->\n  <div *ngIf="kraId != \'0\'" class="saveResetFooter">\n    <div>\n      <button class="resetbtn textCapitalize" ion-button round (click)="resetForm(kraId)">Reset</button>\n\n    </div>\n    <div class="saveSubmitParent">\n      <!-- <button class="savebtn textCapitalize" ion-button round (click)="saveKRA(false,GoalsForm,\'saveOnFooterClick\')">Save</button> -->\n      <button class="submitKraBtn textCapitalize" ion-button round (click)="saveKRA(true,GoalsForm,\'saveOnFooterClick\')">Save\n        KRA -\n        {{kraId}}</button>\n    </div>\n\n  </div>\n\n\n</ion-footer>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zendeavor\zendeavor-goal-setting\zendeavor-goal-setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_10_ionic_angular_navigation_nav_params__["a" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_http_angular_http_angular__["a" /* HttpAngularProvider */], __WEBPACK_IMPORTED_MODULE_9__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_formService_form_control_service__["a" /* FormControlService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_9__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_2__providers_speechRecognition_speechRecognition__["a" /* SpeechRecognitionUtility */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */]])
    ], ZendeavorGoalSettingPage);
    return ZendeavorGoalSettingPage;
}());

//# sourceMappingURL=zendeavor-goal-setting.js.map

/***/ })

});
//# sourceMappingURL=45.js.map