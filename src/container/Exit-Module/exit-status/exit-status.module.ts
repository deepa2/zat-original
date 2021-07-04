import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExitStatusPage } from './exit-status';
import {ComponentsModule} from '../../../components/components.module';
import {Attachment} from '../../../providers/attachment/attachment';

@NgModule({
  declarations: [
    ExitStatusPage,
  ],
  imports: [
    IonicPageModule.forChild(ExitStatusPage),
    ComponentsModule
  ],
  providers:[Attachment]
})
export class ExitStatusPageModule {}
