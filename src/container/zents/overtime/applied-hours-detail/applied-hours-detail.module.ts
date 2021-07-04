import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppliedHoursDetailPage } from './applied-hours-detail';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    AppliedHoursDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AppliedHoursDetailPage),
    ComponentsModule
  ],
})
export class AppliedHoursDetailPageModule { }
