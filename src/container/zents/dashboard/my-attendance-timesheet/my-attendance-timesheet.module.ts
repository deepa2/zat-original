import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyAttendanceTimesheetPage } from './my-attendance-timesheet';

@NgModule({
  declarations: [
    MyAttendanceTimesheetPage,
  ],
  imports: [
    IonicPageModule.forChild(MyAttendanceTimesheetPage),
  ],
})
export class MyAttendanceTimesheetPageModule {}
