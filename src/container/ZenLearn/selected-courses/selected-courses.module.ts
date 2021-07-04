import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectedCoursesPage } from './selected-courses';

@NgModule({
  declarations: [
    SelectedCoursesPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectedCoursesPage),
  ],
})
export class SelectedCoursesPageModule {}
