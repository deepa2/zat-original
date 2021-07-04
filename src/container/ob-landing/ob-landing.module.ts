import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ObLandingPage } from './ob-landing';
import { PipesModule } from '../../pipes/pipes.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects, metaReducers } from '../../store';
@NgModule({
  declarations: [
    ObLandingPage,
  ],
  imports: [
    IonicPageModule.forChild(ObLandingPage),
    StoreModule.forFeature('app', reducers, { metaReducers }),
    EffectsModule.forFeature(effects),
    PipesModule
  ],
})
export class ObLandingPageModule { } 
