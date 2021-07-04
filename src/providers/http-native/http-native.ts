import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import { Data } from '../data/data';
import 'rxjs/add/observable/fromPromise';
import * as environment from '@app/env';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import { initialParams, initialParamsForTimesheet, initialParamsForZenwen } from '../../models/httpProvider.model';
import { Constants } from "@app/constants";
import { Network } from '@ionic-native/network';
import { e } from '@angular/core/src/render3';
import { Events } from 'ionic-angular';


@Injectable()
export class HttpNativeProvider {

    private authBaseURL = environment.authBaseURL;

    private baseURL = environment.servicesURL;

    private loginURL = this.authBaseURL + "login";

    private tsBackdoorLoginURL = this.authBaseURL + "backDoorLogin";

    private logoutURL = this.authBaseURL + "logout";

    private searchURL = environment.searchURL;

    private notificationURL = environment.notificationURL;

    private associateURL = environment.associateSelfService;

    private onBoardingUrls = environment.onBoardingUrl;

    private changePasswordUrl = this.onBoardingUrls + "changePassword";

    private zenDeavorUrl = environment.zenDeavorURL;

    public zenLearnUrl = environment.zenLearnBaseURL;


    //ZenTS
    private zentsLoginBaseUrl = environment.loginBaseUrl;
    private timeentryBaseUrl = environment.timeentryBaseUrl;
    private zenTsPalBaseUrl = environment.zenTsPalBaseUrl;
    private overtimeBaseUrl = environment.overtimeBaseUrl;
    private addTaskBaseURL = environment.addTaskBaseUrl;
    private dashboardBaseURL = environment.dashboardBaseUrl;
    private addOnBaseUrl = environment.addOnBaseUrl;

    //ZenWEN:
    private zenWENUrl = environment.zenwenUrl;
    private eventBaseUrl = environment.eventBaseUrl;
    private zenEventBaseUrl = environment.zenEventBaseUrl;
    private headerMenuBaseUrl = environment.headerMenuBaseUrl;
    private mediaServices = environment.mediaServices;
    private collaborationServiceUrl = environment.collaborationServiceUrl;
    private zenCollaborationServiceUrl = environment.zenCollaborationServiceUrl;
    private userBaseUrl = environment.userBaseUrl;
    private zenMediaServicesUrl = environment.zenMediaServices;

    private isNetworkConnected: boolean = true;


    constructor(public http: HTTP, public dataService: Data, public utilitiy: CommonUtilities, private network: Network, private events: Events) {

        this.network.onConnect().subscribe((response) => {
            //console.log(response)
            this.isNetworkConnected = true;
        })
        this.network.onDisconnect().subscribe((response) => {
            //console.log(response)
            this.isNetworkConnected = false
        })

        //console.log(this.network.type)
    }



    public get(url: string, params?: any, options: any = {}) {
        let responseData = this.http.get(url, params, {})
            .then(resp => options.responseType == 'text' ? resp.data : JSON.parse(resp.data));

        return Observable.fromPromise(responseData);
    }

    private extractData(res: Response | any) {

        let body = JSON.parse(res.data);
        let statusCode = null;

        if (body && body.status) {
            statusCode = body.status.statusCode;
        }

        if (statusCode == -1) {
            this.utilitiy.updateLoader(false);

            let errMsg = body.status.statusMessage;

            this.utilitiy.presentAlert(errMsg).then((success) => {
                this.dataService.clearData();
                this.utilitiy.goToPage('LoginPage');
            });

            return body;

        } else if (statusCode == -2) {
            //this.utilitiy.presentAlert(Constants.Server_Error_Message);
            throw Observable.throw(Constants.Server_Error_Message);
        } else if (statusCode == -4 || statusCode == -6 || statusCode == -7) {
            let errMsg = body.status.statusMessage;
            this.utilitiy.presentAlert(errMsg);
            this.utilitiy.updateLoader(false);
            return body;
        } else if (statusCode == 0) {
            let errMsg = body.status.statusMessage;

            this.utilitiy.presentAlert(errMsg).then((success) => {
                // this.dataService.clearData();
                //this.utilitiy.goToPage('LoginPage');
            });

            return body;
        } else if (statusCode == -5) {
            let errMsg = body.status.statusMessage;
            if (!this.utilitiy.isEmptyOrNullOrUndefined(body) || !this.utilitiy.isEmptyOrNullOrUndefined(body.status) || !this.utilitiy.isEmptyOrNullOrUndefined(body.status.statusMessage)) {
                // throw Observable.throw(errMsg)
                return body
            } else {
                throw Observable.throw(Constants.Server_Error_Message);
            }

        } else {
            return body;
        }

    }

    private handleError(error: Response | any) {

        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else if (!this.utilitiy.isEmptyOrNullOrUndefined(error.message) && error.message.toLowerCase().indexOf('internet') > -1) {
            this.utilitiy.presentAlert(error.message)
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);

            this.utilitiy.presentAlert(Constants.Server_Error_Message);
        }
        // return an observable with a user-facing error message
        this.events.publish('hide-loader')
        return Observable.throw(Constants.Server_Error_Message);
    };

    public authenticate(user, type): Observable<any> {

        if (this.network.type !== ('none' || 'unknown')) {

            if (this.isNetworkConnected) {
                var url, headers;
                let encodedPassword = encodeURI(user.password);
                let newpassword = encodedPassword.replace(/\+/g, '%2B');
                if (type == 'login') {
                    url = this.loginURL;
                    headers = {
                        'X_Requested_With': 'com.zensar.zenhelp',
                        'Content-Type': 'application/json;charset=utf-8',
                        'userName': user.username,
                        'password': newpassword
                    };
                } else if (type == "tsBackdoorLogin") {
                    url = this.tsBackdoorLoginURL;

                    headers = {
                        'X_Requested_With': 'com.zensar.zenhelp',
                        'loginId': user.username
                    };
                } else if (type == 'logout') {
                    url = this.logoutURL;
                    headers = {
                        'X_Requested_With': 'com.zensar.zenhelp',
                        'encryptedToken': user.details.encryptedToken.toString()
                    }
                }

                return Observable.fromPromise(
                    this.http.post(url, {}, headers).then((res) => this.extractData(res))
                        .catch(error => {

                            return this.handleError(error);
                        })
                )
            } else {
                this.utilitiy.presentAlert("Please check your internet connection !");
                return Observable.throw(Error);
            }
        } else {
            this.utilitiy.presentAlert("Please check your internet connection !");
            return Observable.throw(Error);
        }
    }

    public post(url, params?: any, options: any = {}) {
        let responseData = this.http.post(url, params, {})
            .then(resp => options.responseType == 'text' ? resp.data : JSON.parse(resp.data));

        return Observable.fromPromise(responseData);
    }

    public commonService(initialHttpParams = initialParams): Observable<{}> {
        if (this.network.type !== ('none' || 'unknown')) {

            if (this.isNetworkConnected) {
                let baseURL: string;
                let DeavorURL: string;
                if (initialHttpParams.searchFlag) {
                    baseURL = this.searchURL;
                } else if (initialHttpParams.notification) {
                    baseURL = this.notificationURL;
                } else if (initialHttpParams.associate) {
                    baseURL = this.associateURL;
                } else if (initialHttpParams.dashboard) {
                    baseURL = environment.dashboardURL;
                } else if (initialHttpParams.announcement) {
                    baseURL = environment.announcementURL;
                } else if (initialHttpParams.miscellaneous) {
                    baseURL = environment.miscellaneousUrl;
                } else if (initialHttpParams.chatBot) {
                    baseURL = environment.chatBotUrl;
                } else if (initialHttpParams.chatBotSuggestionList || initialHttpParams.weather || initialHttpParams.userBankDetails || initialHttpParams.suggestionListFromServer || initialHttpParams.apiUrl) {
                    baseURL = '';
                } else if (initialHttpParams.payrollQuery || initialHttpParams.timesheet || initialHttpParams.empContactList) {
                    baseURL = '';
                } else if (initialHttpParams.chatBotFeedback) {
                    baseURL = environment.chatBotFeedbackUrl;
                } else if (initialHttpParams.onboarding) {
                    baseURL = environment.onBoardingUrl;
                } else if (initialHttpParams.ijp) {
                    baseURL = environment.ijpUrl;
                } else if (initialHttpParams.zenDeavorURL) {
                    baseURL = environment.zenDeavorURL;
                } else if (initialHttpParams.registration) {
                    baseURL = environment.ijpUrl;
                }
                else if (initialHttpParams.home) {
                    baseURL = environment.home
                } else if (initialHttpParams.isZenlounge) {
                    baseURL = environment.zenloungeBaseUrl
                } else if (initialHttpParams.zenLearn) {
                    baseURL = this.zenLearnUrl
                } else if (initialHttpParams.zenRich) {
                    baseURL = environment.zenRichBaseUrl
                } else if (initialHttpParams.chatBotInfoList) {
                    baseURL = environment.chatBotInfoList
                } else if (initialHttpParams.zenExit) {
                    baseURL = environment.zenExitBaseUrl;
                } else if (initialHttpParams.chatBotSugessionUrl) {
                    baseURL = environment.chatBotSugessionUrl;
                } else if (initialHttpParams.financeURL) {
                    baseURL = environment.financeURL;
                } else if (initialHttpParams.sfModuleURL) {
                    baseURL = environment.sfModuleURL;
                }
                  else if (initialHttpParams.isZenAdmin) {
                    baseURL = environment.zenAdminURL;
                  }
                else {
                    baseURL = this.baseURL;
                }

                this.http.setDataSerializer('json');

                return this.getToken().flatMap((loginDetails: any) => {



                    let headers;

                    if (initialHttpParams.ijp) {

                        headers = {
                            'srfHandsakeToken': Constants.IJP_HANDSHAKE_TOKEEN,
                            'X_Requested_With': 'com.zensar.zenhelp',
                            //'encryptedToken': loginDetails.details.encryptedToken.toString()
                            'encryptedToken': loginDetails.toString()
                        }

                    } else if (initialHttpParams.registration) {
                        headers = {
                            "X_Requested_With": "com.zensar.zenhelp",
                            "handshakeToken": "03$resulanretxe9102",
                            "Content-Type": "application/json",
                        }
                    } else if (initialHttpParams.isZenlounge) {
                        headers = {
                            "X_Requested_With": "com.zensar.zenlounge",
                            "handshakeToken": "4C6Iu3WrQs",
                            "Content-Type": "application/x-www-form-urlencoded",
                        }
                    } else if (initialHttpParams.timesheet) {
                        headers = {
                            "access-allowed": "N",
                            "customToken": loginDetails.toString(),
                            "Content-Type": "application/json"
                        }
                    }
                    else if (initialHttpParams.isZenAdmin) {
                        headers = {
                            'x-requested-with': 'com.zensar.zenadmin',
                            "encryptedToken": loginDetails.toString(),
                            "Content-Type": "application/json"
                        }
                    }
                    else {

                        headers = {
                            'X_Requested_With': 'com.zensar.zenhelp',
                            //'encryptedToken': loginDetails.details.encryptedToken.toString()
                            'encryptedToken': loginDetails.toString()
                        }
                    }

                    if (initialHttpParams.isZenlounge) {
                        return Observable.fromPromise<any>(
                            this.http
                                .get(baseURL + initialHttpParams.url + '?start=' + initialHttpParams.data.start.toString() + '&end=' + initialHttpParams.data.end.toString(), initialHttpParams.data, headers)
                                .then((res) => this.extractData(res))
                                .catch(error => {

                                    return this.handleError(error);
                                })
                        )
                    } else {
                        return Observable.fromPromise<any>(
                            this.http
                                .post(baseURL + initialHttpParams.url, initialHttpParams.data, headers)
                                .then((res) => this.extractData(res))
                                .catch(error => {

                                    return this.handleError(error);
                                })
                        )
                    }
                });
            } else {
                // this.events.publish('hide-loader')
                // this.utilitiy.presentAlert("Please check your internet connection !");
                // throw new Error("Please check your internet connection !")
                return this.handleError(new Error("Please check your internet connection !"))
            }
        } else {
            // this.events.publish('hide-loader')
            // this.utilitiy.presentAlert("Please check your internet connection !");
            // throw new Error("Please check your internet connection !")
            return this.handleError(new Error("Please check your internet connection !"))
        }
    }

    public multimediaService(initialHttpParams = initialParams): Observable<{}> {

        //this.http.setDataSerializer('urlencoded');      


        return this.getToken().flatMap((loginDetails: any) => {

            let headers = {
                'X_Requested_With': 'com.zensar.zenhelp',
                //'encryptedToken': loginDetails.details.encryptedToken.toString()
                'encryptedToken': loginDetails.toString()
            };

            return Observable.fromPromise<any>(
                this.http.post(this.baseURL + initialHttpParams.url, initialHttpParams.fd, headers).then(result => {

                    return JSON.parse(result.data);

                }).catch(error => {

                })
            )
        });

    }

    private getToken(): Observable<string> {
        // return Observable.fromPromise(
        //     this.dataService.getData('loginDetails').then((result: any) => {
        //         return result
        //     })
        // )

        return Observable.fromPromise(
            this.dataService.getData("encryptedToken").then((result: any) => {
                return result;
                // return "d5c821e07fe3aeaba5de2c83c73da49f52de522cd5048199"
            })
        );
    }

    private getData(url: string): Observable<{}> {
        return Observable.fromPromise(
            this.http.get(url, {}, {}).then(result => {
                return JSON.parse(result.data);
            }).catch(error => {
                //this.handleError(error);

            })
        )
    }

    getWeatherData(url: string): Observable<{}> {
        if (this.network.type !== ('none' || 'unknown')) {


            return Observable.fromPromise(
                this.http.get(url, {}, {}).then(result => {
                    return JSON.parse(result.data);
                }).catch(error => {
                    //this.handleError(error);

                })
            )
        } else {
            this.utilitiy.presentAlert("Please check your internet connection !");
            return Observable.throw(Error);
        }
    }


    public ZenloungeService(data): Observable<{}> {
        return

        // let commonHeader = new HttpHeaders()
        //   .set("X-Requested-With", "com.zensar.zenlounge")
        //   .set("handshakeToken", "4C6Iu3WrQs")
        //   .set('Content-Type', 'application/json');

        // let params = new URLSearchParams();
        // params.set('start', '-1');
        // params.set('end', '-1')

        // return this.http.post(environment.zenloungeBaseUrl + data.url + '?' + params.toString(), {
        //   headers: commonHeader
        // }).pipe(
        //   map(res => this.extractDataForTS(res)),
        //   catchError(res => this.handleErrorForTS(res))
        // );


    }

    getZensarWebsiteData(url: string): Observable<{}> {
        return Observable.fromPromise(
            this.http.get(url, {}, {}).then(result => {
                return JSON.parse(result.data);
            }).catch(error => {
                //this.handleError(error);

            })
        )
    }

    public OBChangePassword(changePasswordData): Observable<{}> {
        if (this.network.type !== ('none' || 'unknown')) {


            var url = this.changePasswordUrl;

            return this.getToken().flatMap((loginDetails: any) => {

                let headers = {
                    'X_Requested_With': 'com.zensar.zenhelp',
                    //'encryptedToken': loginDetails.details.encryptedToken.toString(),
                    'encryptedToken': loginDetails.toString(),
                    'oldPassword': changePasswordData.oldPssword,
                    'newPassword': changePasswordData.newPassword
                };

                return Observable.fromPromise(
                    this.http.post(url, {}, headers).then(result => {
                        return JSON.parse(result.data);
                    }).catch(error => {

                    })
                )
            })
        } else {
            this.utilitiy.presentAlert("Please check your internet connection !");
            return Observable.throw(Error);
        }
    }

    // *************==================ZenTS==========================*********************
    public authenticateZenTS(url, user): Observable<any> {

        this.http.setDataSerializer('json');

        let headers = {
            'Content-Type': 'application/json'
        }
        return Observable.fromPromise(
            this.http.post(this.zentsLoginBaseUrl + url, user, headers).then((result) => {
                let responseData = JSON.parse(result.data);
                return responseData;
            })
                .catch(error => {
                    this.utilitiy.presentAlert(error);
                    return this.handleErrorForTS(error);
                })
        )
    }

    public zentsCommonService(initialHttpParams = initialParamsForTimesheet): Observable<{}> {
        let showErrorAlert: boolean = initialHttpParams.timesheet ? false : true;
        if (this.network.type !== ('none' || 'unknown')) {
            let baseURL: string;
            if (initialHttpParams.timeentry) {
                baseURL = this.timeentryBaseUrl;
            } else if (initialHttpParams.zentsPal) {
                baseURL = this.zenTsPalBaseUrl;
            } else if (initialHttpParams.overtime) {
                baseURL = this.overtimeBaseUrl;
            } else if (initialHttpParams.addTask) {
                baseURL = this.addTaskBaseURL;
            } else if (initialHttpParams.dashboard) {
                baseURL = this.dashboardBaseURL;
            } else if (initialHttpParams.addOn) {
                baseURL = this.addOnBaseUrl;
            } else if (initialHttpParams.timesheet) {
                baseURL = "";
            } else if (initialHttpParams.zenTsReport) {
                baseURL = environment.zenTsReport

            }





            this.http.setDataSerializer('json');

            // return this.getTokenForZenTS().flatMap(value => {
            return this.getToken().flatMap((loginDetails: any) => {
                return this.getAccessAllowedValue().flatMap(accessValue => {
                    let headers = {
                        'Content-Type': 'application/json',
                        'customToken': loginDetails.toString(),
                        // 'customToken': 'afade1f02f86a7503b14da414059cb7513fa695690ad5ed7ff4dfdee14c920e4672f10b0289a26add04b553e2acfdb9b',
                        'access-allowed': accessValue
                    }
                    return Observable.fromPromise<any>(
                        this.http.post(baseURL + initialHttpParams.url, initialHttpParams.data, headers).then((result) => {
                            let responseData = JSON.parse(result.data);

                            return responseData;
                        })
                            .catch(error => {

                                throw this.handleErrorForTS(error, showErrorAlert);
                            })
                    )
                });
            });
        } else {
            this.hideLoaderOnNoInternet();
        }

    }

    hideLoaderOnNoInternet() {
        this.utilitiy.updateLoader(false);
        this.utilitiy.presentAlert("Please check your internet connection !");
        throw new Error("Please check your internet connection !")
    }
    // Error handling 
    handleErrorForTS(errorObj: any, showErrorAlert = true) {
        // console.log('HandleerrorForTSObj: ', errorObj);
        //;
        //alert(JSON.stringify(errorObj));
        //logout on password change
        // if (errorObj.status == 401) {
        //     this.data.clearData();
        //     this.navCtrl.navigateRoot(['/login']);
        // }
        let errorParsedData = JSON.parse(errorObj.error);
        let errorMsg = errorParsedData.error.errorMessage;

        if (errorObj.status == 401) {
            this.utilitiy.presentAlert(errorObj.statusText).then(success => {
                this.dataService.clearData();
                this.utilitiy.goToPage("LoginPage");
            });
            return errorObj.statusText;
        }
        if (showErrorAlert || errorObj.status == 500) {
            setTimeout(() => {
                this.utilitiy.presentAlert(errorMsg ? errorMsg : Constants.Server_Error_Message).then(() => {
                    this.utilitiy.updateLoader(false);
                });
            }, 1000);
        }
        if (errorObj.status == 400) {
            this.utilitiy.updateLoader(false);
            this.utilitiy.presentAlert(errorMsg);
        }
        //errorMsg ? this.utility.presentAlert("Alert", errorMsg) : this.utility.presentErrorModal(Constants.Server_Error_Message);
        return errorMsg || Constants.Server_Error_Message;
    }

    private getTokenForZenTS(): Observable<string> {
        return Observable.fromPromise(
            this.dataService.getData('loginDetails').then((result: any) => {
                return result.encryptedToken;
            })
        )
    }

    private getAccessAllowedValue(): Observable<string> {
        return Observable.fromPromise(
            this.dataService.getData('access-allowed').then((value: any) => {
                return value;
            })
        )
    }

    public zentsCommonGETService(initialHttpParams = initialParamsForTimesheet): Observable<{}> {

        let baseURL: string;
        if (initialHttpParams.overtime) {
            baseURL = this.overtimeBaseUrl;
        } else if (initialHttpParams.addOn) {
            baseURL = this.addOnBaseUrl;
        }

        this.http.setDataSerializer('json');

        // return this.getTokenForZenTS().flatMap(value => {
        return this.getToken().flatMap((loginDetails: any) => {
            return this.getAccessAllowedValue().flatMap(accessValue => {
                let headers = {
                    'Content-Type': 'application/json',
                    // 'customToken': value.toString(),
                    //'customToken': loginDetails.details.encryptedToken.toString(),
                    'customToken': loginDetails.toString(),
                    'access-allowed': accessValue
                }
                return Observable.fromPromise<any>(
                    this.http.get(baseURL + initialHttpParams.url, {}, headers).then((result) => {
                        let responseData = JSON.parse(result.data);
                        return responseData;
                    }).catch(error => {
                        return this.handleErrorForTS(error);
                    })
                )
            });
        });

    }

    public getRegistrationServiceData(initialHttpParams = initialParams): Observable<{}> {

        this.http.setDataSerializer('json');

        let baseURL: string;
        if (initialHttpParams.registration) {
            baseURL = environment.ijpUrl;
        } else {
            baseURL = this.baseURL;
        }
        let headers;

        headers = {
            'Content-Type': 'application/json',
            'X_Requested_With': 'com.zensar.zenhelp',
            'handshakeToken': '03$resulanretxe9102'
        }

        return Observable.fromPromise<any>(
            this.http.post(baseURL + initialHttpParams.url, initialHttpParams.data, headers)
                .then((res) => this.extractData(res))
                .catch(error => {
                    return this.handleError(error);
                })
        )

    }

    public zenwenCommonGETService(initialHttpParams = initialParamsForZenwen): Observable<{}> {

        let baseURL: string;
        if (initialHttpParams.events) {
            baseURL = this.eventBaseUrl;
        } else if (initialHttpParams.headermenu) {
            baseURL = this.headerMenuBaseUrl;
        } else if (initialHttpParams.media) {
            baseURL = this.mediaServices;
        } else if (initialHttpParams.user) {
            baseURL = this.userBaseUrl;
        }

        this.http.setDataSerializer('json');

        return this.getZenwenLoginDetails().flatMap((loginDetails: any) => {
            let headers = {
                'userId': loginDetails.userId.toString(),
                'accessToken': loginDetails.accessToken.toString(),
                'X-Requested-With': 'com.zensar.zenwen'
            }
            return Observable.fromPromise<any>(
                this.http.get(baseURL + initialHttpParams.url, initialHttpParams.params, headers).then((result) => {
                    let responseData = JSON.parse(result.data);
                    return responseData;
                }).catch(error => {
                    return this.handleErrorForZenWEN(error);
                })
            )
        });

    }

    public ZenWENauthService(url, user): Observable<any> {
        if (this.network.type !== ('none' || 'unknown')) {
            if (this.isNetworkConnected) {
                var headers;

                let encodedPassword = encodeURI(user.password.toString());
                let newpassword = encodedPassword.replace("+", "%2B");
                headers = {
                    'X_Requested_With': 'com.zensar.zenwen',
                    'userName': user.username.toString(),
                    'password': newpassword,
                    'source': 'ZenWen'
                };
                this.http.setDataSerializer('json');

                return Observable.fromPromise(
                    this.http.post(this.zenWENUrl + url, user, headers).then((res) => this.extractData(res))
                        .catch(error => {

                            return this.handleError(error);
                        })
                )
            } else {
                this.utilitiy.presentAlert("Please check your internet connection !");
                return Observable.throw(Error);
            }
        } else {
            this.utilitiy.presentAlert("Please check your internet connection !");
            return Observable.throw(Error);
        }
    }

    private getZenwenLoginDetails(): Observable<string> {
        return Observable.fromPromise(
            this.dataService.getData('zenwenLoginDetails').then((result: any) => {
                return result;
            })
        )
    }

    public zenwenCommonPostService(initialHttpParams = initialParamsForZenwen): Observable<{}> {
        if (this.network.type !== ('none' || 'unknown')) {
            let baseURL: string;
            if (initialHttpParams.events) {
                baseURL = this.eventBaseUrl;
            } else if (initialHttpParams.zenEvents) {
                baseURL = this.zenEventBaseUrl;
            } else if (initialHttpParams.collaboration) {
                baseURL = this.collaborationServiceUrl
            } else if (initialHttpParams.zenCollaboration) {
                baseURL = this.zenCollaborationServiceUrl
            } else if (initialHttpParams.media) {
                baseURL = this.mediaServices;
            } else if (initialHttpParams.zenMedia) {
                baseURL = this.zenMediaServicesUrl;
            }

            return this.getZenwenLoginDetails().flatMap((loginDetails: any) => {
                let headers: any;

                if (initialHttpParams.zenEvents || initialHttpParams.zenCollaboration || initialHttpParams.zenMedia) {
                    this.http.setDataSerializer('urlencoded');
                    headers = {
                        'userId': loginDetails.userId.toString(),
                        'accessToken': loginDetails.accessToken.toString(),
                        'X-Requested-With': 'com.zensar.zenwen',
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                } else {
                    this.http.setDataSerializer('json');
                    headers = {
                        'userId': loginDetails.userId.toString(),
                        'accessToken': loginDetails.accessToken.toString(),
                        'X-Requested-With': 'com.zensar.zenwen'
                    }
                }
                if (initialHttpParams.zenEvents || initialHttpParams.zenCollaboration || initialHttpParams.zenMedia) {
                    return Observable.fromPromise<any>(
                        this.http.post(baseURL + initialHttpParams.url, initialHttpParams.params, headers).then((result) => {
                            let responseData = JSON.parse(result.data);
                            return responseData;
                        })
                            .catch(error => {

                                return this.handleErrorForZenWEN(error);
                            })
                    )
                } else {
                    return Observable.fromPromise<any>(
                        this.http.post(baseURL + initialHttpParams.url, initialHttpParams.data, headers).then((result) => {
                            let responseData = JSON.parse(result.data);
                            return responseData;
                        })
                            .catch(error => {

                                return this.handleErrorForZenWEN(error);
                            })
                    )
                }
            });
        } else {
            this.hideLoaderOnNoInternet();
        }

    }


    handleErrorForZenWEN(errorObj: any, showErrorAlert = true) {


        if (errorObj.status == 401) {
            this.utilitiy.presentAlert("Unauthorized access").then(success => {
                this.dataService.clearData();
                this.utilitiy.goToPage("LoginPage");
            });
            return errorObj.statusText;
        }
        if (showErrorAlert || errorObj.status == 500) {
            setTimeout(() => {
                this.utilitiy.presentAlert(Constants.Server_Error_Message).then(() => {
                    this.utilitiy.updateLoader(false);
                });
            }, 1000);
        }
        //errorMsg ? this.utility.presentAlert("Alert", errorMsg) : this.utility.presentErrorModal(Constants.Server_Error_Message);
        return Constants.Server_Error_Message;
    }
}