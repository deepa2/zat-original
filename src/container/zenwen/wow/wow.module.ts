import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WowPage } from './wow';
import { ComponentsModule } from '../../../components/components.module';
import { EmojiModule } from 'angular-emojione';
@NgModule({
  declarations: [
    WowPage,
  ],
  imports: [
    ComponentsModule,
    EmojiModule,
    IonicPageModule.forChild(WowPage),
  ],
})
export class WowPageModule { }
