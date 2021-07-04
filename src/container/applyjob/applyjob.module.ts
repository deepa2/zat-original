import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApplyjobPage } from './applyjob';
import { ComponentsModule } from '../../components/components.module';
import { Attachment } from '../../providers/attachment/attachment';

@NgModule({
  declarations: [
    ApplyjobPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ApplyjobPage),
  ],
  providers:[
    Attachment
  ]
})
export class ApplyjobPageModule {}
