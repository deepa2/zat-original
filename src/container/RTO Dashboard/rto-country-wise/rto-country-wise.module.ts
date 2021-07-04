import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RtoCountryWisePage } from './rto-country-wise';

import {ChartsModule } from 'ng2-charts-x';

@NgModule({
  declarations: [
    RtoCountryWisePage,
  ],
  imports: [
    IonicPageModule.forChild(RtoCountryWisePage),
    ChartsModule
  ],
})
export class RtoCountryWisePageModule {}
