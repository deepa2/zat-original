import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BackdoorEntryPage } from './backdoor-entry';

@NgModule({
  declarations: [
    BackdoorEntryPage,
  ],
  imports: [
    IonicPageModule.forChild(BackdoorEntryPage),
  ]
})
export class BackdoorEntryPageModule {}
