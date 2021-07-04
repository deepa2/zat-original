import { NgModule } from '@angular/core';
import { QueryList } from './query-list/query-list'
import { QueryItem } from './query-item/query-item';
import { ProfileImage } from './profile-image/profile-image';
import { ProfileItem } from './profile-item/profile-item';
import { ElasticTextArea } from './elastic-text-area/elastic-text-area';
import { NotificationItem } from './notification-item/notification-item';
import { Rating } from './rating/rating';
import { IonicModule } from 'ionic-angular'
import { ExpandableComponent } from './expandable/expandable';
import { Sidebar } from './side-bar/side-bar';
import { FormFieldComponent } from './form-field/form-field';
import { MultimediaComponent } from './multimedia/multimedia';
import { LinkyModule } from 'ngx-linky';
import { EmojiModule } from 'angular-emojione';
import { AnnouncementItemComponent } from './announcement-item/announcement-item';
import { IonicSelectableModule } from 'ionic-selectable';
import { FormFieldItemComponent } from './form-field-item/form-field-item';
import { ReadMoreComponent } from './read-more/read-more';
import { TooltipsModule } from 'ionic-tooltips';
import { ToolTipComponent } from './tool-tip/tool-tip';
import { ConnectivityAlertComponent } from '../container/connectivity-alert/connectivity-alert';
import { KralistComponent } from './kralist/kralist';
import { KraTrainingComponent } from './kra-training/kra-training';
import { ChatModelComponent } from './chat-model/chat-model';



// import { ChatModelComponent } from './chat-model/chat-model';



// import { FaqDetail } from './faq-detail/faq-detail';


//ZenTS
import { ListItemComponent } from './list-item/list-item.component';
import { ProjectTaskComponent } from './project-task/project-task';
import { TsEditModalComponent } from './ts-edit-modal/ts-edit-modal';
import { AdditionalHourListItemComponent } from './additional-hour-list-item/additional-hour-list-item';
import { OtEditModalComponent } from './ot-edit-modal/ot-edit-modal';
import { RedirectKraComponent } from './redirect-kra/redirect-kra';
import { KraConsentComponent } from './kra-consent/kra-consent';

import { ApprovalTimesheetItemComponent } from './approval-timesheet-item/approval-timesheet-item';
import { ApprovalTimesheetApproveModalComponent } from './approval-timesheet-approve-modal/approval-timesheet-approve-modal';
import { ApprovalTimesheetPendingModalComponent } from './approval-timesheet-pending-modal/approval-timesheet-pending-modal';
import { PreApprovalTimesheetItemComponent } from './pre-approval-timesheet-item/pre-approval-timesheet-item';
import { PreApprovalTimesheetPendingModalComponent } from './pre-approval-timesheet-pending-modal/pre-approval-timesheet-pending-modal';
import { ApprovalTimesheetFilterModalComponent } from './approval-timesheet-filter-modal/approval-timesheet-filter-modal';
import { StdTaskListModalComponent } from './std-task-list-modal/std-task-list-modal';
import { ImagePreviewComponent } from './image-preview/image-preview';
import { TimeEntryPopupComponent } from './time-entry-popup/time-entry-popup';
import { ZendeavorTeamMeanModalComponent } from './zendeavor-team-mean-modal/zendeavor-team-mean-modal';
import { SearchAssociatesConsultationModalComponent } from './search-associates-consultation-modal/search-associates-consultation-modal';
import { EventDetailModalComponent } from './event-detail-modal/event-detail-modal';
import { ZenwenSpeakDetailsComponent } from './zenwen-speak-details/zenwen-speak-details';
import { CovidInformationComponent } from './covid-information/covid-information';
import { GatePassCheckComponent } from './gatepass-check/gatepass-check';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions';
import { AddCommentModalComponent } from './add-comment-modal/add-comment-modal';
import { ZendeavorSendConsultationModalComponent } from './zendeavor-send-consultation-modal/zendeavor-send-consultation-modal';
import { EmpContactListModelComponent } from './emp-contact-list-model/emp-contact-list-model';
import { TimesheetDataComponent } from './timesheet-data/timesheet-data';
import { SelectSuggestionComponent } from './select-suggestion/select-suggestion';
import { ApplicationDownComponent } from './application-down/application-down';
import { PendingTimesheetListModalComponent } from './pending-timesheet-list-modal/pending-timesheet-list-modal';
import { FaqModalComponent } from './faq-modal/faq-modal';
import { ExpandCollapseComponent } from './expand-collapse/expand-collapse';
import { DigitalIdCardComponent } from './digital-id-card/digital-id-card';
import { CreateTaskComponent } from './create-task/create-task';
// import { learningHrsComponent } from './../container/chat-bot-new/chat-bot-components/learning-hrs/learning-hrs';
import { PerformanceMeasuretextAreaComponent } from './performance-measuretext-area/performance-measuretext-area';
import { FilterJobComponent } from './filter-job/filter-job';
import { AddCompetancyComponent } from './add-competency/add-competency';
import { ReportTsStatusModalComponent } from './reportTS/report-ts-status-modal/report-ts-status-modal';
import { ReportTsAssociateListModalComponent } from './reportTS/report-ts-associateList-modal/report-ts-associateList-modal';
import { ReportTimecardComponent } from './reportTS/report-timecard/report-timecard';
import { ZenrichTermsConditionsComponent } from './zenrich-terms-conditions/zenrich-terms-conditions';
import { AccordianComponent } from './accordian/accordian';
import { ExitRecoveryDetailsComponent } from './exit-recovery-details/exit-recovery-details';
import { ExitEmailComponent } from './exit-email/exit-email';
import { ReportCommonComponent } from './reportTS/report-common/report-common';

import { AppUpdateAlertComponent } from './app-update-alert/app-update-alert';
import { ReportTimesheetComponent } from './reportTS/report-timesheet/report-timesheet';
import { ReportOvertimeComponent } from './reportTS/report-overtime/report-overtime';
import { ReportNotFilledTSComponent } from './reportTS/report-not-filledTS/report-not-filledTS';
import { ReportSelectedListModal } from './reportTS/report-selected-list-modal/report-selected-list-modal';
import { ReferralComponent } from './referral-component/referral-component';
import { CoronaSafetyMeasuresAlertComponent } from './corona-safety-measures-alert/corona-safety-measures-alert';
import { CarnivalAlertComponent } from './carnival-alert/carnival-alert';
import { TopicsAlertComponent } from './topics-alert/topics-alert';
import { DapAlertComponent } from './dap-alert/dap-alert';
import { MatchingProfileComponent } from './matching-profile/matching-profile';
import { MenteeAlertComponent } from './mentee-alert/mentee-alert';
import { ZenlearnOnTheJobComponent } from './zenlearn-on-the-job/zenlearn-on-the-job';
import { ZenlearnNewRequestComponent } from './zenlearn-new-request/zenlearn-new-request';
import { ChatBotPopupComponent } from './chat-bot-popup/chat-bot-popup';
import { ChatbotExplorerComponent } from './chatbot-explorer/chatbot-explorer';
import { UserAssetDetailsModalComponent } from './user-asset-details-modal/user-asset-details-modal';
import { SouthAfricaImmigrationComplianceComponent } from './south-africa-immigration-compliance/south-africa-immigration-compliance';
import { ZenadminCalenderComponent } from './zenadmin/zenadmin-calender/zenadmin-calender';
import { CancelBuspassModalComponent } from './zenadmin/cancel-buspass-modal/cancel-buspass-modal';
import { BusRulesModalComponent } from './zenadmin/bus-rules-modal/bus-rules-modal';
import { AdminAddPickupPointsComponent } from './zenadmin/admin-add-pickup-points/admin-add-pickup-points';
import { AddNewPickupPtModalComponent } from './zenadmin/add-new-pickup-pt-modal/add-new-pickup-pt-modal';
import { PromotionDetailsComponent } from './promotion-details/promotion-details';
import { SkillModalComponent } from './skill-modal/skill-modal';
import { DirectReportiesComponent } from './direct-reporties/direct-reporties';
import { LeaveDeclarationComponent } from './leave-declaration/leave-declaration';
import { ReimbursmentDeclarationComponent } from './reimbursment-declaration/reimbursment-declaration';
import { AddNewRouteModalComponent } from './zenadmin/add-new-route-modal/add-new-route-modal';
import { VaccinationGraphComponent } from './vaccination-graph/vaccination-graph';

// import {AutocompleteLibModule} from 'angular-ng-autocomplete';


@NgModule({
    declarations: [QueryList, QueryItem, ProfileImage, ElasticTextArea, Rating, NotificationItem, ProfileItem,
        ExpandableComponent, Sidebar, FormFieldComponent, MultimediaComponent, ReadMoreComponent,
        AnnouncementItemComponent, FormFieldItemComponent, ToolTipComponent,
        ConnectivityAlertComponent, ListItemComponent, ProjectTaskComponent,
        TsEditModalComponent, AdditionalHourListItemComponent, OtEditModalComponent,
        KralistComponent, KraTrainingComponent, RedirectKraComponent, KraConsentComponent,
        ApprovalTimesheetItemComponent,
        ApprovalTimesheetApproveModalComponent,
        ApprovalTimesheetPendingModalComponent,
        PreApprovalTimesheetItemComponent,
        PreApprovalTimesheetPendingModalComponent,
        ApprovalTimesheetFilterModalComponent,
        StdTaskListModalComponent, ChatModelComponent,
        ImagePreviewComponent,
        TimeEntryPopupComponent,
        ZendeavorTeamMeanModalComponent,
        SearchAssociatesConsultationModalComponent,
        EventDetailModalComponent,
        ZenwenSpeakDetailsComponent,
        CovidInformationComponent,
        GatePassCheckComponent,
        TermsConditionsComponent,
        ZenrichTermsConditionsComponent,
        AddCommentModalComponent,
        ZendeavorSendConsultationModalComponent,
        EmpContactListModelComponent,
        TimesheetDataComponent,
        SelectSuggestionComponent,
        ApplicationDownComponent,
        PendingTimesheetListModalComponent,
        FaqModalComponent,
        ExpandCollapseComponent,
        DigitalIdCardComponent,
        CreateTaskComponent,
        // learningHrsComponent,
        AddCompetancyComponent,
        PerformanceMeasuretextAreaComponent,
        FilterJobComponent,
        ReportTsStatusModalComponent,
        ReportTsAssociateListModalComponent,
        ReportTimecardComponent,
        AccordianComponent,
        ExitRecoveryDetailsComponent,
        ExitEmailComponent,
        AppUpdateAlertComponent,
        ReportCommonComponent,
        ReportTimesheetComponent,
        ReportOvertimeComponent,
        ReportNotFilledTSComponent,
        ReportSelectedListModal,
        ReferralComponent,
        // ReportSendAlertComponent
        AppUpdateAlertComponent,
        CoronaSafetyMeasuresAlertComponent,
        CarnivalAlertComponent,
        TopicsAlertComponent,
        DapAlertComponent,
        MatchingProfileComponent,
        MenteeAlertComponent,
        ZenlearnOnTheJobComponent,
        ZenlearnNewRequestComponent,
        ChatBotPopupComponent,
        ChatbotExplorerComponent,
        UserAssetDetailsModalComponent,
        SouthAfricaImmigrationComplianceComponent,
        ZenadminCalenderComponent,
        CancelBuspassModalComponent,
        BusRulesModalComponent,
        AdminAddPickupPointsComponent,
        AddNewPickupPtModalComponent,
        PromotionDetailsComponent,
        SkillModalComponent,
        DirectReportiesComponent,
        LeaveDeclarationComponent,
        ReimbursmentDeclarationComponent,
        AddNewRouteModalComponent,
    VaccinationGraphComponent
        // ChatModelComponent
    ],
    imports: [IonicModule, LinkyModule, EmojiModule, IonicSelectableModule, TooltipsModule],
    exports: [QueryList, QueryItem, ProfileImage, ElasticTextArea, Rating, NotificationItem, ProfileItem,
        ExpandableComponent, Sidebar, FormFieldComponent, MultimediaComponent, ReadMoreComponent,
        AnnouncementItemComponent, FormFieldItemComponent, ToolTipComponent,
        ConnectivityAlertComponent, ListItemComponent, ProjectTaskComponent,
        TsEditModalComponent, AdditionalHourListItemComponent, OtEditModalComponent,
        KralistComponent, KraTrainingComponent, RedirectKraComponent, KraConsentComponent,
        ApprovalTimesheetItemComponent,
        ApprovalTimesheetApproveModalComponent,
        ApprovalTimesheetPendingModalComponent,
        PreApprovalTimesheetItemComponent,
        PreApprovalTimesheetPendingModalComponent,
        ApprovalTimesheetFilterModalComponent,
        StdTaskListModalComponent, ChatModelComponent,
        ImagePreviewComponent,
        TimeEntryPopupComponent,
        ZendeavorTeamMeanModalComponent,
        SearchAssociatesConsultationModalComponent,
        EventDetailModalComponent,
        ZenwenSpeakDetailsComponent,
        CovidInformationComponent,
        GatePassCheckComponent,
        TermsConditionsComponent,
        ZenrichTermsConditionsComponent,
        AddCommentModalComponent,
        ZendeavorSendConsultationModalComponent,
        EmpContactListModelComponent,
        TimesheetDataComponent,
        SelectSuggestionComponent,
        ApplicationDownComponent,
        PendingTimesheetListModalComponent,
        FaqModalComponent,
        ExpandCollapseComponent,
        DigitalIdCardComponent,
        CreateTaskComponent,
        // learningHrsComponent,
        AddCompetancyComponent,
        PerformanceMeasuretextAreaComponent,
        FilterJobComponent,
        ReportTsStatusModalComponent,
        ReportTsAssociateListModalComponent,
        ReportTimecardComponent,
        AccordianComponent,
        ExitRecoveryDetailsComponent,
        ExitEmailComponent,
        AppUpdateAlertComponent,
        ReportCommonComponent,
        ReportTimesheetComponent,
        ReportOvertimeComponent,
        ReportNotFilledTSComponent,
        ReportSelectedListModal,
        ReferralComponent,
        // ReportSendAlertComponent
        CoronaSafetyMeasuresAlertComponent,
        CarnivalAlertComponent,
        TopicsAlertComponent,
        DapAlertComponent,
        MatchingProfileComponent,
        MenteeAlertComponent,
        ZenlearnOnTheJobComponent,
        ZenlearnNewRequestComponent,
        ChatBotPopupComponent,
        ChatbotExplorerComponent,
        UserAssetDetailsModalComponent,
        SouthAfricaImmigrationComplianceComponent,
        ZenadminCalenderComponent,
        CancelBuspassModalComponent,
        BusRulesModalComponent,
        AdminAddPickupPointsComponent,
        AddNewPickupPtModalComponent,
        PromotionDetailsComponent,
        SkillModalComponent,
        DirectReportiesComponent,
        LeaveDeclarationComponent,
        ReimbursmentDeclarationComponent,
        AddNewRouteModalComponent,
    VaccinationGraphComponent
        // ChatModelComponent
    ],
    entryComponents: [TsEditModalComponent,
        OtEditModalComponent,
        KraTrainingComponent,
        RedirectKraComponent,
        KraConsentComponent,
        ApprovalTimesheetItemComponent,
        ApprovalTimesheetApproveModalComponent,
        ApprovalTimesheetPendingModalComponent,
        PreApprovalTimesheetItemComponent,
        PreApprovalTimesheetPendingModalComponent,
        ApprovalTimesheetFilterModalComponent,
        StdTaskListModalComponent,
        ChatModelComponent,
        ImagePreviewComponent,
        TimeEntryPopupComponent,
        ZendeavorTeamMeanModalComponent,
        SearchAssociatesConsultationModalComponent,
        EventDetailModalComponent,
        ZenwenSpeakDetailsComponent,
        CovidInformationComponent,
        GatePassCheckComponent,
        TermsConditionsComponent,
        ZenrichTermsConditionsComponent,
        AddCommentModalComponent,
        ZendeavorSendConsultationModalComponent,
        EmpContactListModelComponent,
        TimesheetDataComponent,
        SelectSuggestionComponent,
        ApplicationDownComponent,
        PendingTimesheetListModalComponent,
        FaqModalComponent,
        ExpandCollapseComponent,
        DigitalIdCardComponent,
        AddCompetancyComponent,
        PerformanceMeasuretextAreaComponent,
        FilterJobComponent,
        ReportTsStatusModalComponent,
        ReportTsAssociateListModalComponent,
        ReportTimecardComponent,
        AccordianComponent,
        ExitRecoveryDetailsComponent,
        ExitEmailComponent,
        Rating,
        AppUpdateAlertComponent,
        ReportCommonComponent,
        ReportTimesheetComponent,
        ReportOvertimeComponent,
        ReportNotFilledTSComponent,
        ReportSelectedListModal,
        ReferralComponent,
        // ReportSendAlertComponent
        AppUpdateAlertComponent,
        CoronaSafetyMeasuresAlertComponent,
        CarnivalAlertComponent,
        TopicsAlertComponent,
        DapAlertComponent,
        MatchingProfileComponent,
        MenteeAlertComponent,
        ZenlearnOnTheJobComponent,
        ZenlearnNewRequestComponent,
        ChatBotPopupComponent,
        ChatbotExplorerComponent,
        UserAssetDetailsModalComponent,
        SouthAfricaImmigrationComplianceComponent,
        ZenadminCalenderComponent,
        CancelBuspassModalComponent,
        BusRulesModalComponent,
        AdminAddPickupPointsComponent,
        AddNewPickupPtModalComponent,
        PromotionDetailsComponent,
        AddNewPickupPtModalComponent,
        SkillModalComponent,
        DirectReportiesComponent,
        LeaveDeclarationComponent,
        ReimbursmentDeclarationComponent,
        AddNewRouteModalComponent,
        VaccinationGraphComponent
    ]
})
export class ComponentsModule { }