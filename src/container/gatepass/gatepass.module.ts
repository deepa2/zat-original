import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GatePassPage } from './gatepass';
import { ComponentsModule } from '../../components/components.module';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    GatePassPage,
    // CovidInformationComponent
  ],
  imports: [
    ComponentsModule,
    CommonModule,
    IonicPageModule.forChild(GatePassPage),
  ],
})
export class GatePassPageModule {}
