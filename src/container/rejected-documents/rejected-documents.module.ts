import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RejectedDocumentsPage } from './rejected-documents';

@NgModule({
  declarations: [
    RejectedDocumentsPage,
  ],
  imports: [
    IonicPageModule.forChild(RejectedDocumentsPage),
  ],
})
export class RejectedDocumentsPageModule {}
