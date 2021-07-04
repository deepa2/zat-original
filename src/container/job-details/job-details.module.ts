import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobDetailsPage } from './job-details';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {PipesModule} from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    JobDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(JobDetailsPage),
    NgCircleProgressModule,
    PipesModule

  ],
})
export class InternalJobPostingPageModule { }
