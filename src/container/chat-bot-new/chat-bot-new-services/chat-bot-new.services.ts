import { Injectable } from "@angular/core";
import moment from "moment";
import { CommonUtilities } from "../../../providers/commonUtilities/commonUtilities";
import { GetterSetter } from "../../../providers/getterSetter/getterSetter";
import { HttpProvider } from "../../../providers/http/http";

@Injectable()

/**
 * In place of redux we have made our own state management for data received from diff service in diff format
 * to convert it into one format n use!
 */
export class ChatBotServices {

    // action contains the response from service
    private action: any = {};
    // state contain the chatList btw bot & user
    private state: any = {};

    constructor(private httpProvider: HttpProvider, private getterSetter: GetterSetter, private utility: CommonUtilities) { }

    /**
     * chat bot normal flow service
     * @param serviceParams parameters required to fetch data
     */
    _restAPICall(serviceParams) {
        this.action = serviceParams;
        this.state = {};
        return new Promise(
            (resolve, reject) => {
                this.httpProvider.http.commonService({ url: serviceParams.url, data: this.action.params, apiUrl: true })
                    .subscribe((serviceResponse: any) => {
                        this.utility.consoleLog(serviceResponse);
                        this.action.payload = serviceResponse;
                        let response: any = {};
                        // response.responseList = {
                        //     actionName: 'getUserBankDetails',
                        //     userDetails: this.action.payload.details.ResponseList,
                        //     lifespan: 1,
                        //     queryId: this.state[this.state.length - 1].response.responseList.queryId

                        // }

                        resolve({
                            pending: false,
                            data: serviceResponse
                        });
                    })
            });
    }

    _hrChatBotSetChatList(serviceParams?) {
        this.action = serviceParams;
        this.state = this.getterSetter.getUserChatListData();
        return new Promise(
            (resolve, reject) => {
                if (!this.utility.isEmptyOrNullOrUndefined(this.action)) {
                    if (this.action.actionName == 'pendingTimesheetList' && this.state.length > 0 && this.state[this.state.length - 2].actionName == 'pendingTimesheetList') {
                        this.state[this.state.length - 2].query = this.action.query;

                        resolve({
                            pending: false,
                            data: this.state
                        })
                    }
                    resolve({
                        pending: false,
                        data: this.state.concat(this.action)
                    });
                }

                resolve({
                    pending: false,
                    data: this.state
                });

            }
        )
    }

    /**
     * timesheet service
     * @param serviceParams parameters required to fetch data
     */
    _timeSheetService(serviceParams) {
        this.action = serviceParams.data;
        console.log(this.action, serviceParams);
        this.state = this.getterSetter.getUserChatListData();

        return new Promise(
            (resolve, reject) => {
                this.httpProvider.http.zentsCommonService({ url: serviceParams.url, data: this.action.params, timesheet: true })
                    .subscribe((serviceResponse: any) => {
                        this.utility.consoleLog(serviceResponse);
                        if (this.utility.isEmptyOrNullOrUndefined(this.action))
                            this.action = serviceParams.data;
                        this.action.payload = serviceResponse;
                        // resolve({ "title": serviceResponse })
                        if (this.action.payload.userMessage && this.action.extraParams.actionName == "saveTimesheet") {
                            this.state[this.state.length - 1].response.responseList.noSpeech = true;
                            resolve({
                                pending: false,
                                message: Object.assign({}, { userMessage: this.action.payload.userMessage, actionName: this.action.extraParams.actionName }),
                                data: this.state
                            })
                        }
                        else if (this.action.extraParams.actionName == "submitTimesheet") {
                            let date = moment(this.action.extraParams.dateObjForSubmission.date).format('DD MMM YYYY');
                            let msg = this.action.extraParams.pendingDates.length > 1 ? ` for ${date}.Would you like to submit for the below dates as well.` : '';
                            let response: any = {}
                            response.responseList = {
                                actionName: this.action.extraParams.actionName,
                                lifespan: this.action.extraParams.lifespan,
                                queryId: this.action.extraParams.queryId,
                                speech: this.action.payload.userMessage + msg,
                                dataList: this.action.extraParams.pendingDates.filter(dateObj => JSON.stringify(dateObj) !== JSON.stringify(this.action.extraParams.dateObjForSubmission))
                            }

                            resolve({
                                pending: false,
                                data: this.state.concat({ "from": "bot", "response": response })
                            });
                        }
                        else if (this.action.extraParams.indexToUpdate && this.state[this.state.length - 1].response.responseList.actionName == "timeEntryDetails" && this.action.payload.data) {
                            this.state[this.action.extraParams.indexToUpdate].response.responseList.data = this.action.payload.data ? this.action.payload.data : null;
                            this.state[this.action.extraParams.indexToUpdate].response.responseList.dataList = this.action.payload.data.taskAndTimesheetDetails.length > 0 ? this.action.payload.data.taskAndTimesheetDetails : [];
                            // this.state[this.action.extraParams.indexToUpdate].response.responseList.speech = null;
                            resolve({
                                pending: false,
                                data: this.state
                            });
                        }
                        else {
                            let response: any = {}
                            if (this.action.extraParams.actionName == 'ProjectList') {
                                response.responseList = {
                                    actionName: this.action.extraParams.actionName,
                                    data: this.action.payload.data ? this.action.payload.data : [],
                                    lifespan: this.action.extraParams.lifespan,
                                    queryId: this.action.extraParams.queryId,
                                    actionIncomplete: false
                                }
                            } else if (this.action.extraParams.actionName == 'getApproveTimesheetDetails') {
                                response.responseList = {
                                    actionName: this.action.extraParams.actionName,
                                    data: this.action.payload.data && this.action.payload.data.data ? this.action.payload.data.data : [],
                                    dataList: this.action.payload.data && this.action.payload.data.data && this.action.payload.data.data.projectList ? this.action.payload.data.data.projectList : [],
                                    speech: this.action.payload.data.speech,
                                    lifespan: this.action.extraParams.lifespan,
                                    queryId: this.action.extraParams.queryId,
                                    showQuestionIcon: true
                                }
                            } else if (this.action.extraParams.actionName == "pendingTimesheetList") {
                                // this.utility.consoleLog(this.action.payload);
                                if (this.state[this.state.length - 1].from == 'bot' && this.state[this.state.length - 1].response.responseList.actionName == "pendingTimesheetList" && this.state[this.state.length - 1].response.responseList.data) {
                                    this.state[this.state.length - 1].response.responseList.data = this.action.payload;
                                    this.state[this.state.length - 1].response.responseList.pendingList = this.action.payload && this.action.payload.allPendingTimesheetList ? this.action.payload.allPendingTimesheetList : [];
                                    this.state[this.state.length - 1].response.responseList.noSpeech = true;
                                    this.state[this.state.length - 1].response.responseList.selectedPendingTimesheetList = []

                                    resolve({
                                        pending: false,
                                        data: this.state
                                    })
                                }
                                response.responseList = {
                                    actionName: this.action.extraParams.actionName,
                                    data: this.action.payload ? this.action.payload : null,
                                    pendingList: this.action.payload && this.action.payload.allPendingTimesheetList ? this.action.payload.allPendingTimesheetList : [],
                                    speech: this.action.extraParams.speech,
                                    lifespan: this.action.extraParams.lifespan,
                                    queryId: this.action.extraParams.queryId
                                }
                            } else if (this.action.extraParams.actionName == 'approveAllTimesheets') {
                                response.responseList = {
                                    actionName: this.action.extraParams.actionName,
                                    speech: this.action.extraParams.speech,
                                    lifespan: this.action.extraParams.lifespan,
                                    queryId: this.action.extraParams.queryId
                                }
                            }
                            else {
                                response.responseList = {
                                    actionId: this.action.extraParams.actionId,
                                    actionName: this.action.extraParams.actionName,
                                    data: this.action.extraParams.actionName == 'timeEntryDetails' ? this.action.payload.data : null,
                                    dataList: this.action.extraParams.actionName == 'timeEntryDetails' ? (this.action.payload.data.taskAndTimesheetDetails.length > 0 ? this.action.payload.data.taskAndTimesheetDetails : []) : this.action.payload.data && this.action.payload.data.data ? this.action.payload.data.data : [],
                                    speech: this.action.extraParams.actionName == 'timeEntryDetails' && this.action.payload.data.taskAndTimesheetDetails.length > 0 ? this.action.extraParams.speech : (this.action.extraParams.actionName == 'getFillTimesheetDetails' && this.action.payload.data && this.action.payload.data.data && this.action.payload.data.data.length == 1 ? null : this.action.payload.data.speech),
                                    lifespan: this.action.extraParams.lifespan,
                                    queryId: this.action.extraParams.queryId,
                                    CreateTaskText: this.action.payload.data.CreateTaskText,
                                    createTaskFlag: this.action.payload.data.createTaskFlag
                                }
                            }


                            resolve({
                                pending: false,
                                data: this.state.concat({ "from": "bot", "response": response })
                            });
                        }

                    });

            }
        )

    }

    /**
     * user bank details service
     * @param serviceParams parameters required to fetch data
     */
    _userBankDetails(serviceParams) {
        this.action = serviceParams.data;
        this.state = this.getterSetter.getUserChatListData();
        return new Promise(
            (resolve, reject) => {
                this.httpProvider.http.commonService({ url: serviceParams.url, data: this.action.params, userBankDetails: true })
                    .subscribe((serviceResponse: any) => {
                        this.utility.consoleLog(serviceResponse);
                        this.action.payload = serviceResponse;
                        let response: any = {};

                        response.responseList = {
                            actionName: 'getUserBankDetails',
                            userDetails: this.action.payload.details.ResponseList,
                            lifespan: 1,
                            queryId: this.state[this.state.length - 1].response.responseList.queryId

                        }
                        if (this.state[this.state.length - 1].response.responseList.actionName == 'getARDetails') {
                            response.responseList.actionName = 'arDetails';
                            response.responseList.userDetails = this.action.payload.details
                        }
                        // response.responseList = {
                        //     actionName: 'getUserBankDetails',
                        //     userDetails: this.action.payload.details.ResponseList,
                        //     lifespan: 1,
                        //     queryId: this.state[this.state.length - 1].response.responseList.queryId

                        // }

                        resolve({
                            pending: false,
                            data: this.state.concat({ "from": "bot", "response": response })
                        });
                    })
            });

    }

    /**
     * associated details
     * @param serviceParams parameters required to fetch data
     */
    _associateDetails(serviceParams) {
        this.action = serviceParams.data;
        this.state = this.getterSetter.getUserChatListData();
        return new Promise(
            (resolve, reject) => {
                this.httpProvider.http.commonService({ url: serviceParams.url, data: this.action.params, empContactList: true })
                    .subscribe((serviceResponse: any) => {
                        this.utility.consoleLog(serviceResponse);
                        this.action.payload = serviceResponse;
                        if (this.action.extraParams.actionName == this.state[this.state.length - 1].response.responseList.actionName) {
                            this.state[this.state.length - 1].response.responseList.doRedirect = true;
                            resolve({
                                pending: false,
                                data: this.state
                            });
                        }
                        let response: any = {}
                        response.responseList = {
                            actionName: this.action.extraParams.actionName,
                            data: this.action.payload.details,
                            lifespan: this.action.extraParams.lifespan,
                            queryId: this.action.extraParams.queryId,
                            doRedirect: true
                        }

                        resolve({
                            pending: false,
                            data: this.state.concat({ "from": "bot", "response": response })
                        });
                    })

            });
    }

    /**
     * global mobility doc mail service
     * @param serviceParams parameters required to fetch data
     */

    _mailServiceGlobalMobility(serviceParams) {
        this.action = serviceParams.data;
        this.state = this.getterSetter.getUserChatListData();
        return new Promise(
            (resolve, reject) => {
                this.httpProvider.http.commonService({ url: serviceParams.url, data: this.action.params, chatBotInfoList: true })
                    .subscribe((serviceResponse: any) => {
                        this.utility.consoleLog(serviceResponse);
                        this.action.payload = serviceResponse;
                        let response: any = {}
                        response.responseList = {
                            actionName: 'globalMobility',
                            speech: this.action.payload.details.responseList,
                            lifespan: 1
                        }

                        resolve({
                            pending: false,
                            data: this.state.concat({ "from": "bot", "response": response })
                        });
                    })

            });
    }

    /**
     * Employee contact details
     * @param serviceParams parameters required to fetch data
     */

    _employeeContactListDetails(serviceParams) {
        this.action = serviceParams.data;
        this.state = this.getterSetter.getUserChatListData();
        return new Promise(
            (resolve, reject) => {
                this.httpProvider.http.commonService({ url: serviceParams.url, data: this.action.params, empContactList: true })
                    .subscribe((serviceResponse: any) => {
                        this.utility.consoleLog(serviceResponse);
                        this.action.payload = serviceResponse;
                        let response: any = {}
                        response.responseList = {
                            actionName: this.action.extraParams.actionName,
                            searchResults: this.action.payload.details.ResponseList,
                            lifespan: this.action.extraParams.lifespan,
                            queryId: this.action.extraParams.queryId
                        }

                        if (this.action.extraParams.actionName == 'getManagerDetails') {
                            response.responseList.actionName = 'managerDetails'
                        }

                        resolve({
                            pending: false,
                            data: this.state.concat({ "from": "bot", "response": response })
                        });
                    })

            });
    }

    /**
     * Zensar Site service
     * @param serviceParams parameters required to fetch data
     */

    _zensarSiteData(serviceParams) {
        this.action = serviceParams.data;
        this.state = this.getterSetter.getUserChatListData();
        return new Promise(
            (resolve, reject) => {
                this.httpProvider.http.getZensarWebsiteData(serviceParams.url)
                    .subscribe((serviceResponse: any) => {
                        this.utility.consoleLog(serviceResponse);
                        this.action.payload = serviceResponse;
                        let response: any = {}
                        response.responseList = {
                            actionName: 'getZensarSiteDataResponse',
                            searchResults: this.action.payload.SearchResult
                        }

                        resolve({
                            pending: false,
                            data: this.state.concat({ "from": "bot", "response": response })
                        });
                    })

            });
    }

    /**
     * Payroll related details
     * @param serviceParams parameters required to fetch data
     */
    _payRollServiceDetails(serviceParams) {
        this.action = serviceParams.data;
        this.state = this.getterSetter.getUserChatListData();
        return new Promise(
            (resolve, reject) => {
                this.httpProvider.http.commonService({ url: serviceParams.url, data: this.action.params, payrollQuery: true })
                    .subscribe((serviceResponse: any) => {
                        this.utility.consoleLog(serviceResponse);
                        this.action.payload = serviceResponse;
                        let response: any = {}
                        if (this.action.payload.status && this.action.payload.status.statusCode && this.action.payload.status.statusCode == '1') {
                            this.state[this.state.length - 1].response.responseList.feedbackSent = true;
                        }

                        response.responseList = {
                            actionName: 'salary_discrepency_mail_response',
                            speech: this.action.payload.details.responseList
                        }
                        resolve({
                            pending: false,
                            data: this.state.concat({ "from": "bot", "response": response })
                        });
                    })

            });
    }

    /**
     * feedback submit service
     * @param serviceParams parameters required to fetch data
     */
    _submitFeedBack(serviceParams) {
        this.action = serviceParams.data;
        this.state = this.getterSetter.getUserChatListData();
        return new Promise(
            (resolve, reject) => {
                this.httpProvider.http.commonService({ url: serviceParams.url, data: this.action.params, chatBotFeedback: true })
                    .subscribe((serviceResponse: any) => {
                        this.utility.consoleLog(serviceResponse);
                        this.action.payload = serviceResponse;
                        let response: any = {}
                        let feedbackResponse: any = ""

                        this.state[this.state.length - 1].response.responseList.feedbackSent = true;

                        if (this.action.payload.details.responseList.feedbackValue == -1) {
                            feedbackResponse = "Thanks for your feedback"
                            response.responseList = {
                                actionName: 'negativeFeedbackres',
                                feedbackResponse: feedbackResponse,
                                suggestionsList: this.action.payload.details.responseList.suggestionsList,
                                suggestionPhrase: this.action.payload.details.responseList.suggestionPhrase,
                                feedbackLoader: true
                                // lifespan: 1,
                                // actionIncomplete: false
                            }
                        } else if (this.action.payload.details.responseList.feedbackValue == 1) {
                            feedbackResponse = "Thanks for your feedback"
                            response.responseList = {
                                actionName: 'receivedFeedbackRes',
                                feedbackResponse: feedbackResponse,
                                suggestionsList: this.action.payload.details.responseList.suggestionsList,
                                suggestionPhrase: this.action.payload.details.responseList.suggestionPhrase,
                                feedbackLoader: true
                                // lifespan: 1,
                                // actionIncomplete: false
                            }

                        } else if (this.action.payload.details.responseList.feedbackValue == 2) {

                            response.responseList = {
                                actionName: 'postQuestionFeedBack',
                                feedbackResponse: null,
                                suggestionsList: this.action.payload.details.responseList.suggestionsList,
                                suggestionPhrase: this.action.payload.details.responseList.suggestionPhrase,
                                feedbackLoader: true
                                // lifespan: 1,
                                // actionIncomplete: false

                            }
                        }


                        resolve({
                            pending: false,
                            data: this.state.concat({ "from": "bot", "response": response })
                        });
                    })

            });
    }

    /**
     * chatbot suggestions list 
     * @param serviceParams parameters required to fetch data
     */

    _getChatBotSuggestion(serviceParams) {
        this.action = serviceParams.data;
        this.state = this.getterSetter.getUserChatListData();
        return new Promise(
            (resolve, reject) => {
                this.httpProvider.http.commonService({ url: serviceParams.url, data: this.action.params, chatBotSuggestionList: true })
                    .subscribe((serviceResponse: any) => {
                        this.utility.consoleLog(serviceResponse);
                        this.action.payload = serviceResponse;
                        resolve({
                            pending: false,
                            data: this.state.concat({ "from": "bot", "response": this.action.payload.details })
                        });
                    })

            });
    }

    /**
    * get weather report 
    * @param serviceParams parameters required to fetch data
    */
    _getWeatherData(serviceParams) {
        this.action = serviceParams.data;
        this.state = this.getterSetter.getUserChatListData();
        return new Promise(
            (resolve, reject) => {
                this.httpProvider.http.getWeatherData(serviceParams.url)
                    .subscribe((serviceResponse: any) => {
                        this.utility.consoleLog(serviceResponse);
                        this.action.payload = serviceResponse;
                        let response: any = {}
                        response.responseList = {
                            actionName: 'getWeatherFetched'
                        }
                        response.responseList.weather = {
                            description: this.action.payload.weather[0].description,
                            humidity: this.action.payload.main.humidity,
                            currentTemp: this.action.payload.main.temp,
                            weatherSymbol: 'http://openweathermap.org/img/w/' + this.action.payload.weather[0].icon + '.png',
                        }

                        resolve({
                            pending: false,
                            data: this.state.concat({ "from": "bot", "response": response })
                        });
                    })

            });
    }
}
