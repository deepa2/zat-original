webpackJsonp([118],{

/***/ 1440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPageModule", function() { return AddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add__ = __webpack_require__(1862);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_attachment_attachment__ = __webpack_require__(731);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AddPageModule = /** @class */ (function () {
    function AddPageModule() {
    }
    AddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__add__["a" /* AddPage */]),
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__add__["a" /* AddPage */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__providers_attachment_attachment__["a" /* Attachment */],
            ]
        })
    ], AddPageModule);
    return AddPageModule;
}());

//# sourceMappingURL=add.module.js.map

/***/ }),

/***/ 1862:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_attachment_attachment__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subscription__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_emojione__ = __webpack_require__(148);
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









var AddPage = /** @class */ (function () {
    function AddPage(navCtrl, attachment, store, loadingController, popoverCtrl, alertCtrl, file, navParams, emojiService, data) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.attachment = attachment;
        this.store = store;
        this.loadingController = loadingController;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.file = file;
        this.navParams = navParams;
        this.emojiService = emojiService;
        this.data = data;
        this.addText = '';
        this.addMessege = '';
        this.currentURL = null;
        this.imagesList = [];
        this.title = '';
        this.maxLength = 0;
        this.maxImageCount = 4;
        this.errorMsg = false;
        this._addLoadingListener = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subscription__["Subscription"]();
        this._addSuccessListener = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subscription__["Subscription"]();
        this._roleListener = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subscription__["Subscription"]();
        // get logged in user data & check for user type (associate or admin)
        this.data.getData('loginDetails').then(function (loginData) {
            if (loginData.details) {
                _this.userType = loginData.details.userDetails.userType;
            }
        });
    }
    // on page load, all the data initialization takes place here
    AddPage.prototype.ngOnInit = function () {
        var _this = this;
        this.maxLength = 350;
        this.degreeStyle = 'rotate(' + -45 + 'deg)';
        this.formData = new FormData();
        this.navType = this.navParams.get('type');
        this.questionId = this.navParams.get('questionId');
        this.answerType = this.navParams.get('answerType');
        console.log(this.answerType);
        if (this.answerType == 'reject') {
            // this.title = "Discard";
        }
        else if (this.answerType == 'accept') {
            // this.title = "Reply";
        }
        else {
            // this.title = "Add";
        }
        if (this.navType == 'addQuestion') {
            this.addType = 'Question';
            this.placeholderContent = "Type your question";
        }
        else if (this.navType == 'addAnswer') {
            if (this.answerType == 'reject') {
                this.addType = 'Question';
                this.placeholderContent = "Reason for discarding question";
            }
            else {
                this.addType = 'Answer';
                this.placeholderContent = "Type your answer";
            }
        }
        else if (this.navType == "addAnnouncement") {
            this.addType = 'Announcement';
        }
        this.data.getData(this.addType).then(function (data) {
            _this.addText = data;
        });
        this.data.getData(this.addmsgType).then(function (message) {
            _this.addMessege = message;
        });
        this.title = this.title.concat(' ' + this.addType);
    };
    AddPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        // on entering set focus on input field
        setTimeout(function () {
            _this.inputToFocus.setFocus();
        });
    };
    //this will call every time by Ionic whenever we enter into the page, subscribing all the data here. 
    AddPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this._addLoadingListener = this.store.select(__WEBPACK_IMPORTED_MODULE_4__store__["_36" /* getAddLoading */]).subscribe(function (loading) {
            _this.updateLoader(loading);
        });
        this._addSuccessListener = this.store.select(__WEBPACK_IMPORTED_MODULE_4__store__["_33" /* getAddData */]).subscribe(function (data) {
            if (data) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store__["d" /* AddResetAction */]());
                _this.presentAlert();
            }
        });
        this._roleListener = this.store.select(__WEBPACK_IMPORTED_MODULE_4__store__["_84" /* getRole */]).subscribe(function (res) {
            if (res) {
                _this.role = res;
            }
        });
        this.setBackButtonAction();
    };
    // this method save all the data as draft on back button click
    AddPage.prototype.setBackButtonAction = function () {
        var _this = this;
        this.navBar.backButtonClick = function () {
            if (_this.addText != undefined && _this.addText != null && _this.addText != '') {
                if (_this.addText.length > 0) {
                    var alert_1 = _this.alertCtrl.create({
                        message: 'Do you want to save as drafts?',
                        enableBackdropDismiss: false,
                        buttons: [
                            {
                                text: 'No',
                                role: 'no',
                                handler: function () {
                                    _this.navCtrl.pop();
                                    _this.data.saveData(_this.addType, '');
                                    _this.data.saveData(_this.addmsgType, '');
                                }
                            },
                            {
                                text: 'Yes',
                                handler: function () {
                                    _this.navCtrl.pop();
                                    _this.data.saveData(_this.addType, _this.addText);
                                    _this.data.saveData(_this.addmsgType, _this.addMessege);
                                }
                            }
                        ],
                    });
                    alert_1.present();
                }
                else {
                    _this.navCtrl.pop();
                }
            }
            else {
                _this.navCtrl.pop();
            }
        };
    };
    // on leaving this page, all observable has be unsubscribed here..
    AddPage.prototype.ionViewWillLeave = function () {
        this._addLoadingListener.unsubscribe();
        this._addSuccessListener.unsubscribe();
        this._roleListener.unsubscribe();
    };
    // attach images from camera or gallery
    AddPage.prototype.attach = function (myEvent) {
        var _this = this;
        if (this.imagesList.length < this.maxImageCount) {
            var popover = this
                .popoverCtrl
                .create('PopoverPage', { 'type': 'attach' });
            // enableBackdropDismiss: false;
            popover.present({ ev: myEvent });
            popover.onDidDismiss(function (type) {
                if (type == 'gallery') {
                    var count = _this.maxImageCount - _this.imagesList.length;
                    _this.attachment.openGallery(count).then(function (response) {
                        if (response) {
                            if (response != "OK") {
                                _this.imagesList = _this.imagesList.concat(response);
                            }
                        }
                    });
                }
                else if (type == 'camera') {
                    _this.attachment.openCamera().then(function (response) {
                        if (response) {
                            _this.imagesList = _this.imagesList.concat([response]);
                        }
                    });
                }
            });
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: '',
                message: "Cannot add more than " + this.maxImageCount + " images",
                buttons: [
                    {
                        text: 'Ok',
                        handler: function () {
                        }
                    }
                ],
                cssClass: 'alertCustomCss'
            });
            alert_2.present();
        }
    };
    // To remove attached image while adding question or announcement
    AddPage.prototype.removeAttach = function (id) {
        this.imagesList = this.imagesList.filter(function (item, i) {
            if (id != i) {
                return item;
            }
        });
    };
    // Removing un-necessary spacing from entered text 
    AddPage.prototype.trim = function () {
        this.addText = this.addText.trim();
        if (this.addText.length > 0) {
            this.errorMsg = false;
        }
        //  else {
        //     this.errorMsg = true;
        // }
    };
    // To post a question with the attachment
    AddPage.prototype.send = function () {
        var _this = this;
        this.addText = this.addText.trim();
        this.formData = new FormData();
        if (this.addText.length > 0) {
            this.errorMsg = false;
        }
        else {
            this.errorMsg = true;
        }
        if (this.addText.length > 0) {
            this.errorMsg = false;
            var textsend = this.emojiService.unicodeToShortname(this.addText);
            var message = null;
            if (this.navType == 'addQuestion') {
                message = 'Do you want to submit ?';
                this.currentURL = 'addQuestion';
                this.formData.append('question', textsend);
            }
            else if (this.navType == 'addAnswer') {
                this.currentURL = 'addAnswer';
                this.formData.append('questionId', this.questionId);
                this.formData.append('answer', textsend);
                this.formData.append('answerType', this.answerType);
                this.formData.append('role', this.role);
                if (this.answerType == 'reject') {
                    // this.btnTitle = "Discard";
                    message = 'Do you really want to discard this question?';
                }
                else if (this.answerType == 'accept') {
                    // this.btnTitle = "Reply";
                    message = 'Do you want to reply ?';
                }
            }
            else if (this.navType == "addAnnouncement") {
                if (this.addMessege.length > 0) {
                    var textAnnouncement = this.emojiService.unicodeToShortname(this.addMessege);
                    message = 'Do you want to submit ?';
                    this.currentURL = 'addAnnouncements';
                    this.formData.append('announcementSubject', textsend);
                    this.formData.append('announcementText', textAnnouncement);
                }
            }
            var alert_3 = this.alertCtrl.create({
                enableBackdropDismiss: false,
                title: this.btnTitle,
                message: message,
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
                            if (_this.imagesList.length > 0) {
                                Promise.all(_this.imagesList.map(function (element) {
                                    return new Promise(function (resolve, reject) {
                                        _this.file.resolveLocalFilesystemUrl(element).then(function (entry) {
                                            entry.file(function (file) {
                                                var fileReader = new FileReader();
                                                fileReader.readAsArrayBuffer(file);
                                                fileReader.onload = function (ev) {
                                                    var imgBlob = new Blob([fileReader.result], { type: file.type });
                                                    _this.formData.append('file', imgBlob, file.name);
                                                    resolve(element);
                                                };
                                            });
                                        });
                                    });
                                })).then(function () {
                                    _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store__["c" /* AddMultimediaAction */](_this.currentURL, _this.formData, _this.navType));
                                }).catch(function () {
                                });
                            }
                            else {
                                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__store__["c" /* AddMultimediaAction */](_this.currentURL, _this.formData, _this.navType));
                                _this.data.saveData(_this.addType, "");
                                _this.data.saveData(_this.addmsgType, "");
                            }
                        }
                    }
                ],
                cssClass: 'alertCustomCss'
            });
            alert_3.present();
        }
        else {
            this.errorMsg = true;
        }
    };
    // create, show and hide loader 
    AddPage.prototype.updateLoader = function (loading) {
        if (loading) {
            this.loader = this.loadingController.create();
            this.loader.present();
        }
        else {
            if (this.loader) {
                this.loader.dismiss();
                this.loader = null;
            }
        }
    };
    // Show success, faliure of service call messages...
    AddPage.prototype.presentAlert = function () {
        var _this = this;
        var subTitle;
        if (this.answerType == 'reject') {
            subTitle = "Question discarded successfully";
        }
        else if (this.answerType == 'accept') {
            subTitle = "You have successfully responded to the query.";
        }
        else {
            subTitle = "Your query has been successfully posted. Please expect a response within 48 hours.";
        }
        var alert = this.alertCtrl.create({
            // title: 'Confirmation',
            enableBackdropDismiss: false,
            // title: 'Confirmation',
            subTitle: subTitle,
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        if (_this.navType == 'addQuestion' || _this.navType == "addAnnouncement") {
                            if (_this.userType == "PRE-ONBOARDING") {
                                var lastIndex = _this.navCtrl.getActive().index - 1;
                                var lastPageName = _this.navCtrl.getByIndex(lastIndex).name;
                                if (lastPageName == "ObDashboardPage") {
                                    _this.navCtrl.push('QuestionsPage');
                                    var currentIndex = _this.navCtrl.getActive().index;
                                    _this.navCtrl.remove(currentIndex, 1);
                                }
                                else {
                                    _this.navCtrl.push('QuestionsPage');
                                    var currentIndex = _this.navCtrl.getActive().index - 1;
                                    _this.navCtrl.remove(currentIndex, 2);
                                }
                            }
                            else {
                                _this.navCtrl.pop();
                            }
                        }
                        else if (_this.navType == 'addAnswer') {
                            var currentIndex = _this.navCtrl.getActive().index - 1;
                            _this.navCtrl.remove(currentIndex, 2);
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    //Show popup menu
    AddPage.prototype.presentOptions = function (myEvent) {
        var popover = this.popoverCtrl.create('PopoverPage', { 'type': 'obAdd' });
        popover.present({ ev: myEvent });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputToFocus'),
        __metadata("design:type", Object)
    ], AddPage.prototype, "inputToFocus", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* Navbar */])
    ], AddPage.prototype, "navBar", void 0);
    AddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\add\add.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title class="pageTitile">\n            {{title}}\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="attach($event)">\n                <ion-icon [style.transform]="degreeStyle" name="md-attach"></ion-icon>\n            </button>\n            <button form="ngForm" [disabled]="!addForm.form.valid" ion-button icon-only (click)="send()">\n                <ion-icon name="md-send"></ion-icon>\n            </button>\n            <button ion-button icon-only (click)="presentOptions($event)">\n                <ion-icon name="more"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <form id="ngForm" #addForm="ngForm">\n\n        <div *ngIf="navType!=\'addAnnouncement\'">\n            <ion-item>\n                <ion-textarea #inputToFocus class="singleTextArea" [maxlength]="maxLength" required\n                    #addTextArea="ngModel" name=\'addText\' elasticTextArea [(ngModel)]="addText"\n                    [placeholder]="placeholderContent">\n                </ion-textarea>\n            </ion-item>\n\n            <div padding-top class="remainingCharacters" *ngIf="navType!=\'addAnnouncement\'">\n                {{maxLength - addForm.form.value.addText?.length}} characters left\n            </div>\n        </div>\n\n        <div *ngIf="navType==\'addAnnouncement\'">\n            <ion-item>\n                <ion-textarea #inputToFocus elasticTextArea name=\'addText\'  required\n                    [(ngModel)]="addText" placeholder="Subject">\n                </ion-textarea>\n            </ion-item>\n            <!-- <div class="msgSeperator"></div> -->\n            <ion-item>\n                <ion-textarea #inputToFocus  class="msgTextarea" elasticTextArea name=\'addMessege\' (ionChange)="trim()" required\n                    [(ngModel)]="addMessege" placeholder="Message">\n                </ion-textarea>\n            </ion-item>\n        </div>\n\n    </form>\n\n    <div *ngIf="errorMsg" class="alert-box">\n        <div class="alert-icon"><img class="alert-img" src="assets/imgs/alert.svg" /></div>\n        <div class="alert-text">{{addType}} cannot be blank</div>\n    </div>\n\n    <div *ngIf="imagesList.length > 0"> \n        <multimedia type=\'add\' (remove)="removeAttach($event)" [multimediaItems]=\'imagesList\'></multimedia>\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\add\add.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_attachment_attachment__["a" /* Attachment */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7_angular_emojione__["b" /* EmojiService */],
            __WEBPACK_IMPORTED_MODULE_8__providers_data_data__["a" /* Data */]])
    ], AddPage);
    return AddPage;
}());

//# sourceMappingURL=add.js.map

/***/ })

});
//# sourceMappingURL=118.js.map