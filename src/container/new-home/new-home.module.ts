import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewHomePage } from './new-home';
import { ComponentsModule } from '../../components/components.module'

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects,metaReducers } from '../../store';
// import { VaccinationGraphComponent } from '../../components/vaccination-graph/vaccination-graph';

@NgModule({
  declarations: [
    NewHomePage,
//  VaccinationGraphComponent,
    
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(NewHomePage),
    StoreModule.forFeature('app', reducers,{metaReducers}),
    EffectsModule.forFeature(effects)
  ],
})
export class NewHomePageModule {}
