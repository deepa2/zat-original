export interface HttpProviderParams {
  url?: any;
  data?: any;
  params?: any;
  fd?: FormData;
  searchFlag?: any;
  notification?: any;
  associate?: any;
  dashboard?: any;
  announcement?: any;
  miscellaneous?: any;
  chatBot?: any;
  weather?: any;
  chatBotSuggestionList?: any;
  chatBotFeedback?: any;
  userBankDetails?: any;
  onboarding?: any;
  ijp?: any;
  payrollQuery?: any;
  bannerDetails?: any;
  zenDeavorURL?: any;
  registration?: any;
  home?: any;
  isZenlounge?: any;
  zenLearn?: any;
  timesheet?: any;
  empContactList?: any;
  chatBotInfoList?: any;
  suggestionListFromServer?: any;
  zenRich?: any;
  zenExit?: any;
  chatBotSugessionUrl?: any;
  financeURL?: any
  sfModuleURL?: any;
  apiUrl?: any;
  isZenAdmin?: any;
}

export const initialParams: HttpProviderParams = {
  url: "",
  data: {},
  params: "",
  fd: new FormData(),
  searchFlag: false,
  notification: false,
  associate: false,
  dashboard: false,
  announcement: false,
  miscellaneous: false,
  chatBot: false,
  weather: false,
  chatBotSuggestionList: false,
  chatBotFeedback: false,
  userBankDetails: false,
  onboarding: false,
  ijp: false,
  payrollQuery: false,
  bannerDetails: false,
  zenDeavorURL: false,
  registration: false,
  home: false,
  isZenlounge: false,
  zenLearn: false,
  timesheet: false,
  empContactList: false,
  chatBotInfoList: false,
  suggestionListFromServer: false,
  chatBotSugessionUrl: false,
  financeURL: false,
  sfModuleURL: false,
  apiUrl: false,
  isZenAdmin: false
};

//******=========ZenTS==============***********
export interface HttpProviderParamsForTimesheet {
  url: any;
  data?: any;
  params?: any;
  timeentry?: any;
  zentsPal?: any;
  overtime?: any;
  addTask?: any;
  dashboard?: any;
  addOn?: any;
  timesheet?: any;
  zenTsReport?: any;
}
export const initialParamsForTimesheet: HttpProviderParamsForTimesheet = {
  url: "",
  data: {},
  params: "",
  timeentry: false,
  zentsPal: false,
  overtime: false,
  addTask: false,
  dashboard: false,
  addOn: false,
  timesheet: false,
  zenTsReport: false
};

//******=========ZenWEN==============***********
export interface HttpProviderParamsZenwen {
  url: any;
  data?: any;
  params?: any;
  events?: any;
  zenEvents?: any;
  headermenu?: any;
  media?: any;
  zenMedia?: any;
  collaboration?: any;
  zenCollaboration?: any;
  user?: any;
}
export const initialParamsForZenwen: HttpProviderParamsZenwen = {
  url: "",
  data: {},
  params: "",
  events: false,
  zenEvents: false,
  headermenu: false,
  media: false,
  zenMedia: false,
  collaboration: false,
  user: false,
  zenCollaboration: false,

};

