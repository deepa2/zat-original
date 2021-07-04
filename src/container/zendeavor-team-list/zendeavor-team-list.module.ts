import { TooltipsModule } from 'ionic-tooltips';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZendeavorTeamListPage } from './zendeavor-team-list';
import {ComponentsModule} from '../../components/components.module';



@NgModule({
  declarations: [
    ZendeavorTeamListPage,
  ],
  imports: [
    IonicPageModule.forChild(ZendeavorTeamListPage),
    ComponentsModule,
    TooltipsModule
    

  ],
})
export class ZendeavorTeamListPageModule { }
