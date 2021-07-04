webpackJsonp([97],{

/***/ 1350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_components_module__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification__ = __webpack_require__(1772);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NotificationPageModule = /** @class */ (function () {
    function NotificationPageModule() {
    }
    NotificationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__notification__["a" /* NotificationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__notification__["a" /* NotificationPage */]),
            ],
        })
    ], NotificationPageModule);
    return NotificationPageModule;
}());

//# sourceMappingURL=notification.module.js.map

/***/ }),

/***/ 1772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_services_searchService_searchService__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_data__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_commonUtilities_commonUtilities__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NotificationPage = /** @class */ (function () {
    function NotificationPage(navCtrl, navParams, alertCtrl, dataService, store, loadingController, searchService, utils) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.dataService = dataService;
        this.store = store;
        this.loadingController = loadingController;
        this.searchService = searchService;
        this.utils = utils;
        this.end = 10;
        this.start = 0;
        this.itemsLength = 0;
        this.type = 'notification';
        this.totalResultCount = 0;
        this.filterArray = [];
        this._notificationListener = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__["Subscription"]();
        this._readAllnotificationListener = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__["Subscription"]();
        this._roleListener = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__["Subscription"]();
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.notificationType = this.navParams.get('notificationType');
        this._roleListener = this.store.select(__WEBPACK_IMPORTED_MODULE_3__store__["_84" /* getRole */]).subscribe(function (role) {
            _this.role = role;
        });
        this.getNotificationData('get');
        this.loading$ = this.store.select(__WEBPACK_IMPORTED_MODULE_3__store__["_65" /* getNotificationLoading */]);
        this.getNotificationCount();
    };
    NotificationPage.prototype.getNotificationData = function (type) {
        var _this = this;
        var params = {
            'end': this.end,
            'start': this.start,
            'role': this.role,
            'type': this.notificationType
        };
        var url = "getAllNotification";
        if (type == "get") {
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["E" /* GetNotificationAction */](url, params));
        }
        else if (type == 'update') {
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["_23" /* UpdateNotificationAction */](url, params));
        }
        else if (type == 'refresh') {
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["_10" /* ReloadNotificationAction */](url, params));
        }
        return new Promise(function (resolve) {
            _this._notificationListener = _this.store.select(__WEBPACK_IMPORTED_MODULE_3__store__["_66" /* getNotificationState */]).subscribe(function (response) {
                if (response.pending == false && response.loadMore == false && response.pullToRefresh == false) {
                    if (response.data != undefined && response.data != null) {
                        _this.notificationList$ = response.data;
                        _this.totalResultCount = response.totalResults;
                        _this.itemsLength = response.data.length;
                    }
                    resolve();
                }
            }, function (err) {
            });
        });
    };
    NotificationPage.prototype.readAll = function () {
        var _this = this;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["g" /* ClearAllCountAction */]);
        this.notificationList$.map(function (item) {
            if (!item.isRead) {
                item.isRead = true;
            }
        });
        /* let url = "readAllNotification";
    
        this.store.dispatch(new fromStore.ReadAllNotificationAction(url)); */
        var url = "readAllNotification";
        this.store.select(__WEBPACK_IMPORTED_MODULE_3__store__["_46" /* getCurrentModule */]).subscribe(function (response) {
            if (response) {
                var moduleName = {
                    "type": response
                };
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["_5" /* ReadAllNotificationAction */](url, moduleName));
            }
        });
        return new Promise(function (resolve) {
            _this._readAllnotificationListener = _this.store.select(__WEBPACK_IMPORTED_MODULE_3__store__["_66" /* getNotificationState */]).subscribe(function (response) {
                if (response) {
                    _this.notificationList$.map(function (item) {
                        if (!item.isRead) {
                            item.isRead = true;
                        }
                    });
                    resolve();
                }
            }, function (err) {
            });
        });
    };
    NotificationPage.prototype.doRefresh = function (refresher) {
        this.start = 0;
        this.getNotificationData('refresh').then(function () {
            refresher.complete();
        });
    };
    NotificationPage.prototype.doInfinite = function (infiniteScroll) {
        if (this.totalResultCount) {
            this.start = this.itemsLength;
            this.getNotificationData('update').then(function () {
                infiniteScroll.complete();
            });
        }
        else {
            infiniteScroll.complete();
        }
    };
    NotificationPage.prototype.getNotificationCount = function () {
        var _this = this;
        /* this._notificationListener = this.store.select<any>(fromStore.getMiscData).subscribe((res) => {
          this.notificationCount = res.myUnreadNotificationCount;
        }); */
        this._notificationListener = this.store.select(__WEBPACK_IMPORTED_MODULE_3__store__["_64" /* getNotificationCount */]).subscribe(function (res) {
            _this.notificationCount = res;
        });
    };
    NotificationPage.prototype.ionViewWillLeave = function () {
        this._notificationListener.unsubscribe();
        this._readAllnotificationListener.unsubscribe();
        this._roleListener.unsubscribe();
    };
    NotificationPage.prototype.gotToListDetail = function (detailInfo, type) {
        var _this = this;
        if (detailInfo.conversationTypeName != "BROADCAST") {
            var id_1 = detailInfo.questionId || detailInfo.entityId || detailInfo.conversationId || detailInfo.role;
            if (this.role == detailInfo.role) {
                this.readNotificationOnTap(detailInfo);
                this.navCtrl.push('DetailPage', {
                    'id': id_1
                });
            }
            else {
                //detailInfo.isRead=false;
                var alert_1 = this.alertCtrl.create({
                    message: 'Do you want to change role to ' + detailInfo.role + ' ?  ',
                    enableBackdropDismiss: false,
                    buttons: [
                        {
                            text: 'No',
                            role: 'no',
                            handler: function () {
                                // this.navCtrl.pop();
                            }
                        },
                        {
                            text: 'Yes',
                            handler: function () {
                                //Setting role to admin start
                                _this.dataService.saveData('role', detailInfo.role);
                                _this.setRole(detailInfo.role);
                                //read notification
                                _this.readNotificationOnTap(detailInfo);
                                //Setting role to admin end                
                                _this.navCtrl.push('DetailPage', {
                                    'id': id_1
                                });
                            }
                        }
                    ],
                });
                alert_1.present();
            }
        }
        else {
            // this.pageTitle ="Announcement";    
            this.readNotificationOnTap(detailInfo);
            this.utils.goToPageDetail('AnnouncementPage', '', '');
        }
    };
    NotificationPage.prototype.setRole = function (role) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["_19" /* SetRole */](role));
    };
    NotificationPage.prototype.readNotificationOnTap = function (item) {
        if (!item.isRead) {
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["_7" /* ReduceNotificationCountAction */]);
            var param = {
                'notificationId': item.notificationId
            };
            var url = "readNotification";
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store__["_6" /* ReadNotificationAction */](url, param));
            this.store.select(__WEBPACK_IMPORTED_MODULE_3__store__["_66" /* getNotificationState */]).subscribe(function (response) {
                if (response || response.status.statusCode == 1) {
                    item.isRead = true; //read the notification
                }
            }, function (err) {
            });
        }
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notification',template:/*ion-inline-start:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\notification\notification.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title class="pageTitle">Notifications</ion-title>\n    <ion-buttons end>\n      <button *ngIf="notificationCount > 0" class="clear" ion-button icon-only (click)="readAll()">\n        Mark As Read\n      </button>\n\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-spinner *ngIf="loading$ | async"></ion-spinner>\n\n  <div text-center *ngIf="!(loading$ | async) && itemsLength == 0">No results found</div>\n\n  <query-list (gotToDetail)="gotToListDetail($event)" [type]="type" [items]="notificationList$"></query-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"D:\ZenSar-Apps\ZenTalent\zenHelp\src\container\notification\notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__providers_data_data__["a" /* Data */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_services_searchService_searchService__["a" /* searchService */], __WEBPACK_IMPORTED_MODULE_7__providers_commonUtilities_commonUtilities__["a" /* CommonUtilities */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ })

});
//# sourceMappingURL=97.js.map