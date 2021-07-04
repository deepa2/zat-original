import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaveProfileDetailsPage } from './save-profile-details';

@NgModule({
  declarations: [
    SaveProfileDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SaveProfileDetailsPage),
  ],
})
export class SaveProfileDetailsPageModule {}
