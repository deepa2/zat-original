import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreApprovalTimesheetPendingPage } from './pre-approval-timesheet-pending';
import {ComponentsModule} from '../../../../components/components.module'

@NgModule({
  declarations: [
    PreApprovalTimesheetPendingPage,
  ],
  imports: [
    IonicPageModule.forChild(PreApprovalTimesheetPendingPage),
    ComponentsModule
  ],
})
export class PreApprovalTimesheetPendingPageModule {}
