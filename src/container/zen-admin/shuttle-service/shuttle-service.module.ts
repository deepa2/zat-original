import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShuttleServicePage } from './shuttle-service';

@NgModule({
  declarations: [
    ShuttleServicePage,
  ],
  imports: [
    IonicPageModule.forChild(ShuttleServicePage),
  ],
})
export class ShuttleServicePageModule {}
