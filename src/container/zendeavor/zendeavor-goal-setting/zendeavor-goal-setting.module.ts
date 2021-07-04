import { DirectivesModule } from './../../../directives/directives.module';
import { TooltipsModule } from 'ionic-tooltips';
import { FormControlService } from './../../../providers/formService/form-control.service';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZendeavorGoalSettingPage } from './zendeavor-goal-setting';

@NgModule({
  declarations: [
    ZendeavorGoalSettingPage,
  ],
  imports: [
    IonicPageModule.forChild(ZendeavorGoalSettingPage),
    TooltipsModule,
    DirectivesModule
    
  ],
  providers: [
    FormControlService
  ]
})
export class ZendeavorGoalSettingPageModule { }
