import { Action } from "@ngrx/store";

// done
export const HR_CHAT_BOT = "Hr Chat Bot";
export const HR_CHAT_BOT_SUCCESS = "Hr Chat Bot Success";
export const HR_CHAT_BOT_ERROR = "Hr Chat Bot Error";
// done
export const HR_CHAT_BOT_SET_CHAT_LIST = "Set Hr Chat Bot Chat List"
// done
export const HR_CHAT_BOT_GET_SUGGESTIONS = "Hr Chat Bot Get Suggestions";
export const HR_CHAT_BOT_GET_SUGGESTIONS_SUCCESS = "Hr Chat Bot Get Suggestions Success";
export const HR_CHAT_BOT_GET_SUGGESTIONS_ERROR = "Hr Chat Bot Get Suggestions Error";

export const HR_CHAT_BOT_WEATHER = "Hr Chat Bot Weather Data";
export const HR_CHAT_BOT_WEATHER_SUCCESS = "Hr Chat Bot Weather Data Success";
export const HR_CHAT_BOT_WEATHER_ERROR = "Hr Chat Bot Weather Data Error";
// done
export const HR_CHAT_BOT_SUBMIT_FEEDBACK = "Hr Chat Bot Submit feedback";
export const HR_CHAT_BOT_SUBMIT_FEEDBACK_SUCCESS = "Hr Chat Bot Submit feedback Success";
export const HR_CHAT_BOT_SUBMIT_FEEDBACK_ERROR = "Hr Chat Bot Submit feedback Error";
// done
export const HR_CHAT_BOT_ZENSAR_SITE_DATA = "Hr Chat Bot Zensar Site Data";
export const HR_CHAT_BOT_ZENSAR_SITE_DATA_SUCCESS = "Hr Chat Bot Zensar Site Data Success";
export const HR_CHAT_BOT_ZENSAR_SITE_DATA_ERROR = "Hr Chat Bot Zensar Site Data Error";
// done
export const PAYROLL_QUERY_CHAT_BOT_ZENSAR_DATA = "Payroll Query Chat Bot Zensar  Data";
export const PAYROLL_QUERY_CHAT_BOT_ZENSAR_DATA_SUCCESS = "Payroll Query Chat Bot Zensar  Data Success";
export const PAYROLL_QUERY_CHAT_BOT_ZENSAR_DATA_ERROR = "Payroll Query Chat Bot Zensar  Data Error";

// done
export const HR_CHAT_BOT_USER_BANK_DETAILS = "Hr Chat Bot User Bank Details";
export const HR_CHAT_BOT_USER_BANK_DETAILS_SUCCESS = "Hr Chat Bot User Bank Details Success";
export const HR_CHAT_BOT_USER_BANK_DETAILS_ERROR = "Hr Chat Bot User Bank Details Error";

// done
export const TIMESHEET_DETAILS = "Timesheet Details";
export const TIMESHEET_DETAILS_SUCCESS = "Timesheet Details Success";
export const TIMESHEET_DETAILS_ERROR = "Timesheet Details Error";
// done
export const EMPLOYEE_CONTACT_LIST = "Employee Contact List";
export const EMPLOYEE_CONTACT_LIST_SUCCESS = "Employee Contact List Success";
export const EMPLOYEE_CONTACT_LIST_ERROR = "Employee Contact List Error";
// done
export const ASSOCIATE_DETAILS = "Associate Details List";
export const ASSOCIATE_DETAILS_SUCCESS = "Associate Details List Success";
export const ASSOCIATE_DETAILS_ERROR = "Associate Details List Error";
// done
export const HR_CHAT_BOT_CLEAR_DATA = 'Hr Chat Bot Clear Data';

// done
export const SUGGESTION_LIST_FROM_SERVER = "Suggestion List";
export const SUGGESTION_LIST_FROM_SERVER_SUCCESS = "Suggestion List Success";
export const SUGGESTION_LIST_FROM_SERVER_ERROR = "Suggestion List Error";

// done
export const MAIL_SERVICE_GLOBALMOBILITY = "Globalmobility mail"
export const MAIL_SERVICE_GLOBALMOBILITY_SUCCESS = "Globalmobility mail Success";
export const MAIL_SERVICE_GLOBALMOBILITY_ERROR = "Globalmobility mail Error";

export class GetHrChatBotAction implements Action {
    readonly type = HR_CHAT_BOT;
    constructor(public url: string, public params: object) { }
}

export class GetHrChatBotSuccessAction implements Action {
    readonly type = HR_CHAT_BOT_SUCCESS;
    constructor(public payload: any) { }
}

export class GetHrChatBotErrorAction implements Action {
    readonly type = HR_CHAT_BOT_ERROR;
    constructor(public payload: any) { }
}

export class SetHrChatBotListAction implements Action {
    readonly type = HR_CHAT_BOT_SET_CHAT_LIST;
    constructor(public payload: any) { }
}

export class GetHrChatBotGetSuggestionsAction implements Action {
    readonly type = HR_CHAT_BOT_GET_SUGGESTIONS;
    constructor(public url: string, public params: object) { }
}

export class GetHrChatBotGetSuggestionsSuccessAction implements Action {
    readonly type = HR_CHAT_BOT_GET_SUGGESTIONS_SUCCESS;
    constructor(public payload: any) { }
}

export class GetHrChatBotGetSuggestionsErrorAction implements Action {
    readonly type = HR_CHAT_BOT_GET_SUGGESTIONS_ERROR;
    constructor(public payload: any) { }
}

export class GetHrChatBotWeatherAction implements Action {
    readonly type = HR_CHAT_BOT_WEATHER;
    constructor(public url: string, public params: object) { }
}

export class GetHrChatBotWeatherSuccessAction implements Action {
    readonly type = HR_CHAT_BOT_WEATHER_SUCCESS;
    constructor(public payload: any) { }
}

export class GetHrChatBotWeatherErrorAction implements Action {
    readonly type = HR_CHAT_BOT_WEATHER_ERROR;
    constructor(public payload: any) { }
}

export class GetHrChatBotSubmitFeedbackAction implements Action {
    readonly type = HR_CHAT_BOT_SUBMIT_FEEDBACK;
    constructor(public url: string, public params: object) { }
}

export class GetHrChatBotSubmitFeedbackSuccessAction implements Action {
    readonly type = HR_CHAT_BOT_SUBMIT_FEEDBACK_SUCCESS;
    constructor(public payload: any) { }
}

export class GetHrChatBotSubmitFeedbackErrorAction implements Action {
    readonly type = HR_CHAT_BOT_SUBMIT_FEEDBACK_ERROR;
    constructor(public payload: any) { }
}

export class GetHrChatBotZensarSiteDataAction implements Action {
    readonly type = HR_CHAT_BOT_ZENSAR_SITE_DATA;
    constructor(public url: string, public params: object) { }
}

export class GetHrChatBotZensarSiteDataSuccessAction implements Action {
    readonly type = HR_CHAT_BOT_ZENSAR_SITE_DATA_SUCCESS;
    constructor(public payload: any) { }
}

export class GetHrChatBotZensarSiteDataErrorAction implements Action {
    readonly type = HR_CHAT_BOT_ZENSAR_SITE_DATA_ERROR;
    constructor(public payload: any) { }
}
// payroll Query
export class GetPayrollQueryChatBotZensarDataAction implements Action {
    readonly type = PAYROLL_QUERY_CHAT_BOT_ZENSAR_DATA;
    constructor(public url: string, public params: object) { }
}

export class GetPayrollQueryChatBotZensarDataSuccessAction implements Action {
    readonly type = PAYROLL_QUERY_CHAT_BOT_ZENSAR_DATA_SUCCESS;
    constructor(public payload: any) { }
}

export class GetPayrollQueryChatBotZensarDataErrorAction implements Action {
    readonly type = PAYROLL_QUERY_CHAT_BOT_ZENSAR_DATA_ERROR;
    constructor(public payload: any) { }
}



export class GetHrChatBotUserBankDeatilsAction implements Action {
    readonly type = HR_CHAT_BOT_USER_BANK_DETAILS;
    constructor(public url: string, public params: object) { }
}

export class GetHrChatBotUserBankDeatilsSuccessAction implements Action {
    readonly type = HR_CHAT_BOT_USER_BANK_DETAILS_SUCCESS;
    constructor(public payload: any) { }
}

export class GetHrChatBotUserBankDeatilsErrorAction implements Action {
    readonly type = HR_CHAT_BOT_USER_BANK_DETAILS_ERROR;
    constructor(public payload: any) { }
}

//clearing the chat bot data from store
export class GetHrChatBotClearData implements Action {
    readonly type = HR_CHAT_BOT_CLEAR_DATA;
    constructor() { }
}

export class GetTimesheetDeatilsAction implements Action {
    readonly type = TIMESHEET_DETAILS;
    constructor(public url: string, public params: object, public extraParams: object) { }
}

export class GetTimesheetDeatilsSuccessAction implements Action {
    readonly type = TIMESHEET_DETAILS_SUCCESS;
    constructor(public payload: any, public extraParams: object) { }
}

export class GetTimesheetDeatilsErrorAction implements Action {
    readonly type = TIMESHEET_DETAILS_ERROR;
    constructor(public payload: any, public extraParams: object) { }
}

export class GetEmployeeContactListAction implements Action {
    readonly type = EMPLOYEE_CONTACT_LIST;
    constructor(public url: string, public params: object, public extraParams: object) { }
}

export class GetEmployeeContactListSuccessAction implements Action {
    readonly type = EMPLOYEE_CONTACT_LIST_SUCCESS;
    constructor(public payload: any, public extraParams: object) { }
}

export class GetEmployeeContactListErrorAction implements Action {
    readonly type = EMPLOYEE_CONTACT_LIST_ERROR;
    constructor(public payload: any) { }
}

export class GetAssociateDetailsAction implements Action {
    readonly type = ASSOCIATE_DETAILS;
    constructor(public url: string, public params: object, public extraParams: object) { }
}

export class GetAssociateDetailsSuccessAction implements Action {
    readonly type = ASSOCIATE_DETAILS_SUCCESS;
    constructor(public payload: any, public extraParams: object) { }
}

export class GetAssociateDetailsErrorAction implements Action {
    readonly type = ASSOCIATE_DETAILS_ERROR;
    constructor(public payload: any) { }
}

export class GetSuggestionListFromServerAction implements Action {
    readonly type = SUGGESTION_LIST_FROM_SERVER;
    constructor(public url: string, public params: object,) { }
}

export class GetSuggestionListFromServerSuccessAction implements Action {
    readonly type = SUGGESTION_LIST_FROM_SERVER_SUCCESS;
    constructor(public payload: any) { }
}

export class GetSuggestionListFromServerErrorAction implements Action {
    readonly type = SUGGESTION_LIST_FROM_SERVER_ERROR;
    constructor(public payload: any) { }
}

export class GetMailServiceGlobalmobilityAction implements Action {
    readonly type = MAIL_SERVICE_GLOBALMOBILITY;
    constructor(public url: string, public params: object,) { }
}

export class GetMailServiceGlobalmobilitySuccessAction implements Action {
    readonly type = MAIL_SERVICE_GLOBALMOBILITY_SUCCESS;
    constructor(public payload: any) { }
}

export class GetMailServiceGlobalmobilityErrorAction implements Action {
    readonly type = MAIL_SERVICE_GLOBALMOBILITY_ERROR;
    constructor(public payload: any) { }
}


export type HrChatBotActions =
    | GetHrChatBotAction
    | GetHrChatBotSuccessAction
    | GetHrChatBotErrorAction
    | GetHrChatBotGetSuggestionsAction
    | GetHrChatBotGetSuggestionsSuccessAction
    | GetHrChatBotGetSuggestionsErrorAction
    | GetHrChatBotWeatherAction
    | GetHrChatBotWeatherSuccessAction
    | GetHrChatBotWeatherErrorAction
    | GetHrChatBotSubmitFeedbackAction
    | GetHrChatBotSubmitFeedbackSuccessAction
    | GetHrChatBotSubmitFeedbackErrorAction
    | GetHrChatBotZensarSiteDataAction
    | GetHrChatBotZensarSiteDataSuccessAction
    | GetHrChatBotZensarSiteDataErrorAction
    | SetHrChatBotListAction
    | GetPayrollQueryChatBotZensarDataAction
    | GetPayrollQueryChatBotZensarDataSuccessAction
    | GetPayrollQueryChatBotZensarDataErrorAction
    | GetHrChatBotUserBankDeatilsAction
    | GetHrChatBotUserBankDeatilsSuccessAction
    | GetHrChatBotUserBankDeatilsErrorAction
    | GetHrChatBotClearData
    | GetTimesheetDeatilsAction
    | GetTimesheetDeatilsSuccessAction
    | GetEmployeeContactListAction
    | GetEmployeeContactListSuccessAction
    | GetEmployeeContactListErrorAction
    | GetAssociateDetailsAction
    | GetAssociateDetailsSuccessAction
    | GetAssociateDetailsErrorAction
    | GetSuggestionListFromServerAction
    | GetSuggestionListFromServerSuccessAction
    | GetSuggestionListFromServerErrorAction
    | GetTimesheetDeatilsErrorAction
    | GetMailServiceGlobalmobilityAction
    | GetMailServiceGlobalmobilitySuccessAction
    | GetMailServiceGlobalmobilityErrorAction