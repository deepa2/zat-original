import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimeEntryPage } from './time-entry';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    TimeEntryPage,
  ],
  imports: [
    IonicPageModule.forChild(TimeEntryPage),
    ComponentsModule
  ]
})
export class TimeEntryPageModule { }
