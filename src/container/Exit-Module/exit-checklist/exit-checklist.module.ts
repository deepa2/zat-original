import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExitChecklistPage } from './exit-checklist';

@NgModule({
  declarations: [
    ExitChecklistPage,
  ],
  imports: [
    IonicPageModule.forChild(ExitChecklistPage),
  ],
})
export class ExitChecklistPageModule {}
