import { DirectivesModule } from './../../../directives/directives.module';
import { TooltipsModule } from 'ionic-tooltips';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZendeavorAddSubKrasPage } from './zendeavor-add-sub-kras';
import { Attachment } from '../../../providers/attachment/attachment'


@NgModule({
  declarations: [
    ZendeavorAddSubKrasPage,
  ],
  imports: [
    IonicPageModule.forChild(ZendeavorAddSubKrasPage),
    TooltipsModule,
    DirectivesModule,
    

  ],
  providers: [
    Attachment
  ]
})
export class ZendeavorAddSubKrasPageModule {}
