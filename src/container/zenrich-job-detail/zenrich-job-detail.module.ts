import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZenrichJobDetailPage } from './zenrich-job-detail';
import { ComponentsModule } from '../../components/components.module';
import { EmojiModule } from 'angular-emojione';
@NgModule({
  declarations: [
    ZenrichJobDetailPage,
  ],
  imports: [
    ComponentsModule,
    EmojiModule,
    IonicPageModule.forChild(ZenrichJobDetailPage),
  ],
})
export class ZenrichJobDetailPageModule { }
