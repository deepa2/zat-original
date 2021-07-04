import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoronaPage } from './corona';
import { ComponentsModule } from '../../components/components.module';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    CoronaPage,
    // CovidInformationComponent
  ],
  imports: [
    ComponentsModule,
    CommonModule,
    IonicPageModule.forChild(CoronaPage),
  ],
})
export class CoronaPageModule {}
