import * as HrChatBot from '../actions/chat-bot.action';
import { Data } from 'providers/data/data';
import moment from 'moment';

export interface HrChatBotState {
    data: any[],
    sessionId: string,
    pending: boolean,
    error: any,
    message: any
}

const initialState: HrChatBotState = {
    data: [],
    sessionId: '',
    pending: false,
    error: null,
    message: null
}

export function reducer(state = initialState, action: HrChatBot.HrChatBotActions | any): HrChatBotState {
    switch (action.type) {

        // Get HR Chat bot data
        case HrChatBot.HR_CHAT_BOT: {

            if (state.sessionId != '') {
                action.params.sessionId = state.sessionId
            }

            let params: any = action.params
            return {
                ...state,
                pending: true,
                data: state.data.concat({ "from": "me", "query": params.userQuery }),
                error: null,
                message: null
            };
        }
        case HrChatBot.HR_CHAT_BOT_SUCCESS: {
            let data: any;
            if (action.payload.details.responseList.actionId == 0) {
                action.payload.details.responseList.speech = "Sorry, I can't help you with that."
                data = state.data.concat({ "from": "bot", "response": action.payload.details, "readMore": false })
            } else {
                data = state.data.concat({ "from": "bot", "response": action.payload.details, "readMore": false })
            }

            return {
                ...state,
                pending: false,
                data: data,
                sessionId: action.payload.details.responseList.sessionId
            };
        }

        case HrChatBot.HR_CHAT_BOT_ERROR: {
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        }

        // Set chat list data
        case HrChatBot.HR_CHAT_BOT_SET_CHAT_LIST: {
            // console.log(state.data);
            // console.log(action.payload);

            if (action.payload.actionName == 'pendingTimesheetList' && state.data.length > 0 && state.data[state.data.length - 2].actionName == 'pendingTimesheetList') {
                state.data[state.data.length - 2].query = action.payload.query;
                return {
                    ...state,
                    pending: false,
                    data: state.data
                }
            }
            return {
                ...state,
                pending: false,
                data: state.data.concat(action.payload)
            };
        }

        // Suggestion List Data update in State
        case HrChatBot.HR_CHAT_BOT_GET_SUGGESTIONS: {
            let params: any = action.params
            return {
                ...state,
                pending: true,
                error: null,
                message: null
            };
        }
        case HrChatBot.HR_CHAT_BOT_GET_SUGGESTIONS_SUCCESS: {
            return {
                ...state,
                pending: false,
                data: state.data.concat({ "from": "bot", "response": action.payload.details })
            };
        }
        case HrChatBot.HR_CHAT_BOT_GET_SUGGESTIONS_ERROR: {
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        }

        // Weather Data update in State
        case HrChatBot.HR_CHAT_BOT_WEATHER: {
            let params: any = action.params
            return {
                ...state,
                pending: true,
                error: null,
                message: null
            };
        }
        case HrChatBot.HR_CHAT_BOT_WEATHER_SUCCESS: {
            let response: any = {}
            response.responseList = {
                actionName: 'getWeatherFetched'
            }
            response.responseList.weather = {
                description: action.payload.weather[0].description,
                humidity: action.payload.main.humidity,
                currentTemp: action.payload.main.temp,
                weatherSymbol: 'http://openweathermap.org/img/w/' + action.payload.weather[0].icon + '.png',
            }

            return {
                ...state,
                pending: false,
                data: state.data.concat({ "from": "bot", "response": response })
            };
        }
        case HrChatBot.HR_CHAT_BOT_WEATHER_ERROR: {
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        }

        // Feedback submit update in State
        case HrChatBot.HR_CHAT_BOT_SUBMIT_FEEDBACK: {
            let params: any = action.params
            return {
                ...state,
                pending: true,
                error: null,
                message: null
            };
        }
        case HrChatBot.HR_CHAT_BOT_SUBMIT_FEEDBACK_SUCCESS: {

            let response: any = {}

            let feedbackResponse: any = ""

            state.data[state.data.length - 1].response.responseList.feedbackSent = true;

            if (action.payload.details.responseList.feedbackValue == -1) {
                feedbackResponse = "Thanks for your feedback"
                response.responseList = {
                    actionName: 'negativeFeedbackres',
                    feedbackResponse: feedbackResponse,
                    suggestionsList: action.payload.details.responseList.suggestionsList,
                    suggestionPhrase: action.payload.details.responseList.suggestionPhrase,
                    feedbackLoader: true
                    // lifespan: 1,
                    // actionIncomplete: false
                }
            } else if (action.payload.details.responseList.feedbackValue == 1) {
                feedbackResponse = "Thanks for your feedback"
                response.responseList = {
                    actionName: 'receivedFeedbackRes',
                    feedbackResponse: feedbackResponse,
                    suggestionsList: action.payload.details.responseList.suggestionsList,
                    suggestionPhrase: action.payload.details.responseList.suggestionPhrase,
                    feedbackLoader: true
                    // lifespan: 1,
                    // actionIncomplete: false
                }

            } else if (action.payload.details.responseList.feedbackValue == 2) {

                response.responseList = {
                    actionName: 'postQuestionFeedBack',
                    feedbackResponse: null,
                    suggestionsList: action.payload.details.responseList.suggestionsList,
                    suggestionPhrase: action.payload.details.responseList.suggestionPhrase,
                    feedbackLoader: true
                    // lifespan: 1,
                    // actionIncomplete: false

                }
            }



            return {
                ...state,
                pending: false,
                data: state.data.concat({ "from": "bot", "response": response })
            };
        }
        case HrChatBot.HR_CHAT_BOT_SUBMIT_FEEDBACK_ERROR: {
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        }

        // Zensar Site Data
        case HrChatBot.HR_CHAT_BOT_ZENSAR_SITE_DATA: {
            let params: any = action.params
            return {
                ...state,
                pending: true,
                error: null,
                message: null
            };
        }
        case HrChatBot.HR_CHAT_BOT_ZENSAR_SITE_DATA_SUCCESS: {

            let response: any = {}
            response.responseList = {
                actionName: 'getZensarSiteDataResponse',
                searchResults: action.payload.SearchResult
            }

            return {
                ...state,
                pending: false,
                data: state.data.concat({ "from": "bot", "response": response })
            };
        }
        case HrChatBot.HR_CHAT_BOT_ZENSAR_SITE_DATA_ERROR: {
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        }

        // payroll query data
        case HrChatBot.PAYROLL_QUERY_CHAT_BOT_ZENSAR_DATA: {
            let params: any = action.params
            return {
                ...state,
                pending: true,
                error: null,
                message: null
            };
        }
        case HrChatBot.PAYROLL_QUERY_CHAT_BOT_ZENSAR_DATA_SUCCESS: {
            let response: any = {}

            if (action.payload.status && action.payload.status.statusCode && action.payload.status.statusCode == '1') {
                state.data[state.data.length - 1].response.responseList.feedbackSent = true;
            }

            response.responseList = {
                actionName: 'salary_discrepency_mail_response',
                speech: action.payload.details.responseList
            }
            return {
                ...state,
                pending: false,
                data: state.data.concat({ "from": "bot", "response": response })
            };
        }
        case HrChatBot.PAYROLL_QUERY_CHAT_BOT_ZENSAR_DATA_ERROR: {
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        }

        // User Bank Details
        case HrChatBot.HR_CHAT_BOT_USER_BANK_DETAILS: {
            let params: any = action.params
            return {
                ...state,
                pending: true,
                error: null,
                message: null
            };
        }
        case HrChatBot.HR_CHAT_BOT_USER_BANK_DETAILS_SUCCESS: {

            let response: any = {}
            response.responseList = {
                actionName: 'getUserBankDetails',
                userDetails: action.payload.details.ResponseList,
                lifespan: 1,
                queryId: state.data[state.data.length - 1].response.responseList.queryId

            }

            return {
                ...state,
                pending: false,
                data: state.data.concat({ "from": "bot", "response": response })
            };
        }
        case HrChatBot.HR_CHAT_BOT_USER_BANK_DETAILS_ERROR: {
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        }
        case HrChatBot.HR_CHAT_BOT_CLEAR_DATA: {
            return {
                data: [],
                sessionId: '',
                pending: false,
                error: null,
                message: null
            };
        }

        // set Timesheet details in state
        case HrChatBot.TIMESHEET_DETAILS: {

            return {
                ...state,
                pending: true,
                error: null,
                message: null
            };
        }
        case HrChatBot.TIMESHEET_DETAILS_SUCCESS: {
            // console.log(state.data);
            // console.log(action.payload);
            // console.log(action.extraParams);
            if (action.payload.userMessage && action.extraParams.actionName == "saveTimesheet") {
                state.data[state.data.length - 1].response.responseList.noSpeech = true;
                return {
                    ...state,
                    pending: false,
                    message: Object.assign({}, { userMessage: action.payload.userMessage, actionName: action.extraParams.actionName }),
                    data: state.data
                }
            }
            else if (action.extraParams.actionName == "submitTimesheet") {
                let date = moment(action.extraParams.dateObjForSubmission.date).format('DD MMM YYYY');
                let msg = action.extraParams.pendingDates.length > 1 ? ` for ${date}.Would you like to submit for the below dates as well.` : '';
                let response: any = {}
                response.responseList = {
                    actionName: action.extraParams.actionName,
                    lifespan: action.extraParams.lifespan,
                    queryId: action.extraParams.queryId,
                    speech: action.payload.userMessage + msg,
                    dataList: action.extraParams.pendingDates.filter(dateObj => JSON.stringify(dateObj) !== JSON.stringify(action.extraParams.dateObjForSubmission))
                }

                return {
                    ...state,
                    pending: false,
                    data: state.data.concat({ "from": "bot", "response": response })
                };
            }
            else if (action.extraParams.indexToUpdate && state.data[state.data.length - 1].response.responseList.actionName == "timeEntryDetails" && action.payload.data) {
                state.data[action.extraParams.indexToUpdate].response.responseList.data = action.payload.data ? action.payload.data : null;
                state.data[action.extraParams.indexToUpdate].response.responseList.dataList = action.payload.data.taskAndTimesheetDetails.length > 0 ? action.payload.data.taskAndTimesheetDetails : [];
                // state.data[action.extraParams.indexToUpdate].response.responseList.speech = null;
                return {
                    ...state,
                    pending: false,
                    data: state.data
                };
            }
            else {
                let response: any = {}
                if (action.extraParams.actionName == 'ProjectList') {
                    response.responseList = {
                        actionName: action.extraParams.actionName,
                        data: action.payload.data ? action.payload.data : [],
                        lifespan: action.extraParams.lifespan,
                        queryId: action.extraParams.queryId,
                        actionIncomplete: false
                    }
                } else if (action.extraParams.actionName == 'getApproveTimesheetDetails') {
                    response.responseList = {
                        actionName: action.extraParams.actionName,
                        data: action.payload.data && action.payload.data.data ? action.payload.data.data : [],
                        dataList: action.payload.data && action.payload.data.data && action.payload.data.data.projectList ? action.payload.data.data.projectList : [],
                        speech: action.payload.data.speech,
                        lifespan: action.extraParams.lifespan,
                        queryId: action.extraParams.queryId,
                        showQuestionIcon: true
                    }
                } else if (action.extraParams.actionName == "pendingTimesheetList") {
                    // console.log(action.payload);
                    if (state.data[state.data.length - 1].from == 'bot' && state.data[state.data.length - 1].response.responseList.actionName == "pendingTimesheetList" && state.data[state.data.length - 1].response.responseList.data) {
                        state.data[state.data.length - 1].response.responseList.data = action.payload;
                        state.data[state.data.length - 1].response.responseList.pendingList = action.payload && action.payload.allPendingTimesheetList ? action.payload.allPendingTimesheetList : [];
                        state.data[state.data.length - 1].response.responseList.noSpeech = true;
                        state.data[state.data.length - 1].response.responseList.selectedPendingTimesheetList = []

                        return {
                            ...state,
                            pending: false,
                            data: state.data
                        }
                    }
                    response.responseList = {
                        actionName: action.extraParams.actionName,
                        data: action.payload ? action.payload : null,
                        pendingList: action.payload && action.payload.allPendingTimesheetList ? action.payload.allPendingTimesheetList : [],
                        speech: action.extraParams.speech,
                        lifespan: action.extraParams.lifespan,
                        queryId: action.extraParams.queryId
                    }
                } else if (action.extraParams.actionName == 'approveAllTimesheets') {
                    response.responseList = {
                        actionName: action.extraParams.actionName,
                        speech: action.extraParams.speech,
                        lifespan: action.extraParams.lifespan,
                        queryId: action.extraParams.queryId
                    }
                }
                else {
                    response.responseList = {
                        actionId: action.extraParams.actionId,
                        actionName: action.extraParams.actionName,
                        data: action.extraParams.actionName == 'timeEntryDetails' ? action.payload.data : null,
                        dataList: action.extraParams.actionName == 'timeEntryDetails' ? (action.payload.data.taskAndTimesheetDetails.length > 0 ? action.payload.data.taskAndTimesheetDetails : []) : action.payload.data && action.payload.data.data ? action.payload.data.data : [],
                        speech: action.extraParams.actionName == 'timeEntryDetails' && action.payload.data.taskAndTimesheetDetails.length > 0 ? action.extraParams.speech : (action.extraParams.actionName == 'getFillTimesheetDetails' && action.payload.data && action.payload.data.data && action.payload.data.data.length == 1 ? null : action.payload.data.speech),
                        lifespan: action.extraParams.lifespan,
                        queryId: action.extraParams.queryId,
                        CreateTaskText: action.payload.data.CreateTaskText,
                        createTaskFlag: action.payload.data.createTaskFlag
                    }
                }
                return {
                    ...state,
                    pending: false,
                    data: state.data.concat({ "from": "bot", "response": response })
                };
            }
        }
        case HrChatBot.TIMESHEET_DETAILS_ERROR: {
            return {
                ...state,
                pending: false,
                error: Object.assign({}, { errorMsg: action.payload, actionName: action.extraParams.actionName, actionId: action.extraParams.actionId })
            };
        }

        // Employee contact List
        case HrChatBot.EMPLOYEE_CONTACT_LIST: {
            return {
                ...state,
                pending: true,
                error: null,
                message: null
            };
        }
        case HrChatBot.EMPLOYEE_CONTACT_LIST_SUCCESS: {
            let response: any = {}
            response.responseList = {
                actionName: action.extraParams.actionName,
                searchResults: action.payload.details.ResponseList,
                lifespan: action.extraParams.lifespan,
                queryId: action.extraParams.queryId
            }

            return {
                ...state,
                pending: false,
                data: state.data.concat({ "from": "bot", "response": response })
            };
        }
        case HrChatBot.EMPLOYEE_CONTACT_LIST_ERROR: {
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        }

        // Employee contact List
        case HrChatBot.ASSOCIATE_DETAILS: {
            return {
                ...state,
                pending: true,
                error: null,
                message: null
            };
        }
        case HrChatBot.ASSOCIATE_DETAILS_SUCCESS: {
            if (action.extraParams.actionName == state.data[state.data.length - 1].response.responseList.actionName) {
                state.data[state.data.length - 1].response.responseList.doRedirect = true;
                return {
                    ...state,
                    pending: false,
                    data: state.data
                };
            }
            let response: any = {}
            response.responseList = {
                actionName: action.extraParams.actionName,
                data: action.payload.details,
                lifespan: action.extraParams.lifespan,
                queryId: action.extraParams.queryId,
                doRedirect: true
            }

            return {
                ...state,
                pending: false,
                data: state.data.concat({ "from": "bot", "response": response })
            };
        }
        case HrChatBot.ASSOCIATE_DETAILS_ERROR: {
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        }
        case HrChatBot.SUGGESTION_LIST_FROM_SERVER: {
            return {
                ...state,
                pending: true,
                error: null,
                message: null
            };
        }
        case HrChatBot.SUGGESTION_LIST_FROM_SERVER_SUCCESS: {
            let response: any = {}
            response.responseList = {
                actionName: 'getSuggestionListFromServer',
                suggestionsList: action.payload.details.responseList.data,
                lifespan: 1
            }

            return {
                ...state,
                pending: false,
                data: state.data.concat({ "from": "bot", "response": response })
            };
        } case HrChatBot.SUGGESTION_LIST_FROM_SERVER_ERROR: {
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        }
        case HrChatBot.MAIL_SERVICE_GLOBALMOBILITY: {
            return {
                ...state,
                pending: true,
                error: null,
                message: null
            };
        }
        case HrChatBot.MAIL_SERVICE_GLOBALMOBILITY_SUCCESS: {
            let response: any = {}
            response.responseList = {
                actionName: 'globalMobility',
                speech: action.payload.details.responseList,
                lifespan: 1
            }

            return {
                ...state,
                pending: false,
                data: state.data.concat({ "from": "bot", "response": response })
            };
        }
        case HrChatBot.MAIL_SERVICE_GLOBALMOBILITY_ERROR: {
            return {
                ...state,
                pending: false,
                error: action.payload
            };
        }
    }
    return state;
}

export const getHrChatBotLoading = (state: HrChatBotState) => state.pending;
// export const getHrChatBotMessage = (state: HrChatBotState) => state.message;