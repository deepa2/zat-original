import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BannerDetailsPage } from './banner-details';

@NgModule({
  declarations: [
    BannerDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BannerDetailsPage),
  ],
})
export class BannerDetailsPageModule {}
