import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExitDashboardPage } from './exit-dashboard';
import {PipesModule} from '../../../pipes/pipes.module';

@NgModule({
  declarations: [
    ExitDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(ExitDashboardPage),
    PipesModule
  ],
})
export class ExitDashboardPageModule {}
