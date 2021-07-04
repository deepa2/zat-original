import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusPassPage } from './bus-pass';

@NgModule({
  declarations: [
    BusPassPage,
  ],
  imports: [
    IonicPageModule.forChild(BusPassPage),
  ],
})
export class BusPassPageModule {}
