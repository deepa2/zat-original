import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatBot } from './chat-bot';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects, metaReducers } from '../../store';
import { PipesModule } from '../../pipes/pipes.module';
/*import { TruncateModule } from 'ng2-truncate'; */
import { ComponentsModule } from '../../components/components.module'
import { LinkyModule } from 'ngx-linky';
import { AddTaskPageModule } from '../../container/zents/timesheet/add-task/add-task.module';
// container/zents/timesheet/add-task/add-task.module


@NgModule({
  entryComponents: [],
  declarations: [
    ChatBot,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ChatBot),
    StoreModule.forFeature('app', reducers, { metaReducers }),
    EffectsModule.forFeature(effects),
    LinkyModule,
    PipesModule,
    AddTaskPageModule

  ],
})
export class ChatBotModule { }
