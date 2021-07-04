import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmojiModule } from 'angular-emojione';
import { SfDashbordPage } from './sfDaashbord';
@NgModule({
  declarations: [
    SfDashbordPage
  ],
  imports: [
    EmojiModule,
    IonicPageModule.forChild(SfDashbordPage),
  ],
})
export class SfDashbordPagePageModule { }
