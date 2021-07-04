import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutTazPage } from './about-taz';


@NgModule({
  declarations: [
    AboutTazPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutTazPage),
  ],
})
export class AboutPageModule {}
