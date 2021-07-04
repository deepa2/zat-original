webpackJsonp([60],{

/***/ 1449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZenDeavorKraPageModule", function() { return ZenDeavorKraPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__zen_deavor_kra__ = __webpack_require__(1872);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_attachment_attachment__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_tooltips__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import {ComponentsModule} from '../../components/components.module';

var ZenDeavorKraPageModule = /** @class */ (function () {
    function ZenDeavorKraPageModule() {
    }
    ZenDeavorKraPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__zen_deavor_kra__["a" /* ZenDeavorKraPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__zen_deavor_kra__["a" /* ZenDeavorKraPage */]),
                //ComponentsModule
                __WEBPACK_IMPORTED_MODULE_4_ionic_tooltips__["a" /* TooltipsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__providers_attachment_attachment__["a" /* Attachment */]
            ]
        })
    ], ZenDeavorKraPageModule);
    return ZenDeavorKraPageModule;
}());

//# sourceMappingURL=zen-deavor-kra.module.js.map

/***/ }),

/***/ 1872:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZenDeavorKraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_in_app_browser__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_nav_params__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_kra_training_kra_training__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_attachment_attachment__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_http_angular_http_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_download_download__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_promotion_details_promotion_details__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_performance_measuretext_area_performance_measuretext_area__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_keyboard__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var ZenDeavorKraPage = /** @class */ (function () {
    function ZenDeavorKraPage(navCtrl, navParams, httpProvider, utility, modalCtrl, attachment, file, httpAngularProvider, zone, actionSheetCtrl, alertCtrl, download, platform, inappbrowser, keyboard) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpProvider = httpProvider;
        this.utility = utility;
        this.modalCtrl = modalCtrl;
        this.attachment = attachment;
        this.file = file;
        this.httpAngularProvider = httpAngularProvider;
        this.zone = zone;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.download = download;
        this.platform = platform;
        this.inappbrowser = inappbrowser;
        this.keyboard = keyboard;
        this.KRADetails = {};
        this.pageTitle = "";
        this.KRADetailsUrl = "getKraDetails";
        this.saveKRAUrl = "saveKRA";
        this.attachmentList = [];
        this.kraId = '0';
        this.subKraId = '0';
        this.uploadKRADetailsUrl = "uploadKraDetail";
        this.deleteAttachmentUrl = "deleteAttachment";
        this.submitUrl = "submitAppraisal";
        this.isServiceCallOn = false;
        this.tooltipEvent = 'click';
        this.activeToolTip = false;
        this.reviewerFieldList = [];
        this.goalFeildList = [];
        this.saveKra = {};
        this.kraScoreUrl = "kraScore";
        this.kraScore = '0';
        this.designationListUrl = 'getDesignationList';
        this.mobilityTextarea = false;
        this.isDirectApproveStatus = 'false';
        this.initialKraScore = '0';
        this.appraiserViewDetails = {};
        this.reviewerViewDetails = {};
        this.mobilityConstraintField = [];
        this.promotionAppraiserJustification = [];
        this.promotionReviewerJustification = [];
        this.appraiserPromoView = false;
        this.reviewerPromoView = false;
        this.deleteAttachmentId = 0;
        this.kraScoreUrlMidterm = 'totalScore';
        this.overrrideKraUrl = "overridingExistingKra";
        this.compentencyValues = [];
        this.thirdUpComments = [];
        this.isPromotionDetailsFilled = false;
        this.firstUpComments = [];
        // show view profile icon
        this.comingFromManager = false;
        // promotion details variables
        this.icTitle = "";
        this.titleDesig = "";
        this.icList = [];
        this.designationList = [];
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
        this.isSaveSummaryCalled = false;
        /**
         * getting required values as params from teamlistPage.
         */
        this.pageTitle = this.navParams.get('pageTitle');
        this.userRole = this.navParams.get('role');
        this.userID = this.navParams.get('userID');
        this.finalStatus = this.navParams.get('finalStatus');
        this.kraType = this.navParams.get('kraType');
        this.isComingFromHome = this.navParams.get('isComingFromHome');
        this.comingFromManager = this.navParams.get('comingFromManager');
        console.log("userID", this.kraType);
        // when reviewer selects direct approve & is associate is eligible for promotion then show goals page
        if (this.navParams.get('showWhenData')) {
            // this.showWhenData = "Summary"
            this.kraId = "-2";
            this.isDirectApproveStatus = this.navParams.get('isDirectApprove') || 'false';
        }
        this.icList = [
            { "title": "IC", 'value': 'Individual Contributor' },
            { "title": "PM", 'value': 'People Manager' },
        ];
    }
    ZenDeavorKraPage.prototype.ionViewDidLoad = function () {
    };
    ZenDeavorKraPage.prototype.ionViewWillEnter = function () {
        var isSubmitted = this.navParams.get('submitStatus');
        var kraId = this.navParams.get('kraId');
        var title = this.navParams.get('title');
        /**
             * If the status of the KRA is submitted and the userRole is manager then user should redirected to TeamList page.
             */
        if (!this.utility.isEmptyOrNullOrUndefined(isSubmitted) && isSubmitted == 'true' && this.userRole == '2') {
            this.navCtrl.popTo('ZendeavorTeamListPage');
        }
        /**
             * If the status of the KRA is submitted and the userRole is reviewer then user should redirected to ReviewerList page.
             */
        if (!this.utility.isEmptyOrNullOrUndefined(isSubmitted) && isSubmitted == 'true' && this.userRole == '3') {
            this.navCtrl.popTo('ZendeavorReviewerListPage');
        }
        /**
         * If the status of the KRA is submitted and the userRole is associate then user should be redirected to preview message .
         */
        else if (!this.utility.isEmptyOrNullOrUndefined(isSubmitted) && isSubmitted == 'true' && this.userRole == '1') {
            this.kraId = '-1';
            this.getKRADetails(this.kraId, this.subKraId);
        }
        /**
          * If the status of the KRA is not submitted and the userRole is associate then user should be redirected to the respective kRA.
          */
        else if (!this.utility.isEmptyOrNullOrUndefined(isSubmitted) && isSubmitted == 'false' && this.userRole == '1') {
            if (!this.utility.isEmptyOrNullOrUndefined(kraId)) {
                this.kraId = kraId;
            }
            /**
                  * gets the title of the KRA
                  */
            if (!this.utility.isEmptyOrNullOrUndefined(title)) {
                this.showWhenData = title;
            }
            this.getKRADetails(this.kraId, this.subKraId);
        }
        else if (!this.utility.isEmptyOrNullOrUndefined(isSubmitted) && isSubmitted == 'false' && this.userRole == '2') {
            if (!this.utility.isEmptyOrNullOrUndefined(kraId)) {
                this.kraId = kraId;
            }
            if (!this.utility.isEmptyOrNullOrUndefined(title)) {
                this.showWhenData = title;
            }
            this.getKRADetails(this.kraId, this.subKraId);
        }
        // role 3
        else if (!this.utility.isEmptyOrNullOrUndefined(isSubmitted) && isSubmitted == 'false' && this.userRole == '3') {
            if (!this.utility.isEmptyOrNullOrUndefined(kraId)) {
                this.showWhenData = title;
                //console.log("title 3up", this.showWhenData)
                this.kraId = kraId;
                this.getKRADetails(this.kraId, this.subKraId);
            }
        }
        else {
            this.getKRADetails(this.kraId, this.subKraId);
        }
    };
    ZenDeavorKraPage.prototype.ngOnInit = function () {
    };
    /**
     * this function gets the KRA details with the fields on clicking particular option in the header
     * @param kraId
     */
    ZenDeavorKraPage.prototype.getKRADetails = function (kraId, subkraId) {
        var _this = this;
        this.isSaveSummaryCalled = false;
        // this.resetKraScore(this.kraId);
        // Clearing Data
        // this.KRADetails.fieldDetails = {}  
        /**
         * When reviewer(2UP) selects directapprove option from reviwers list he is redirected to goals page
         * if associate is eligible for promotion and the isDirectApproveStatus is set to true ,if 2UP goes to next page isDirectApproveStatus is set to true
         * If 2UP goes backwards(i.e selects between KRA1 to KRA5 ) then set isDirectApproveStatus to false
         */
        var directapproveFlag = this.isDirectApproveStatus;
        if (directapproveFlag) {
            if (kraId == '-2' || kraId == "-1") {
                directapproveFlag = true;
            }
            else
                directapproveFlag = false;
        }
        this.isDirectApproveStatus = directapproveFlag;
        //console.log("isdirectapprove", directapproveFlag)
        this.utility.updateLoader(true);
        var kraDetails = {
            url: this.KRADetailsUrl,
            data: {
                "userId": !this.utility.isEmptyOrNullOrUndefined(this.userID) ? this.userID : '',
                "kraId": kraId,
                "subKraId": subkraId,
                "role": this.userRole,
                "processType": this.kraType,
                "isDirectApprove": this.isDirectApproveStatus
            },
            zenDeavorURL: true
        };
        this.isServiceCallOn = true;
        this.httpProvider.http.commonService(kraDetails).subscribe(function (response) {
            /**
             * extracting the kraList through which the user switches to different KRAs.
             */
            //console.log(response)
            _this.isServiceCallOn = false;
            if (response) {
                _this.utility.updateLoader(false);
                if (response.details) {
                    _this.KRADetails = response.details;
                    _this.midTerm = _this.KRADetails.midtermMaxTtxn;
                    _this.attachmentList = response.details.attachment;
                    console.log(_this.attachmentList);
                    _this.userID = _this.KRADetails.userId;
                    _this.goalsDetails = _this.KRADetails.goalsDetails;
                    _this.kraConflictStatus = _this.KRADetails.kra_conflict;
                    console.log("kraType", _this.kraType);
                    console.log("kraConflictStatus", _this.kraConflictStatus);
                    _this.midTermGuidelinePdfUrl = _this.KRADetails.midTermGuideLinePdf;
                    console.log("midTermGuidelinePdfUrl", _this.midTermGuidelinePdfUrl);
                    if (_this.kraId == "-2" && _this.kraType == 'Annual') {
                        console.log(_this.KRADetails.competencyFieldList.keyValueList[0]);
                        if (_this.KRADetails.competencyFieldList) {
                            _this.KRADetails.competencyFieldList.keyValueList[0].isOpen = true;
                        }
                    }
                    // promotion details for the appraiser
                    if (_this.KRADetails.goalsDetails != null && _this.kraType == 'Annual') {
                        _this.appraiserViewDetails = _this.KRADetails.goalsDetails.AppraiserView;
                        //console.log("hello appraiser", this.appraiserViewDetails);
                        _this.appraiserViewRole = _this.appraiserViewDetails.role;
                        _this.appriaserViewDesignation = _this.appraiserViewDetails.designation;
                        _this.appraiserViewJustification = _this.appraiserViewDetails.justification;
                    }
                    // promotion details for the reviewer
                    if (_this.KRADetails.goalsDetails != null && _this.kraType == 'Annual') {
                        _this.reviewerViewDetails = _this.KRADetails.goalsDetails.ReviewerView;
                        //console.log("hello reviewer", this.reviewerViewDetails);
                        _this.reviewerViewRole = _this.reviewerViewDetails.role;
                        _this.reviewerViewDesignation = _this.reviewerViewDetails.designation;
                        _this.reviewerViewJustification = _this.reviewerViewDetails.justification;
                    }
                    /**
                     * mobility constraint
                     */
                    _this.mobilityConstraintField = _this.KRADetails.mobilityConstraintFieldList;
                    //console.log("mobility", this.mobilityConstraintField);
                    _this.promotionAppraiserJustification = _this.KRADetails.promotionFieldListForAppraiser;
                    //console.log("promo", this.promotionAppraiserJustification)
                    _this.promotionReviewerJustification = _this.KRADetails.promotionFieldListForReviewer;
                    //console.log("promo", this.promotionReviewerJustification)
                    if (_this.kraId == '0') {
                        _this.kraId = _this.KRADetails.kraStatusList[0].kraId;
                        _this.showWhenData = _this.KRADetails.kraStatusList[0].title;
                        _this.kraWeightage = _this.KRADetails.kraStatusList[0].kraWeightage;
                        // this.kraFloor = this.KRADetails.kraStatusList[0].floor
                        // this.kraTarget = this.KRADetails.kraStatusList[0].target
                    }
                    /**
                     * extracting the floor and target values of each KRA
                     */
                    if (_this.KRADetails.fieldDetails != null) {
                        _this.KRADetails.fieldDetails.filter(function (floorTarget) {
                            if (floorTarget.title == 'Floor') {
                                _this.kraFloor = floorTarget.titleValue;
                                //console.log("floorsss", this.kraFloor)
                            }
                            if (floorTarget.title == 'Target') {
                                _this.kraTarget = floorTarget.titleValue;
                                //console.log("target", this.kraTarget)
                            }
                            if (floorTarget.title == 'Weightage') {
                                _this.kraWeightage = floorTarget.titleValue;
                                //console.log("target", this.kraTarget)
                            }
                            // getting midterm and end term floor /target values
                            if (floorTarget.bindWith == 'midTerm') {
                                _this.midTermDetails = floorTarget.midTermFieldList;
                            }
                            if (floorTarget.bindWith == 'annual') {
                                _this.endTermDetails = floorTarget.annualFielList;
                            }
                        });
                    }
                    // changed by chinmay for annual floor target calculation
                    if (_this.endTermDetails && _this.kraType == 'Annual') {
                        _this.endTermDetails.filter(function (endTermData) {
                            if (endTermData.bindWith == 'annualFloor') {
                                _this.kraFloor = endTermData.titleValue;
                            }
                            if (endTermData.bindWith == 'annualTarget') {
                                _this.kraTarget = endTermData.titleValue;
                            }
                        });
                    }
                    // Calculate score for associate if already given self rating
                    if (_this.KRADetails.associatesFeildList != null) {
                        _this.KRADetails.associatesFeildList.filter(function (associate) {
                            if (associate.bindWith == 'achievement') {
                                _this.achievement = associate.titleValue;
                                //console.log("achievement", this.achievement)
                            }
                        });
                    }
                    if (!_this.utility.isEmptyOrNullOrUndefined(_this.achievement) && _this.userRole == 1) {
                        _this.displayScore(event, _this.achievement);
                    }
                    else if (!_this.achievement) {
                        _this.displayScore(event, 0);
                    }
                    /**
                     * Calculate score for 1up if already given self rating
                     */
                    if (_this.KRADetails.managerFeildList != null) {
                        _this.KRADetails.managerFeildList.filter(function (managerItem) {
                            if (managerItem.bindWith == 'appraiserRating') {
                                _this.managerSelfRating = managerItem.titleValue;
                            }
                        });
                    }
                    if (!_this.utility.isEmptyOrNullOrUndefined(_this.achievement) && _this.userRole == 2)
                        _this.displayScore(event, _this.managerSelfRating);
                    /**
                      * Calculate score for 2up if already given rating
                      */
                    if (_this.KRADetails.reviewerFieldList != null) {
                        _this.KRADetails.reviewerFieldList.filter(function (reviewerItem) {
                            if (reviewerItem.bindWith == 'reviewerRating') {
                                _this.reviewerRating = reviewerItem.titleValue;
                            }
                        });
                    }
                    if (!_this.utility.isEmptyOrNullOrUndefined(_this.achievement) && _this.userRole == 3)
                        _this.displayScore(event, _this.reviewerRating);
                    if (!_this.utility.isEmptyOrNullOrUndefined(_this.midTermDetails)) {
                        _this.midtermfloorData = _this.midTermDetails[0];
                        _this.midtermTargetData = _this.midTermDetails[1];
                        // console.log("midtermfloorData", this.midtermfloorData)
                    }
                    if (!_this.utility.isEmptyOrNullOrUndefined(_this.endTermDetails)) {
                        console.log(_this.endTermDetails);
                        _this.endtermfloorData = _this.endTermDetails[0];
                        _this.endtermTargetData = _this.endTermDetails[1];
                        // console.log("midtermfloorData", this.endTermDetails)
                    }
                    if (_this.kraConflictStatus == '1' && kraId == '0' && (_this.kraType == 'Mid-Term' || _this.kraType == 'Annual')) {
                        _this.showAlertOnKraConflict().then((function (response) {
                            // console.log("response", response)
                            if (true) {
                                // this.savekraForHomePage()
                                // this.gotoNextButton()
                                _this.overrideExistingKRA(kraId);
                            }
                        }));
                    }
                }
            }
        });
    };
    /**
     * Toggle the  button for selection
     * @param kraId contain the selceted KRA no.(unique)
     * @param subKraId contain the subKRA no. (unique)
     * @param kraTitle contain the selected KRA Name
     * @param kraWeightage contain the weightage of selceted KRA
     */
    ZenDeavorKraPage.prototype._getSelectedData = function (kraId, kraTitle, kraWeightage, subkraId) {
        //console.log("hello id", this.kraId);
        this.kraId = kraId;
        this.showWhenData = kraTitle;
        this.kraWeightage = kraWeightage;
        this.subKraId = subkraId;
        if (kraTitle == 'Preview')
            this.KRADetailsUrl = 'getKraDetails';
        this.getKRADetails(kraId, this.subKraId);
        this.resetKraScore(this.kraId);
        // if (!this.utility.isEmptyOrNullOrUndefined(this.achievement))
        //   this.displayScore(event, this.achievement)
    };
    /**
      * This function saves the KRAs fields filled by the associates.
      */
    ZenDeavorKraPage.prototype.saveKRA = function (moveToNext) {
        var _this = this;
        this.isSaveSummaryCalled = true;
        var apprisalPromotionList = [];
        var reviewerPromotionList = [];
        var apprisalPromotionPrefilledData = [];
        var reviewerPromotionPrefilledData = [];
        if (this.showWhenData == 'Home') {
            this.gotoNextButton();
            // this.getKRADetails(1)
            return;
        }
        if (this.kraId == '1' && this.kraType == 'Mid-Term') {
            this.gotoNextButton();
            return;
        }
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
        *  this iterates the fields of the form and stores the value entered by the 2-Up manager.
       */
        if (this.KRADetails.reviewerFieldList != null) {
            this.KRADetails.reviewerFieldList.filter(function (reviewerItem) {
                if (reviewerItem.bindWith == 'reviewerRating') {
                    _this.reviewerRating = reviewerItem.titleValue;
                }
                if (reviewerItem.bindWith == 'reviewerComment') {
                    _this.reviewerComment = reviewerItem.titleValue;
                }
            });
        }
        // if (!this.utility.isEmptyOrNullOrUndefined(this.achievement))
        //   this.displayScore(event, this.achievement)
        /**
         * this iterates the fields of the form and stores the goals set by the associate.
         */
        //console.log("this.KRADetails", this.KRADetails.goalFeildList);
        if (this.KRADetails.goalFeildList != null) {
            this.KRADetails.goalFeildList.filter(function (goalsItem) {
                //console.log("goals", goalsItem);
                if (goalsItem.bindWith == 'careerAspiration1') {
                    _this.careerAspiration1 = goalsItem.titleValue;
                }
                if (goalsItem.bindWith == 'careerAspiration2') {
                    _this.careerAspiration2 = goalsItem.titleValue;
                }
                if (goalsItem.bindWith == 'careerAspiration3') {
                    _this.careerAspiration3 = goalsItem.titleValue;
                }
            });
        }
        if (this.KRADetails.mobilityConstraintFieldList != null) {
            this.KRADetails.mobilityConstraintFieldList.filter(function (mobilityItems) {
                if (mobilityItems.bindWith == 'mobilitySpecification') {
                    _this.mobilitySpecification = mobilityItems.titleValue;
                }
            });
        }
        if (this.KRADetails.promotionFieldListForAppraiser != null) {
            this.KRADetails.promotionFieldListForAppraiser.filter(function (promoItems) {
                if (promoItems.bindWith == 'promotionJustificationByAppraiser') {
                    _this.appraiserJustification = promoItems.titleValue;
                }
            });
        }
        if (this.KRADetails.promotionFieldListForReviewer != null) {
            this.KRADetails.promotionFieldListForReviewer.filter(function (promoItems) {
                if (promoItems.bindWith == 'promotionJustificationByReviewer') {
                    _this.reviewerJustification = promoItems.titleValue;
                }
            });
        }
        //validating competency for kra id = -2 and for associate 
        if (this.kraId == '-2' && this.userRole == '1') {
            for (var props in this.ratingForm.value) {
                if (this.ratingForm.value[props] == null) {
                    this.utility.presentAlert("Please fill all the competency details");
                    return;
                }
            }
            for (var props in this.ratingForm.value) {
                this.compentencyValues.push({ 'id': props, 'value': this.ratingForm.value[props] });
            }
        }
        // validating competency for kra id = -2 and for appraisal 
        if (this.kraId == '-2' && this.userRole == '2') {
            for (var props in this.ratingForm.value) {
                if (this.ratingForm.value[props] == null) {
                    this.utility.presentAlert("Please fill all the details");
                    return;
                }
            }
            for (var props in this.ratingForm.value) {
                this.compentencyValues.push({ 'id': props, 'value': this.ratingForm.value[props] });
            }
        }
        //    Check promotion details for appraisal
        if (this.kraId == '-2' && this.KRADetails.goalsDetails.isPermotionRecommendedByAppraiser && this.userRole == '2' && this.KRADetails.appraiserPromotionDetailList) {
            this.KRADetails.appraiserPromotionDetailList.forEach(function (element) {
                if (element.titleValue != null && element.titleValue != '') {
                    apprisalPromotionPrefilledData.push({ 'id': element.id, 'value': element.titleValue });
                }
            });
            console.log(apprisalPromotionPrefilledData);
            if (this.thirdUpComments.length == 0 && apprisalPromotionPrefilledData.length == 0) {
                this.isPromotionDetailsFilled = true;
                return;
            }
            else {
                this.isPromotionDetailsFilled = false;
            }
        }
        // 
        // if (this.userRole == '3') {
        //   this.KRADetails.reviewerPromotionDetailList.forEach(element => {
        //     if(element.titleValue == null || element.titleValue == ''){
        //       return;
        //     }else{
        //       reviewerPromotionList.push({'id':element.id,'value':element.titleValue})
        //     }
        //   });
        //   console.log(reviewerPromotionList)
        // }
        // Check promotion details for reviewer
        if (this.kraId == '-2' && this.KRADetails.goalsDetails.isPermotionRecommendedByReviewer && this.userRole == '3' && this.KRADetails.reviewerPromotionDetailList) {
            this.KRADetails.reviewerPromotionDetailList.forEach(function (element) {
                if (element.titleValue != null && element.titleValue != '') {
                    reviewerPromotionPrefilledData.push({ 'id': element.id, 'value': element.titleValue });
                }
            });
            if (this.thirdUpComments.length == 0 && reviewerPromotionPrefilledData.length == 0) {
                this.isPromotionDetailsFilled = true;
                return;
            }
            else {
                this.isPromotionDetailsFilled = false;
            }
        }
        /**
             * We save KRA here for both the userRoles : associate and manager.
             */
        if (this.showWhenData == 'KRA') {
            this.saveKra = {
                url: this.saveKRAUrl,
                data: {
                    "userId": !this.utility.isEmptyOrNullOrUndefined(this.userID) ? this.userID : '',
                    "kraId": this.kraId,
                    "subKraId": this.KRADetails.kraStatusList[this.kraId].subKraId,
                    "role": this.KRADetails.role,
                    "achievement": this.achievement,
                    "criticalIncident": this.criticalIncident,
                    "selfAppraisal": this.selfAppraisal,
                    "appraiserRating": this.managerSelfRating,
                    "appraiserComment": this.managerComments,
                    "reviewerRating": this.reviewerRating,
                    "reviewerComment": this.reviewerComment,
                    "careerAspiration1": '',
                    "careerAspiration2": '',
                    "careerAspiration3": '',
                    "processType": this.kraType,
                    "maxTxn": this.KRADetails.maxTxn,
                    "isPermotionRecommendedByAppraiser": "",
                    "promotionRoleByAppraiser": "",
                    "promotionDesignationByAppraiser": " ",
                    "promotionJustificationByAppraiser": " ",
                    "isPermotionRecommendedByReviewer": "",
                    "promotionRoleByReviewer": "",
                    "promotionDesignationByReviewer": "",
                    "promotionJustificationByReviewer": "",
                    "mobilityConstraint": "",
                    "mobilitySpecification": ""
                },
                zenDeavorURL: true
            };
        }
        else if (this.kraId == '-2') {
            this.saveKra = {
                url: this.saveKRAUrl,
                data: {
                    "userId": !this.utility.isEmptyOrNullOrUndefined(this.userID) ? this.userID : '',
                    "kraId": this.kraId,
                    "subKraId": "1432011",
                    "role": this.KRADetails.role,
                    "achievement": '',
                    "criticalIncident": '',
                    "selfAppraisal": '',
                    "appraiserRating": '',
                    "appraiserComment": '',
                    "reviewerRating": '',
                    "reviewerComment": '',
                    "careerAspiration1": this.careerAspiration1,
                    "careerAspiration2": this.careerAspiration2,
                    "careerAspiration3": this.careerAspiration3,
                    "processType": this.kraType,
                    "maxTxn": this.KRADetails.maxTxn,
                    "isPermotionRecommendedByAppraiser": this.KRADetails.goalsDetails.isPermotionRecommendedByAppraiser ? 'Yes' : 'No',
                    "promotionRoleByAppraiser": this.appraiserViewRole,
                    "promotionDesignationByAppraiser": this.appriaserViewDesignation,
                    "promotionJustificationByAppraiser": this.appraiserViewJustification,
                    //"promotionJustificationByAppraiser": this.appraiserJustification ? this.appraiserJustification : "",
                    "isPermotionRecommendedByReviewer": this.KRADetails.goalsDetails.isPermotionRecommendedByReviewer ? 'Yes' : 'No',
                    "promotionRoleByReviewer": this.reviewerViewRole,
                    "promotionDesignationByReviewer": this.reviewerViewDesignation,
                    //"promotionJustificationByReviewer": this.reviewerJustification,
                    "promotionJustificationByReviewer": this.reviewerViewJustification,
                    "mobilityConstraint": this.mobilityDecision,
                    "mobilitySpecification": this.mobilitySpecification,
                    "competencyList": this.compentencyValues,
                    "promotionFields": this.thirdUpComments.length > 0 ? this.thirdUpComments : apprisalPromotionPrefilledData,
                    "isEligibleForPromotion": this.KRADetails.goalsDetails.isEligibleForPromotion
                },
                zenDeavorURL: true
            };
        }
        console.log("Save kra", this.saveKra);
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
        if (this.KRADetails.reviewerFieldList != null && this.userRole == '3') {
            if (this.reviewerRating == '' || this.reviewerComment == '') {
                this.utility.presentAlert("Please fill all the mandatory fields.");
                return;
            }
        }
        if (this.KRADetails.goalFeildList != null && this.userRole == '1' || this.userRole == '2' && this.kraId == '-2') {
            if (this.careerAspiration1 == '' || this.careerAspiration2 == '') {
                this.utility.presentAlert("Please fill all the mandatory fields.");
                return;
            }
        }
        if (this.KRADetails.mobilityConstraintFieldList != null && this.userRole == '1' && this.kraId == '-2') {
            if (this.mobilityDecision == 'Yes' && this.mobilitySpecification == '') {
                this.utility.presentAlert("Please fill  the  justification.");
                return;
            }
        }
        if (this.KRADetails.goalsDetails != null && this.userRole == '2' && this.kraId == '-2') {
            if (this.KRADetails.goalsDetails.isPermotionRecommendedByAppraiser == true && (this.appraiserViewRole == null || this.appraiserViewRole == '')) {
                this.utility.presentAlert("Please select role.");
                return;
            }
        }
        if (this.KRADetails.goalsDetails != null && this.userRole == '3' && this.kraId == '-2') {
            if (this.KRADetails.goalsDetails.isPermotionRecommendedByReviewer == true && (this.reviewerViewRole == null || this.reviewerViewRole == '')) {
                this.utility.presentAlert("Please select role.");
                return;
            }
        }
        if (this.KRADetails.goalsDetails != null && this.userRole == '2' && this.kraId == '-2') {
            if (this.KRADetails.goalsDetails.isPermotionRecommendedByAppraiser == true && (this.appriaserViewDesignation == null || this.appriaserViewDesignation == '')) {
                this.utility.presentAlert("Please select designation.");
                return;
            }
        }
        if (this.KRADetails.goalsDetails != null && this.userRole == '3' && this.kraId == '-2') {
            if (this.KRADetails.goalsDetails.isPermotionRecommendedByReviewer == true && (this.reviewerViewDesignation == null || this.reviewerViewDesignation == '')) {
                this.utility.presentAlert("Please select designation.");
                return;
            }
        }
        if (this.KRADetails.goalsDetails != null && this.userRole == '2' && this.kraId == '-2') {
            if (this.KRADetails.goalsDetails.isPermotionRecommendedByAppraiser == true && this.appraiserViewJustification.trim() == "") {
                this.utility.presentAlert("Please fill  the  justification.");
                return;
            }
        }
        if (this.KRADetails.goalsDetails != null && this.userRole == '3' && this.kraId == '-2') {
            if (this.KRADetails.goalsDetails.isPermotionRecommendedByReviewer == true && this.reviewerViewJustification.trim() == "") {
                this.utility.presentAlert("Please fill  the  justification.");
                return;
            }
        }
        this.utility.updateLoader(true);
        this.httpProvider.http.commonService(this.saveKra).subscribe(function (response) {
            if (response) {
                _this.utility.updateLoader(false);
                if (!_this.utility.isEmptyOrNullOrUndefined(response['status']) && response['status'].statusCode == 1) {
                    _this.utility.presentAlert(response['status'].statusMessage).then(function (res) {
                        if (moveToNext || Number(_this.kraId) <= 0) {
                            _this.gotoNextButton();
                            _this.resetKraScore(_this.kraId);
                        }
                        else {
                            _this.getKRADetails(_this.kraId, _this.subKraId);
                        }
                    });
                }
            }
        }, function (error) {
            _this.utility.updateLoader(false);
        });
    };
    // Scroll content to Top
    ZenDeavorKraPage.prototype.scrollContentToTop = function () {
        this.content.scrollToTop();
    };
    ZenDeavorKraPage.prototype.resetKraScore = function (kraId) {
        if (this.userRole == '1' && !this.utility.isEmptyOrNullOrUndefined(this.achievement))
            this.kraScore = 0;
        if (this.userRole == '2' && !this.utility.isEmptyOrNullOrUndefined(this.managerSelfRating))
            this.kraScore = 0;
        if (this.userRole == '3' && !this.utility.isEmptyOrNullOrUndefined(this.reviewerRating))
            this.kraScore = 0;
        //console.log("kra score resetscore", this.kraScore)
        this.scrollContentToTop();
    };
    /**
      *  Click for redirection on Query page
      * where user can ask his/her query and post it.
      */
    ZenDeavorKraPage.prototype.goToQuestion = function () {
        // this.navCtrl.push("QuestionsPage")
        this.navCtrl.push('AddPage', { 'type': 'addQuestion', 'questionId': null, 'answerType': null });
    };
    ZenDeavorKraPage.prototype.pickFile = function (event) {
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
    ZenDeavorKraPage.prototype.uploadFile = function (fileURI) {
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
                        console.log("file type", fileType);
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
                            console.log("filename", fileName + "." + fileExt);
                            formData.append("file", imgBlob, fileName + "." + fileExt);
                            formData.append("kraId", _this.KRADetails.kraStatusList[_this.kraId].kraId);
                            formData.append("subKraId", _this.KRADetails.kraStatusList[_this.kraId].subKraId);
                            formData.append("userId", _this.KRADetails.userId);
                            formData.append("processType", _this.kraType);
                            console.log("kraId", _this.KRADetails.kraStatusList[_this.kraId].kraId);
                            console.log("subKraId", _this.KRADetails.kraStatusList[_this.kraId].subKraId);
                            console.log("userId", _this.KRADetails.userId);
                            console.log("processType", _this.kraType);
                            /**
                             * Upload documents service call : UploadKRADetails
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
                    _this.utility.presentAlert("Please upload a photograph/file less than 5 MB.");
                    _this.utility.updateLoader(false);
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
    ZenDeavorKraPage.prototype.deleteUploadedAttachment = function (attachements) {
        var _this = this;
        this.utility.presentConfirmation('Are you sure you want to delete this attachment ?', 'Confirmation').then(function () {
            var deleteDocuments = {
                url: _this.deleteAttachmentUrl,
                zenDeavorURL: true,
                data: {
                    "userId": _this.KRADetails.userId,
                    "kraId": _this.KRADetails.kraStatusList[_this.kraId].kraId,
                    "subKraId": _this.subKraId,
                    "attachmentId": attachements.attachmentId,
                    "processType": _this.kraType
                }
            };
            _this.httpProvider.http.commonService(deleteDocuments).subscribe(function (response) {
                _this.attachmentList = response.details.attachment;
            });
        });
    };
    ZenDeavorKraPage.prototype.openKraTrainingModal = function (kraTrainingData) {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_kra_training_kra_training__["a" /* KraTrainingComponent */], {
            'data': {
                trainingData: kraTrainingData
            }
        }, { cssClass: 'kra-training-modal' }).present();
    };
    /**
     * this function opens the document which got uploaded
     * @param uploadKRADetailsUrl
     */
    ZenDeavorKraPage.prototype.openAsset = function (uploadKRADetailsUrl) {
        this.utility.openAsset(uploadKRADetailsUrl);
        // if (this.platform.is('ios')) {
        //   this.utility.openBrowserTab(uploadKRADetailsUrl)
        // }
        // else {
        //   this.download.downloadDocument(uploadKRADetailsUrl)
        // }
    };
    /**
     * Reset function : associate can reset his/her filled KRA details.
     * associates can perform this reset click when they want to modify their filled data.
     */
    ZenDeavorKraPage.prototype.resetData = function () {
        this.kraScore = 0;
        if (this.KRADetails.associatesFeildList != null && this.KRADetails.isManagerOption == false && this.KRADetails.isReviewerOption == false) {
            this.KRADetails.associatesFeildList.filter(function (item) {
                if (item.isShow)
                    item.titleValue = '';
            });
            this.attachmentList = [];
            if (this.KRADetails.attachment.length > 0) {
                for (var i = 0; i < this.KRADetails.attachment.length; i++) {
                    this.resetAttachments(this.KRADetails.attachment[i]);
                }
            }
        }
        else if (this.KRADetails.managerFeildList != null && this.KRADetails.isManagerOption == true) {
            this.KRADetails.managerFeildList.filter(function (item) {
                item.titleValue = '';
            });
        }
        else if (this.KRADetails.reviewerFieldList != null && this.KRADetails.isReviewerOption == true) {
            this.KRADetails.reviewerFieldList.filter(function (item) {
                item.titleValue = '';
            });
        }
        else if (this.KRADetails.goalFeildList != null && this.kraId == '-2' && (this.userRole == '1')) {
            this.KRADetails.goalFeildList.filter(function (item) {
                item.titleValue = '';
            });
        }
        else if (this.KRADetails.goalsDetails.AppraiserView != null && this.kraId == '-2' && (this.userRole == '2')) {
            this.appraiserViewRole = '';
            this.appriaserViewDesignation = '';
            this.appraiserViewJustification = '';
        }
        else if (this.KRADetails.goalsDetails.ReviewerView != null && this.kraId == '-2' && (this.userRole == '3')) {
            this.reviewerViewRole = '';
            this.reviewerViewDesignation = '';
            this.reviewerViewJustification = '';
        }
        else if (this.KRADetails.mobilityConstraintFieldList != null && this.kraId == '-2' && (this.userRole == '1')) {
            this.KRADetails.mobilityConstraintFieldList.filter(function (item) {
                item.titleValue = '';
            });
        }
    };
    /**
   * clicked on next button to move to next section
   */
    ZenDeavorKraPage.prototype.gotoNextButton = function () {
        for (var i = 0; i < this.KRADetails.kraStatusList.length; i++) {
            if (this.KRADetails.kraStatusList[i].kraId == this.kraId) {
                var count = (i != this.KRADetails.kraStatusList.length - 1) ? (i + 1) : i;
                this.showWhenData = this.KRADetails.kraStatusList[count].title;
                this.kraId = this.KRADetails.kraStatusList[count].kraId;
                this.subKraId = this.KRADetails.kraStatusList[count].subKraId;
                break;
            }
        }
        this.getKRADetails(this.kraId, this.subKraId);
        this.scrollContentToTop();
        this.scrollRight();
        // //console.log("this.kraId", this.kraId);
        // this.resetKraScore(this.kraId);
    };
    /**
     * Open Summary / Review Page
     */
    ZenDeavorKraPage.prototype.openPreview = function () {
        if (!this.isDirectApproveStatus) {
            for (var i = 0; i < this.KRADetails.kraStatusList.length; i++) {
                if (this.KRADetails.kraStatusList.kraId != '0' && this.KRADetails.kraStatusList.kraId != '-1') {
                    if (this.KRADetails.kraStatusList[i].status == "incomplete") {
                        this.utility.presentAlert("Please fill the  " + this.kraType + " appraisal against all the KRAs");
                        return;
                    }
                }
            }
        }
        this.navCtrl.push("ZendeavorPreviewPage", {
            userID: this.userID,
            // userID: this.KRADetails.userId,
            userRole: this.userRole,
            kraType: this.kraType,
            isDirectApprove: this.isDirectApproveStatus
        });
    };
    ZenDeavorKraPage.prototype.goToDashboard = function () {
        if (this.isComingFromHome) {
            this.navCtrl.popToRoot();
        }
        else {
            this.navCtrl.pop();
        }
    };
    ZenDeavorKraPage.prototype.numberOnly = function (index) {
        var _this = this;
        var exp = /^[0-9]+$/;
        var value = this.KRADetails.associatesFeildList[index].titleValue;
        if (index == 0 && !this.utility.isEmptyOrNullOrUndefined(this.KRADetails.associatesFeildList[index].regEx)) {
            if (!value.match(exp)) {
                // this.utility.presentAlert("Please fill rating in numbers");
                this.zone.run(function () {
                    _this.KRADetails.associatesFeildList[index].titleValue = value.substring(0, value.length - 1);
                });
            }
        }
        // if (this.selfRating != '' && this.managerSelfRating != '') {
        //   this.utility.presentAlert("Please fill rating in numbers ");
        // }
    };
    /**
     * new annual appraisal code
     */
    ZenDeavorKraPage.prototype.onTitle = function (selectedDesi) {
        // //console.log(this.ic);
        //console.log("desig", selectedDesi);
        if (!this.utility.isEmptyOrNullOrUndefined(selectedDesi)) {
            this.titleDesig = selectedDesi;
            this.appraiserViewRole = this.titleDesig;
            this.getDesignationList();
        }
    };
    ZenDeavorKraPage.prototype.onDesignation = function (selectedValue) {
        //console.log("onDesignation:", selectedValue);
        this.designationTitle = selectedValue;
    };
    ZenDeavorKraPage.prototype.reviewerRoleSelection = function (selectedRole) {
        if (!this.utility.isEmptyOrNullOrUndefined(selectedRole)) {
            this.reviewerGivenRole = selectedRole;
            this.getDesignationList();
        }
    };
    ZenDeavorKraPage.prototype.reviewerDesigSelection = function (selectedDesig) {
        this.reviewerGivenDesig = selectedDesig;
    };
    ZenDeavorKraPage.prototype.appraiserDecision = function (value) {
        var _this = this;
        console.log(value.trim());
        //this.KRADetails?.goalsDetails.isPermotionRecommendedByAppraiser;
        if (value.trim() == 'Yes') {
            this.KRADetails.goalsDetails.isPermotionRecommendedByAppraiser = true;
            this.appraiserPromoView = true;
            this.decision = value;
            //console.log("decision", value);
            setTimeout(function () {
                if (_this.content.scrollToBottom) {
                    _this.content.scrollToBottom();
                }
            }, 400);
        }
        else if (value == 'No') {
            this.KRADetails.goalsDetails.isPermotionRecommendedByAppraiser = false;
            this.decision = value;
        }
    };
    ZenDeavorKraPage.prototype.reviewerDecision = function (value) {
        var _this = this;
        if (value == 'Yes') {
            this.KRADetails.goalsDetails.isPermotionRecommendedByReviewer = true;
            this.reviewerPromoView = true;
            this.reviewerPromoDecision = value;
            setTimeout(function () {
                if (_this.content.scrollToBottom) {
                    _this.content.scrollToBottom();
                }
            }, 400);
        }
        else if (value == 'No') {
            this.KRADetails.goalsDetails.isPermotionRecommendedByReviewer = false;
            this.reviewerPromoView = false;
            this.reviewerPromoDecision = value;
        }
    };
    ZenDeavorKraPage.prototype.mobilityChoice = function (value) {
        var _this = this;
        if (value == 'Yes') {
            this.KRADetails.goalsDetails.mobilityConstraint = true;
            // this.reviewerPromoView = true;
            this.mobilityDecision = value;
            setTimeout(function () {
                if (_this.content.scrollToBottom) {
                    _this.content.scrollToBottom();
                }
            }, 400);
        }
        else if (value == 'No') {
            this.KRADetails.goalsDetails.mobilityConstraint = false;
            // this.reviewerPromoView = false;
            this.mobilityDecision = value;
        }
    };
    // reviewerDeniel(value) {
    //   this.reviewerPromoView = false;
    //   this.reviewerPromoDecision = value;
    // }
    /**
     * kra score service integration
     */
    ZenDeavorKraPage.prototype.displayScore = function ($event, value) {
        var _this = this;
        console.log(value);
        if (isNaN(value)) {
            this.utility.presentAlert("Please enter numeric value.");
            return;
        }
        if (this.kraType == 'Mid-Term' && this.kraId > '0') {
            this.calculateScoreForMidterm(value);
        }
        else if (this.kraType == 'Annual') {
            var kraScoreData = {
                url: this.kraScoreUrl,
                data: {
                    "userId": this.userID,
                    "target": this.kraTarget,
                    "floor": this.kraFloor,
                    "weightage": this.kraWeightage,
                    "achievement": value
                },
                zenDeavorURL: true
            };
            if (value != '' || value > 0) {
                this.httpProvider.http.commonService(kraScoreData).subscribe(function (response) {
                    //console.log("kra score is here!!", response);
                    if (response.details) {
                        _this.kraScore = response.details.score;
                        _this.calculateScoreForMidterm(value);
                        // this.initialKraScore = this.kraScore
                    }
                    (function (err) {
                        _this.utility.presentAlert("Please try again");
                        //console.log("in error condition")
                    });
                });
            }
        }
        else {
            var kraScoreData = {
                url: this.kraScoreUrl,
                data: {
                    "userId": this.userID,
                    "target": this.kraTarget,
                    "floor": this.kraFloor,
                    "weightage": this.kraWeightage,
                    "achievement": value
                },
                zenDeavorURL: true
            };
            if (value != '' || value > 0) {
                this.httpProvider.http.commonService(kraScoreData).subscribe(function (response) {
                    //console.log("kra score is here!!", response);
                    if (response.details) {
                        _this.kraScore = response.details.score;
                        // this.initialKraScore = this.kraScore
                    }
                    (function (err) {
                        _this.utility.presentAlert("Please try again");
                        //console.log("in error condition")
                    });
                });
            }
        }
    };
    ZenDeavorKraPage.prototype.getDesignationList = function () {
        var _this = this;
        if (this.userRole == '2') {
            var designation = {
                url: this.designationListUrl,
                data: {
                    "userId": this.userID,
                    "contributor": this.titleDesig
                },
                zenDeavorURL: true
            };
            this.httpProvider.http.commonService(designation).subscribe(function (response) {
                //console.log("hello", response);
                _this.designationList = response.details.designationList;
            });
            (function (err) {
                _this.utility.presentAlert("no designation available");
            });
        }
        else if (this.userRole == '3') {
            var designation = {
                url: this.designationListUrl,
                data: {
                    "userId": this.userID,
                    "contributor": this.reviewerGivenRole
                },
                zenDeavorURL: true
            };
            this.httpProvider.http.commonService(designation).subscribe(function (response) {
                //console.log("hello", response);
                _this.designationList = response.details.designationList;
            });
            (function (err) {
                _this.utility.presentAlert("no designation available");
            });
        }
    };
    ZenDeavorKraPage.prototype.showSaveResetBtn = function () {
        if (this.kraType == 'Annual') {
            if (this.showWhenData == 'KRA' && this.kraId != '1') {
                return true;
            }
            else if (this.kraId == '-2') {
                if (this.userRole == '1') {
                    return true;
                }
                else if (this.userRole == '2' || this.userRole == '3' && this.KRADetails.isEligibleForPromotion) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else if (this.kraType == 'Mid-Term') {
            if (this.kraId == '-2' && this.userRole == '2') {
                return false;
            }
            else if (this.kraId == '0') {
                return false;
            }
            else if (this.kraId == '1') {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            if (this.showWhenData == 'KRA' && this.kraId != '1') {
                return true;
            }
            else if (this.kraId == '-2') {
                if (this.userRole == '1') {
                    return true;
                }
                else if (this.userRole == '2' || this.userRole == '3' && this.KRADetails.isEligibleForPromotion) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
    };
    ZenDeavorKraPage.prototype.resetAttachments = function (attachements) {
        var _this = this;
        var deleteDocuments = {
            url: this.deleteAttachmentUrl,
            zenDeavorURL: true,
            data: {
                "userId": this.KRADetails.userId,
                "kraId": this.KRADetails.kraStatusList[this.kraId].kraId,
                "subKraId": "1432011",
                "attachmentId": attachements.attachmentId,
                "processType": this.kraType
            }
        };
        this.httpProvider.http.commonService(deleteDocuments).subscribe(function (response) {
            _this.attachmentList = response.details.attachment;
        });
    };
    // showSaveResetBtn() {
    //   if (this.showWhenData == 'KRA') {
    //     return true
    //   } else if (this.showWhenData == 'Goals') {
    //     if (this.userRole == '1') {
    //       return true
    //     } else if (this.userRole == '2' && this.KRADetails.isEligibleForPromotion) {
    //       return true
    //     } else {
    //       return false
    //     }
    //   } else {
    //     return false
    //   }
    // }
    ZenDeavorKraPage.prototype.urlify = function (text) {
        if (text != undefined) {
            var newText = text.replace(/\n/g, "<br/>");
            //console.log(newText)
            return newText;
        }
    };
    ZenDeavorKraPage.prototype.gotoViewConsultation = function (title, showLink) {
        //console.log("title", title)
        if (title == 'Consultation' && showLink == true) {
            this.navCtrl.push("ZendeavorViewConsultationPage", {
                userID: this.userID,
                // userID: this.KRADetails.userId,
                userRole: this.userRole,
                kraType: this.kraType,
            });
        }
    };
    // // View Individual Sub KRAs screen
    // gotoAddSubKra(subKRAList, isNewKra) {
    //   // console.log("subKRAList", subKRAList)
    //   if (this.KRADetails.isMaxLimitReached) {
    //     this.utility.presentAlert(this.KRADetails.maxLimitAlert)
    //     return
    //   }
    //   this.navCtrl.push('ZendeavorAddSubKrasPage', {
    //     userID: this.userID,
    //     userRole: this.userRole,
    //     // kraYear: this.selectedGoalYear,
    //     // isDirectApprove: this.isDirectApprove,
    //     subKRAList: subKRAList,
    //     isNewSubKra: isNewKra,
    //     processType: 'midterm'
    //   })
    // }
    ZenDeavorKraPage.prototype.viewSubKra = function (subKRAList, isNewKra, isMandatoryKra) {
        this.navCtrl.push('ZendeavorAddSubKrasPage', {
            userID: this.userID,
            // userID: this.KRADetails.userId,
            userRole: this.userRole,
            // kraYear: this.selectedGoalYear,
            // isDirectApprove: this.isDirectApprove,
            subKRAList: subKRAList,
            isNewSubKra: isNewKra,
            isMandatoryKra: isMandatoryKra,
            showSaveKRA: false,
            processType: this.kraType,
            isManagerOption: this.KRADetails.isManagerOption,
            isReviewerOption: this.KRADetails.isReviewerOption
        });
    };
    ZenDeavorKraPage.prototype.calculateScoreForMidterm = function (value) {
        var _this = this;
        // alert("score called")
        if (!this.utility.isEmptyOrNullOrUndefined(value)) {
            var kraScoreData = {
                url: this.kraScoreUrlMidterm,
                data: {
                    "userId": this.userID,
                    "target": this.kraTarget,
                    // "floor": this.kraFloor,
                    // "weightage": this.kraWeightage,
                    "rating": value,
                    "kraId": this.kraId,
                    "role": this.userRole,
                    "processType": this.kraType
                },
                zenDeavorURL: true
            };
            this.httpProvider.http.commonService(kraScoreData).subscribe(function (response) {
                //console.log("kra score is here!!", response);
                if (response.details) {
                    // this.kraScore = response.details.score
                    _this.showGlobalScore = response.details.score;
                    // this.initialKraScore = this.kraScore
                }
                (function (err) {
                    _this.utility.presentAlert("Please try again");
                    //console.log("in error condition")
                });
            });
        }
        else {
            var kraScoreData = {
                url: this.kraScoreUrlMidterm,
                data: {
                    "userId": this.userID,
                    "target": this.kraTarget,
                    // "floor": this.kraFloor,
                    // "weightage": this.kraWeightage,
                    "rating": 0,
                    "kraId": this.kraId,
                    "role": this.userRole,
                    "processType": this.kraType
                },
                zenDeavorURL: true
            };
            this.httpProvider.http.commonService(kraScoreData).subscribe(function (response) {
                //console.log("kra score is here!!", response);
                if (response.details) {
                    _this.kraScore = response.details.score;
                    // this.initialKraScore = this.kraScore
                }
                (function (err) {
                    // this.utility.presentAlert("Please try again")
                    console.log("in error condition");
                });
            });
        }
    };
    ZenDeavorKraPage.prototype.overrideExistingKRA = function (kraId) {
        var _this = this;
        this.utility.updateLoader(true);
        var kraDetails = {
            url: this.overrrideKraUrl,
            data: {
                "userId": !this.utility.isEmptyOrNullOrUndefined(this.userID) ? this.userID : '',
                "kraId": kraId,
                // "subKraId": subkraId,
                "role": this.userRole,
                "processType": this.kraType,
                "isDirectApprove": this.isDirectApproveStatus
            },
            zenDeavorURL: true
        };
        this.httpProvider.http.commonService(kraDetails).subscribe(function (response) {
            if (response) {
                _this.utility.updateLoader(false);
                console.log("resp", response);
                if (response.status && response['status'].statusCode == '1') {
                    // this.utility.presentAlert(response['status'].statusMessage).then(res => {
                    //   this.getKRADetails(this.kraId, this.subKraId)
                    // })
                    _this.getKRADetails(_this.kraId, _this.subKraId);
                }
            }
        }, function (err) {
            _this.utility.updateLoader(false);
            _this.utility.showAlert('ZenDeavor', "Something went wrong; \n please try again later");
        });
    };
    ZenDeavorKraPage.prototype.showAlertOnKraConflict = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                // title: 'Submit KRA',
                message: 'Do you want to over write newly approved KRA?',
                buttons: [
                    {
                        text: 'No',
                        handler: function () {
                            // reject(false);
                            // return 
                            // reject();
                        }
                    },
                    {
                        text: 'Yes',
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
    ZenDeavorKraPage.prototype.openGuidelinesPdf = function () {
        var encodedUrl = encodeURI(this.midTermGuidelinePdfUrl);
        var target = "_system";
        var browser = this.inappbrowser.create(encodedUrl, target, this.options);
    };
    //code for competencies in annual apprisal by chinmay
    ZenDeavorKraPage.prototype.ngAfterViewInit = function () {
        console.log("called");
    };
    ZenDeavorKraPage.prototype.toggleAccordian = function (item, index) {
        if (item.isOpen) {
            item.isOpen = false;
        }
        else {
            this.KRADetails.competencyFieldList.keyValueList.map(function (res, i) {
                if (i != index) {
                    res.isOpen = false;
                }
            });
            item.isOpen = true;
        }
    };
    ZenDeavorKraPage.prototype.goToPromotionDetails = function () {
        var _this = this;
        this.thirdUpComments = [];
        var modalCtrl = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__components_promotion_details_promotion_details__["a" /* PromotionDetailsComponent */], { 'promotionDetails': this.KRADetails.appraiserPromotionDetailList, 'isManagerOption': this.KRADetails.isManagerOption }, {
            cssClass: 'infoModal',
            enableBackdropDismiss: true,
            showBackdrop: true,
        });
        modalCtrl.present();
        modalCtrl.onDidDismiss(function (data) {
            console.log(data);
            if (data) {
                if (data.length > 0) {
                    _this.thirdUpComments = data;
                }
            }
        });
    };
    ZenDeavorKraPage.prototype.reviewerPromotionDetails = function () {
        var _this = this;
        this.thirdUpComments = [];
        var modalCtrl = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__components_promotion_details_promotion_details__["a" /* PromotionDetailsComponent */], { 'promotionDetails': this.KRADetails.reviewerPromotionDetailList, 'comingFromReviewer': true }, {
            cssClass: 'infoModal',
            enableBackdropDismiss: true,
            showBackdrop: true,
        });
        modalCtrl.present();
        modalCtrl.onDidDismiss(function (data) {
            console.log(data);
            if (data) {
                if (data.length > 0) {
                    _this.thirdUpComments = data;
                    _this.isPromotionDetailsFilled = false;
                }
            }
        });
    };
    ZenDeavorKraPage.prototype.selectedCompetency = function (id, mainId) {
        // console.log(mainId);
        // //let dataValue = value.find(data => data.id == id);
        // //console.log(dataValue);
        // if (this.compentencyValues.length == 0) {
        //   this.compentencyValues.push({ 'id': mainId, 'value': id })
        // } else {
        //   let index = this.compentencyValues.filter(data => {
        //     return data.id.indexOf(mainId) != -1
        //   })
        //   if (index.length == 0) {
        //     this.compentencyValues.push({ 'id': mainId, 'value': id })
        //   } else {
        //     this.compentencyValues.filter(data => {
        //       if (data.id == mainId) {
        //         data.id = mainId,
        //           data.value = id;
        //       }
        //     })
        //   }
        // }
        // //console.log(this.compentencyValues)
    };
    // Expand TextArea to get results
    ZenDeavorKraPage.prototype.expandTextArea = function (pageTitle, val, index, sel, updateValue) {
        var _this = this;
        try {
            this.keyboard.hide();
        }
        catch (e) {
            console.log('Keyboard will not close', e);
        }
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__components_performance_measuretext_area_performance_measuretext_area__["a" /* PerformanceMeasuretextAreaComponent */], {
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
    ZenDeavorKraPage.prototype.getFileSize = function (bytes) {
        if (bytes == 0)
            return 'n/a';
        else {
            var num = (bytes / (Math.pow(1024, 2))).toFixed(2);
            return parseFloat(num);
        }
    };
    ZenDeavorKraPage.prototype.scrollRight = function () {
        try {
            this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 55), behavior: 'smooth' });
        }
        catch (e) {
            //Error handling
        }
    };
    ZenDeavorKraPage.prototype.scrollLeft = function () {
        try {
            this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 55), behavior: 'smooth' });
        }
        catch (e) {
            //Error handling
        }
    };
    ZenDeavorKraPage.prototype.goToProfile = function () {
        this.navCtrl.push('NewProfilePage', {
            'userId': this.KRADetails.userId,
            'profileType': 'zendeavorProfile'
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["z" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["z" /* Navbar */])
    ], ZenDeavorKraPage.prototype, "navBar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Content */])
    ], ZenDeavorKraPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('ratingForm'),
        __metadata("design:type", Object)
    ], ZenDeavorKraPage.prototype, "ratingForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('KRAContainer', { read: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
    ], ZenDeavorKraPage.prototype, "widgetsContent", void 0);
    ZenDeavorKraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-zen-deavor-kra',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-deavor-kra\zen-deavor-kra.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <div class="score-container">\n                <div>{{kraType}} Appraisal</div>\n            </div>\n        </ion-title>\n        <ion-buttons end (click)="openTeamMeanModal()" *ngIf="kraId !=\'0\'">\n\n            <div class="totalScore" *ngIf="(kraType == \'Mid-Term\' || kraType == \'Annual\')&& showWhenData==\'KRA\'">Score: {{showGlobalScore}}\n            </div>\n\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="padding8">\n    <!-- KRA toggle button -->\n    <div class="justify-content-space-btw overflowX header-fixed">\n\n        <div class="display-inline kra-title-flex" [ngClass]="{\'activeColor\': kraId == kraList.kraId}" *ngFor="let kraList of KRADetails.kraStatusList" (click)="!KRADetails.isPreview && userRole==\'1\'?$event.stopPropagation():_getSelectedData(kraList.kraId,kraList.title,kraList.kraWeightage,kraList.subKraId)">\n            <img *ngIf="(kraList.kraId == 0 || kraList.kraId == -1 || kraList.kraId == -2)&& kraId != kraList.kraId" class="icon-border imgPadding" [src]=kraList.icon [ngClass]="{\'greenClass\':kraList.status == \'completed\'}" />\n            <img *ngIf="(kraList.kraId == 0 || kraList.kraId == -1 || kraList.kraId == -2) && kraId == kraList.kraId" class="icon-border imgPadding" [src]=kraList.selectedIcon />\n            <!-- <img class="icon-border" [src]=kraList.icon /> -->\n            <span class="icon-border" [ngClass]="{\'greenClass\':kraList.status == \'completed\'}" [hidden]="(kraList.kraId == 0 || kraList.kraId == -1 || kraList.kraId == -2)">{{kraList.kraId}}</span>\n\n\n            <!-- condition for adding goal icon when goals are completed -->\n            <!-- <span class="icon-border" [hidden]></span> -->\n            <span class="kra-title" [ngClass]="{\'font-color-blue\': kraId == kraList.kraId}">{{kraList.title}}</span>\n        </div>\n    </div>\n\n    <!-- display when home is selected -->\n    <div class="bgColor-white" *ngIf="showWhenData ==\'Home\'" [hidden]="isServiceCallOn">\n\n\n\n\n        <ion-card padding>\n\n            <div *ngIf="comingFromManager" (click)="goToProfile()" style="text-align: -webkit-right;">\n                <span class="user-profile">\n                    <span>View Profile</span>\n                <img src="assets/imgs/userprofile-arrow.svg">\n                </span>\n            </div>\n\n            <ion-row *ngFor="let fields of KRADetails.fieldDetails" class="rowCls">\n                <ion-col col-6 class="colCls">\n                    <span class="mrginRt">\n                        <img class="width80" class="imgSize" [src]=fields.icon />\n                    </span>\n                    <span class="font-weight500">{{fields.title}}</span>\n                </ion-col>\n                <ion-col col-6>\n                    <span class="color-gray" [ngClass]="{viewConsultation: fields.title==\'Consultation\' && fields.showLink == true}" (click)="gotoViewConsultation(fields.title,fields.showLink)">{{fields.titleValue}}</span>\n                    <span *ngIf="fields.titleValue2" class="color-gray">{{fields.titleValue2}}</span>\n                </ion-col>\n            </ion-row>\n        </ion-card>\n\n        <!-- tracker content -->\n        <ion-card style="padding: 0 0 23px 0;">\n            <div class="justify-spac-bt-align-cent padding10-20 font-weight500 fontSize1p1">\n                <span class="align-cont-cent">\n                    <img class="status-icon mrginRt" src="assets/imgs/annual-status.svg" />\n                    <span>Status</span>\n                </span>\n                <div class="statusValues">\n                    <span class="alertCustomCss" (click)="goToQuestion()">Need Help</span>\n                    <span class="kraGuideline" (click)="openGuidelinesPdf()" *ngIf="kraType == \'Mid-Term\' || kraType == \'Annual\'">ZenD\n                        Manual</span>\n                </div>\n            </div>\n            <div class="padng0to5">\n                <ion-row class="align-item-center margin0-5 position-relative" *ngFor="let activity of KRADetails.kraActivity" [ngClass]="{\'completed-status\': (activity.colorCode == \'green\'),\'pending-status\': (activity.colorCode == \'red\') ,\'incomplete-status\': (activity.colorCode == \'grey\')}">\n                    <span class="tracker center">\n                        <!-- [ngStyle]="{\'border-color\': activity.colorCode}" -->\n                        <div class="tracker-inner-circle"></div>\n                        <!-- [ngStyle]="{\'background\': activity.colorCode}" -->\n                    </span>\n                    <ion-col col-10>\n\n                        <div class="marginBtm">{{activity.status}}</div>\n                        <div class="color-blue fontSize9">{{activity.statusValue}}</div>\n                    </ion-col>\n                </ion-row>\n            </div>\n        </ion-card>\n    </div>\n\n    <!-- KRA form which directs associate to fill KRAs sequentially -->\n    <div *ngIf="showWhenData ==\'KRA\' || kraId==\'-2\'" class="padding10 bttmMargin" [hidden]="isServiceCallOn">\n        <div *ngFor="let fields of KRADetails.fieldDetails; index as i ">\n            <form #KRAForm="ngForm" (ngSubmit)="saveKRA(false)">\n\n                <div class="margin-bottom4per">\n                    <ion-label *ngIf="fields.bindWith !=\'midTerm\' && fields.bindWith !=\'annual\'">{{fields.title}}<img class="astrick" src="assets/imgs/asterisk.svg" /></ion-label>\n                    <ion-input *ngIf="fields.fieldType==\'text\' && fields.bindWith !=\'midTerm\' && fields.bindWith !=\'annual\'" readonly class="borderBottom" placeholder={{fields.titleValue}}>\n                    </ion-input>\n                    <ion-textarea class="kraTextarea" *ngIf="fields.fieldType==\'textArea\' && fields.bindWith !=\'midTerm\' && fields.bindWith !=\'annual\'" readonly class="borderBottom textColor" [innerHtml]=urlify(fields.titleValue)></ion-textarea>\n                </div>\n                <!-- Annual & Mid term FLoor /Target section -->\n                <div *ngIf="kraType == \'Mid-Term\' ||  kraType == \'Annual\'">\n                    <ion-row *ngIf="fields.bindWith==\'midTerm\' ">\n                        <ion-col>\n                            <div class="margin-bottom4per">\n                                <ion-label>{{midtermfloorData?.title}}\n\n                                    <!-- <img class="astrick" src="assets/imgs/asterisk.svg" /> -->\n                                    <span class="margin10">\n                                        <ion-icon [tooltip]="midtermfloorData.tooltip" positionV="bottom"\n                                            hideOthers="true" [event]="tooltipEvent" class="formButtonIcon" clear\n                                            color="dark" item-right>\n                                            <img class="info-icon" src="assets/imgs/info.svg" />\n                                        </ion-icon>\n                                    </span>\n                                </ion-label>\n\n                                <ion-input *ngIf="midtermfloorData.fieldType==\'text\'" readonly class="borderBottom" placeholder={{midtermfloorData.titleValue}}>\n                                </ion-input>\n                            </div>\n\n                        </ion-col>\n                        <ion-col>\n                            <div class="margin-bottom4per">\n                                <ion-label>{{midtermTargetData?.title}}\n                                    <!-- <img class="astrick" src="assets/imgs/asterisk.svg" /> -->\n                                    <span class="margin10">\n                                        <ion-icon [tooltip]="midtermTargetData.tooltip" positionV="bottom"\n                                            hideOthers="true" [event]="tooltipEvent" class="formButtonIcon" clear\n                                            color="dark" item-right>\n                                            <img class="info-icon" src="assets/imgs/info.svg" />\n                                        </ion-icon>\n                                    </span>\n\n                                </ion-label>\n\n                                <ion-input *ngIf="midtermTargetData.fieldType==\'text\'" readonly class="borderBottom" placeholder={{midtermTargetData.titleValue}}>\n                                </ion-input>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row *ngIf="fields.bindWith==\'annual\'">\n                        <ion-col>\n                            <div class="margin-bottom4per">\n                                <ion-label>{{endtermfloorData.title}}\n                                    <img class="astrick" src="assets/imgs/asterisk.svg" />\n\n                                    <span class="margin20px">\n                                        <ion-icon [tooltip]="endtermfloorData.tooltip" positionV="bottom"\n                                            hideOthers="true" [event]="tooltipEvent" class="formButtonIcon" clear\n                                            color="dark" item-right>\n                                            <img class="info-icon" src="assets/imgs/info.svg" />\n                                        </ion-icon>\n                                    </span>\n                                </ion-label>\n\n                                <ion-input *ngIf="endtermfloorData.fieldType==\'text\'" readonly class="borderBottom" placeholder={{endtermfloorData.titleValue}}>\n                                </ion-input>\n\n                            </div>\n                        </ion-col>\n                        <ion-col>\n                            <div class="margin-bottom4per">\n                                <ion-label>{{endtermTargetData.title}}<img class="astrick" src="assets/imgs/asterisk.svg" />\n                                    <span class="margin20px">\n                                        <ion-icon [tooltip]="endtermTargetData.tooltip" positionV="bottom"\n                                            hideOthers="true" [event]="tooltipEvent" class="formButtonIcon" clear\n                                            color="dark" item-right>\n                                            <img class="info-icon" src="assets/imgs/info.svg" />\n                                        </ion-icon>\n                                    </span>\n                                </ion-label>\n\n                                <ion-input *ngIf="endtermTargetData.fieldType==\'text\'" readonly class="borderBottom" placeholder={{endtermTargetData.titleValue}}>\n                                </ion-input>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n\n                </div>\n            </form>\n        </div>\n\n\n\n\n        <div class="score-card" style="display: flex; flex-direction: row;" *ngIf="showWhenData==\'KRA\' && kraType == \'Annual\' && userRole == \'1\'">\n            <div class="fontSize1p5">Score :</div>\n            <div class="font1em padding-left7">{{kraScore}}/{{kraWeightage}}</div>\n        </div>\n\n        <form #ratingForm="ngForm" (ngSubmit)="saveKRA(false)">\n            <!-- Save rating as Associate(Associate\'s view)  -->\n            <div class="header-cont margin-bottom3per" *ngIf="(showWhenData ==\'KRA\' && kraId !=\'-2\')">\n                <div class="header-kra fontSize1p5 font-weight500 font-color-blue">Self Ratings</div>\n                <div class="padding10" *ngFor="let associate of KRADetails?.associatesFeildList; index as i" [hidden]="!associate.isShow">\n\n                    <div class="label-Icon">\n                        <ion-label class="fontSize1p4" [ngClass]="{\'greyColor\':userRole == \'2\' || !associate?.isEditable}">\n                            {{associate.title}}<img class="astrick" src="assets/imgs/asterisk.svg" />\n                        </ion-label>\n                        <ion-icon *ngIf="associate.tooltip" [tooltip]="associate.tooltip" positionV="bottom" hideOthers="true" [event]="tooltipEvent" class="formButtonIcon" clear color="dark" item-right>\n                            <img class="info-icon" src="assets/imgs/info.svg" />\n                        </ion-icon>\n                    </div>\n\n                    <ion-input *ngIf="associate.fieldType==\'text\' && associate.regEx!=null" #achievRef type="number" [readonly]="!associate?.isEditable || isManagerOption==\'true\' || isReviewerOption==\'true\'" class="form-control borderBottom" #achievRef="ngModel" required\n                        [(ngModel)]="associate.titleValue" [ngModelOptions]="{standalone: true}" (ionBlur)="displayScore($event,associate.titleValue)" [ngClass]="{\'greyColor\':userRole == \'2\' || !associate?.isEditable}">\n                    </ion-input>\n\n                    <ion-input *ngIf="associate.fieldType==\'text\'  && associate.regEx==null" #achievRef [readonly]="!associate?.isEditable || isManagerOption==\'true\' || isReviewerOption==\'true\'" class="form-control borderBottom" #achievRef="ngModel" required [(ngModel)]="associate.titleValue"\n                        [ngModelOptions]="{standalone: true}" [ngClass]="{\'greyColor\':userRole == \'2\' || !associate?.isEditable}">\n                    </ion-input>\n\n                    <!-- <span  *ngIf="name.touched || name.dirty">\n            {{associate.title}} is required\n          </span> -->\n\n                    <ion-textarea *ngIf="associate.fieldType == \'textArea\'" [readonly]="!associate?.isEditable || isManagerOption==\'true\' || isReviewerOption==\'true\'" #achievRef class="form-control borderBottom" #achievRef="ngModel" required [(ngModel)]="associate.titleValue"\n                        [ngModelOptions]="{standalone: true}" [ngClass]="{\'greyColor\':userRole == \'2\' || !associate?.isEditable}" (ionFocus)="associate?.isEditable ? expandTextArea(associate.title, associate.titleValue, i, \'associatesFeildList\', \'titleValue\') : null">\n                    </ion-textarea>\n                </div>\n\n                <!--   -->\n                <!-- upload attachment -->\n\n                <div *ngIf="(kraId != \'1\' && kraType==\'Mid-Term\') ||  (kraId != \'1\' && kraType==\'Annual\')">\n                    <div class="attachContainer" *ngIf="(userRole == \'1\' && attachmentList)  || (userRole == \'2\' && attachmentList?.length > 0) || (userRole == \'3\' && attachmentList?.length > 0)">\n                        <div class="attachments">\n                            <div>Upload Document</div>\n                            <div *ngIf="userRole==\'1\'" class="upload" (click)="pickFile($event)">\n                                <ion-icon name="cloud-upload"></ion-icon> Upload\n                            </div>\n                        </div>\n\n                        <ion-row class="attach-color padding5 align-item-flex-start" *ngFor="let attachements of attachmentList; index as i">\n                            <ion-col col-5>File {{i+1}} </ion-col>\n                            <ion-col (click)="openAsset(attachements.fileUrl)" class="align-cont-cent"><img class="preview-icon" src="assets/imgs/attachment_preview.svg" />Preview\n                            </ion-col>\n                            <ion-col *ngIf="userRole==\'1\'" (click)="deleteUploadedAttachment(attachements)">\n                                <ion-icon name="trash"></ion-icon> Delete\n                            </ion-col>\n                        </ion-row>\n\n                        <ion-row class="attach-color padding5 center" *ngIf="attachmentList?.length<=0">\n                            <span class="color-blue">No Attachment Available</span>\n                            <div style="padding: 5px; font-size: .8em;">Please upload (JPEG/JPG/PNG/PDF/XLS/XLSX/MSG/EML) & size should not exceed 5 MB. </div>\n                        </ion-row>\n                    </div>\n                </div>\n            </div>\n\n            <div class="score-card" *ngIf="showWhenData==\'KRA\' && kraType == \'Annual\' && userRole == \'2\'" style="display: flex; flex-direction: row;">\n                <div class="fontSize1p5 alertCustomCss">Score :</div>\n                <div class="font1em padding-left7">{{kraScore}}/{{kraWeightage}}</div>\n            </div>\n\n            <!-- 1up Manager\'s appraisal rating section(Manager\'s rating to associates) -->\n            <div class="header-cont margin-bottom3per" *ngIf="(KRADetails?.isManagerOption || KRADetails?.isReviewerOption) && \n      showWhenData ==\'KRA\' &&  kraId !=\'-2\'">\n                <div class="header-kra fontSize1p5 font-weight500 font-color-blue">Appraiser Rating</div>\n                <div *ngFor="let manager of KRADetails?.managerFeildList;index as managerIndex" class="padding10">\n                    <div class="label-Icon">\n                        <ion-label class="fontSize1p4" [ngClass]="{\'greyColor\':!manager?.isEditable}">{{manager.title}}\n                            <img class="astrick" src="assets/imgs/asterisk.svg" />\n                        </ion-label>\n                        <ion-icon *ngIf="manager.tooltip" [tooltip]="manager.tooltip" positionV="bottom" hideOthers="true" [event]="tooltipEvent" class="formButtonIcon" clear color="dark" item-right>\n                            <img class="info-icon" src="assets/imgs/info.svg" />\n                        </ion-icon>\n                    </div>\n                    <ion-input *ngIf="manager?.fieldType==\'text\' && manager.regEx!=null" class="form-control borderBottom" [readonly]="!manager?.isEditable" #managerRef type="number" [(ngModel)]="manager.titleValue" [ngModelOptions]="{standalone: true}" #managerRef="ngModel"\n                        (ionBlur)="displayScore($event,manager.titleValue)" [ngClass]="{\'greyColor\':!manager?.isEditable}">\n                    </ion-input>\n\n                    <ion-input *ngIf="manager?.fieldType==\'text\' && manager.regEx==null" class="form-control borderBottom" #managerRef [readonly]="!manager?.isEditable" [(ngModel)]="manager.titleValue" [ngModelOptions]="{standalone: true}" #managerRef="ngModel" [ngClass]="{\'greyColor\':!manager?.isEditable}">\n                    </ion-input>\n\n                    <ion-textarea *ngIf="manager?.fieldType==\'textArea\'" class="form-control borderBottom" #managerRef [(ngModel)]="manager.titleValue" [readonly]="!manager?.isEditable" [ngModelOptions]="{standalone: true}" #managerRef="ngModel" [ngClass]="{\'greyColor\':!manager?.isEditable}"\n                        (ionFocus)="manager?.isEditable ? expandTextArea(manager.title, manager.titleValue, managerIndex, \'managerFeildList\', \'titleValue\',manager?.isEditable) : null">\n                    </ion-textarea>\n                </div>\n            </div>\n\n            <div class="score-card" *ngIf="showWhenData==\'KRA\' && kraType == \'Annual\' && userRole == \'3\'" style="display: flex; flex-direction: row;">\n                <div class="fontSize1p5 alertCustomCss">Score :</div>\n                <div class="font1em padding-left7">{{kraScore}}/{{kraWeightage}}</div>\n            </div>\n\n            <!-- 2ndUp Manager\'s/Reviewer\'s appraisal rating section(Manager\'s rating to associates)-->\n            <div class="header-cont" *ngIf="(KRADetails.isReviewerOption && showWhenData ==\'KRA\'&& kraId !=\'-2\')">\n                <div class="header-kra fontSize1p5 font-weight500 font-color-blue">Reviewer Rating</div>\n                <div *ngFor="let reviewer of KRADetails?.reviewerFieldList; index as reviewerIndex " class="padding10">\n                    <div class="label-Icon">\n                        <ion-label class="fontSize1p4">{{reviewer.title}} <img class="astrick" src="assets/imgs/asterisk.svg" />\n                        </ion-label>\n                        <ion-icon *ngIf="reviewer.tooltip" [tooltip]="reviewer.tooltip" positionV="bottom" hideOthers="true" [event]="tooltipEvent" class="formButtonIcon" clear color="dark" item-right>\n                            <img class="info-icon" src="assets/imgs/info.svg" />\n                        </ion-icon>\n                    </div>\n                    <ion-input *ngIf="reviewer.fieldType==\'text\' && reviewer.regEx!=null" [readonly]="!reviewer.isEditable" class="form-control borderBottom" #managerRef type="number" [(ngModel)]="reviewer.titleValue" [ngModelOptions]="{standalone: true}" #managerRef="ngModel"\n                        (ionBlur)="displayScore($event,reviewer.titleValue)" [ngClass]="{\'greyColor\':!reviewer?.isEditable}">\n                    </ion-input>\n\n                    <ion-input *ngIf="reviewer.fieldType==\'text\' && reviewer.regEx==null" [readonly]="!reviewer.isEditable" class="form-control borderBottom" #managerRef [(ngModel)]="reviewer.titleValue" [ngModelOptions]="{standalone: true}" #managerRef="ngModel" [ngClass]="{\'greyColor\':!reviewer?.isEditable}">\n                    </ion-input>\n\n                    <ion-textarea *ngIf="reviewer.fieldType==\'textArea\'" class="form-control borderBottom" #managerRef [(ngModel)]="reviewer.titleValue" [ngModelOptions]="{standalone: true}" #managerRef="ngModel" (ionFocus)="reviewer.isEditable ? expandTextArea(reviewer.title, reviewer.titleValue, reviewerIndex, \'reviewerFieldList\', \'titleValue\') : null">\n                    </ion-textarea>\n                </div>\n            </div>\n\n            <div *ngIf="kraId==\'-2\'">\n                <!-- showing competency -->\n                <div *ngIf="KRADetails?.competencyFieldList" class="compentency-container">\n                    <div class="container-box">\n                        <div class="competenct-title">\n                            <img [src]="KRADetails?.competencyFieldList.icon" class="img-style">\n                            <span class="compentency-container pd-5">{{KRADetails?.competencyFieldList.value}}</span>\n                        </div>\n                        <ion-icon *ngIf="KRADetails?.competencyFieldList.toolTip" [tooltip]="KRADetails?.competencyFieldList.toolTip" positionV="bottom" hideOthers="true" [event]="tooltipEvent" clear color="dark">\n                            <img class="info-icon" src="assets/imgs/info.svg" />\n                        </ion-icon>\n\n\n                    </div>\n\n                    <!-- list of competency -->\n                    <div *ngFor="let competencyItem of KRADetails?.competencyFieldList.keyValueList; i as index" class="mr-top" [ngClass]="{\'openConatiner\':competencyItem?.isOpen, \'invalid-container\': ((isSaveSummaryCallsed && (!competencyItem.associateFieldList.titleValue ||!competencyItem.appraiserFieldList.titleValue ) ) && competencyItem?.isOpen)}">\n                        <div class="competency-details-container" (click)="toggleAccordian(competencyItem, i)" [ngClass]="{\'close-container\':!competencyItem?.isOpen}">\n                            <span>{{competencyItem.title}}</span>\n                            <span [ngClass]="{\'rotate-icon\': competencyItem?.isOpen}"><img class="faq-icon"\n                                    src="assets/imgs/exapnd-collapse.svg"></span>\n\n                        </div>\n\n                        <div class="competency-details" [hidden]="!competencyItem?.isOpen">\n                            <div class="competency-subtitle mr-6">\n                                <img class="img-style" [src]="competencyItem.icon">\n                                <span class="pd-5">{{competencyItem.subTitle}}</span>\n                            </div>\n                            <div *ngIf="competencyItem.associateFieldList; i as index" class="compentency-container mr-6">\n                                <div class="user-competency-details">\n                                    <div class="competency-subtitle">\n                                        <img class="user-pic" [src]="competencyItem.associateFieldList.icon">\n                                        <span class="pd-5">{{competencyItem.associateFieldList.title}}</span>\n                                    </div>\n                                    <ion-select *ngIf="competencyItem.associateFieldList.isEditable" placeholder="Select Value" class="competencySelect" [name]="competencyItem.id" [(ngModel)]="competencyItem.associateFieldList.titleValue" (ngModelChange)="selectedCompetency($event,competencyItem.id)">\n                                        <ion-option value={{item.id}} *ngFor="let item of competencyItem.associateFieldList.lov">\n                                            {{item.title}}</ion-option>\n                                    </ion-select>\n                                    <div class="selectedValue" *ngIf="!competencyItem.associateFieldList.isEditable">\n                                        {{competencyItem.associateFieldList.titleValue2}}</div>\n                                </div>\n                            </div>\n                            <div *ngIf="competencyItem.appraiserFieldList" class="compentency-container">\n                                <div class="user-competency-details">\n                                    <div class="competency-subtitle">\n                                        <img class="user-pic" [src]="competencyItem.appraiserFieldList.icon">\n                                        <span class="pd-5">{{competencyItem.appraiserFieldList.title}}</span>\n                                    </div>\n\n                                    <ion-select *ngIf="competencyItem.appraiserFieldList.isEditable" placeholder="Select Value" class="competencySelect" [name]="competencyItem.id" [(ngModel)]="competencyItem.appraiserFieldList.titleValue" (ngModelChange)="selectedCompetency($event,competencyItem.id)">\n                                        <ion-option value={{item.id}} *ngFor="let item of competencyItem.appraiserFieldList.lov">\n                                            {{item.title}}</ion-option>\n                                    </ion-select>\n                                    <div class="selectedValue" *ngIf="!competencyItem.appraiserFieldList.isEditable">\n                                        {{competencyItem.appraiserFieldList.titleValue2}}</div>\n                                </div>\n                            </div>\n\n\n                            <div *ngIf="competencyItem.defination" class="mr-6">\n                                <div class="competency-subtitle">\n                                    <img class="img-style" [src]="competencyItem.defination.icon">\n                                    <span class="pd-5">{{competencyItem.defination.value}}</span>\n                                </div>\n                                <div class="mr-3" *ngFor="let behaviourItem of competencyItem.defination.keyValueList">\n                                    {{behaviourItem}}\n                                </div>\n                            </div>\n\n                            <div *ngIf="competencyItem.behavoiurs" class="mr-6">\n                                <div class="competency-subtitle">\n                                    <img class="img-style" [src]="competencyItem.behavoiurs.icon">\n                                    <span class="pd-5">{{competencyItem.behavoiurs.value}}</span>\n                                </div>\n                                <!-- <ul>\n                  <li class="mr-3" *ngFor="let behaviourItem of competencyItem.behavoiurs.keyValueList">\n                    {{behaviourItem}}\n                  </li>\n                </ul> -->\n                                <div class="mr-3" *ngFor="let behaviourItem of competencyItem.behavoiurs.keyValueList">\n                                    - {{behaviourItem}}\n                                </div>\n                            </div>\n                        </div>\n                        <div class="error mr-6" [hidden]="!competencyItem?.associateFieldList" *ngIf="isSaveSummaryCalled && !competencyItem?.associateFieldList?.titleValue">*Field is required\n                        </div>\n                        <div class="error mr-6" [hidden]="!competencyItem?.appraiserFieldList" *ngIf="isSaveSummaryCalled && !competencyItem?.appraiserFieldList?.titleValue">*Field is required\n                        </div>\n                    </div>\n                </div>\n\n\n                <div class="section-container">\n                    <div class="section-headings">\n                        <img src="assets/imgs/career-apiration.svg">\n                        <span class="pd-5">Career Aspirations</span>\n                    </div>\n                    <div class="goal-container" *ngFor="let aspirations of KRADetails?.goalFeildList;index as goalIndex">\n                        <div>\n                            <ion-label *ngIf="aspirations?.isShow" class="goals-label">{{aspirations?.title}}\n                                <img *ngIf="!(aspirations.title==\'Appraisee Comment\')" class="astrick" src="assets/imgs/asterisk.svg" />\n                            </ion-label>\n                        </div>\n                        <ion-textarea class="fontSize9 text-black" *ngIf="aspirations.fieldType==\'textArea\'  && aspirations.bindWith==\'careerAspiration1\'" #aspiration1Ref required [(ngModel)]="aspirations.titleValue" [ngModelOptions]="{standalone: true}" #aspiration1Ref="ngModel"\n                            class="goals-textarea" [readonly]="!aspirations?.isEditable" (ionFocus)="aspirations?.isEditable ? expandTextArea(aspirations.title, aspirations.titleValue, goalIndex, \'goalFeildList\', \'titleValue\') : null" [ngClass]="{\'greyColor\':!aspirations?.isEditable}">\n                        </ion-textarea>\n\n                        <ion-textarea class="fontSize9 text-black" *ngIf="aspirations.fieldType==\'textArea\' && aspirations.bindWith==\'careerAspiration2\'" #aspiration1Ref required [(ngModel)]="aspirations.titleValue" [ngModelOptions]="{standalone: true}" #aspiration1Ref="ngModel"\n                            class="goals-textarea" [readonly]="!aspirations?.isEditable" (ionFocus)="aspirations?.isEditable ? expandTextArea(aspirations.title, aspirations.titleValue, goalIndex, \'goalFeildList\', \'titleValue\') : null" [ngClass]="{\'greyColor\':!aspirations?.isEditable}"></ion-textarea>\n\n                        <ion-textarea class="fontSize9 text-black" *ngIf="aspirations.fieldType==\'textArea\' && aspirations.bindWith==\'careerAspiration3\'" #aspiration1Ref [(ngModel)]="aspirations.titleValue" [ngModelOptions]="{standalone: true}" #aspiration1Ref="ngModel" class="goals-textarea"\n                            [readonly]="!aspirations?.isEditable" (ionFocus)="aspirations?.isEditable ? expandTextArea(aspirations.title, aspirations.titleValue, goalIndex, \'goalFeildList\', \'titleValue\') : null" [ngClass]="{\'greyColor\':!aspirations?.isEditable}"></ion-textarea>\n                    </div>\n                </div>\n            </div>\n\n            <!-- Mobility constraint section -->\n\n            <div *ngIf="KRADetails.goalsDetails != null && (userRole == \'1\'|| userRole == \'2\')  &&  kraId==\'-2\'">\n\n                <div class="section-container">\n                    <div class="padding12">\n                        <ion-list radio-group>\n                            <div class="goals-label">\n                                Do you have any mobility constraint?\n                                <img class="astrick" src="assets/imgs/asterisk.svg" />\n                            </div>\n\n                            <div class="promo-container">\n                                <div class="row">\n                                    <ion-radio [checked]="KRADetails.goalsDetails.mobilityConstraint != null  && KRADetails.goalsDetails.mobilityConstraint == true" (click)="mobilityChoice(\'Yes\')" [disabled]="userRole ==\'2\'"></ion-radio>\n                                    <ion-label class="font1em">Yes</ion-label>\n                                </div>\n                                <div class="row">\n                                    <ion-radio [checked]="KRADetails?.goalsDetails.mobilityConstraint != null && KRADetails?.goalsDetails.mobilityConstraint == false" (click)="mobilityChoice(\'No\')" checked="true" value="No" [disabled]="userRole ==\'2\'"></ion-radio>\n                                    <ion-label class="font1em">No</ion-label>\n                                </div>\n                            </div>\n                        </ion-list>\n                    </div>\n\n                    <div *ngIf="KRADetails.goalsDetails.mobilityConstraint" class="padding12">\n                        <div *ngFor="let mobility of mobilityConstraintField;index as mobilityIndex">\n                            <ion-label class="goals-label">Justification\n                                <img class="astrick" src="assets/imgs/asterisk.svg" />\n                            </ion-label>\n                            <ion-textarea class="fontSize9 text-black" required type="text" *ngIf="mobility.fieldType ==\'textArea\'" [(ngModel)]="mobility.titleValue" class="promo-textarea" [ngModelOptions]="{standalone: true}" [readonly]="!mobility.isEditable">\n                            </ion-textarea>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n            <!-- this section displays 1st Up Manager(Appraiser) , goals where user gets the option to recommend the associate for promotions. -->\n            <!-- -->\n\n            <!-- this section displays 1st Up Manager(Appraiser) , goals where user gets the option to recommend the associate for promotions. -->\n            <!-- -->\n\n            <div class="section-container" *ngIf="KRADetails?.isEligibleForPromotion &&  kraId==\'-2\' && (userRole == \'2\' || userRole == \'3\') ">\n                <div class="section-headings">\n                    <img src="assets/imgs/promotion-icon.svg">\n                    <span class="pd-5" *ngIf="userRole == \'2\'">Promotion Details</span>\n                    <span class="pd-5" *ngIf="userRole == \'3\'">Promotion Details by Appraiser</span>\n                </div>\n                <div class="goals-label promo">\n                    Do you want to recommend him/her for promotion?\n                </div>\n                <div class="padding8 pro promotionSection promotion-Details">\n                    <!-- <ion-list radio-group>\n            <div class="goals-label">\n              Do you want to recommend him/her for promotion?\n            </div>\n            <div class="promo-container">\n              <div class="row">\n                <ion-radio [checked]="KRADetails?.goalsDetails.isPermotionRecommendedByAppraiser == true"\n                  (click)="appraiserDecision(\'Yes\')" [disabled]="userRole == \'3\'"></ion-radio>\n                <ion-label class="font1em">Yes</ion-label>\n              </div>\n              <div class="row">\n                <ion-radio [checked]="KRADetails?.goalsDetails.isPermotionRecommendedByAppraiser == false"\n                  (click)="appraiserDecision(\'No\')" value="No" [disabled]="userRole == \'3\'">\n                </ion-radio>\n                <ion-label class="font1em">No</ion-label>\n              </div>\n            \n\n\n              <div class="row promotionDetails"\n                *ngIf="kraId==\'-2\' &&  KRADetails?.goalsDetails.isPermotionRecommendedByAppraiser"\n                (click)="goToPromotionDetails()">\n                Promotion Details\n              </div>\n\n            </div>\n          </ion-list> -->\n\n                    <ion-select placeholder="Select Value" class="competencySelect pro" (ionChange)="appraiserDecision($event)" [disabled]="userRole == \'3\'">\n                        <ion-option [selected]="KRADetails?.goalsDetails.isPermotionRecommendedByAppraiser == true">Yes</ion-option>\n                        <ion-option [selected]="KRADetails?.goalsDetails.isPermotionRecommendedByAppraiser == false">No</ion-option>\n                    </ion-select>\n                    <div class="row promotionDetails" *ngIf="kraId==\'-2\' && KRADetails?.goalsDetails.isPermotionRecommendedByAppraiser &&  KRADetails?.appraiserPromotionDetailList" (click)="goToPromotionDetails()">\n                        Additional Details\n                    </div>\n\n\n\n                </div>\n\n                <div *ngIf="isPromotionDetailsFilled && userRole == \'2\'" style="color:red;margin-left: 10px;"> Please fill additional details.</div>\n\n                <div class="promo" *ngIf="kraId==\'-2\' &&  KRADetails?.goalsDetails.isPermotionRecommendedByAppraiser">\n                    <div>\n                        <p class="goals-label">Promotion Details</p>\n                    </div>\n                    <div class="promotion-Details">\n                        <ion-list>\n                            <ion-item>\n                                <ion-label class="font1em">Role</ion-label>\n                                <ion-select class="font1em" [(ngModel)]="appraiserViewRole" [ngModelOptions]="{standalone: true}" interface="action-sheet" (ionChange)="onTitle(appraiserViewRole)" [placeholder]=\'appraiserViewRole\' [disabled]="userRole == \'3\'">\n\n                                    <div *ngFor="let item of icList">\n                                        <ion-option [value]="item.title">{{item.value}}</ion-option>\n                                    </div>\n                                </ion-select>\n                            </ion-item>\n                        </ion-list>\n                        <div style="position: relative;">\n                            <ion-list>\n                                <ion-item (click)="getDesignationList()">\n                                    <ion-label class="font1em flex">Designation\n                                    </ion-label>\n\n                                    <ion-select class="font1em promotion-Details" [(ngModel)]="appriaserViewDesignation" (ionChange)="onDesignation(appriaserViewDesignation)" interface="action-sheet" [ngModelOptions]="{standalone: true}" [placeholder]=\'appriaserViewDesignation\' [disabled]="userRole == \'3\'">\n                                        <ion-option *ngFor="let designation of  designationList" [value]="designation.value">{{designation.value}}</ion-option>\n                                    </ion-select>\n                                </ion-item>\n                            </ion-list>\n\n\n                            <ion-icon *ngIf="KRADetails?.toolTipForDesignation" [tooltip]="KRADetails?.toolTipForDesignation" positionV="bottom" hideOthers="true" [event]="tooltipEvent" class="desig-tooltip" clear color="dark">\n                                <img class="info-icon" src="assets/imgs/info.svg" />\n                            </ion-icon>\n\n                        </div>\n\n                        <ion-label class="goals-label">Justification\n                            <img class="astrick" src="assets/imgs/asterisk.svg" />\n                        </ion-label>\n                        <ion-textarea class="fontSize9 text-black" [ngModelOptions]="{standalone: true}" [(ngModel)]="appraiserViewJustification" type="text" class="promo-textarea" [disabled]="userRole == \'3\'">\n                        </ion-textarea>\n\n                    </div>\n                </div>\n            </div>\n\n\n\n            <!-- this section displays 2nd Up Manager(Reviewer) goals  where user gets the option to recommend the associate for promotions  -->\n            <div *ngIf="KRADetails?.isEligibleForPromotion &&  kraId==\'-2\' && userRole == \'3\' " class="section-container">\n                <div class="section-headings">\n                    <img src="assets/imgs/promotion-icon.svg">\n                    <span class="pd-5">Promotion Details</span>\n                </div>\n                <div class="goals-label promo">\n                    Do you want to recommend him/her for promotion?\n                </div>\n                <div class="padding8 pro promotionSection promotion-Details">\n                    <!-- <ion-list radio-group>\n            <div class="goals-label">\n              Do you want to recommend him/her for promotion?\n            </div>\n            <div class="promo-container">\n              <div class="row">\n                <ion-radio [checked]="KRADetails?.goalsDetails.isPermotionRecommendedByReviewer == true"\n                  (click)="reviewerDecision(\'Yes\')"></ion-radio>\n                <ion-label class="font1em">Yes</ion-label>\n              </div>\n              <div class="row">\n                <ion-radio [checked]="KRADetails?.goalsDetails.isPermotionRecommendedByReviewer == false"\n                  (click)="reviewerDecision(\'No\')" value="No"></ion-radio>\n                <ion-label class="font1em">No</ion-label>\n              </div>\n              <div class="row promotionDetails"\n                *ngIf="kraId==\'-2\' &&  KRADetails?.goalsDetails.isPermotionRecommendedByReviewer"\n                (click)="reviewerPromotionDetails()">\n                Promotion Details\n              </div>\n            </div>\n          </ion-list> -->\n\n                    <ion-select placeholder="Select Value" class="competencySelect" (ionChange)="reviewerDecision($event)">\n                        <ion-option [selected]="KRADetails?.goalsDetails.isPermotionRecommendedByReviewer == true">Yes</ion-option>\n                        <ion-option [selected]="KRADetails?.goalsDetails.isPermotionRecommendedByReviewer == false">No</ion-option>\n                    </ion-select>\n\n                    <div class="row promotionDetails" *ngIf="kraId==\'-2\' &&   KRADetails?.goalsDetails.isPermotionRecommendedByReviewer &&  KRADetails?.reviewerPromotionDetailList" (click)="reviewerPromotionDetails()">\n                        Additional Details\n                    </div>\n                </div>\n\n                <div *ngIf="isPromotionDetailsFilled && userRole == \'3\'" style="color:red;margin-left: 10px;"> Please fill additional details.</div>\n                <div class="promo" *ngIf="kraId==\'-2\' &&  KRADetails?.goalsDetails.isPermotionRecommendedByReviewer">\n                    <div>\n                        <p class="goals-label">Promotion Details</p>\n                    </div>\n                    <div class="promotion-Details">\n                        <ion-list>\n                            <ion-item>\n                                <ion-label class="font1em">Role</ion-label>\n                                <ion-select class="font1em promotion-Details" [(ngModel)]="reviewerViewRole" [ngModelOptions]="{standalone: true}" interface="action-sheet" (ionChange)="reviewerRoleSelection(reviewerViewRole)" [placeholder]=\'reviewerViewRole\'>\n                                    <div *ngFor="let item of icList">\n                                        <ion-option [value]="item.title">{{item.title}}</ion-option>\n                                    </div>\n                                </ion-select>\n                            </ion-item>\n                        </ion-list>\n                        <div style="position: relative;">\n                            <ion-list>\n                                <ion-item class="flex" (click)="getDesignationList()">\n                                    <ion-label class="font1em ">Designation\n\n                                        <ion-icon *ngIf="KRADetails?.toolTipForDesignation" [tooltip]="KRADetails?.toolTipForDesignation" positionV="bottom" hideOthers="true" [event]="tooltipEvent" class="desig-tooltip" clear color="dark">\n                                            <img class="info-icon" src="assets/imgs/info.svg" />\n                                        </ion-icon>\n\n                                    </ion-label>\n\n                                    <ion-select class="font1em promotion-Details" [(ngModel)]="reviewerViewDesignation" (ionChange)="reviewerDesigSelection(reviewerViewDesignation)" interface="action-sheet" [ngModelOptions]="{standalone: true}" [placeholder]=\'reviewerViewDesignation\'>\n                                        <ion-option *ngFor="let designation of  designationList" (value)="designation.value">{{designation.value}}</ion-option>\n                                    </ion-select>\n                                </ion-item>\n                            </ion-list>\n                        </div>\n                    </div>\n\n                    <div>\n\n                        <ion-label class="goals-label">Justification\n                            <img class="astrick" src="assets/imgs/asterisk.svg" />\n                        </ion-label>\n                        <ion-textarea class="fontSize9 text-black" [(ngModel)]="reviewerViewJustification" [ngModelOptions]="{standalone: true}" #justificationReviewerRef required #justificationReviewerRef="ngModel" type="text" class="promo-textarea">\n                        </ion-textarea>\n                    </div>\n                </div>\n            </div>\n\n\n        </form>\n\n        <!-- when KRA 1 is selected -->\n        <div class="talentIndex-parent" *ngIf="kraId==\'1\' && KRADetails?.subKraList">\n\n            <div class="fontWeight-bold">\n                Talent Index\n            </div>\n            <div class="addMore-parent">\n                <span class="padding10 subKRA-title">Sub KRA:\n                    {{KRADetails?.actualSubkra}}/{{KRADetails?.maxLimit}}</span>\n                <!-- <span>\n          <button class="textCapitalize addMoreBtn" ion-button round (click)="gotoAddSubKra(KRADetails?.addSubKraList,true)">Add\n            More</button>\n        </span> -->\n            </div>\n        </div>\n        <div *ngIf="kraId==\'1\'">\n            <div class="paddingRtLf10">\n                <p *ngIf="KRADetails?.minMaxSubKraMessage" class="minKRAmsg">Note: {{KRADetails?.minMaxSubKraMessage}}\n                </p>\n                <!-- <p *ngIf="KRADetails?.minMaxSubKraMessage" class="font0-95"> * {{KRADetails?.minMaxSubKraMessage}}</p> -->\n                <!-- <p *ngIf="KRADetails?.mandatorySubKraMessage" class="font0-95"> * {{KRADetails?.mandatorySubKraMessage}}</p> -->\n            </div>\n\n            <div class="main-card" *ngFor="let subKraItem of KRADetails.subKraList" (click)="viewSubKra(subKraItem?.subKraFieldList,false,subKraItem?.isMandatory)">\n                <div class="upper-card-parent padding5">\n                    <div class="icon-div">\n                        <img [src]="subKraItem.icon">\n                    </div>\n                    <div class="learningHrs-parent">\n                        <div class="learning-hrs-div marginBottom-8px">\n                            <span>{{subKraItem.title}} </span>\n                            <span class="mandatory" *ngIf="subKraItem.isMandatory">Mandatory</span>\n                            <!-- <span>Technical/Behavioural</span> -->\n                        </div>\n                        <div class="displayFlex margin-bottm-6 alignItemCenter" *ngFor="let item of subKraItem.value">\n                            <div>\n                                <img class="kraType-icon" [src]="item.icon" />\n                            </div>\n                            <div class="padding5" *ngIf="item.key">{{item.key}}</div>\n                            <div class="padding5" *ngIf="item.key !=\'Milestone Date\'">{{item.value}}</div>\n                            <div class="padding5" *ngIf="item.key==\'Milestone Date\'">{{item.value |date : \'d MMM yyyy\'}}\n                            </div>\n\n\n                        </div>\n                    </div>\n                    <div class="arrow-parent">\n\n                    </div>\n                </div>\n                <div class="lower-card-parent">\n                    <div class="midTerm-parent">\n                        <div>\n                            <div class="fontWeight-bold marginbtm5">{{subKraItem.midTermTitle}}:</div>\n                            <div class="floorTarget-parent">\n                                <div>\n                                    <span>Target:</span>\n                                    <span>{{subKraItem.midTermTarget}}</span>\n                                </div>\n                                <div>\n                                    <span>Floor:</span>\n                                    <span>{{subKraItem.midTermFloor}}</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="endTerm-parent">\n                        <div class="fontWeight-bold marginbtm5">{{subKraItem.annualTitle}}:</div>\n                        <div class="floorTarget-parent">\n                            <div>\n                                <span>Target:</span>\n                                <span>{{subKraItem.annualTarget}}</span>\n                            </div>\n                            <div>\n                                <span>Floor:</span>\n                                <span>{{subKraItem.annualFloor}}</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n\n        <!-- KRA 1 css ends -->\n\n\n    </div>\n\n    <div *ngIf="showWhenData == \'Preview\'">\n        <!-- overall score -->\n        <ion-card class="preview-card" *ngIf="KRADetails.isPreview && (userRole==\'1\' || userRole==\'2\' ||userRole==\'3\' )">\n            <ion-card-header class="preview-header">Performance Review Score</ion-card-header>\n            <div class="preview-cont">\n                <div class="padding-bottom10per width100">\n                    <div class=" display-flex  fontSize1p2" *ngFor="let item of KRADetails.scoreList">\n                        <div col-6>{{item?.key}}</div>\n                        <div col-6 class="font-weight500">{{item?.value}}</div>\n                    </div>\n                </div>\n                <button class="nextBtn" ion-button round (click)="openPreview()">Next</button>\n            </div>\n        </ion-card>\n        <!-- on kra completion -->\n        <div *ngIf="!KRADetails.isPreview && userRole == \'1\'">\n            <ion-card class="preview-card congratulation-bg-img">\n                <div class="preview-cont">\n                    <span class="completed-kra-heading">\n                        <span class="completed-kra-status"><img src="assets/imgs/ZenDeavour/kra-tick.svg" />\n                        </span><span class="fontSize1p8">\n                            Thank you</span>\n                    </span>\n                    <div [innerHTML]="KRADetails?.successMessage"></div>\n                </div>\n            </ion-card>\n            <div text-center> <button class="" ion-button round (click)="goToDashboard()">Back to Dashboard</button>\n            </div>\n        </div>\n    </div>\n\n    <!-- FAB button css  -->\n    <ion-fab right bottom *ngIf="kraId > 0  && (kraType == \'Mid-Term\' || kraType == \'Annual\')">\n        <button ion-fab (click)="openGuidelinesPdf()" class="help-fab fab-btn">\n            <ion-icon name="help"></ion-icon>\n        </button>\n    </ion-fab>\n</ion-content>\n\n\n<ion-footer class="footerBg" *ngIf="(KRADetails.isPreview && userRole==\'1\') || userRole==\'2\' || userRole==\'3\'" [hidden]="kraId==\'-1\'">\n\n    <div style="display: flex; justify-content: center;">\n        <button *ngIf="showSaveResetBtn()" (click)="saveKRA()" class="nextBtn" ion-button round>Save</button>\n        <button *ngIf="showSaveResetBtn()" (click)="resetData()" class="nextBtn" ion-button round>Reset</button>\n        <button *ngIf="kraId==\'-2\' || showWhenData==\'KRA\' || showWhenData==\'Home\' " class="nextBtn" ion-button round (click)="saveKRA(true)">Next</button>\n        <!-- (showWhenData==\'KRA\'  || showWhenData == \'Goals\') && KRADetails?.isEligibleForPromotion -->\n    </div>\n</ion-footer>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-deavor-kra\zen-deavor-kra.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_nav_params__["a" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["w" /* ModalController */], __WEBPACK_IMPORTED_MODULE_7__providers_attachment_attachment__["a" /* Attachment */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_9__providers_http_angular_http_angular__["a" /* HttpAngularProvider */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_10__providers_download_download__["a" /* Download */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["B" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_keyboard__["a" /* Keyboard */]])
    ], ZenDeavorKraPage);
    return ZenDeavorKraPage;
}());

//# sourceMappingURL=zen-deavor-kra.js.map

/***/ })

});
//# sourceMappingURL=60.js.map