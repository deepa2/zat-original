import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DapDetailPage } from './dap-detail';
import { ComponentsModule } from '../../../components/components.module';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    DapDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(DapDetailPage),
    ComponentsModule,
    NgCircleProgressModule,
  ],
})
export class DapDetailPageModule  { }
