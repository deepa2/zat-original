import { NgModule } from "@angular/core";
import { IonicModule } from "ionic-angular";
import { ChatBotSuggestionModel } from "./chat-bot-suggestion-model/chat-bot-suggestion-model";

@NgModule({
    entryComponents: [ChatBotSuggestionModel],
    declarations: [
        ChatBotSuggestionModel
    ],
    imports: [
        IonicModule
    ],
    exports: [
        
    ]
})
export class ChatBotModalModule { }