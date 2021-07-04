import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SwitchUserPage } from './switch-user';

@NgModule({
  declarations: [
    SwitchUserPage,
  ],
  imports: [
    IonicPageModule.forChild(SwitchUserPage),
  ],
})
export class SwitchUserPageModule {}
