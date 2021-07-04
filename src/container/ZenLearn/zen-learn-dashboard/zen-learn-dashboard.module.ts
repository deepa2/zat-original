import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZenLearnDashboardPage } from './zen-learn-dashboard';

@NgModule({
  declarations: [
    ZenLearnDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(ZenLearnDashboardPage),
  ],
  exports: [ZenLearnDashboardPage]
})
export class ZenLearnDashboardPageModule { }
