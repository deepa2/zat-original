import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobApplicantsPage } from './job-applicants';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    JobApplicantsPage,
  ],
  imports: [
    IonicPageModule.forChild(JobApplicantsPage),
    NgCircleProgressModule,
  ],
})
export class DapDetailPageModule  { }
