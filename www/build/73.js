webpackJsonp([73],{

/***/ 1429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNonZensarianPageModule", function() { return AddNonZensarianPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_non_zensarian__ = __webpack_require__(1851);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddNonZensarianPageModule = /** @class */ (function () {
    function AddNonZensarianPageModule() {
    }
    AddNonZensarianPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_non_zensarian__["a" /* AddNonZensarianPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_non_zensarian__["a" /* AddNonZensarianPage */]),
            ],
        })
    ], AddNonZensarianPageModule);
    return AddNonZensarianPageModule;
}());

//# sourceMappingURL=add-non-zensarian.module.js.map

/***/ }),

/***/ 1851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNonZensarianPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_http_angular_http_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_crop__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(153);
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
 * Generated class for the AddNonZensarianPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddNonZensarianPage = /** @class */ (function () {
    function AddNonZensarianPage(navParams, formBuilder, utility, viewCtrl, httpAngularProvider, actionSheetController, file, crop, camera) {
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.utility = utility;
        this.viewCtrl = viewCtrl;
        this.httpAngularProvider = httpAngularProvider;
        this.actionSheetController = actionSheetController;
        this.file = file;
        this.crop = crop;
        this.camera = camera;
        this.isUpdate = false;
        this.isFormSubmitted = false;
        this.croppedImagepath = "";
        this.showUploadedImg = false;
        this.isPhotoUploaded = false;
        if (!this.utility.isEmptyOrNullOrUndefined(this.navParams.get("userData")) &&
            !this.utility.isEmptyOrNullOrUndefined(this.navParams.get("isEdit"))) {
            this.userData = this.navParams.get("userData");
            this.isUpdate = this.navParams.get("isEdit");
        }
    }
    AddNonZensarianPage.prototype.ionViewDidLoad = function () {
        // console.log("ionViewDidLoad AddNewPassPage");
    };
    AddNonZensarianPage.prototype.ngOnInit = function () {
        this.userForm = this.formBuilder.group({
            name: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('[a-zA-Z ]*')]],
            contact: [
                "",
                [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(10),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(10),
                ],
            ],
            email: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].email]],
            designation: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
        });
        // Set user data to update
        var _a = this.userForm.controls, contact = _a.contact, designation = _a.designation, email = _a.email, name = _a.name;
        if (this.isUpdate) {
            name.setValue(this.userData.userName);
            contact.setValue(this.userData.contactNumber);
            designation.setValue(this.userData.designation);
            email.setValue(this.userData.emailId);
            this.croppedImagepath = this.userData.userProfilePic;
        }
        // console.log("userform",this.userForm.controls)
    };
    AddNonZensarianPage.prototype.submitUserData = function () {
        var _this = this;
        if (this.utility.isEmptyOrNullOrUndefined(this.croppedImagepath)) {
            this.utility.presentAlert("Kindly upload photo");
            return;
        }
        var _a = this.userForm.value, contact = _a.contact, designation = _a.designation, email = _a.email, name = _a.name;
        var data = {
            updationType: "add",
            nzUserName: name,
            nzEmailId: email,
            nzContactNumber: contact,
            nzDesignation: designation,
        };
        if (this.isUpdate) {
            Object.assign(data, {
                updationType: "update",
                nzUserId: this.userData.userId,
                nzUserName: name,
                nzEmailId: email,
                nzContactNumber: contact,
                nzDesignation: designation,
            });
        }
        this.utility.updateLoader(true);
        // console.log("response ", this.croppedImagepath)
        var fileURI = this.croppedImagepath;
        this.utility.updateLoader(true);
        var formData = new FormData();
        if (this.isUpdate) {
            formData.append("nzUserId", this.userData.userId);
            formData.append("updationType", this.isUpdate ? "update" : "add");
            formData.append("nzUserName", name);
            formData.append("nzEmailId", email);
            formData.append("nzContactNumber", contact);
            formData.append("nzDesignation", designation);
        }
        else {
            formData.append("updationType", this.isUpdate ? "update" : "add");
            formData.append("nzUserName", name);
            formData.append("nzEmailId", email);
            formData.append("nzContactNumber", contact);
            formData.append("nzDesignation", designation);
        }
        var uploadDocs = {
            url: 'getAdminAddUpdateNonZensarianDetails',
            data: formData,
            isZenAdmin: true
        };
        if (this.isPhotoUploaded) {
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
                        formData.append("files", imgBlob, fileName + "." + fileExt);
                        _this.uploadFileApi(uploadDocs);
                    };
                });
            }).catch(function (error) {
                _this.utility.updateLoader(false);
                console.log("error", error);
            });
        }
        else {
            formData.append("files", '');
            this.uploadFileApi(uploadDocs);
        }
    };
    AddNonZensarianPage.prototype.formValidator = function (group) {
        if (group) {
            // console.log(group)
            var startDate = group.get("startDate").value;
            var dailyPassTypeVal = group.get("dailypassType").value;
            if (startDate) {
                if (startDate == "") {
                    return { startDateIsempty: true };
                }
                else {
                    var formatDate = __WEBPACK_IMPORTED_MODULE_5_moment__(startDate).format("YYYY-MM-DD");
                    var tempdate = __WEBPACK_IMPORTED_MODULE_5_moment__(formatDate); // Thursday Feb 2015
                    var dow = tempdate.day();
                    // console.log(dow);
                    if (dow == 0 || dow == 6)
                        return { IsWeekend: true };
                }
            }
            if (group.get("passType").value != "") {
                if (group.get("passType").value == "Daily" && (dailyPassTypeVal == "" || dailyPassTypeVal == null)) {
                    return { dailypassIsEmpty: true };
                }
            }
        }
        return null;
    };
    // to dismiss the modal for model closing
    AddNonZensarianPage.prototype.dismiss = function (flag) {
        this.viewCtrl.dismiss(flag);
    };
    AddNonZensarianPage.prototype.pickImage = function (sourceType) {
        var _this = this;
        // console.log("pick image", sourceType)
        var options = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // console.log(" getPicture", imageData)
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            // let base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.cropImage(imageData);
        }, function (err) {
            // Handle error
            console.log("error", err);
        });
    };
    AddNonZensarianPage.prototype.cropImage = function (fileUrl) {
        var _this = this;
        this.crop.crop(fileUrl, { quality: 50, targetHeight: 200, targetWidth: 200 }).then(function (newPath) {
            // console.log("event on done", newPath)
            if (!_this.utility.isEmptyOrNullOrUndefined(newPath)) {
                _this.croppedImagepath = newPath.split('?')[0];
                // alert("pic captured")
                _this.isPhotoUploaded = true;
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
    AddNonZensarianPage.prototype.selectImage = function () {
        var _this = this;
        // alert("click")
        this.actionSheetController.create({
            title: "Select Image source",
            buttons: [{
                    text: 'Load from Library',
                    handler: function () {
                        _this.pickImage(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                }, {
                    text: 'Use Camera',
                    handler: function () {
                        _this.pickImage(_this.camera.PictureSourceType.CAMERA);
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel'
                }]
        }).present();
    };
    AddNonZensarianPage.prototype.uploadFileApi = function (uploadDocs) {
        var _this = this;
        /**
                  * Upload documents service call : UploadKRADatials
                  */
        console.log("file ", uploadDocs);
        this.httpAngularProvider.multimediaService(uploadDocs).subscribe(function (response) {
            _this.utility.updateLoader(false);
            console.log("response ", response);
            if (response) {
                if (response.status["statusCode"] == 1) {
                    _this.utility.presentAlert(response.status["statusMessage"]).then(function (res) {
                        _this.viewCtrl.dismiss("add");
                    });
                    // this.showUploadedImg = true
                    // this.getProfileDetails();
                }
            }
        });
    };
    AddNonZensarianPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: "page-add-non-zensarian",template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\non-zensarian\add-non-zensarian\add-non-zensarian.html"*/'<!--\n  Generated template for the AddNewPassPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>{{isUpdate ? \'Update\' : \'Create\'}} Non-Zensarian Profile</ion-title>\n        <ion-buttons end>\n            <button class="btn-style" (click)="dismiss(\'\')" end>\n        <img src="assets/zenAdmin/close.svg" />\n      </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content [ngClass]="{\'update-bg-color\': isFormSubmitted}">\n    <div class="form-container">\n\n        <form [formGroup]="userForm">\n            <!-- daily pass types -->\n            <ion-list>\n                <ion-item>\n                    <ion-label color="dark" class="form-label" stacked>Name</ion-label>\n                    <ion-input formControlName="name" placeholder="Enter your name here"></ion-input>\n                </ion-item>\n                <div class="margin-btm-10">\n                    <span class="error-msg">\n            <p *ngIf="userForm.controls[\'name\'].hasError(\'required\') && userForm.controls?.name.touched">* Please enter a name</p>\n            <p  *ngIf="userForm.controls[\'name\'].hasError(\'pattern\') && userForm.controls?.name.touched">\n              * Please use alphabet character\n            </p>\n          </span>\n                </div>\n                <ion-item>\n                    <ion-label color="dark" stacked class="form-label">Contact Number</ion-label>\n                    <ion-input formControlName="contact" placeholder="Enter your contact number here" type="tel"></ion-input>\n                </ion-item>\n                <div class="margin-btm-10">\n                    <span class="error-msg">\n            <p *ngIf="userForm.controls[\'contact\'].hasError(\'required\') && userForm.controls?.contact.touched">* Please\n              enter a Contact Number</p>\n            <p *ngIf="userForm.controls[\'contact\'].hasError(\'maxlength\') || userForm.controls[\'contact\'].hasError(\'minlength\')">*\n              Please enter 10 digit number</p>\n          </span>\n                </div>\n                <ion-item>\n                    <ion-label color="dark" stacked class="form-label">Email Address\n                    </ion-label>\n                    <ion-input formControlName="email" placeholder="Enter your email here"></ion-input>\n                </ion-item>\n                <div class="margin-btm-10">\n                    <span class="error-msg">\n            <!-- <p *ngIf="userForm.controls[\'email\'].hasError(\'email\') && userForm.controls?.email.touched">* Please\n              enter a valid Email Address</p> -->\n            <p *ngIf="userForm.controls[\'email\'].hasError(\'required\') && userForm.controls?.email.touched">* Please\n              enter a Email Address</p>\n          </span>\n                </div>\n                <ion-item>\n                    <ion-label color="dark" stacked class="form-label">Designation</ion-label>\n                    <ion-input formControlName="designation" placeholder="Enter your designation here"></ion-input>\n                </ion-item>\n                <div class="margin-btm-10">\n                    <span class="error-msg" *ngIf="userForm.controls?.designation.invalid && userForm.controls?.designation.touched">\n            <p>* Please enter a Designation</p>\n          </span>\n                </div>\n                <ion-item class="border-btm-none">\n                    <ion-label color="dark" stacked class="form-label">Photo</ion-label>\n                    <!-- <ion-input [value]="croppedImagepath" disabled></ion-input> -->\n                    <button ion-button outline item-end round (click)="selectImage()">upload</button>\n                </ion-item>\n                <div class="add-non-nz-logo">\n                    <img class="add-non-nz-img" [src]="croppedImagepath" alt="" onerror="this.src=\'assets/imgs/dummy-profile.png\'" />\n                </div>\n            </ion-list>\n        </form>\n    </div>\n</ion-content>\n<ion-footer>\n    <div class="text-center padding-10">\n        <button class="submitBtn" ion-button round (click)="submitUserData()" [disabled]="userForm.invalid">\n      {{isUpdate ? \'Update\' : \'Create\'}} Profile\n    </button>\n    </div>\n</ion-footer>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\zen-admin\non-zensarian\add-non-zensarian\add-non-zensarian.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["H" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0__providers_http_angular_http_angular__["a" /* HttpAngularProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_crop__["a" /* Crop */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */]])
    ], AddNonZensarianPage);
    return AddNonZensarianPage;
}());

//# sourceMappingURL=add-non-zensarian.js.map

/***/ })

});
//# sourceMappingURL=73.js.map