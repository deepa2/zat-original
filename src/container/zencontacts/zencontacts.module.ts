import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZencontactsPage } from './zencontacts';

@NgModule({
  declarations: [
    ZencontactsPage,
  ],
  imports: [
    IonicPageModule.forChild(ZencontactsPage),
  ],
})
export class ZencontactsPageModule {}
