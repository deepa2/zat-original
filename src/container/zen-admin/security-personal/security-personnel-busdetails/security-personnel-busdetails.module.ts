import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecurityPersonnelBusdetailsPage } from './security-personnel-busdetails';
import { PipesModule } from '../../../../pipes/pipes.module';
@NgModule({
  declarations: [
    SecurityPersonnelBusdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SecurityPersonnelBusdetailsPage),
    PipesModule
  ],
})
export class SecurityPersonnelBusdetailsPageModule { }
