import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatBotNew } from "./chat-bot-new";
import { LinkyModule } from 'ngx-linky';
import { PipesModule } from '../../pipes/pipes.module';
import { AddTaskPageModule } from '../../container/zents/timesheet/add-task/add-task.module';
import { ChatBotServices } from './chat-bot-new-services/chat-bot-new.services';
import { ChatBotComponentModule } from './chat-bot-components/chat-bot-components.module';

@NgModule({
  entryComponents: [

  ],
  declarations: [
    ChatBotNew,
  ],
  imports: [
    ChatBotComponentModule,
    IonicPageModule.forChild(ChatBotNew),
    LinkyModule,
    PipesModule,
    AddTaskPageModule
  ],
  providers: [ChatBotServices]
})
export class ChatBotModule { }
