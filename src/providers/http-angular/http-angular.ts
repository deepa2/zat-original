import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { map, catchError } from "rxjs/operators";
import { Data } from "../data/data";
import "rxjs/add/observable/fromPromise";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import { User } from "../../models/auth.model";
import * as environment from "@app/env";
import { CommonUtilities } from "../../providers/commonUtilities/commonUtilities";
import { InjectorInstance } from "../../app/app.module";
import { initialParams, initialParamsForTimesheet, initialParamsForZenwen } from "../../models/httpProvider.model";
import { Constants } from "@app/constants";
import { Network } from '@ionic-native/network';
import { MoveToPageService } from "../../container/chat-bot-new/chat-bot-new-services/moveToPage.service";

@Injectable()
export class HttpAngularProvider
{

  private authBaseURL = environment.authBaseURL;
  public baseURL = environment.servicesURL;
  private searchURL = environment.searchURL;
  private notificationURL = environment.notificationURL;
  private associateURL = environment.associateSelfService;
  private loginURL = this.authBaseURL + "login";
  private tsBackdoorLoginURL = this.authBaseURL + "backDoorLogin";
  private logoutURL = this.authBaseURL + "logout";
  private onBoardingUrls = environment.onBoardingUrl;
  private changePasswordUrl = this.onBoardingUrls + "changePassword";
  public DeavorURL = environment.zenDeavorURL;
  public zenLearnUrl = environment.zenLearnBaseURL;

  //ZenTS
  private zentsLoginBaseUrl = environment.loginBaseUrl;
  private timeentryBaseUrl = environment.timeentryBaseUrl;
  private zenTsPalBaseUrl = environment.zenTsPalBaseUrl;
  private overtimeBaseUrl = environment.overtimeBaseUrl;
  private addTaskBaseURL = environment.addTaskBaseUrl;
  private dashboardBaseURL = environment.dashboardBaseUrl;
  private addOnBaseUrl = environment.addOnBaseUrl;

  //ZenWEN
  private zenWENUrl = environment.zenwenUrl;
  private eventBaseUrl = environment.eventBaseUrl;
  private zenEventBaseUrl = environment.zenEventBaseUrl;
  private headerMenuBaseUrl = environment.headerMenuBaseUrl;
  private mediaServices = environment.mediaServices;
  private zenMediaServicesUrl = environment.zenMediaServices;
  private collaborationServiceUrl = environment.collaborationServiceUrl;
  private zenCollaborationServiceUrl = environment.zenCollaborationServiceUrl;
  private userBaseUrl = environment.userBaseUrl;

  // Zenrich
  // private zenrichUrl = 
  public http: HttpClient;
  public utility: CommonUtilities;
  public dataService: Data;
  private network: Network;
  private moveToPageService: MoveToPageService;

  constructor()
  {
    this.http = InjectorInstance.get<HttpClient>(HttpClient);
    this.dataService = InjectorInstance.get<Data>(Data);
    this.utility = InjectorInstance.get<CommonUtilities>(CommonUtilities);
    this.moveToPageService = InjectorInstance.get<MoveToPageService>(MoveToPageService)

  };

  public extractData(res: Response | any)
  {

    let body: any = res;
    let statusCode;

    if (res && res.status)
    {
      statusCode = body.status.statusCode;
    }

    if (statusCode == -1)
    {
      let errMsg = body.status.statusMessage;

      this.utility.presentAlert(errMsg).then(success =>
      {
        this.dataService.clearData();
        this.utility.goToPage("LoginPage");
      });

      return res;

    } else if (statusCode == -2)
    {

      //this.utility.presentAlert(Constants.Server_Error_Message);
      throw Observable.throw(Constants.Server_Error_Message);

    } else if (statusCode == -4)
    {
      let errMsg = body.status.statusMessage;
      this.utility.presentAlert(errMsg);

    } else if (statusCode == -6 || statusCode == -7)
    {
      let errMsg = body.status.statusMessage;
      this.utility.presentAlert(errMsg)
      return body;

    } else if (statusCode == 0)
    {
      let errMsg = body.status.statusMessage;

      this.utility.presentAlert(errMsg).then(success =>
      {
        // this.dataService.clearData();
        //this.utility.goToPage("LoginPage");
      });
      // this.utility.showAppDownMsg();

      return res;
    } else if (statusCode == -5)
    {
      let errMsg = body.status.statusMessage;
      if (!this.utility.isEmptyOrNullOrUndefined(body) || !this.utility.isEmptyOrNullOrUndefined(body.status) || !this.utility.isEmptyOrNullOrUndefined(body.status.statusMessage))
      {
        // throw Observable.throw(errMsg)
        return body
      } else
      {
        throw Observable.throw(Constants.Server_Error_Message);
      }

    } else
    {
      return res;
    }
  }

  private handleError(error: HttpErrorResponse)
  {
    if (error.error instanceof ErrorEvent)
    {
      // A client-side or network error occurred. Handle it accordingly.
      // console.error('An error occurred:', error.error.message);
    } else
    {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,


      this.utility.presentAlert(Constants.Server_Error_Message)
    }

    // return an observable with a user-facing error message
    return Observable.throw(Constants.Server_Error_Message);
  };

  public authenticate(user, type): Observable<User>
  {
    var url, headers;
    let encodedPassword = encodeURI(user.password);
    let updatedPassword = encodedPassword.replace(/\+/g, '%2B');

    if (type == "login")
    {
      url = this.loginURL;

      headers = new HttpHeaders()
        .set("X_Requested_With", "com.zensar.zenhelp")
        .set('Content-Type', 'application/json;charset=utf-8')
        .set("userName", user.username)
        .set("password", updatedPassword)

    } else if (type == "tsBackdoorLogin")
    {
      url = this.tsBackdoorLoginURL;

      headers = new HttpHeaders()
        .set("X_Requested_With", "com.zensar.zenhelp")
        .set("loginId", user.username)
    } else if (type == "logout")
    {
      url = this.logoutURL;

      headers = new HttpHeaders()
        .set("X_Requested_With", "com.zensar.zenhelp")
        .set("encryptedToken", user.details.encryptedToken);
    }

    return this.http.post(url, {}, { headers }).pipe(
      map(res => this.extractData(res)),
      catchError(res => this.handleError(res))
    );
  }

  public commonService(initialHttpParams = initialParams): Observable<{}>
  {
    let baseURL: string;

    if (initialHttpParams.searchFlag)
    {
      baseURL = this.searchURL;
    } else if (initialHttpParams.notification)
    {
      baseURL = this.notificationURL;
    } else if (initialHttpParams.associate)
    {
      baseURL = this.associateURL;
    } else if (initialHttpParams.dashboard)
    {
      baseURL = environment.dashboardURL;
    } else if (initialHttpParams.announcement)
    {
      baseURL = environment.announcementURL;
    } else if (initialHttpParams.miscellaneous)
    {
      baseURL = environment.miscellaneousUrl;
    } else if (initialHttpParams.chatBot)
    {
      baseURL = environment.chatBotUrl;
    } else if (initialHttpParams.chatBotSuggestionList || initialHttpParams.weather || initialHttpParams.userBankDetails || initialHttpParams.suggestionListFromServer || initialHttpParams.apiUrl)
    {
      baseURL = '';
    } else if (initialHttpParams.payrollQuery || initialHttpParams.timesheet || initialHttpParams.empContactList)
    {
      baseURL = '';
    } else if (initialHttpParams.chatBotFeedback)
    {
      baseURL = environment.chatBotFeedbackUrl;
    } else if (initialHttpParams.onboarding)
    {
      baseURL = environment.onBoardingUrl;
    } else if (initialHttpParams.ijp)
    {
      baseURL = environment.ijpUrl;
    } else if (initialHttpParams.zenDeavorURL)
    {
      baseURL = environment.zenDeavorURL;
    } else if (initialHttpParams.registration)
    {
      baseURL = environment.ijpUrl;
    } else if (initialHttpParams.home)
    {
      baseURL = environment.home
    } else if (initialHttpParams.isZenlounge)
    {
      baseURL = environment.zenloungeBaseUrl
    } else if (initialHttpParams.zenLearn)
    {
      baseURL = this.zenLearnUrl
    } else if (initialHttpParams.zenRich)
    {
      baseURL = environment.zenRichBaseUrl
    } else if (initialHttpParams.chatBotInfoList)
    {
      baseURL = environment.chatBotInfoList
    } else if (initialHttpParams.zenExit)
    {
      baseURL = environment.zenExitBaseUrl;
    } else if (initialHttpParams.chatBotSugessionUrl)
    {
      baseURL = environment.chatBotSugessionUrl;
    } else if (initialHttpParams.financeURL)
    {
      baseURL = environment.financeURL;
    } else if (initialHttpParams.sfModuleURL)
    {
      baseURL = environment.sfModuleURL;
    }
    else if (initialHttpParams.isZenAdmin)
    {
      baseURL = environment.zenAdminURL
    }
    else
    {
      baseURL = this.baseURL;
    }

    return this.getToken().flatMap((loginDetails: any) =>
    {

      let commonHeader;

      if (initialHttpParams.ijp)
      {
        commonHeader = new HttpHeaders()
          .set("srfHandsakeToken", Constants.IJP_HANDSHAKE_TOKEEN)
          .set("X_Requested_With", "com.zensar.zenhelp")
          // .set("encryptedToken", loginDetails.details.encryptedToken.toString())
          .set("encryptedToken", loginDetails.toString())
          .set("Content-Type", "application/json");
      } else if (initialHttpParams.registration)
      {
        commonHeader = new HttpHeaders()
          .set("X_Requested_With", "com.zensar.zenhelp")
          .set("handshakeToken", "03$resulanretxe9102")
          .set("Content-Type", "application/json");
      } else if (initialHttpParams.isZenlounge)
      {
        commonHeader = new HttpHeaders()
          .set("X-Requested-With", "com.zensar.zenlounge")
          .set("handshakeToken", "4C6Iu3WrQs")
          .set('Content-Type', 'application/x-www-form-urlencoded');
      } else if (initialHttpParams.timesheet)
      {
        commonHeader = new HttpHeaders()
          .set("access-allowed", "N")
          .set("customToken", loginDetails.toString())
          .set('Content-Type', 'application/json');
      }
      else if (initialHttpParams.isZenAdmin)
      {
        commonHeader = new HttpHeaders()
          .set("X-Requested-With", "com.zensar.zenadmin")
          .set("encryptedToken", loginDetails.toString())
          .set("Content-Type", "application/json");
      }
      else
      {
        commonHeader = new HttpHeaders()
          .set("X_Requested_With", "com.zensar.zenhelp")
          //.set("encryptedToken", loginDetails.details.encryptedToken.toString())
          .set("encryptedToken", loginDetails.toString())
          .set("Content-Type", "application/json");
      }

      if (initialHttpParams.zenExit && initialHttpParams.data.email)
      {
        return this.http.post(baseURL + initialHttpParams.url, initialHttpParams.data.uploadFile, { headers: commonHeader, params: initialHttpParams.data }).pipe(
          map(res => this.extractData(res)),
          catchError(res => this.handleError(res))
        );
      } else if (!initialHttpParams.isZenlounge)
      {
        return this.http.post(baseURL + initialHttpParams.url, initialHttpParams.data, { headers: commonHeader }).pipe(
          map(res => this.extractData(res)),
          catchError(res => this.handleError(res))
        );
      } else
      {
        //  let params = new urlsearch()
        //  params.append('start','0');
        //  params.append('end','10');

        return this.http
          .get(baseURL + initialHttpParams.url + '?start=' + initialHttpParams.data.start.toString() + '&end=' + initialHttpParams.data.end.toString(), {
            headers: commonHeader,
            params: initialHttpParams.params
          }).pipe(
            map(res => this.extractData(res)),
            catchError(res => this.handleError(res))
          );
      }

    });
  }

  public multimediaService(initialHttpParams = initialParams): Observable<{}>
  {
    let baseURL: string;

    if (initialHttpParams.searchFlag)
    {
      baseURL = this.searchURL;
    } else if (initialHttpParams.notification)
    {
      baseURL = this.notificationURL;
    } else if (initialHttpParams.associate)
    {
      baseURL = this.associateURL;
    } else if (initialHttpParams.dashboard)
    {
      baseURL = environment.dashboardURL;
    } else if (initialHttpParams.announcement)
    {
      baseURL = environment.announcementURL;
    } else if (initialHttpParams.onboarding)
    {
      baseURL = environment.onBoardingUrl;
    } else if (initialHttpParams.chatBotFeedback)
    {
      baseURL = environment.chatBotFeedbackUrl;
    } else if (initialHttpParams.ijp)
    {
      baseURL = environment.ijpUrl;
    } else if (initialHttpParams.zenDeavorURL)
    {
      baseURL = environment.zenDeavorURL;
    } else if (initialHttpParams.zenRich)
    {
      baseURL = environment.zenRichBaseUrl
    } else if (initialHttpParams.zenExit)
    {
      baseURL = environment.zenExitBaseUrl;
    }
    else if (initialHttpParams.isZenAdmin)
    {
      baseURL = environment.zenAdminURL
    }
    else
    {
      baseURL = this.baseURL;
    }

    return this.getToken().flatMap((loginDetails: any) =>
    {
      let commonHeader;
      if (initialHttpParams.isZenAdmin)
      {
        commonHeader = new HttpHeaders()
          .set("X-Requested-With", "com.zensar.zenadmin")
          .set("encryptedToken", loginDetails.toString())
        // .set("Content-Type", "application/json");
      } else
      {
        commonHeader = new HttpHeaders()
          .set("X_Requested_With", "com.zensar.zenhelp")
          //.set("encryptedToken", loginDetails.details.encryptedToken.toString());
          .set("encryptedToken", loginDetails.toString())
      }


      return this.http.post(baseURL + initialHttpParams.url, initialHttpParams.data, { headers: commonHeader, params: initialHttpParams.params }).pipe(
        map(res => this.extractData(res)),
        catchError(res => this.handleError(res))
      );
    });
  }

  private getToken(): Observable<string>
  {
    return Observable.fromPromise(
      this.dataService.getData("encryptedToken").then((result: any) =>
      {
        return result;
      })
    );
  }

  getData(url: string): Observable<{}>
  {
    return this.http.get(url).pipe(
      map(res => this.extractData(res)),
      catchError(res => this.handleError(res))
    );
  }

  getWeatherData(url: string): Observable<{}>
  {
    return this.http.get(url).pipe(
      map(res => res),
      catchError(res => this.handleError(res))
    );
  }

  getZensarWebsiteData(url: string): Observable<{}>
  {
    return this.http.get(url).pipe(
      map(res => res),
      catchError(res => this.handleError(res))
    );
  }

  public OBChangePassword(changePasswordData): Observable<{ passwordStatus }>
  {

    var url = this.changePasswordUrl;
    return this.getToken().flatMap((loginDetails: any) =>
    {
      let commonHeader = new HttpHeaders()
        .set("X_Requested_With", "com.zensar.zenhelp")
        //.set("encryptedToken", loginDetails.details.encryptedToken.toString())
        .set("encryptedToken", loginDetails.toString())
        .set("oldPassword", changePasswordData.oldPssword)
        .set("newPassword", changePasswordData.newPassword)

      return this.http.post(url, {}, { headers: commonHeader }).pipe(
        map(res => this.extractData(res)),
        catchError(res => this.handleError(res))
      )
    });
  }

  // *************==================ZenTS==========================*********************
  public authenticateZenTS(url, user): Observable<User>
  {
    var headers;

    headers = new HttpHeaders()
      .set("Content-Type", "application/json")

    return this.http.post(this.zentsLoginBaseUrl + url, user, { headers: headers }).pipe(
      map(res => this.extractDataForTS(res)),
      catchError(res => this.handleErrorForTS(res))
    );
  }

  public zentsCommonService(initialHttpParams = initialParamsForTimesheet): Observable<{}>
  {
    let baseURL: string;

    if (initialHttpParams.timeentry)
    {
      baseURL = this.timeentryBaseUrl;
    } else if (initialHttpParams.zentsPal)
    {
      baseURL = this.zenTsPalBaseUrl;
    } else if (initialHttpParams.overtime)
    {
      baseURL = this.overtimeBaseUrl;
    } else if (initialHttpParams.addTask)
    {
      baseURL = this.addTaskBaseURL;
    } else if (initialHttpParams.dashboard)
    {
      baseURL = this.dashboardBaseURL;
    } else if (initialHttpParams.addOn)
    {
      baseURL = this.addOnBaseUrl;
    } else if (initialHttpParams.timesheet)
    {
      baseURL = "";
    } else if (initialHttpParams.zenTsReport)
    {
      baseURL = environment.zenTsReport
    }

    // return this.getTokenForZenTS().flatMap(value => {
    return this.getToken().flatMap((loginDetails: any) =>
    {
      return this.getAccessAllowedValue().flatMap(accessValue =>
      {
        let commonHeader = new HttpHeaders()
          .set("Content-Type", "application/json")
          // .set("customToken", value.toString())
          // comment out below
          // .set("customToken", 'afade1f02f86a7503b14da414059cb7513fa695690ad5ed7ff4dfdee14c920e4672f10b0289a26add04b553e2acfdb9b')
          .set("customToken", loginDetails.toString())
          .set("access-allowed", accessValue);

        return this.http.post(baseURL + initialHttpParams.url, initialHttpParams.data, { headers: commonHeader }).pipe(
          map(res => this.extractDataForTS(res)),
          catchError(res => { throw this.handleErrorForTS(res, initialHttpParams) })
        );
      });
    });
  }

  public extractDataForTS(res: Response | any)
  {
    if (res)
    {
      this.moveToPageService._showLoader(false);
      return res;
    }
  }

  /**
   * 
   * @param error Error handling for TS 
   */
  public handleErrorForTS(error: HttpErrorResponse, initialHttpParams = initialParamsForTimesheet)
  {

    let errorMsg = '';
    if (error && error.error && error.error.error)
      errorMsg = error.error.error.errorMessage;

    if (error.status == 401 && initialHttpParams.timeentry)
    {
      this.utility.presentAlert(errorMsg).then(success =>
      {
        this.dataService.clearData();
        this.utility.goToPage("LoginPage");
      });
      return error.statusText;
    }

    if (error.status == 401)
    {
      this.utility.presentAlert(error.statusText).then(success =>
      {
        this.dataService.clearData();
        this.utility.goToPage("LoginPage");
      });
      return error.statusText;
    } else if (error.status == 400)
    {
      this.utility.updateLoader(false);
      this.utility.presentAlert(errorMsg);
    }

    if (!initialHttpParams.timesheet || error.status == 500)
    {
      this.utility.updateLoader(false);
      setTimeout(() =>
      {
        this.utility.presentAlert(errorMsg ? errorMsg : Constants.Server_Error_Message)
      }, 1000);
    }
    //errorMsg ? this.utility.presentAlert("Alert", errorMsg) : this.utility.presentErrorModal(Constants.Server_Error_Message);
    return errorMsg || Constants.Server_Error_Message;
  }

  private getTokenForZenTS(): Observable<string>
  {
    return Observable.fromPromise(
      this.dataService.getData("loginDetails").then((result: any) =>
      {
        return result.encryptedToken;
      })
    );
  }

  private getAccessAllowedValue(): Observable<string>
  {
    return Observable.fromPromise(
      this.dataService.getData("access-allowed").then((value: any) =>
      {
        return value;
      })
    );
  }

  public zentsCommonGETService(initialHttpParams = initialParamsForTimesheet): Observable<{}>
  {
    let baseURL: string;

    if (initialHttpParams.overtime)
    {
      baseURL = this.overtimeBaseUrl;
    } else if (initialHttpParams.addOn)
    {
      baseURL = this.addOnBaseUrl;
    }

    // return this.getTokenForZenTS().flatMap(value => {
    return this.getToken().flatMap((loginDetails: any) =>
    {
      return this.getAccessAllowedValue().flatMap(accessValue =>
      {
        let commonHeader = new HttpHeaders()
          .set("Content-Type", "application/json")
          // .set("customToken", value.toString())
          //.set("customToken", loginDetails.details.encryptedToken.toString())
          .set("customToken", loginDetails.toString())
          .set("access-allowed", accessValue);

        return this.http.get(baseURL + initialHttpParams.url, { headers: commonHeader }).pipe(
          map(res => this.extractDataForTS(res)),
          catchError(res => this.handleErrorForTS(res))
        );
      });
    });
  }

  public getRegistrationServiceData(initialHttpParams = initialParams): Observable<{}>
  {

    let baseURL: string;

    if (initialHttpParams.registration)
    {
      baseURL = environment.ijpUrl;
    } else
    {
      baseURL = this.baseURL;
    }

    let commonHeader;

    commonHeader = new HttpHeaders()
      .set("X_Requested_With", "com.zensar.zenhelp")
      .set("handshakeToken", "03$resulanretxe9102")
      .set("Content-Type", "application/json");

    return this.http.post(baseURL + initialHttpParams.url, initialHttpParams.data, { headers: commonHeader }).pipe(
      map(res => this.extractData(res)),
      catchError(res => this.handleError(res))
    );
  }

  // public search(url,params,terms: Observable<string>):Observable<{}> {
  //   return terms.debounceTime(400)
  //     .distinctUntilChanged()
  //     .switchMap(term => this.zenwenCommonGETService({url,params}));
  // }

  public zenwenCommonGETService(initialHttpParams = initialParamsForZenwen): Observable<{}>
  {

    let baseURL: string;

    if (initialHttpParams.events)
    {
      baseURL = this.eventBaseUrl;
    } else if (initialHttpParams.headermenu)
    {
      baseURL = this.headerMenuBaseUrl;
    } else if (initialHttpParams.media)
    {
      baseURL = this.mediaServices;
    } else if (initialHttpParams.user)
    {
      baseURL = this.userBaseUrl;
    }

    return this.getZenwenLoginDetails().flatMap((loginDetails: any) =>
    {

      let commonHeader = new HttpHeaders()
        .set("userId", loginDetails.userId.toString())
        .set("accessToken", loginDetails.accessToken.toString())
        .set("X-Requested-With", "com.zensar.zenwen");

      return this.http.get(baseURL + initialHttpParams.url, {
        headers: commonHeader,
        params: initialHttpParams.params
      }).pipe(
        map(res => this.extractDataForTS(res)),
        catchError(res => this.handleErrorForTS(res))
      );
    });
  }


  public ZenWENauthService(url, user): Observable<User>
  {

    var headers = new HttpHeaders()
      .set("X_Requested_With", "com.zensar.zenwen")
      .set("userName", user.username.toString())
      .set("password", user.password.toString())
      .set("source", "ZenWen");

    return this.http.post(this.zenWENUrl + url, {}, {
      headers: headers
    }).pipe(
      map(res => { return res }),
      catchError(res => this.handleError(res))
    );
  }

  private getZenwenLoginDetails(): Observable<string>
  {
    return Observable.fromPromise(
      this.dataService.getData("zenwenLoginDetails").then((result: any) =>
      {
        return result;
      })
    );
  }

  public zenwenCommonPostService(initialHttpParams = initialParamsForZenwen): Observable<{}>
  {
    let baseURL: string;

    if (initialHttpParams.events)
    {
      baseURL = this.eventBaseUrl;
    } else if (initialHttpParams.zenEvents)
    {
      baseURL = this.zenEventBaseUrl;
    } else if (initialHttpParams.collaboration)
    {
      baseURL = this.collaborationServiceUrl
    } else if (initialHttpParams.zenCollaboration)
    {
      baseURL = this.zenCollaborationServiceUrl
    } else if (initialHttpParams.media)
    {
      baseURL = this.mediaServices;
    } else if (initialHttpParams.zenMedia)
    {
      baseURL = this.zenMediaServicesUrl;
    }
    // return this.getTokenForZenTS().flatMap(value => {
    return this.getZenwenLoginDetails().flatMap((loginDetails: any) =>
    {
      let commonHeader = new HttpHeaders()
        .set("userId", loginDetails.userId.toString())
        .set("accessToken", loginDetails.accessToken.toString())
        .set("X-Requested-With", "com.zensar.zenwen");

      return this.http.post(baseURL + initialHttpParams.url, initialHttpParams.data, {
        headers: commonHeader,
        params: initialHttpParams.params
      }).pipe(
        map(res => this.extractDataForTS(res)),
        catchError(res => this.handleErrorForTS(res))
      );
    });
  }
}
