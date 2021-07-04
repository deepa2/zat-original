import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DapCoursesListPage } from './dap-courses-list';

@NgModule({
  declarations: [
    DapCoursesListPage,
  ],
  imports: [
    IonicPageModule.forChild(DapCoursesListPage),
  ],
})
export class DapCoursesListPageModule {}
