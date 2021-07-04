import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InternalJobPostingPage } from './internal-job-posting';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    InternalJobPostingPage,
  ],
  imports: [
    IonicPageModule.forChild(InternalJobPostingPage),
    NgCircleProgressModule,
    PipesModule

  ],
})
export class InternalJobPostingPageModule { }
