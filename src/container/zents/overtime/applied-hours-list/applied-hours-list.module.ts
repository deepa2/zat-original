import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppliedHoursListPage } from './applied-hours-list';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    AppliedHoursListPage,
  ],
  imports: [
    IonicPageModule.forChild(AppliedHoursListPage),
    ComponentsModule
  ],
  exports:[AppliedHoursListPage]
})
export class AppliedHoursListPageModule { }
