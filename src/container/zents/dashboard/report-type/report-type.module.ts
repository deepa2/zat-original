import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportTypePage } from './report-type';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    ReportTypePage,
  ],
  imports: [
    IonicPageModule.forChild(ReportTypePage),
    ComponentsModule
  ],
})
export class ReportTypePageModule { }
