import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardDetailPage } from './dashboard-detail';
import { FusionChartsModule } from 'angular-fusioncharts';
import FusionCharts from 'fusioncharts/core';
import splinearea from 'fusioncharts/viz/splinearea';
FusionChartsModule.fcRoot(FusionCharts, splinearea);

@NgModule({
  declarations: [
    DashboardDetailPage,
  ],
  imports: [
    FusionChartsModule,
    IonicPageModule.forChild(DashboardDetailPage),
  ],
})
export class DashboardDetailPageModule {}
