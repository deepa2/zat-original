import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZenRichLandingPage } from './zen-rich-landing';
@NgModule({
  declarations: [
    ZenRichLandingPage,
  ],
  imports: [
    IonicPageModule.forChild(ZenRichLandingPage),
  ],
})

export class ZenRichLandingPageModule {}
