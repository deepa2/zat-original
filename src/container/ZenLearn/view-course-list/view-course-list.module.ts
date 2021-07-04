import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewCourseListPage } from './view-course-list';
import { TooltipsModule } from 'ionic-tooltips';
@NgModule({
  declarations: [
    ViewCourseListPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewCourseListPage),
    TooltipsModule
  ],
})
export class CourseListPageModule {}
