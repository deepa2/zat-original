import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReferralDetailsPage } from './referral-details';
import { ComponentsModule } from '../../components/components.module';
import { IonicSelectableModule } from 'ionic-selectable';
import { EmojiModule } from 'angular-emojione';
import { Attachment } from '../../providers/attachment/attachment';
@NgModule({
  declarations: [
    ReferralDetailsPage,
  ],
  imports: [
    ComponentsModule,
    IonicSelectableModule,
    EmojiModule,
    IonicPageModule.forChild(ReferralDetailsPage),
  ],
  providers:[
    Attachment
  ]
})
export class ZenrichRefDetailPageModule { }
