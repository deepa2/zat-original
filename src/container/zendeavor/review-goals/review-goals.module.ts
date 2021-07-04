import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReviewGoalsPage } from './review-goals';

@NgModule({
  declarations: [
    ReviewGoalsPage,
  ],
  imports: [
    IonicPageModule.forChild(ReviewGoalsPage),
  ],
})
export class ReviewGoalsPageModule {}
