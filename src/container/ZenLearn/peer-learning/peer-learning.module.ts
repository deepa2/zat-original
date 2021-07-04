import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PeerLearnigPage } from './peer-learning';
import { ComponentsModule } from '../../../components/components.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  declarations: [
    PeerLearnigPage,
  ],
  imports: [
    IonicPageModule.forChild(PeerLearnigPage),
    ComponentsModule,
    NgCircleProgressModule,
    IonicSelectableModule
  ],
})
export class MyDapPageModule  { }
