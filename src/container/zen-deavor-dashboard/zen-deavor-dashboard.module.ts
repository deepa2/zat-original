import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZenDeavorDashboardPage } from './zen-deavor-dashboard';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  declarations: [
    ZenDeavorDashboardPage
    
  ],
  imports: [
    IonicPageModule.forChild(ZenDeavorDashboardPage),
    ComponentsModule
  ],
})
export class ZenDeavorDashboardPageModule {}
