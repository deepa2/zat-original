import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZenwenDashboardPage } from './zenwen-dashboard';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    ZenwenDashboardPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ZenwenDashboardPage),
  ],
})
export class ZenwenDashboardPageModule {}
