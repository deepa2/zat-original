webpackJsonp([133],{

/***/ 1435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateDapPageModule", function() { return CreateDapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_selectable__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_dap__ = __webpack_require__(1857);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_formService_form_control_service__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_tooltips__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CreateDapPageModule = /** @class */ (function () {
    function CreateDapPageModule() {
    }
    CreateDapPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__create_dap__["a" /* CreateDapPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__create_dap__["a" /* CreateDapPage */]),
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_selectable__["a" /* IonicSelectableModule */],
                __WEBPACK_IMPORTED_MODULE_6_ionic_tooltips__["a" /* TooltipsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_formService_form_control_service__["a" /* FormControlService */]
            ]
        })
    ], CreateDapPageModule);
    return CreateDapPageModule;
}());

//# sourceMappingURL=create-dap.module.js.map

/***/ }),

/***/ 1857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateDapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_formService_form_control_service__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
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
 * Generated class for the CreateDapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateDapPage = /** @class */ (function () {
    function CreateDapPage(navCtrl, navParams, httpProvider, formControlService, formBuilder, utilities) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.formControlService = formControlService;
        this.formBuilder = formBuilder;
        this.utilities = utilities;
        this.isEdit = false;
        this.dapId = 0;
        this.isDataAvailable = false;
        this.list = [];
        this.dapList = [];
        this.isCourseListAvaliable = false;
        this.isBehavioural = false;
        this.dapCoursesList = [];
        this.listDap = [];
        this.tooltipEvent = 'click';
        this.showArrow = true;
        this.duration = 5500;
        this.isOtherSelected = false;
        this.showDateMessage = false;
        this.maxDateValidation = false;
        this.dapItemInfo = navParams.get("dapId");
        this.dapStatus = navParams.get("dapStatus");
        this.isComingFromNotification = this.navParams.get('isComingFromNotification');
        if (this.dapItemInfo != undefined) {
            this.dapId = this.dapItemInfo;
            this.isEdit = true;
        }
    }
    CreateDapPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //console.log('ionViewDidLoad CreateDapPage');
        this.getDapData(this.dapId);
        this.nav.backButtonClick = function (e) {
            if (_this.form.dirty) {
                _this.utilities.presentConfirmation("Are you sure you want to discard the changes?").then(function () {
                    _this.navCtrl.pop();
                }).catch(function () {
                });
            }
            else {
                _this.navCtrl.pop();
            }
        };
    };
    CreateDapPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // //console.log(this.form)
        console.log(this.navParams);
        console.log('dap', this.navParams.get('dapCourseList'));
        // //console.log('other', this.navParams.get('otherList'))
        console.log(this.navParams.get('selectedMentor'));
        this.mentor = this.navParams.get('selectedMentor');
        this.dapCoursesList = this.navParams.get('dapCourseList');
        this.otherList = this.navParams.get('otherList');
        //console.log(this.dapCoursesList);
        if (this.dapCoursesList && this.dapCoursesList.length > 0) {
            this.dapList.filter(function (value) {
                value.list.filter(function (dapList) {
                    if (dapList.bindWith == 'addProgram') {
                        dapList.value = _this.dapCoursesList.length;
                        _this.addProgram = dapList.value;
                        _this.isCourseListAvaliable = true;
                    }
                });
            });
        }
        if (this.otherList) {
            this.dapList.filter(function (value) {
                value.list.filter(function (dapList) {
                    if (dapList.bindWith == 'addProgram') {
                        dapList.value = 1;
                        _this.addProgram = dapList.value;
                        _this.isCourseListAvaliable = true;
                    }
                });
            });
        }
        if (this.mentor) {
            console.log(this.mentor);
            var mentorName_1 = this.mentor;
            console.log('seleceted mentor');
            this.dapList.filter(function (value) {
                value.list.filter(function (dapList) {
                    if (dapList.bindWith == 'peerName') {
                        dapList.value = _this.mentor.key;
                        dapList.titleKey = _this.mentor.value;
                        dapList.profilePic = _this.mentor.profilePic;
                        _this.mentor = "";
                    }
                    if (dapList.bindWith == 'messageForMentor') {
                        if (!_this.previousData) {
                            _this.previousData = mentorName_1;
                            var firstName = mentorName_1.value.substr(0, mentorName_1.value.indexOf(" "));
                            var message = "Dear " + firstName + "," + "\n \nAs a part of my Development Action Plan (DAP), requesting if you can guide me to learn more on " + _this.selectedCompetancyName + " as my mentor. \nI will take the responsibility of scheduling meetings with you once a month after you accept the request.";
                            dapList.value = message.trim();
                        }
                        else if (_this.previousData && _this.previousData.value != mentorName_1.value) {
                            _this.previousData = mentorName_1;
                            var firstName = mentorName_1.value.substr(0, mentorName_1.value.indexOf(" "));
                            var message = "Dear " + firstName + "," + "\n \nAs a part of my Development Action Plan (DAP), requesting if you can guide me to learn more on " + _this.selectedCompetancyName + " as my mentor. \nI will take the responsibility of scheduling meetings with you once a month after you accept the request.";
                            dapList.value = message.trim();
                        }
                        else if (_this.previousData && _this.previousData.value == mentorName_1.value) {
                            console.log(_this.editedMsg);
                            if (_this.editedMsg) {
                                dapList.value = _this.editedMsg;
                            }
                        }
                    }
                });
            });
        }
        console.log(this.form);
    };
    CreateDapPage.prototype.getDapData = function (dapId) {
        var _this = this;
        var param = {
            url: 'createNewOrGetDAP',
            data: {
                "dapId": dapId
            },
            zenLearn: true
        };
        this.utilities.updateLoader(true);
        this.httpProvider.http.commonService(param).subscribe(function (response) {
            //console.log(response);
            if (response.details && response.details.responseList.list && response.details.responseList.dapSectionslist) {
                _this.list = response.details.responseList.list;
                _this.dapList = response.details.responseList.dapSectionslist;
                _this.isDataAvailable = true;
                _this.list.filter(function (value) {
                    if (value.bindWith == 'milestoneDate') {
                        _this.maxDate = value.maxValue;
                    }
                });
                //check if already added courses for manager(approve or reject)
                if (_this.dapItemInfo) {
                    _this.dapList.filter(function (value) {
                        value.list.filter(function (dapList) {
                            if (dapList.bindWith == 'addProgram') {
                                // dapList.value = this.dapCoursesList.length;
                                _this.addProgram = dapList.value;
                                _this.isCourseListAvaliable = true;
                            }
                        });
                    });
                    _this.list.filter(function (value) {
                        if (value.bindWith == 'typeOfLearning') {
                            _this.learningId = value.value;
                        }
                        if (value.bindWith == 'skillCompetancy') {
                            _this.compentancyId = value.value;
                            value.lov.filter(function (lovDetails) {
                                if (lovDetails.key == value.value) {
                                    //console.log(lovDetails.value);
                                    if (lovDetails.value == 'Other') {
                                        _this.isOtherSelected = true;
                                    }
                                    else {
                                        _this.isOtherSelected = false;
                                    }
                                    return;
                                }
                            });
                        }
                    });
                }
                _this.utilities.updateLoader(false);
            }
        }, function (error) {
            //console.log(error);
            _this.utilities.updateLoader(false);
        });
    };
    CreateDapPage.prototype.selectedDate = function (date) {
        if (date && date > this.maxDate) {
            this.selectedMilestoneDate = date;
            this.maxDateValidation = true;
        }
        else {
            this.selectedMilestoneDate = date;
            this.maxDateValidation = false;
        }
    };
    CreateDapPage.prototype.getLearningID = function (item, event) {
        var _this = this;
        if (item.bindWith == 'typeOfLearning') {
            this.learningId = item.value;
            item.lov.filter(function (val) {
                if (val.key == item.value) {
                    _this.selectedLearning = val.value;
                }
            });
            if (item.value) {
                var param = {
                    url: 'competencyLov',
                    data: { "learningId": item.value },
                    zenLearn: true
                };
                this.httpProvider.http.commonService(param).subscribe(function (response) {
                    //console.log(response);
                    _this.list.filter(function (value) {
                        if (value.bindWith == 'skillCompetancy') {
                            value.lov = response.details.responseList;
                            _this.isBehavioural = true;
                        }
                    });
                });
                //console.log(this.list)
            }
            else {
                this.learningId = item.value;
                this.isBehavioural = false;
            }
        }
        else if (item.bindWith == 'skillCompetancy') {
            this.compentancyId = item.value;
            this.addProgram = null;
            this.isCourseListAvaliable = false;
            item.lov.filter(function (val) {
                if (val.key == item.value) {
                    _this.selectedCompetancyName = val.value;
                    //console.log(val);
                    if (val.value == 'Other') {
                        _this.isOtherSelected = true;
                    }
                    else {
                        _this.isOtherSelected = false;
                    }
                    return;
                }
            });
        }
    };
    CreateDapPage.prototype.getCourseList = function (item) {
        if (this.dapItemInfo) {
            var data = {
                "learningId": this.learningId,
                "startOffSet": 0,
                "competencyId": this.compentancyId,
                "learningMode": "",
                "selectedLearning": this.selectedLearning,
                'isOtherSelected': this.isOtherSelected,
                'dapID': this.dapId
            };
            this.navCtrl.push('DapCoursesListPage', { 'listData': data });
        }
        else {
            var data = {
                "learningId": this.learningId,
                "startOffSet": 0,
                "competencyId": this.compentancyId,
                "learningMode": "",
                "selectedLearning": this.selectedLearning,
                'isOtherSelected': this.isOtherSelected
            };
            this.navCtrl.push('DapCoursesListPage', { 'listData': data });
        }
    };
    CreateDapPage.prototype.saveDap = function () {
        var _this = this;
        //console.log(this.form)
        //Check for 1st milestone date
        if (this.selectedMilestoneDate && this.selectedMilestoneDate > this.maxDate) {
            this.utilities.presentAlert("Milestone date cannot be greater than the current financial year");
            this.content.scrollToTop();
            return;
        }
        //check all the form fields are valid and filled
        for (var props in this.form.value) {
            //console.log(`${props}: ${this.form.value[props]}`)
            if (this.form.value[props] == null) {
                this.utilities.presentAlert("Please fill all the mandatory fields");
                return;
            }
        }
        //for checking list milestone date greater than other milestone date
        for (var props in this.form.value) {
            //console.log(`${props}: ${this.form.value[props]}`)
            if ((this.form.value['milestoneDate'] >= this.form.value['milestoneDate1']) && (this.form.value['milestoneDate'] >= this.form.value['milestoneDate2'] && this.form.value['milestoneDate'] >= this.form.value['milestoneDate3'])) {
                this.showDateMessage = false;
            }
            else {
                this.showDateMessage = true;
                this.utilities.presentAlert("Milestone date cannot be greater than the DAP milestone date");
                return;
            }
        }
        // formatting list
        var Listdata = [];
        Listdata = this.list.map(function (val) {
            var a = {};
            a[val.bindWith] = val.value.toString().trim();
            return a;
        });
        //console.log(Listdata);
        var listObject = Object.assign.apply(Object, [{}].concat(Listdata));
        //console.log(listObject);
        // formating dap list  
        var dapData = [];
        dapData = this.dapList.map(function (val) {
            var newList = val.list.map(function (daplist) {
                var a = {};
                if (daplist.value) {
                    a[daplist.bindWith] = daplist.value.toString().trim();
                    return a;
                }
            });
            return newList;
        });
        //console.log(dapData);
        var daplist = dapData.map(function (value) {
            return Object.assign.apply(Object, [{}].concat(value));
        });
        //console.log(daplist);
        var dapListDetails = Object.assign.apply(Object, [{}].concat(daplist));
        //console.log(dapListDetails)
        //combining both the list 
        //console.log(Object.assign(listObject, dapListDetails))
        var paramData;
        if (this.isEdit == true) {
            paramData = Object.assign(listObject, dapListDetails, { "dapId": this.dapId });
        }
        else {
            paramData = Object.assign(listObject, dapListDetails);
        }
        var param = {
            url: 'submitDAP',
            data: paramData,
            zenLearn: true
        };
        if (this.addProgram && this.isCourseListAvaliable) {
            this.utilities.updateLoader(true);
            this.httpProvider.http.commonService(param).subscribe(function (response) {
                //console.log(response)
                _this.utilities.updateLoader(false);
                if (response && response.status.statusCode == 1) {
                    _this.utilities.presentAlert("DAP created successfully and submitted to your Manager for approval.\n You will not be able to add more courses in your DAP once the DAP is approved by your manager").then(function () {
                        if (_this.isComingFromNotification) {
                            _this.navCtrl.popToRoot();
                        }
                        else {
                            _this.navCtrl.pop();
                        }
                    });
                }
            }, function (error) {
                //console.log(error);
                _this.utilities.updateLoader(false);
            });
        }
        else {
            this.utilities.presentAlert("Please add program by clicking addCourses");
            return;
        }
    };
    CreateDapPage.prototype.showCourses = function (data) {
        //console.log(data);
        if (this.dapItemInfo) {
            var dapDetails = {
                'dapId': this.dapId,
                'dapSectionId': data.dapSectionId,
                'userId': 0
            };
            this.navCtrl.push("SelectedCoursesPage", { "dapId": dapDetails });
        }
        else {
            if (this.otherList) {
                this.navCtrl.push("SelectedCoursesPage", { "otherList": this.otherList });
            }
            else {
                this.navCtrl.push("SelectedCoursesPage", { "data": this.dapCoursesList });
            }
        }
    };
    CreateDapPage.prototype.openCalender = function (j) {
        this.dateTime.toArray();
        this.dateTime.toArray()[j].open();
    };
    CreateDapPage.prototype.newValue = function () {
        //console.log("called");
    };
    CreateDapPage.prototype.selectMentor = function () {
        if (this.learningId && this.compentancyId) {
            this.navCtrl.push("MentorsPage");
        }
        else {
            this.utilities.showToast("Please select Type of Learning & competancy/skills");
        }
    };
    CreateDapPage.prototype.openLink = function () {
        this.utilities.openWithSystemBrowser('https://rpg.percipio.com/library/fb5153db-fe90-4764-bbb7-823409072fb7/0c3bd22e-706f-43a8-b804-1acc28e84f28');
    };
    CreateDapPage.prototype.updateMentorMsg = function (data) {
        console.log(data);
        this.editedMsg = data;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('createDap'),
        __metadata("design:type", Object)
    ], CreateDapPage.prototype, "form", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], CreateDapPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* DateTime */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], CreateDapPage.prototype, "dateTime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* Navbar */])
    ], CreateDapPage.prototype, "nav", void 0);
    CreateDapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-create-dap',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\ZenLearn\create-dap\create-dap.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>Create DAP</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n    <form class="pad-16" #createDap="ngForm" (ngSubmit)="saveDap()" novalidate>\n        <div class="parentMargin">\n            <div *ngFor="let listValue of list;index as i">\n\n                <ion-item class="noColor" *ngIf="listValue.fieldType==\'dropdown\'">\n                    <ion-label floating>{{listValue.title}} <img class="asterisck" src="assets/imgs/asterisk.svg" />\n                    </ion-label>\n                    <!-- <ion-select [name]="listValue.key" [(ngModel)]="listValue.value"\n                        (ionChange)="getLearningID(listValue)">\n                        <ion-option *ngFor="let item of listValue.lov" [value]="item.key">{{item.value}}</ion-option>\n                    </ion-select> -->\n\n                    <ionic-selectable [name]="listValue.key" [(ngModel)]="listValue.value" item-content\n                        [items]="listValue.lov" itemValueField="key" itemTextField="value" [shouldStoreItemValue]="true"\n                        [canSearch]="true" (onChange)="getLearningID(listValue,$event)">\n                    </ionic-selectable>\n                </ion-item>\n\n                <ion-item *ngIf="listValue.fieldType==\'textField\'">\n                    <ion-label floating>{{listValue.title}} <img class="asterisck" src="assets/imgs/asterisk.svg" />\n                    </ion-label>\n\n                    <ion-input type=\'text\' [name]="listValue.key" [(ngModel)]="listValue.value" required>\n                    </ion-input>\n                </ion-item>\n\n\n                <ion-item *ngIf="listValue.fieldType==\'calendar\'">\n                    <ion-label floating>{{listValue.title}}<img class="asterisck" src="assets/imgs/asterisk.svg" />\n                    </ion-label>\n\n                    <ion-datetime displayFormat="D-MMM-YYYY" [min]="listValue?.minValue" [max]="listValue?.maxValue"\n                        (ionChange)="selectedDate(listValue.value)" [name]="listValue.key" [(ngModel)]="listValue.value"\n                        required></ion-datetime>\n\n                    <button class="calenderIcon" (click)="openCalender(0)" ion-button clear color="dark" type="button"\n                        item-right>\n                        <img class="form-icon" style="height: 20px;" src="assets/imgs/new_calendar.svg" />\n                    </button>\n                </ion-item>\n\n                <ion-item class="noColor" *ngIf="listValue.fieldType==\'textArea\'">\n                    <ion-label stacked>{{listValue.title}} <img class="asterisck" src="assets/imgs/asterisk.svg" />\n                    </ion-label><br>\n\n                    <ion-textarea [placeholder]=" listValue?.placeHolder" class="textArea" [(ngModel)]="listValue.value"\n                        [name]="listValue.key" required>\n                    </ion-textarea>\n                </ion-item>\n\n                <div class="listErrorCls"\n                    *ngIf="(createDap.controls[listValue.key]?.touched && (createDap.controls[listValue.key]?.errors && createDap.controls[listValue.key]?.errors.required))">\n                    {{listValue.title}} is required</div>\n\n                <div class="listErrorCls"\n                    *ngIf="createDap.submitted && createDap.controls[listValue.key]?.value == null">\n                    {{listValue.title}} is required</div>\n\n                <div class="listErrorCls"\n                    *ngIf="(createDap.controls[listValue.key]?.touched && maxDateValidation &&listValue.fieldType==\'calendar\')">\n                    {{listValue.title}} date cannot be greater than the current financial year</div>\n\n\n            </div>\n        </div>\n\n\n        <div class="dapParentList" *ngFor="let dapItem of dapList; index as i">\n            <div>\n                <div class="dapList">\n                    <div class="dapSection">\n                        <span class="dapSectionId">{{dapItem.dapSectionId}}</span>\n                        <span class="dapSectionTitle">{{dapItem.sectionTitle}}</span>\n                    </div>\n                    <div class="dapSection">\n                        <span>{{dapItem.weightage}}%</span>\n                        <ion-icon *ngIf="dapItem.tooltip" [tooltip]="dapItem.tooltip" positionV="bottom"\n                            hideOthers="true" [arrow]="showArrow" [event]="tooltipEvent" [duration]="duration"\n                            class="showToolTip" color="dark" type="button">\n                            <img class="info-icon" src="assets/imgs/tooltipIcon.svg" />\n                        </ion-icon>\n                    </div>\n                </div>\n                <div *ngFor="let dapList of dapItem.list">\n\n                    <ion-item class="noColor" *ngIf="dapList.fieldType==\'dropdown\'">\n                        <ion-label floating>{{dapList.title}} <img class="asterisck" src="assets/imgs/asterisk.svg" />\n                        </ion-label>\n\n                        <!-- <ion-select [name]="dapList.key" [(ngModel)]="dapList.value">\n                            <ion-option *ngFor="let item of dapList.lov" [value]="item.key">{{item.value}}</ion-option>\n                        </ion-select> -->\n\n                        <ionic-selectable [name]="dapList.key" [(ngModel)]="dapList.value" item-content\n                            [items]="dapList.lov" itemValueField="key" itemTextField="value"\n                            [shouldStoreItemValue]="true" [canSearch]="true">\n                        </ionic-selectable>\n                    </ion-item>\n\n                    <ion-item class="noBorder noColor mentor" *ngIf="dapList.fieldType==\'mentorList\'" (click)="openLink()">\n                        Know more about Mentoring @ Zensar\n                    </ion-item>\n\n                    <ion-item class="noColor" *ngIf="dapList.fieldType==\'mentorList\'">\n                        <!-- <ion-label floating>{{dapList.title}} <img class="asterisck" src="assets/imgs/asterisk.svg" />\n                        </ion-label> -->\n\n                        <!-- <ion-select [name]="dapList.key" [(ngModel)]="dapList.value">\n                            <ion-option *ngFor="let item of dapList.lov" [value]="item.key">{{item.value}}</ion-option>\n                        </ion-select> -->\n                        <ion-label floating>{{dapList.title}} <img class="asterisck" src="assets/imgs/asterisk.svg" />\n                        </ion-label>\n\n                        <ion-input readonly [(ngModel)]="dapList.titleKey" [name]="dapList.key"\n                            (ionFocus)="selectMentor()"></ion-input>\n                    </ion-item>\n\n                    <ion-item class="noColor" *ngIf="dapList.fieldType==\'textField\'">\n                        <ion-label stacked class="dapLabel">{{dapList.title}} <img class="asterisck"\n                                src="assets/imgs/asterisk.svg" />\n                        </ion-label>\n                        <ion-input type=\'number\' [(ngModel)]="dapList.value" [name]="dapList.key" required>\n\n                        </ion-input>\n                    </ion-item>\n\n                    <ion-item *ngIf="dapList.fieldType==\'calendar\'">\n                        <ion-label floating>{{dapList.title}} <img class="asterisck" src="assets/imgs/asterisk.svg" />\n                        </ion-label>\n                        <ion-datetime displayFormat="D-MMM-YYYY" [min]="dapList?.minValue" [max]="dapList?.maxValue"\n                            [(ngModel)]="dapList.value" [name]="dapList.key" required>\n\n                        </ion-datetime>\n                        <button class="calenderIconDap" (click)="openCalender(i+1)" ion-button clear color="dark"\n                            type="button" item-right>\n                            <img class="form-icon" style="height: 20px;" src="assets/imgs/new_calendar.svg" />\n                        </button>\n\n                    </ion-item>\n\n                    <ion-item *ngIf="dapList.fieldType==\'textArea\' && dapList.bindWith==\'messageForMentor\'" class="noBorder noColor">\n                        <ion-label stacked class="dapLabel">{{dapList.title}}<img style="position: absolute;\n                            height: 12px;padding: 2px;" src="assets/imgs/asterisk.svg" /> </ion-label><br>\n                        <ion-textarea class="textArea mentorMessage" (ionBlur)="updateMentorMsg(dapList.value)" [(ngModel)]="dapList.value" [name]="dapList.key" required>\n                        </ion-textarea>\n\n                    </ion-item>\n                    <ion-item *ngIf="dapList.fieldType==\'textArea\' && dapList.bindWith !=\'messageForMentor\'" class="noBorder noColor">\n                        <ion-label stacked class="dapLabel">{{dapList.title}}<img style="position: absolute;\n                            height: 12px;padding: 2px;" src="assets/imgs/asterisk.svg" /> </ion-label><br>\n                        <ion-textarea class="textArea mentorMessage" [(ngModel)]="dapList.value" [name]="dapList.key" required>\n                        </ion-textarea>\n\n                    </ion-item>\n\n                    <ion-item *ngIf="dapList.fieldType==\'button\'" class="noBorder">\n                        <div class="addProgramParent">\n                            <div (click)="getCourseList(dapItem)" class="dapAddProgram">\n                                <span><img src="assets/menu_icons/plus.svg"></span>\n                                <span class="addprogramTitle"> Add programs</span>\n                            </div>\n\n                            <div *ngIf="isCourseListAvaliable" (click)="showCourses(dapItem);$event.stopPropagation();"\n                                class="dapAddProgram selectedProgram">\n                                <span class="selectedProgramDetails"> Selected :\n                                    {{addProgram}}</span>\n                                <span class="addprogramTitle">View All </span>\n                            </div>\n                        </div>\n                    </ion-item>\n\n                    <div class="dapErrorCls"\n                        *ngIf="(createDap.controls[dapList.key]?.touched && (createDap.controls[dapList.key]?.errors && createDap.controls[dapList.key]?.errors.required))">\n                        {{dapItem.sectionTitle}} is required</div>\n\n                    <div class="dapErrorCls"\n                        *ngIf="(createDap.submitted && createDap.controls[dapList.key]?.value == null) &&(dapList.fieldType != \'button\')">\n                        {{dapList.title}} is required</div>\n                </div>\n            </div>\n        </div>\n        <div *ngIf="isDataAvailable" class="buttonParent" style="margin-bottom: 10px;">\n            <button *ngIf="dapStatus == \'Pending Manager Approval\'" class="btnStyle" ion-button\n                [disabled]="!createDap.form.valid">Pending manager approval</button>\n            <button *ngIf="dapStatus == \'Not Approved\' || dapStatus == \'Manager Rejected\'" class="btnStyle" ion-button\n                [disabled]="!createDap.form.valid">Pending for re-submission</button>\n            <button *ngIf="!dapStatus" class="btnStyle" ion-button [disabled]="!createDap.form.valid">send for\n                approval </button>\n        </div>\n    </form>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\ZenLearn\create-dap\create-dap.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_formService_form_control_service__["a" /* FormControlService */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */]])
    ], CreateDapPage);
    return CreateDapPage;
}());

//# sourceMappingURL=create-dap.js.map

/***/ })

});
//# sourceMappingURL=133.js.map