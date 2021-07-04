import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApplyAdditionalHoursPage } from './apply-additional-hours';

@NgModule({
  declarations: [
    ApplyAdditionalHoursPage,
  ],
  imports: [
    IonicPageModule.forChild(ApplyAdditionalHoursPage),
  ],
  exports:[ApplyAdditionalHoursPage]
})
export class ApplyAdditionalHoursPageModule {}
