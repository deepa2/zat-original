import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllCourseListPage } from './all-course-list';
import { TooltipsModule } from 'ionic-tooltips';

@NgModule({
  declarations: [
    AllCourseListPage,
  ],
  imports: [
    IonicPageModule.forChild(AllCourseListPage),
    TooltipsModule
  ],
})
export class CourseListPageModule {}
