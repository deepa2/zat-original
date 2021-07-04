import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyDapPage } from './my-dap';
import { ComponentsModule } from '../../../components/components.module';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    MyDapPage,
  ],
  imports: [
    IonicPageModule.forChild(MyDapPage),
    ComponentsModule,
    NgCircleProgressModule,
  ],
})
export class MyDapPageModule  { }
