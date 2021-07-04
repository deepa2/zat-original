import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TravelersListPage } from './travelers-list';

@NgModule({
  declarations: [
    TravelersListPage,
  ],
  imports: [
    IonicPageModule.forChild(TravelersListPage),
  ],
})
export class TravelersListPageModule {}
