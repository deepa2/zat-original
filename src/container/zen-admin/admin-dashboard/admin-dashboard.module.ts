import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminDashboardPage } from './admin-dashboard';

// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';
// Import FusionCharts library
import * as FusionCharts from 'fusioncharts';
// Load FusionCharts Individual Charts
import * as Charts from 'fusioncharts/fusioncharts.charts';
// Use fcRoot function to inject FusionCharts library, and the modules you want to use
FusionChartsModule.fcRoot(FusionCharts, Charts)
//FusionCharts.options

@NgModule({
  declarations: [
    AdminDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminDashboardPage),
    FusionChartsModule
  ],
})
export class AdminDashboardPageModule {}
