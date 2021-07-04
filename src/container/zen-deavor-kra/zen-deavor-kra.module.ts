import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZenDeavorKraPage } from './zen-deavor-kra';
import { Attachment } from '../../providers/attachment/attachment';
//import {ComponentsModule} from '../../components/components.module';
import { TooltipsModule } from 'ionic-tooltips';
@NgModule({
  declarations: [
    ZenDeavorKraPage,
  ],
  imports: [
    IonicPageModule.forChild(ZenDeavorKraPage),
    //ComponentsModule
    TooltipsModule
  ],
  providers: [
    Attachment
  ]
})
export class ZenDeavorKraPageModule { }
