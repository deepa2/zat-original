import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZenadminHomePage } from './zenadmin-home';

@NgModule({
  declarations: [
    ZenadminHomePage,
  ],
  imports: [
    IonicPageModule.forChild(ZenadminHomePage),
  ],
})
export class ZenadminHomePageModule {}
