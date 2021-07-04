import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PipesModule } from '../../../pipes/pipes.module';
import { TravelerListDetailsPage } from './traveler-list-details';
@NgModule({
  declarations: [
    TravelerListDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(TravelerListDetailsPage),
    PipesModule
  ],
})
export class TravelerListDetailsPageModule { }
