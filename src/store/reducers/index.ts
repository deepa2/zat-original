import { ActionReducerMap, createSelector, createFeatureSelector, ActionReducer, MetaReducer } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { StorageSyncEffects, storageSync } from 'ngrx-store-ionic-storage';
import { environment } from '../../common/utilities';
import * as faqModel from '../../models/faq.model';
import * as fromQuestions from './questions.reducer';
import * as fromAuth from './auth.reducers';
import * as fromDash from './dashboard.reducers';
import * as fromFaq from './faq.reducers';
import * as fromSearch from './search.reducer';
import * as fromNotification from './notification.reducers';
import * as fromAdd from './add.reducers';
import * as fromQueryDetail from './queryDetail.reducers';
import * as fromFeedback from './feedback.reducers';
import * as fromRole from './roles.reducers';
import * as fromTag from './tag.reducers';
import * as fromProfile from './profile.reducers';
import * as fromHome from './home.reducers';
import * as fromAccouncement from './announcement.reducers';
import * as fromGetComments from './announcementRatings.reducer';
import * as fromAbout from './about.reducers';
import * as fromHrChatBot from './chat-bot.reducers';
import * as fromOnboardingChangePassword from './changePassword.reducers';
import * as fromOBWelcome from './obLanding.reducers';
import * as fromObDashboard from './obDashboard.reducers';
import * as fromObAddDetails from './obAddDetails.reducers';
import * as fromDocumentDetails from './documentDetails.reducers'
import * as fromZenContacts from './zencontacts.reducer';
import * as fromInternalJobPosting from './internal-job-posting.reducers';
import * as fromJobDescription from './job-description.reducers';
import * as fromMyLeave from './myLeave.reducers';
import * as authActions from '../actions/auth.action';
import * as fromEditProfile from './editProfile.reducers';
import * as fromApplyJob from './applyjob.reducers';
import * as fromBannerDetails from './bannerDetails.reducers';
import * as fromSwipeMiss from './swipe-miss.reducers';
import * as fromRejectedDocs from './rejectedDocs.reducer';

export interface AppState {
    login: fromAuth.LoginState;
    about: fromAbout.AboutState,
    questions: fromQuestions.QuestionState;
    dashboard: fromDash.dashboardState;
    faq: faqModel.faqState;
    search: fromSearch.SearchState;
    notification: fromNotification.notificationState;
    add: fromAdd.AddState,
    queryDetail: fromQueryDetail.QueryDetailState,
    feedback: fromFeedback.FeedbackState,
    role: fromRole.roleState,
    tag: fromTag.TagState,
    profile: fromProfile.ProfileState,
    home: fromHome.homeState,
    accouncement: fromAccouncement.announcementState,
    hrChatBot: fromHrChatBot.HrChatBotState
    comments: fromGetComments.commentsState,
    passwordChange: fromOnboardingChangePassword.change_Password,
    obWelcome: fromOBWelcome.ObWelcomeState,
    obDashboard: fromObDashboard.obDashboardState,
    obAddDetailsState: fromObAddDetails.obAddDetailState,
    documentDetails: fromDocumentDetails.DocumentDetailsState,
    zenContacts: fromZenContacts.ZenContactsState,
    internalJobPosting: fromInternalJobPosting.InternalJobPostingState,
    jobDescription: fromJobDescription.JobDescriptionState,
    myLeave: fromMyLeave.MyLeaveState,
    editProfile: fromEditProfile.SubmitExperience,
    applyJob: fromApplyJob.ApplyJobState
    bannerDetails: fromBannerDetails.BannerDetailsState,
    fromSwipeMiss: fromSwipeMiss.swipeMissState,
    rejecteddocs: fromRejectedDocs.RejectedState
}

export const reducers: ActionReducerMap<AppState> = {
    questions: fromQuestions.reducer,
    login: fromAuth.reducer,
    dashboard: fromDash.reducer,
    faq: fromFaq.reducer,
    search: fromSearch.reducer,
    notification: fromNotification.reducer,
    add: fromAdd.reducer,
    queryDetail: fromQueryDetail.reducer,
    feedback: fromFeedback.reducer,
    role: fromRole.reducer,
    tag: fromTag.reducer,
    profile: fromProfile.reducer,
    home: fromHome.reducer,
    accouncement: fromAccouncement.reducer,
    comments: fromGetComments.reducer,
    about: fromAbout.reducer,
    hrChatBot: fromHrChatBot.reducer,
    passwordChange: fromOnboardingChangePassword.reducer,
    obWelcome: fromOBWelcome.reducer,
    obDashboard: fromObDashboard.reducer,
    obAddDetailsState: fromObAddDetails.reducer,
    zenContacts: fromZenContacts.reducer,
    documentDetails: fromDocumentDetails.reducer,
    internalJobPosting: fromInternalJobPosting.reducer,
    jobDescription: fromJobDescription.reducer,
    myLeave: fromMyLeave.reducer,
    editProfile: fromEditProfile.reducer,
    applyJob: fromApplyJob.reducer,
    bannerDetails: fromBannerDetails.reducer,
    fromSwipeMiss: fromSwipeMiss.reducer,
    rejecteddocs: fromRejectedDocs.reducer
}

export function clearState(reducer) {
    return function (state, action) {
        if (action.type === authActions.LOGOUT) {
            state = undefined;
        }
        return reducer(state, action);
    };
}

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
    // default, no options
    return storeLogger()(reducer);
}

export function onSyncError(err) {
}

export const storageSyncReducer = storageSync({
    keys: ['questions', 'login'],
    hydratedStateKey: 'hydrated', // Add this key to the state
    onSyncError: onSyncError      // If a sync fails
});

export function storageMetaReducer(reducer: ActionReducer<any>): ActionReducer<any, any> {
    return storageSyncReducer(reducer);
}

 export const metaReducers: MetaReducer<AppState>[] = environment.production ? [clearState] : [ clearState];

//for showing state log uncomment below 
//export const metaReducers: MetaReducer<AppState>[] = environment.production ? [] : [logger];

export const getAppState = createFeatureSelector('app');

export const getQuestionState = createSelector(getAppState, (state: AppState) => state.questions);
export const getAllQuestions = createSelector(getQuestionState, fromQuestions.getQuestions);
export const getAllQuestionsLoading = createSelector(getQuestionState, fromQuestions.getQuestionsLoading);
export const updateQuestionsLoading = createSelector(getQuestionState, fromQuestions.updateQuestionsLoading);
export const getFilter = createSelector(getQuestionState, fromQuestions.getSelectedFilter);

export const getLoginState = createSelector(getAppState, (state: AppState) => state.login);
export const getLoginData = createSelector(getLoginState, fromAuth.getLoggedInData);

export const getDashboardState = createSelector(getAppState, (state: AppState) => state.dashboard);
export const getDashboardLoading = createSelector(getDashboardState, fromDash.getDashboardLoading);
export const getUserDashboardLoading = createSelector(getDashboardState, fromDash.getUserDashboardLoading);

export const getAddState = createSelector(getAppState, (state: AppState) => state.add);
export const getAddData = createSelector(getAddState, fromAdd.getAddData);
export const getAddLoading = createSelector(getAddState, fromAdd.getAddLoading);

export const getFAQState = createSelector(getAppState, (state: AppState) => state.faq);
export const getFAQLoading = createSelector(getFAQState, fromFaq.getFAQLoading);


export const getSearchState = createSelector(getAppState, (state: AppState) => state.search);
export const getSearchLoading = createSelector(getSearchState, fromSearch.getSearchLoading);
export const updateSearchLoading = createSelector(getSearchState, fromSearch.updateSearchLoading);
export const getSearchText = createSelector(getSearchState, fromSearch.getSearchText);
export const getSearchData = createSelector(getSearchState, fromSearch.getSearchData);

export const getNotificationState = createSelector(getAppState, (state: AppState) => state.notification);
export const getNotificationLoading = createSelector(getNotificationState, fromNotification.getNotificationLoading);

export const getQueryDetailState = createSelector(getAppState, (state: AppState) => state.queryDetail);
export const getQueryDetailData = createSelector(getQueryDetailState, fromQueryDetail.getQueryDetailData);
export const getQueryDetailLoading = createSelector(getQueryDetailState, fromQueryDetail.getQueryDetailLoading);

export const getAddFeedbackState = createSelector(getAppState, (state: AppState) => state.feedback);
export const getAddFeedbackData = createSelector(getAddFeedbackState, fromFeedback.addfeedbackData);
export const getAddFeedbackLoading = createSelector(getAddFeedbackState, fromFeedback.addfeedbackLoading);

export const getRoleState = createSelector(getAppState, (state: AppState) => state.role);
export const getRole = createSelector(getRoleState, fromRole.getRole);

export const getTagState = createSelector(getAppState, (state: AppState) => state.tag);
export const getGroupData = createSelector(getTagState, fromTag.getGroupsData);
export const getGroupMembersData = createSelector(getTagState, fromTag.getGroupMembersData);

export const getTagLoading = createSelector(getTagState, fromTag.getTagLoading);
export const getAddTagResponse = createSelector(getTagState, fromTag.getAddTagResponse);

export const getProfileState = createSelector(getAppState, (state: AppState) => state.profile);
export const getProfileData = createSelector(getProfileState, fromProfile.getProfileData);
export const getProfileEditData = createSelector(getProfileState, fromProfile.getProfileEditData);
export const getProfileLoading = createSelector(getProfileState, fromProfile.getProfileLoading);
export const getProfileUploadLoading = createSelector(getProfileState, fromProfile.getProfileUploadLoading);
export const getProfileUploadData = createSelector(getProfileState, fromProfile.getProfileUploadData);
export const getProfileReset = createSelector(getProfileState, fromProfile.getProfileReset);

export const getUpdateDataLoading = createSelector(getProfileState, fromProfile.getUpdateDataLoading);
export const getUpdateSuccess = createSelector(getProfileState, fromProfile.getUpdateSuccess);

export const getHomeState = createSelector(getAppState, (state: AppState) => state.home);
export const getMiscData = createSelector(getHomeState, fromHome.getMiscData);
export const getMiscLoading = createSelector(getHomeState, fromHome.getMiscLoading);
export const getNotificationCount = createSelector(getHomeState, fromHome.getNotificationCount);
export const getCurrentModule = createSelector(getHomeState, fromHome.getCurrentModule);

export const getAccouncementState = createSelector(getAppState, (state: AppState) => state.accouncement);
export const getAccouncementLoading = createSelector(getAccouncementState, fromAccouncement.getAnnouncementLoading);

export const getCommentsState = createSelector(getAppState, (state: AppState) => state.comments);
export const getCommentsLoading = createSelector(getCommentsState, fromGetComments.getCommentLoading);

export const getAboutState = createSelector(getAppState, (state: AppState) => state.about);
export const getAboutLoading = createSelector(getAboutState, fromAbout.getAboutLoading);

export const getHrChatBotState = createSelector(getAppState, (state: AppState) => state.hrChatBot);
export const getHrChatBotLoading = createSelector(getHrChatBotState, fromHrChatBot.getHrChatBotLoading);
// export const getHrChatBotMessage = createSelector(getHrChatBotState, fromHrChatBot.getHrChatBotMessage);

export const getZenContactsState = createSelector(getAppState, (state: AppState) => state.zenContacts);
export const getZenContactsLoading = createSelector(getZenContactsState, fromZenContacts.getZenContactsLoading);

export const getInternalJobPostingState = createSelector(getAppState, (state: AppState) => state.internalJobPosting);
export const getInternalJobPostingLoading = createSelector(getInternalJobPostingState, fromInternalJobPosting.getInternalJobPostingLoading);
//export const getInternalJobPostingData = createSelector(getInternalJobPostingState,fromInternalJobPosting.getInternalJobPostingData)

export const getJobDescriptionState = createSelector(getAppState, (state: AppState) => state.jobDescription);
export const getJobDescriptionStateLoading = createSelector(getJobDescriptionState, fromJobDescription.getJobDescriptionLoading);


export const getonBoardingChangePasswordState = createSelector(getAppState, (state: AppState) => state.passwordChange);
export const getOnboardingChangePasswordLoading = createSelector(getonBoardingChangePasswordState, fromOnboardingChangePassword.getChangePasswordPending)
export const getOBchangePasswordData = createSelector(getonBoardingChangePasswordState, fromOnboardingChangePassword.getOBChangePasswordData);

export const getObWElcomeState = createSelector(getAppState, (state: AppState) => state.obWelcome);
export const getObWelcomeLanding = createSelector(getObWElcomeState, fromOBWelcome.getObWelcomeLoading);
export const getObFinalSubmitLoading = createSelector(getObWElcomeState, fromOBWelcome.getObFinalSubmitLoading);
export const getObLandingStatusLoading = createSelector(getObWElcomeState, fromOBWelcome.getObLandingStatusPending);

export const getObDashboardState = createSelector(getAppState, (state: AppState) => state.obDashboard);
export const getObDashboardData = createSelector(getObDashboardState, fromObDashboard.getObDashboardData);
export const getObDashboardLoading = createSelector(getObDashboardState, fromObDashboard.getObDashboardLoading);

export const getObAddDetailState = createSelector(getAppState, (state: AppState) => state.obAddDetailsState);
export const getObAddDetailEditData = createSelector(getObAddDetailState, fromObAddDetails.getObAddDetailsData);

export const getObAddDetailLoading = createSelector(getObAddDetailState, fromObAddDetails.getObAddDetailLoading);
export const getObAddDetailsUploadData = createSelector(getObAddDetailState, fromObAddDetails.getObAddDetailsUploadData);
export const getObAddDetailsUploadLoading = createSelector(getObAddDetailState, fromObAddDetails.getObAddDetailsUploadLoading);
export const ObAddDetailsSubmitLoading = createSelector(getObAddDetailState, fromObAddDetails.ObAddDetailsSubmitLoading);

export const getDocumentDetailsState = createSelector(getAppState, (state: AppState) => state.documentDetails);
export const getDocumentDetailsData = createSelector(getDocumentDetailsState, fromDocumentDetails.getDocumentDetailsData)

export const getMyLeaveState = createSelector(getAppState, (state: AppState) => state.myLeave);
export const getMyLeaveLoading = createSelector(getMyLeaveState, fromMyLeave.myLeaveLoading);
export const getMyLeaveData = createSelector(getMyLeaveState, fromMyLeave.myLeaveData);

export const getEditProfileState = createSelector(getAppState, (state: AppState) => state.editProfile);
export const getEditProfileLoading = createSelector(getEditProfileState, fromEditProfile.GetSubmitExperienceLoading);
export const getEditProfileData = createSelector(getEditProfileState, fromEditProfile.GetSubmitExperienceData);

export const getApplyJobState = createSelector(getAppState, (state: AppState) => state.applyJob);
export const getApplyJobLoading = createSelector(getApplyJobState, fromApplyJob.getApplyJobLoading);
export const getApplyJobData = createSelector(getApplyJobState, fromApplyJob.getApplyJobData);

export const getSubmitApplyFormLoading = createSelector(getApplyJobState, fromApplyJob.submitFormLoading);
export const getSubmitApplyFormData = createSelector(getApplyJobState, fromApplyJob.submitFormData);

export const getUploadResumePending = createSelector(getApplyJobState, fromApplyJob.uploadResumeLoading);
export const getUploadResumeData = createSelector(getApplyJobState, fromApplyJob.uploadResumeData);
export const getUploadResumeError = createSelector(getApplyJobState, fromApplyJob.uploadResumeError);

// export const getBannerState = createSelector(getAppState, (state: AppState) => state.bannerDetails);
// export const getBannerDetailsLoading = createSelector(getBannerState, fromBannerDetails.getBannerDetailsLoading);

export const getBannerState = createSelector(getAppState, (state: AppState) => state.bannerDetails);
export const getBannerDetailsLoader = createSelector(getBannerState, fromBannerDetails.getBannerDetailsLoading);
// export const getBannerLoading = createSelector(getBannerState, fromBannerDetails.getBannerDetailsLoading);

export const getSwipeMissState = createSelector(getAppState, (state: AppState) => state.fromSwipeMiss);
export const getSwipeMissLoader = createSelector(getSwipeMissState, fromSwipeMiss.getSwipeMissLoading);

export const getRejectedDocsState = createSelector(getAppState, (state: AppState) => state.rejecteddocs);
export const getRejectedDocsLoader = createSelector(getRejectedDocsState, fromRejectedDocs.getRejectedDocsLoading);
