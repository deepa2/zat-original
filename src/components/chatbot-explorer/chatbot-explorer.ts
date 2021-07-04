import { ChatBotPopupComponent } from './../chat-bot-popup/chat-bot-popup';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

/**
 * Generated class for the ChatbotExplorerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chatbot-explorer',
  templateUrl: 'chatbot-explorer.html'
})
export class ChatbotExplorerComponent
{

  private suggestionList = []
  constructor(private navCtrl: NavController)
  {
  }

  close()
  {
    this.navCtrl.pop()
  }

  ngOnInit()
  {
    this.suggestionList = [{ name: "ZenPal" }, { name: "Zeno" }, { name: "Taz" },]
  }
}
