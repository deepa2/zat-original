import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobPostingPage } from './job-posting';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {PipesModule} from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    JobPostingPage,
  ],
  imports: [
    IonicPageModule.forChild(JobPostingPage),
    NgCircleProgressModule,
    PipesModule

  ],
})
export class InternalJobPostingPageModule { }
