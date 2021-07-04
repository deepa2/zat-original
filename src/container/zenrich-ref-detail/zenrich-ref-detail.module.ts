import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZenrichRefDetailPage } from './zenrich-ref-detail';
import { ComponentsModule } from '../../components/components.module';
import { EmojiModule } from 'angular-emojione';
@NgModule({
  declarations: [
    ZenrichRefDetailPage,
  ],
  imports: [
    ComponentsModule,
    EmojiModule,
    IonicPageModule.forChild(ZenrichRefDetailPage),
  ],
})
export class ZenrichRefDetailPageModule { }
