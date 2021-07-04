import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdditionalHoursPage } from './additional-hours';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    AdditionalHoursPage,
  ],
  imports: [
    IonicPageModule.forChild(AdditionalHoursPage),
    ComponentsModule
  ],
})
export class AdditionalHoursPageModule { }
