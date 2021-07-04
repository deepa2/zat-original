import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ObDashboardPage } from './ob-dashboard';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects, metaReducers } from '../../store';

@NgModule({
  declarations: [
    ObDashboardPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ObDashboardPage),
    StoreModule.forFeature('app', reducers, { metaReducers }),
    EffectsModule.forFeature(effects),
    PipesModule
  ],
})
export class ObDashboardPageModule {}
