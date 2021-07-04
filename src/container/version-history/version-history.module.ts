import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VersionHistoryPage } from './version-history';

@NgModule({
  declarations: [
    VersionHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(VersionHistoryPage),
  ],
})
export class VersionHistoryPageModule {}
