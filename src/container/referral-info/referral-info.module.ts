import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReferralInfoPage } from './referral-info';
import { ComponentsModule } from '../../components/components.module';
import { EmojiModule } from 'angular-emojione';
import { Attachment } from '../../providers/attachment/attachment';
@NgModule({
  declarations: [
    ReferralInfoPage,
  ],
  imports: [
    ComponentsModule,
    EmojiModule,
    IonicPageModule.forChild(ReferralInfoPage),
  ],
  providers:[
    Attachment
  ]
})
export class ZenrichRefDetailPageModule { }
