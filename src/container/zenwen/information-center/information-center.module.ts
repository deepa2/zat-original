import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InformationCenterPage } from './information-center';

@NgModule({
  declarations: [
    InformationCenterPage,
  ],
  imports: [
    IonicPageModule.forChild(InformationCenterPage),
  ],
})
export class InformationCenterPageModule {}
