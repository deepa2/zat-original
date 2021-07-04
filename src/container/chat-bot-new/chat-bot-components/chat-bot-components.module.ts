import { NgModule } from "@angular/core";
import { EmojiModule } from "angular-emojione";
import { IonicModule } from "ionic-angular";
import { IonicSelectableModule } from "ionic-selectable";
import { LinkyModule } from 'ngx-linky';
import { ComponentsModule } from '../../../components/components.module';
import { CreateTaskComponent } from "./create-task/create-task";
import { ReadMoreComponent } from "./read-more/read-more";
import { TimesheetDataComponent } from "./timesheet-data/timesheet-data";
import { ProjectTaskComponent } from "../../../components/project-task/project-task";
import { ReferralComponent } from "./referral-component/referral-component";
import { MatchingProfileComponent } from "./matching-profile/matching-profile";
import { SelectSuggestionComponent } from "./select-suggestion/select-suggestion";
import { FeedbackComponent } from './feedback-componenet/feedback-componenet';
import { PendingTimesheetComponent } from "./pending-timesheet/pending-timesheet";
import { MyTimesheetDetailComponent } from "./my-timesheet-detail/my-timesheet-detail";
import { ProjectAllocationComponent } from "./project-allocation/project-allocation";
import { learningHrsComponent } from "./learning-hrs/learning-hrs";
import { CoursesListComponent } from "./courses-list/courses-list";
import { MyDAP } from "./my-dap/my-dap";

@NgModule({
    entryComponents: [ProjectTaskComponent],
    declarations: [
        ReadMoreComponent,
        TimesheetDataComponent,
        CreateTaskComponent,
        learningHrsComponent,
        ReferralComponent,
        MatchingProfileComponent,
        SelectSuggestionComponent,
        FeedbackComponent,
        PendingTimesheetComponent,
        MyTimesheetDetailComponent,
        ProjectAllocationComponent,
        CoursesListComponent,
        MyDAP
    ],
    imports: [
        ComponentsModule,
        IonicModule,
        EmojiModule,
        IonicSelectableModule,
        LinkyModule
    ],
    exports: [
        ReadMoreComponent,
        TimesheetDataComponent,
        CreateTaskComponent,
        learningHrsComponent,
        ReferralComponent,
        MatchingProfileComponent,
        SelectSuggestionComponent,
        FeedbackComponent,
        PendingTimesheetComponent,
        MyTimesheetDetailComponent,
        ProjectAllocationComponent,
        CoursesListComponent,
        MyDAP
    ]
})
export class ChatBotComponentModule { }