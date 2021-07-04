import { TooltipsModule } from 'ionic-tooltips';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZendeavorReviewerListPage } from './zendeavor-reviewer-list';

@NgModule({
  declarations: [
    ZendeavorReviewerListPage,
  ],
  imports: [
    IonicPageModule.forChild(ZendeavorReviewerListPage),
    TooltipsModule
  ],
})
export class ZendeavorReviewerListPageModule {}
