import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamListForGoalSettingPage } from './team-list-for-goal-setting';

@NgModule({
  declarations: [
    TeamListForGoalSettingPage,
  ],
  imports: [
    IonicPageModule.forChild(TeamListForGoalSettingPage),
  ],
})
export class TeamListForGoalSettingPageModule {}
