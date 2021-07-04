import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PassDetailsPage } from './pass-details';

@NgModule({
  declarations: [
    PassDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PassDetailsPage),
  ],
})
export class PassDetailsPageModule {}
