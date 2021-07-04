import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApprovalTimesheetApprovedPage } from './approval-timesheet-approved';
import {ComponentsModule} from '../../../../components/components.module'

@NgModule({
  declarations: [
    ApprovalTimesheetApprovedPage,
    
  ],
  imports: [
    IonicPageModule.forChild(ApprovalTimesheetApprovedPage),
    ComponentsModule
  ],
})
export class ApprovalTimesheetApprovedPageModule {}
