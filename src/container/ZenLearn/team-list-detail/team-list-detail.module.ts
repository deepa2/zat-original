import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamListDetailPage } from './team-list-detail';
import { ComponentsModule } from '../../../components/components.module';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    TeamListDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TeamListDetailPage),
    ComponentsModule,
    NgCircleProgressModule,
  ],
})
export class TeamListDetailPageModule  { }
