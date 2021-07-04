import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusdetailsPage } from './busdetails';

@NgModule({
  declarations: [
    BusdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BusdetailsPage),
  ],
})
export class BusdetailsPageModule {}
