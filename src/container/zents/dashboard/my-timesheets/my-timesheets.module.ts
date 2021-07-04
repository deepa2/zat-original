import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyTimesheetsPage } from './my-timesheets';

@NgModule({
  declarations: [
    MyTimesheetsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyTimesheetsPage),
  ],
})
export class MyTimesheetsPageModule {}
