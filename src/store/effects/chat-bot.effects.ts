import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from 'rxjs/Observable';
import { Action } from "@ngrx/store";
import * as  hrChatBotAction from '../actions/chat-bot.action';
import { switchMap } from "rxjs/operators";
import { HttpProvider } from '../../providers/http/http';

@Injectable()
export class HrChatBotEffects {
    constructor(private actions$: Actions, private httpProvider: HttpProvider) { }

    @Effect()
    chatResponse$: Observable<Action> = this.actions$
        .ofType(hrChatBotAction.HR_CHAT_BOT).pipe(
            switchMap((action: hrChatBotAction.GetHrChatBotAction) => {
                return this.httpProvider.http.commonService({ url: action.url, data: action.params, chatBot: true })
                    .map((response: any) => {
                        return new hrChatBotAction.GetHrChatBotSuccessAction(response)
                    })
                    .catch(error => Observable.of(new hrChatBotAction.GetHrChatBotErrorAction(error)))
            })
        );

    @Effect()
    chatBotSuggestionList$: Observable<Action> = this.actions$
        .ofType(hrChatBotAction.HR_CHAT_BOT_GET_SUGGESTIONS).pipe(
            switchMap((action: hrChatBotAction.GetHrChatBotAction) => {
                return this.httpProvider.http.commonService({ url: action.url, data: action.params, chatBotSuggestionList: true })
                    .map((response: any) => {
                        return new hrChatBotAction.GetHrChatBotGetSuggestionsSuccessAction(response)
                    })
                    .catch(error => Observable.of(new hrChatBotAction.GetHrChatBotGetSuggestionsErrorAction(error)))
            })
        );

    @Effect()
    chatBotWeatherData$: Observable<Action> = this.actions$
        .ofType(hrChatBotAction.HR_CHAT_BOT_WEATHER).pipe(
            switchMap((action: hrChatBotAction.GetHrChatBotAction) => {
                return this.httpProvider.http.getWeatherData(action.url)
                    .map((response: any) => {
                        return new hrChatBotAction.GetHrChatBotWeatherSuccessAction(response)
                    })
                    .catch(error => Observable.of(new hrChatBotAction.GetHrChatBotWeatherErrorAction(error)))
            })
        );

    @Effect()
    chatBotFeedbackData$: Observable<Action> = this.actions$
        .ofType(hrChatBotAction.HR_CHAT_BOT_SUBMIT_FEEDBACK).pipe(
            switchMap((action: hrChatBotAction.GetHrChatBotAction) => {
                return this.httpProvider.http.commonService({ url: action.url, data: action.params, chatBotFeedback: true })
                    .map((response: any) => {
                        return new hrChatBotAction.GetHrChatBotSubmitFeedbackSuccessAction(response)
                    })
                    .catch(error => Observable.of(new hrChatBotAction.GetHrChatBotSubmitFeedbackErrorAction(error)))
            })
        );

    @Effect()
    chatBotZensarSiteData$: Observable<Action> = this.actions$
        .ofType(hrChatBotAction.HR_CHAT_BOT_ZENSAR_SITE_DATA).pipe(
            switchMap((action: hrChatBotAction.GetHrChatBotAction) => {
                return this.httpProvider.http.getZensarWebsiteData(action.url)
                    .map((response: any) => {
                        return new hrChatBotAction.GetHrChatBotZensarSiteDataSuccessAction(response)
                    })
                    .catch(error => Observable.of(new hrChatBotAction.GetHrChatBotZensarSiteDataErrorAction(error)))
            })
        );

    @Effect()
    chatBotPayrollQueryZensarData$: Observable<Action> = this.actions$
        .ofType(hrChatBotAction.PAYROLL_QUERY_CHAT_BOT_ZENSAR_DATA).pipe(
            switchMap((action: hrChatBotAction.GetHrChatBotAction) => {
                return this.httpProvider.http.commonService({ url: action.url, data: action.params, payrollQuery: true })
                    .map((response: any) => {
                        return new hrChatBotAction.GetPayrollQueryChatBotZensarDataSuccessAction(response)
                    })
                    .catch(error => Observable.of(new hrChatBotAction.GetPayrollQueryChatBotZensarDataErrorAction(error)))
            })
        );

    @Effect()
    chatBotUserBankDetaisl$: Observable<Action> = this.actions$
        .ofType(hrChatBotAction.HR_CHAT_BOT_USER_BANK_DETAILS).pipe(
            switchMap((action: hrChatBotAction.GetHrChatBotAction) => {
                return this.httpProvider.http.commonService({ url: action.url, data: action.params, userBankDetails: true })
                    .map((response: any) => {
                        return new hrChatBotAction.GetHrChatBotUserBankDeatilsSuccessAction(response)
                    })
                    .catch(error => Observable.of(new hrChatBotAction.GetHrChatBotUserBankDeatilsErrorAction(error)))
            })
        );

    @Effect()
    timesheetDetails$: Observable<Action> = this.actions$
        .ofType(hrChatBotAction.TIMESHEET_DETAILS).pipe(
            switchMap((action: hrChatBotAction.GetTimesheetDeatilsAction) => {
                return this.httpProvider.http.zentsCommonService({ url: action.url, data: action.params, timesheet: true })
                    .map((response: any) => {
                        return new hrChatBotAction.GetTimesheetDeatilsSuccessAction(response, action.extraParams)
                    })
                    .catch(error => Observable.of(new hrChatBotAction.GetTimesheetDeatilsErrorAction(error, action.extraParams)))
            })
        );

    @Effect()
    employeeContactList$: Observable<Action> = this.actions$
        .ofType(hrChatBotAction.EMPLOYEE_CONTACT_LIST).pipe(
            switchMap((action: hrChatBotAction.GetEmployeeContactListAction) => {
                return this.httpProvider.http.commonService({ url: action.url, data: action.params, empContactList: true })
                    .map((response: any) => {
                        return new hrChatBotAction.GetEmployeeContactListSuccessAction(response, action.extraParams)
                    })
                    .catch(error => Observable.of(new hrChatBotAction.GetEmployeeContactListErrorAction(error)))
            })
        );

    @Effect()
    associateDetails$: Observable<Action> = this.actions$
        .ofType(hrChatBotAction.ASSOCIATE_DETAILS).pipe(
            switchMap((action: hrChatBotAction.GetAssociateDetailsAction) => {
                return this.httpProvider.http.commonService({ url: action.url, data: action.params, empContactList: true })
                    .map((response: any) => {
                        return new hrChatBotAction.GetAssociateDetailsSuccessAction(response, action.extraParams)
                    })
                    .catch(error => Observable.of(new hrChatBotAction.GetAssociateDetailsErrorAction(error)))
            })
        );

    @Effect()
    getSuggestionListFromServer$: Observable<Action> = this.actions$
        .ofType(hrChatBotAction.SUGGESTION_LIST_FROM_SERVER).pipe(
            switchMap((action: hrChatBotAction.GetAssociateDetailsAction) => {
                // , suggestionListFromServer: true 
                return this.httpProvider.http.commonService({ url: action.url, data: action.params, suggestionListFromServer: true })
                    .map((response: any) => {
                        return new hrChatBotAction.GetSuggestionListFromServerSuccessAction(response)
                    })
                    .catch(error => Observable.of(new hrChatBotAction.GetSuggestionListFromServerErrorAction(error)))
            })
        );

    @Effect()
    getMailServiceGlobalmobility$: Observable<Action> = this.actions$
        .ofType(hrChatBotAction.MAIL_SERVICE_GLOBALMOBILITY).pipe(
            switchMap((action: hrChatBotAction.GetMailServiceGlobalmobilityAction) => {
                // , suggestionListFromServer: true 
                return this.httpProvider.http.commonService({ url: action.url, data: action.params, chatBotInfoList: true })
                    .map((response: any) => {
                        return new hrChatBotAction.GetMailServiceGlobalmobilitySuccessAction(response)
                    })
                    .catch(error => Observable.of(new hrChatBotAction.GetMailServiceGlobalmobilityErrorAction(error)))
            })
        );


}

