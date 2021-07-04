import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZenrichProfilePage } from './zenrich-profile';
import { ComponentsModule } from '../../components/components.module';
import { EmojiModule } from 'angular-emojione';
import { Attachment } from '../../providers/attachment/attachment';
@NgModule({
  declarations: [
    ZenrichProfilePage,
  ],
  imports: [
    ComponentsModule,
    EmojiModule,
    IonicPageModule.forChild(ZenrichProfilePage),
  ]
})
export class ZenrichProfilePageModule { }
