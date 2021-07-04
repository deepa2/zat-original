import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecurityPersonnelBuseslistPage } from './security-personnel-buseslist';

@NgModule({
  declarations: [
    SecurityPersonnelBuseslistPage,
  ],
  imports: [
    IonicPageModule.forChild(SecurityPersonnelBuseslistPage),
  ],
})
export class SecurityPersonnelBuseslistPageModule {}
