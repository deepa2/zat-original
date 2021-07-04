import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApprovalDashboardPage } from './approval-dashboard';

// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library
import * as FusionCharts from 'fusioncharts';

// Load FusionCharts Individual Charts
import * as Charts from 'fusioncharts/fusioncharts.charts';

// Use fcRoot function to inject FusionCharts library, and the modules you want to use
FusionChartsModule.fcRoot(FusionCharts, Charts)

import {ComponentsModule} from "../../../../components/components.module";

@NgModule({
  declarations: [
    ApprovalDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(ApprovalDashboardPage),
    FusionChartsModule,
    ComponentsModule
  ],
})
export class ApprovalDashboardPageModule {}
