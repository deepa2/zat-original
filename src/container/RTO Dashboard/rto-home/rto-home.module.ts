import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RtoHomePage } from './rto-home';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { TooltipsModule } from 'ionic-tooltips'
@NgModule({
  declarations: [
    RtoHomePage,
  ],
  imports: [
    IonicPageModule.forChild(RtoHomePage),
    NgCircleProgressModule,
    TooltipsModule
  ],
})
export class RtoHomePageModule {}
