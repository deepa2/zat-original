import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MentorsPage } from './mentors';

@NgModule({
  declarations: [
    MentorsPage,
  ],
  imports: [
    IonicPageModule.forChild(MentorsPage),
  ],
})
export class MentorsPageModule {}
