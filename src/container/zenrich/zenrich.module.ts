import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZenrichPage } from './zenrich';
import { ComponentsModule } from '../../components/components.module';
import { EmojiModule } from 'angular-emojione';
import { Attachment } from '../../providers/attachment/attachment';
import {PipesModule} from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ZenrichPage
   
  ],
  imports: [
    ComponentsModule,
    EmojiModule,
    IonicPageModule.forChild(ZenrichPage),
    PipesModule
  ]
})
export class ZenrichPageModule { }
