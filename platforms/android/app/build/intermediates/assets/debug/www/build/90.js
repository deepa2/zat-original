webpackJsonp([90],{

/***/ 1443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZenrichRefDetailPageModule", function() { return ZenrichRefDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__referral_details__ = __webpack_require__(1866);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_selectable__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_emojione__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_attachment_attachment__ = __webpack_require__(731);
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
                __WEBPACK_IMPORTED_MODULE_2__referral_details__["a" /* ReferralDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_selectable__["a" /* IonicSelectableModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular_emojione__["a" /* EmojiModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__referral_details__["a" /* ReferralDetailsPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__providers_attachment_attachment__["a" /* Attachment */]
            ]
        })
    ], ZenrichRefDetailPageModule);
    return ZenrichRefDetailPageModule;
}());

//# sourceMappingURL=referral-details.module.js.map

/***/ }),

/***/ 1866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferralDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_angular_http_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_attachment_attachment__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_add_competency_add_competency__ = __webpack_require__(774);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_zenrich_star_points_zenrich_star_points__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ReferralDetailsPage = /** @class */ (function () {
    function ReferralDetailsPage(navCtrl, navParams, inappbrowser, httpProvider, modalCtrl, popoverctr, alertCtrl, platform, httpAngularProvider, ngZone, attachment, file, utility) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.inappbrowser = inappbrowser;
        this.httpProvider = httpProvider;
        this.modalCtrl = modalCtrl;
        this.popoverctr = popoverctr;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.httpAngularProvider = httpAngularProvider;
        this.ngZone = ngZone;
        this.attachment = attachment;
        this.file = file;
        this.utility = utility;
        this.mainData = {};
        this.formdata = {};
        this.attachmentList = [];
        this.showAdditionalInfo = false;
        this.step1Validate = false;
        this.compValidate = true;
        this.selectedFile = "";
        this.contenue = true;
        this.comCount = 0;
        this.shownext = false;
        this.showfooter = true;
        this.showoldDoc = true;
        this.diableSave = false;
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
        this.candidateProfileId = this.navParams.get('candidateProfileId');
        this.createNew = this.navParams.get('createNew');
        this.isProfileDetails = this.navParams.get('isComingFromProfileDetails');
        this.isCominFromProfile = this.navParams.get('isCominFromProfile');
        this.paramsFromChatBot = this.navParams.get('paramsFromChatBot');
        // console.log(this.navParams.get('paramsFromChatBot').createNew)
        if (this.paramsFromChatBot && this.paramsFromChatBot.createNew) {
            this.createNew = this.paramsFromChatBot.createNew;
            this.candidateProfileId = this.paramsFromChatBot.candidateProfileId;
        }
        if (this.createNew) {
            this.fromsaved = true;
        }
        else {
            this.fromsaved = false;
        }
        this.srfNo = this.navParams.get('srfNo');
        this.getReferralData();
        this.formData = new FormData();
        this.getMaxDate();
        var self = this;
        window.addEventListener('native.keyboardshow', keyboardShowHandler);
        function keyboardShowHandler(e) {
            self.showfooter = false;
        }
        window.addEventListener('native.keyboardhide', keyboardHideHandler);
        function keyboardHideHandler(e) {
            self.showfooter = true;
        }
        platform.ready().then(function () {
            platform.registerBackButtonAction(function () {
                _this.navCtrl.pop();
            });
        });
    }
    ReferralDetailsPage.prototype.ionViewCanLeave = function () {
        var _this = this;
        if (this.step2Validate == false) {
            return new Promise(function (resolve, reject) {
                var alert = _this.alertCtrl.create({
                    // title: 'Delete Skills',
                    message: 'All changes will discard',
                    cssClass: 'discard-alert',
                    buttons: [
                        {
                            text: 'Ok',
                            handler: resolve
                        },
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: reject
                        }
                    ]
                }).present();
            });
        }
    };
    ReferralDetailsPage.prototype.ionViewDidEnter = function () {
        this.showAdditionalInfo = false;
    };
    ReferralDetailsPage.prototype.checkValidity = function () {
        this.formdata = this.form.value;
        if (!this.showAdditionalInfo) {
            this.validateStep1(this.formdata);
            this.utility.updateLoader(false);
        }
        else {
            this.validateStep2(this.formdata);
            this.utility.updateLoader(false);
        }
    };
    ReferralDetailsPage.prototype.changeFlag = function () {
        this.step1Validate = false;
        this.step2Validate = false;
        this.shownext = false;
    };
    ReferralDetailsPage.prototype.getReferralData = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var url = "getCandidateProfile";
        var data = { "candidateProfileId": this.candidateProfileId, "srfNumber": this.srfNo };
        this.utility.updateLoader(true);
        this.httpProvider.http
            .commonService({ url: url, data: data, zenRich: true })
            .subscribe(function (res) {
            //console.log(res)
            _this.mainData = res.details;
            //console.log(this.mainData);
            setTimeout(function () {
                if (_this.candidateProfileId != 0) {
                    _this.checkValidity();
                    _this.utility.updateLoader(false);
                }
            }, 100);
            _this.utility.updateLoader(false);
        });
    };
    ReferralDetailsPage.prototype.saveReferral = function (clickedFrom) {
        var _this = this;
        this.shownext = false;
        this.diableSave = true;
        this.contenue = true;
        this.comCount = 0;
        this.utility.updateLoader(true);
        var url = "saveCandidateProfile";
        this.formdata = this.form.value;
        if (this.form.value.title != null) {
            var title = this.mainData.titleLov.filter(function (value) {
                return value.key == _this.form.value.title;
            });
            this.mainData.titleValue = title[0].value;
        }
        if (this.form.value.gender != null) {
            var gender = this.mainData.genderLov.filter(function (value) {
                return value.key == _this.form.value.gender;
            });
            this.mainData.genderValue = gender[0].value;
        }
        if (!this.showAdditionalInfo) {
            this.validateStep1(this.formdata);
        }
        else {
            this.validateStep2(this.formdata);
        }
        if (!this.showAdditionalInfo) {
            this.formdata.competencies = null;
            this.formdata.stepCount = 1;
        }
        else {
            this.competencies = this.mainData;
            if (this.competencies.competencies == null) {
                this.formdata.competencies = [{
                        "skillId": this.form.value.skillId,
                        "proficiency": this.form.value.proficiency,
                        "experience": this.form.value.proexperience,
                        "lastUsed": this.form.value.lastUsed,
                        "interest": this.form.value.interest
                    }];
            }
            else {
                this.formdata.competencies = this.competencies.competencies;
            }
            this.formdata.stepCount = 2;
            if (this.step1Validate && this.step2Validate) {
                this.formdata.competencies.forEach(function (value) {
                    var item = [];
                    item[0] = value;
                    _this.comCount += 1;
                    if (_this.contenue == true) {
                        _this.competencyValidate(item);
                    }
                });
            }
        }
        if (this.candidateProfileId != 0) {
            this.formdata.candidateProfileId = this.candidateProfileId;
        }
        if (this.srfNo != null) {
            this.formdata.srfNumber = this.srfNo;
        }
        if (this.step1Validate && this.step2Validate && this.compValidate) {
            this.formdata.panCard = this.formdata.panCard.toUpperCase();
            var data = this.formdata;
            //console.log(data)
            this.httpProvider.http
                .commonService({ url: url, data: data, zenRich: true })
                .subscribe(function (res) {
                //console.log(res)
                _this.utility.showToast("Referral saved successfully.");
                _this.candidateProfileId = res.details.candidateProfileId;
                _this.shownext = true;
                _this.diableSave = false;
                console.log(_this.candidateProfileId);
                // if(res.details.earnedPoints){
                //   this.openStarModal(res.details.earnedPointsMessage)
                // }
                // console.log(this.mainData);
                if (_this.showAdditionalInfo && _this.formdata.stepCount == 2 && !_this.fromsaved && clickedFrom == 'next2') {
                    _this.goToReferralInfo();
                }
                else if (_this.showAdditionalInfo && _this.fromsaved && _this.formdata.stepCount == 2 && _this.isProfileDetails) {
                    //this.goToprofilePage()
                    _this.navCtrl.pop();
                }
                else if (_this.showAdditionalInfo && _this.fromsaved && _this.formdata.stepCount == 2 && _this.isCominFromProfile) {
                    _this.navCtrl.pop();
                    _this.goToprofilePage();
                }
                if (clickedFrom == 'next') {
                    _this.showAdditional();
                }
                _this.utility.updateLoader(false);
            }, function (error) {
                //console.log(error);
                _this.utility.updateLoader(false);
            });
        }
        this.utility.updateLoader(false);
    };
    ReferralDetailsPage.prototype.uploadDoc = function () {
        var _this = this;
        this.attachment.openDocument('').then(function (response) {
            _this.selectedFileResponce = response;
            _this.uploadFile(_this.selectedFileResponce);
        }).catch(function (error) {
        });
    };
    ReferralDetailsPage.prototype.getFileSize = function (bytes) {
        if (bytes == 0)
            return 'n/a';
        else {
            var num = (bytes / (Math.pow(1024, 2))).toFixed(2);
            return parseFloat(num);
        }
    };
    /**
     * Upload document service integration.
     * Associate upload the document as  supporting document while filling  KRAs.
     */
    ReferralDetailsPage.prototype.uploadFile = function (Uri) {
        var _this = this;
        var fileURI = Uri;
        this.utility.updateLoader(true);
        var formData = new FormData();
        var uploadDocs = {
            url: "uploadDocument",
            data: formData,
            zenRich: true
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
                        if (fileSize <= 3.00) {
                            var imgBlob = new Blob([fileReader.result], { type: fileType });
                            var fileName = new Date().getTime();
                            formData.append("file", imgBlob, fileName + "." + fileExt);
                            formData.append("candidateProfileId", _this.candidateProfileId);
                            formData.append("type", "resume");
                            /**
                             * Upload documents service call : UploadKRADatials
                             */
                            _this.httpAngularProvider.multimediaService(uploadDocs).subscribe(function (response) {
                                _this.utility.updateLoader(false);
                                if (response) {
                                    if (response.status.statusCode == 1) {
                                        _this.utility.showToast("File uploaded successfully.");
                                        // this.selectedFile = file.localURL.substring(file.localURL.lastIndexOf('/') + 1)
                                        _this.ngZone.run(function () {
                                            _this.showoldDoc = true;
                                            _this.mainData.candidateDocuments = [{}];
                                            _this.selectedFile = response.details.docUrl;
                                            var fileName = _this.selectedFile.substr(_this.selectedFile.lastIndexOf('/') + 1);
                                            _this.fileExt = fileName.substr(fileName.lastIndexOf('.') + 1);
                                            var document = {
                                                "documentName": fileName,
                                                "documentUrl": _this.selectedFile
                                            };
                                            _this.mainData.candidateDocuments[0] = document;
                                        });
                                    }
                                }
                            });
                        }
                        else {
                            _this.utility.updateLoader(false);
                            _this.utility.presentAlert("Please upload a resume less than 3mb.");
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
    ReferralDetailsPage.prototype.validateStep1 = function (formdata) {
        this.utility.updateLoader(true);
        this.step1Validate = false;
        if (formdata.title == "" || formdata.title == null) {
            this.utility.presentAlert("Please enter title");
            this.diableSave = false;
            return;
        }
        if (formdata.firstName == "" || formdata.firstName == null) {
            this.utility.presentAlert("Please enter first name");
            this.diableSave = false;
            return;
        }
        else if (formdata.lastName == "" || formdata.lastName == null) {
            this.utility.presentAlert("Please enter last name");
            this.diableSave = false;
            return;
        }
        else if (formdata.emailAddress == "" || formdata.emailAddress == null) {
            this.utility.presentAlert("Please enter email address");
            this.diableSave = false;
            return;
        }
        else if (formdata.gender == "" || formdata.gender == null) {
            this.utility.presentAlert("Please enter gender");
            this.diableSave = false;
            return;
        }
        else if (formdata.dateOfBirth == "" || formdata.dateOfBirth == null) {
            this.utility.presentAlert("Please enter date of birth");
            this.diableSave = false;
            return;
        }
        else if (formdata.cellularNumber == "" || formdata.cellularNumber == null) {
            this.utility.presentAlert("Please enter cellular number");
            this.diableSave = false;
            return;
        }
        else if (formdata.panCard == "" || formdata.panCard == null) {
            this.utility.presentAlert("Please enter PAN number");
            this.diableSave = false;
            return;
        }
        else if (formdata.city == "" || formdata.city == null) {
            this.utility.presentAlert("Please enter city");
            this.diableSave = false;
            return;
        }
        else if (formdata.aboutCandidate == "" || formdata.aboutCandidate == null || formdata.aboutCandidate.length < 20) {
            this.utility.presentAlert("About candidate information must be at least 20 characters long");
            this.diableSave = false;
            return;
        }
        if (formdata.firstName != "" || formdata.firstName != null || formdata.lastName != "" || formdata.lastName != null) {
            var regex = /^[a-zA-Z, ]+$/;
            if (!regex.test(formdata.firstName) || !regex.test(formdata.lastName)) {
                this.utility.presentAlert("Please enter first name or last name in alphabet only");
                this.diableSave = false;
                return false;
            }
        }
        if (formdata.emailAddress != "" || formdata.emailAddress != null) {
            //previous regular expression taking ..before com
            //var regex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
            var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regex.test(formdata.emailAddress)) {
                this.utility.presentAlert("This is not a valid email address");
                this.diableSave = false;
                return false;
            }
        }
        if (formdata.panCard != "" || formdata.panCard != null) {
            var regex = /[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}/;
            if (!regex.test(formdata.panCard)) {
                this.utility.presentAlert("This is not a valid PAN number");
                this.diableSave = false;
                return false;
            }
        }
        this.diableSave = false;
        this.step1Validate = true;
        this.step2Validate = true;
    };
    ReferralDetailsPage.prototype.validateStep2 = function (formdata) {
        this.utility.updateLoader(true);
        this.step2Validate = false;
        if (formdata.experience == "" || formdata.experience == null) {
            this.utility.presentAlert("Please select experience");
            return;
        }
        else if (formdata.noticePeriod == "" || formdata.noticePeriod == null) {
            this.utility.presentAlert("Please select notice period");
            return;
        }
        this.step1Validate = true;
        this.step2Validate = true;
    };
    ReferralDetailsPage.prototype.competencyValidate = function (competencies) {
        this.compValidate = false;
        if (competencies[0].skillId == undefined || competencies[0].skillId == null) {
            this.utility.presentAlert("Please add competency");
            this.contenue = false;
            return;
        }
        else {
            if (competencies[0].skillId == undefined || competencies[0].skillId == null) {
                this.utility.presentAlert("Please select programing language");
                return;
            }
            else if (competencies[0].proficiency == undefined || competencies[0].proficiency == null) {
                this.utility.presentAlert("Please select proficiency of " + competencies[0].skillDesc);
                this.contenue = false;
                return;
            }
            else if (competencies[0].experience == undefined || competencies[0].experience == null) {
                this.utility.presentAlert("Please select experience of " + competencies[0].skillDesc);
                this.contenue = false;
                return;
            }
            else if (competencies[0].lastUsed == undefined || competencies[0].lastUsed == null) {
                this.utility.presentAlert("Please select last used of " + competencies[0].skillDesc);
                this.contenue = false;
                return;
            }
            else if (competencies[0].interest == undefined || competencies[0].interest == null) {
                this.utility.presentAlert("Please select interest of " + competencies[0].skillDesc);
                this.contenue = false;
                return;
            }
            else if (this.mainData.candidateDocuments == null) {
                this.utility.presentAlert("Please upload the resume");
                this.contenue = false;
                return;
            }
        }
        if (this.comCount == this.mainData.competencies.length) {
            this.compValidate = true;
        }
    };
    ReferralDetailsPage.prototype.getMaxDate = function () {
        this.maxDate = new Date((new Date().getFullYear() - 18), new Date().getMonth(), new Date().getDate());
        this.maxDate = __WEBPACK_IMPORTED_MODULE_10_moment__(this.maxDate).format("YYYY-MM-DD");
        //console.log(this.maxDate)
    };
    ReferralDetailsPage.prototype.presentskillsConfirm = function (skillId, index) {
        var _this = this;
        if (this.mainData.competencies.length == 1) {
            this.utility.presentAlert("Atleast one competency is required");
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Delete Skills',
                message: 'Do you want to delete skills?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            //console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Delete',
                        handler: function () {
                            _this.deleteSkills(skillId, index);
                            //console.log('delete clicked');
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    ReferralDetailsPage.prototype.presentsResumeConfirm = function (skillId, index) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Delete Resume',
            message: 'Do you want to delete this resume?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        //console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.deleteDocument();
                        //console.log('delete clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    ReferralDetailsPage.prototype.deleteDocument = function () {
        var _this = this;
        this.utility.updateLoader(true);
        var url = "deleteDocument";
        var data = { "type": "resume", "candidateProfileId": this.candidateProfileId };
        this.httpProvider.http
            .commonService({ url: url, data: data, zenRich: true })
            .subscribe(function (res) {
            //console.log(res)
            _this.mainData.candidateDocuments = null;
            _this.showoldDoc = false;
            _this.utility.updateLoader(false);
            _this.utility.showToast("Resume deleted successfully.");
        });
    };
    // Delete Skills
    ReferralDetailsPage.prototype.deleteSkills = function (skillId, index) {
        var _this = this;
        this.utility.updateLoader(true);
        var url = "deleteSkill";
        var data = { "skillId": skillId, "candidateProfileId": this.candidateProfileId };
        this.httpProvider.http
            .commonService({ url: url, data: data, zenRich: true })
            .subscribe(function (res) {
            //console.log(res)
            _this.mainData.competencies.splice(index, 1);
            _this.utility.updateLoader(false);
            _this.utility.showToast("Competency deleted successfully.");
        });
    };
    // **********************open pdf in inappbrowser*****************************************
    ReferralDetailsPage.prototype.openPdfFile = function (url) {
        var encodedUrl = encodeURI(url);
        var target = "_system";
        var browser = this.inappbrowser.create(encodedUrl, target, this.options);
    };
    ReferralDetailsPage.prototype.openStarModal = function (points) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__components_zenrich_star_points_zenrich_star_points__["a" /* ZenrichStarPointsComponent */], { "points": points }, {
            cssClass: 'starModal'
        });
        modal.present();
    };
    ReferralDetailsPage.prototype.showAdditional = function () {
        this.showAdditionalInfo = true;
    };
    ReferralDetailsPage.prototype.goToBack = function () {
        this.showAdditionalInfo = false;
    };
    ReferralDetailsPage.prototype.goToReferralInfo = function () {
        this.navCtrl.push("ReferralInfoPage", { "ReferralInfo": this.formdata, "candidateProfileId": this.candidateProfileId, 'srfNo': this.srfNo, 'title': this.mainData.titleValue, "gender": this.mainData.genderValue });
    };
    ReferralDetailsPage.prototype.goToprofilePage = function () {
        this.navCtrl.push("ZenrichProfilePage");
    };
    ReferralDetailsPage.prototype.presentpopover = function (myEvent) {
        var popover = this
            .popoverctr
            .create('PopoverPage', { 'type': 'others' });
        popover.present({ ev: myEvent });
    };
    ReferralDetailsPage.prototype.openCompetency = function (compItem, index, proLangLov, proficiencyLov, experienceLov, lastUsedLov, interestLov) {
        var _this = this;
        this.compdata = {
            "compItem": compItem,
            "prolangLov": proLangLov,
            "proficiencyLov": proficiencyLov,
            "experienceLov": experienceLov,
            "lastUsedLov": lastUsedLov,
            "interestLov": interestLov,
            "index": index
        };
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__components_add_competency_add_competency__["a" /* AddCompetancyComponent */], { "compdata": this.compdata }, {
            cssClass: 'competencyModal'
        });
        modal.onDidDismiss(function (changedata) {
            //console.log(changedata);
            if (changedata != undefined && changedata.index >= 0) {
                _this.mainData.competencies[changedata.index] = changedata.data;
            }
            else if (changedata != undefined && changedata.index < 0) {
                _this.ngZone.run(function () {
                    if (_this.mainData.competencies != null) {
                        _this.mainData.competencies.push(changedata.data);
                    }
                    else {
                        _this.mainData.competencies = [];
                        _this.mainData.competencies.push(changedata.data);
                    }
                });
            }
        });
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('createReferral'),
        __metadata("design:type", Object)
    ], ReferralDetailsPage.prototype, "form", void 0);
    ReferralDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-referral-details',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\referral-details\referral-details.html"*/'<!--\n  Generated template for the WowPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Referral Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="form-wrapper">\n  <form class="pad-16" #createReferral="ngForm" *ngIf="mainData" novalidate>\n       <div class="basic-info" [style.visibility]="!showAdditionalInfo ? \'visible\' : \'hidden\'" [style.height]="!showAdditionalInfo ? \'auto\' : \'0\'">\n      <div class="progress step1">\n        <div class="one prog-item">1</div>\n        <div class="line"></div>\n        <div class="two prog-item">2</div>\n      </div>\n      <div class="info-wrapper">\n        <div class="associate-details">\n          <ion-label class="form-label asso-name" >My Contact Number <img class="asterisck"\n            src="assets/imgs/asterisk.svg" />\n        </ion-label>\n        <ion-label class="form-label">{{mainData.associateMobileNumber}}\n      </ion-label>\n        </div>\n      <div class="ref-title"><img class="about-user" src="assets/imgs/user.svg" />About Referral</div>\n      <ion-item>\n        <ion-label floating class="form-label" >Title <img class="asterisck"\n            src="assets/imgs/asterisk.svg" />\n        </ion-label>\n        <ion-select name="title" [(ngModel)]="mainData.title" required>\n          <ion-option *ngFor="let title of mainData.titleLov" [value]="title?.key">{{title.value}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label floating class="form-label">First Name <img class="asterisck" src="assets/imgs/asterisk.svg" />\n        </ion-label>\n\n        <ion-input type=\'text\' class="capitalise" [(ngModel)]="mainData.firstName" (change)="changeFlag()" name="firstName" pattern="^[a-zA-Z, ]+$" minlength="2" #firstName="ngModel" required>\n        </ion-input>\n       \n      </ion-item>\n      <div *ngIf="firstName.invalid && (firstName.dirty || firstName.touched)"  class="alert alert-danger">\n        <div *ngIf="firstName.errors.minlength">\n          First name should be atleast 2 characters long.\n        </div>\n       \n        <div *ngIf="firstName.errors.required || firstName.invalid && !firstName.errors.minlength">\n          Only alphabets are allowed.\n        </div>\n      </div>\n      <ion-item>\n        <ion-label floating class="form-label">Middle Name\n        </ion-label>\n\n        <ion-input type=\'text\' class="capitalise" [(ngModel)]="mainData.middleName" (change)="changeFlag()" #mName="ngModel"  pattern="^[a-zA-Z, ]+$" name="middleName" value=" ">\n        </ion-input>\n      </ion-item>\n      <div *ngIf="mName.invalid && (mName.dirty || mName.touched)"  class="alert alert-danger">\n      \n        <div *ngIf="mName.errors.required || mName.invalid && !mName.errors.minlength">\n          Only alphabets are allowed.\n        </div>\n      </div>\n      <ion-item>\n        <ion-label floating class="form-label">Last Name <img class="asterisck" src="assets/imgs/asterisk.svg" />\n        </ion-label>\n\n        <ion-input type=\'text\' class="capitalise" [(ngModel)]="mainData.lastName" (change)="changeFlag()" name="lastName" pattern="^[a-zA-Z, ]+$" #lastName="ngModel" required>\n        </ion-input>\n      </ion-item>\n      <div *ngIf="lastName.invalid && (lastName.dirty || lastName.touched)"  class="alert alert-danger">\n        <div *ngIf="lastName.errors.minlength">\n          Last name should be atleast 2 characters long.\n        </div>\n       \n        <div *ngIf="lastName.errors.required || lastName.invalid && !lastName.errors.minlength">\n          Only alphabets are allowed.\n        </div>\n      </div>\n      <ion-item>\n        <ion-label floating class="form-label">Email Address <img class="asterisck" src="assets/imgs/asterisk.svg" />\n        </ion-label>\n\n        <ion-input type="email" class="email lowercase" (change)="changeFlag()" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" [(ngModel)]="mainData.emailAddress" name="emailAddress" #email="ngModel" placeholder="xyz@abc.com"  required>\n        </ion-input>\n      </ion-item>\n      <div *ngIf="email.invalid && (email.dirty || email.touched)"  class="alert alert-danger">\n        <div *ngIf="email.errors.required">\n          Please enter valid email.\n        </div>\n      </div>\n      <div class="two-form-item">\n        <ion-item>\n          <ion-label floating class="form-label" class="noColor">Gender <img class="asterisck"\n              src="assets/imgs/asterisk.svg" />\n          </ion-label>\n          <ion-select name="gender" [(ngModel)]="mainData.gender" item-content (onChange)="getgender($event)" required>\n            <ion-option *ngFor="let gender of mainData?.genderLov" [value]="gender.key">{{gender.value}}</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label floating class="form-label" class="noColor">DOB <img class="asterisck"\n              src="assets/imgs/asterisk.svg" />\n          </ion-label>\n          <ion-datetime [(ngModel)]="mainData.dateOfBirth" [max]="maxDate"  name="dateOfBirth" displayFormat="MMM DD, YYYY" required></ion-datetime>\n        </ion-item>\n      </div>\n      <div class="two-form-item">\n        <ion-item>\n          <ion-label floating class="form-label">Contact Number <img class="asterisck" src="assets/imgs/asterisk.svg" />\n          </ion-label>\n\n          <ion-input type=\'number\' #mobile="ngModel" (change)="changeFlag()" [(ngModel)]="mainData.cellularNumber" name="cellularNumber" required></ion-input>\n        </ion-item>\n        <div *ngIf="mobile.invalid && (mobile.dirty || mobile.touched)"  class="alert alert-danger">\n          <div *ngIf="mobile.errors.required">\n            Please enter mobile.\n          </div>\n        </div>\n        <ion-item>\n          <ion-label floating class="form-label">Alternate Number\n          </ion-label>\n\n          <ion-input type=\'number\' [(ngModel)]="mainData.homePhone" name="homePhone">\n          </ion-input>\n        </ion-item>\n        <!-- <ion-item>\n          <ion-label floating class="form-label">Work Number\n          </ion-label>\n\n          <ion-input type=\'number\' [(ngModel)]="mainData.workNumber" name="workNumber" required>\n          </ion-input>\n        </ion-item> -->\n      </div>\n\n      <ion-item>\n        <ion-label floating class="form-label">PAN <img class="asterisck" src="assets/imgs/asterisk.svg" />\n        </ion-label>\n        <ion-input type=\'text\' class="pan" #PAN="ngModel" (change)="changeFlag()" pattern="[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}" [(ngModel)]="mainData.panCard" name="panCard" minlength="10" maxlength="10" placeholder="XXXXX0000X" required>\n        </ion-input>\n      </ion-item>\n      <div *ngIf="PAN.invalid && (PAN.dirty || PAN.touched)"  class="alert alert-danger">\n        <div *ngIf="PAN.errors.required || PAN.invalid">\n          Please enter valid PAN.\n        </div>\n      </div>\n      <ion-item>\n        <ion-label floating class="form-label capitalise">City <img class="asterisck" src="assets/imgs/asterisk.svg" />\n        </ion-label>\n        <ion-input type=\'text\' class="capitalise" #city="ngModel" (change)="changeFlag()" [(ngModel)]="mainData.city" name="city" required>\n        </ion-input>\n      </ion-item>\n      <div *ngIf="city.invalid && (city.dirty || city.touched)"  class="alert alert-danger">\n        <div *ngIf="city.errors.required">\n          Please enter city.\n        </div>\n      </div>\n      <div class="textarea-wrapp">\n        <ion-label class="form-label text-label">About Candidate \n          <img class="asterisck" src="assets/imgs/asterisk.svg" />\n          <span class="note">(Min 20 char)</span>\n        </ion-label>\n        <ion-textarea class="about-cand" (change)="changeFlag()" [(ngModel)]="mainData.aboutCandidate" rows="4" cols="20" minlength="20" #aboutBody="ngModel" name="aboutCandidate" required></ion-textarea>\n        <div *ngIf="aboutBody.invalid && (aboutBody.dirty || aboutBody.touched)" class="alert alert-danger">\n\n          <div *ngIf="aboutBody.errors.required">\n            About candidate is required.\n          </div>\n          <div *ngIf="aboutBody.errors.minlength">\n            About candidate must be at least 20 characters long.\n          </div>\n\n      </div>\n      </div>\n    </div>\n      <!-- <ion-input type=\'hidden\' [(ngModel)]="mainData.stepCount" name="stepCount" value="1"> </ion-input> -->\n      <ion-input type=\'hidden\' [(ngModel)]="mainData.candidateProfileId" name="candidateProfileId"> </ion-input>\n      <ion-input type=\'hidden\' [(ngModel)]="mainData.fullName" name="fullName"> </ion-input>\n      <ion-input type=\'hidden\' [(ngModel)]="mainData.srfNumber" name="srfNumber"> </ion-input>\n     \n        <!-- <ion-footer *ngIf="!showAdditionalInfo && showfooter" class="fotterBtn 2"> -->\n          <div class="refer-friend-btn" *ngIf="!showAdditionalInfo && showfooter">\n            <button [disabled]="diableSave" (click)="saveReferral(\'save\')"  class="save" type="submit">Save</button>\n            <button [disabled]="!shownext && !step1Validate" (click)="saveReferral(\'next\')" type="submit">Next</button>\n           \n          </div>\n        <!-- </ion-footer> -->\n    </div>\n  \n  <div class="additional-info" [style.visibility]="showAdditionalInfo ? \'visible\' : \'hidden\'" [style.height]="showAdditionalInfo ? \'auto\' : \'0\'">\n      <div class="progress step2">\n        <div class="one prog-item">1</div>\n        <div class="line"></div>\n        <div class="one prog-item">2</div>\n      </div>\n      <div class="info-wrapper">\n      <div class="ref-title"><img class="about-user" src="assets/imgs/aditional-info.svg" />Additional Information</div>\n      <ion-item>\n        <ion-label floating class="form-label" class="noColor">Candidate\'s Total Experience <img class="asterisck"\n            src="assets/imgs/asterisk.svg" />\n        </ion-label>\n        <ion-select name="experience" [(ngModel)]="mainData.experience" item-content>\n          <ion-option *ngFor="let experience of mainData?.experienceLov" [value]="experience.key">{{experience.value}}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label floating class="form-label" class="noColor">Notice Period <img class="asterisck"\n            src="assets/imgs/asterisk.svg" />\n        </ion-label>\n        <ion-select name="noticePeriod" [(ngModel)]="mainData.noticePeriod" item-content>\n          <ion-option *ngFor="let noticePeriod of mainData?.noticePeriodLov" [value]="noticePeriod.key">\n            {{noticePeriod.value}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <div class="comp-title">\n        <div>Competencies</div>\n        <div class="add-new" (click)="openCompetency(item,-1, mainData.proLangLov,mainData.proficiencyLov,mainData.experienceLov,mainData.lastUsedLov,mainData.interestLov)">Add New</div>\n      \n      </div>\n      <div class="competency-wrapper">\n        <div class="comp-item" *ngFor="let item of mainData.competencies let i = index">\n          <div class="comp-info" (click)="openCompetency(item,i, mainData.proLangLov,mainData.proficiencyLov,mainData.competencyExperienceLov,mainData.lastUsedLov,mainData.interestLov)">\n            <div class="expert-con">\n              <img class="expert-icon" src="assets/imgs/expert-icon.svg" />\n              Expert\n            </div>\n            <div class="skill-desc">{{item.skillDesc}}</div>\n            \n          </div>\n         <div class="comp-exp" (click)="openCompetency(item,i, mainData.proLangLov,mainData.proficiencyLov,mainData.competencyExperienceLov,mainData.lastUsedLov,mainData.interestLov)">Experience : {{item.expDesc}}</div>\n          <img class="delete-skills" (click)="$event.stopPropagation();presentskillsConfirm(item.skillId,i)"  src="assets/imgs/Deleteblack.svg" />\n        </div>\n      </div>\n      <div class="attachment">\n        <ion-label class="form-label" class="noColor" tooltip="I\'m a tooltip below a button">Resume \n          <img class="asterisck" src="assets/imgs/asterisk.svg" />\n          <div class="note">(Pdf ,Doc , Docx or Odt upto 3mb only )</div>\n          \n            \n        </ion-label>\n        <div class="file-upload">\n          <span class="upload" (click)="uploadDoc()"><span> <img class="upload-res" src="assets/imgs/upload-resume.svg" /> Upload</span></span>\n          <!-- <span class="uploadIcon"><img class="down-img" src="assets/imgs/Upload.svg"></span> -->\n        </div>\n      </div>\n      <ng-container *ngIf="showoldDoc">\n        <div class="attachment-list" *ngFor="let item of mainData?.candidateDocuments">\n          {{item.documentName}}\n          <div class="preview" (click)="openPdfFile(item.documentUrl) " >Preview</div>\n          <img class="delete-doc" (click)="presentsResumeConfirm()"  src="assets/imgs/delete-resume.svg" />\n          \n        </div>\n      </ng-container>\n    \n    </div>\n    <!-- <ion-footer *ngIf="showAdditionalInfo && showfooter" class="fotterBtn 2"> -->\n      <div class="refer-friend-btn" *ngIf="showAdditionalInfo && showfooter">\n        <div class="nextBtn" (click)="goToBack()">Back</div>\n        <!-- <div class="nextBtn" (click)="goToReferralInfo()">next</div> -->\n        <button *ngIf="fromsaved" (click)="saveReferral(\'save\')" type="submit">Save</button>\n        <button *ngIf="!fromsaved" (click)="saveReferral(\'next2\')" type="submit">Next</button>\n      </div>\n    <!-- </ion-footer> -->\n    </div>\n    \n  </form>\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\referral-details\referral-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["C" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__providers_http_angular_http_angular__["a" /* HttpAngularProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_6__providers_attachment_attachment__["a" /* Attachment */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_4__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */]])
    ], ReferralDetailsPage);
    return ReferralDetailsPage;
}());

//# sourceMappingURL=referral-details.js.map

/***/ })

});
//# sourceMappingURL=90.js.map