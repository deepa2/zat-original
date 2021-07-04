import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNewPassPage } from './add-new-pass';

@NgModule({
  declarations: [
    AddNewPassPage,
  ],
  imports: [
    IonicPageModule.forChild(AddNewPassPage),
  ],
})
export class AddNewPassPageModule {}
