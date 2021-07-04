import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamListPage } from './team-list';
import { ComponentsModule } from '../../../components/components.module';
import { PipesModule } from '../../../pipes/pipes.module';
@NgModule({
  declarations: [
    TeamListPage,
  ],
  imports: [
    IonicPageModule.forChild(TeamListPage),
    ComponentsModule,
    PipesModule
  ],
})
export class TeamListPageModule  { }
