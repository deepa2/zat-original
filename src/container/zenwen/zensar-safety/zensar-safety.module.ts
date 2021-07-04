import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZensarSafetyPage } from './zensar-safety';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    ZensarSafetyPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ZensarSafetyPage),
  ],
})
export class ZensarSafetyPageModule { }
