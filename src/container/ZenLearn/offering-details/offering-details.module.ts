import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfferingDetailsPage } from './offering-details';

@NgModule({
  declarations: [
    OfferingDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(OfferingDetailsPage),
  ],
})
export class OfferingDetailsPageModule {}
