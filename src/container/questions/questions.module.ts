import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionsPage } from './questions';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module'

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects,metaReducers } from '../../store';

@NgModule({
  declarations: [QuestionsPage],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicPageModule.forChild(QuestionsPage),
    StoreModule.forFeature('app', reducers,{metaReducers}),
    EffectsModule.forFeature(effects),
  ],
})
export class QuestionsPageModule {}