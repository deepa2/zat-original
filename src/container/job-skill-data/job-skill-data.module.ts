import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobSkillDataPage } from './job-skill-data';
 import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    JobSkillDataPage,
  ],
  imports: [
    IonicPageModule.forChild(JobSkillDataPage),
     NgCircleProgressModule
  ],
})
export class JobSkillDataPageModule {}
