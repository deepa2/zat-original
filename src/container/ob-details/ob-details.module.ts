import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ObDetailsPage } from './ob-details';

@NgModule({
  declarations: [
    ObDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ObDetailsPage),
  ],
})
export class ObDetailsPageModule {}
