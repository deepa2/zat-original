import { ChatbotExplorerComponent } from './../chatbot-explorer/chatbot-explorer';
import { ModalController, NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { Data } from '../../providers/data/data';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
/**
 * Generated class for the ChatBotPopupComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chat-bot-popup',
  templateUrl: 'chat-bot-popup.html'
})
export class ChatBotPopupComponent
{

  text: string;


  private userDetails: any;

  constructor(private data: Data, private mdlCtrl: ModalController, private utility: CommonUtilities,
    private navCtrl: NavController)
  {
    this.text = 'Hello World';
  }

  ngOnInit()
  {
    this.data.getData('loginDetails').then((userInfo: any) =>
    {
      this.userDetails = userInfo.details.userDetails
    })
  }

  openExplorerPopup()
  {
    let modalCtrl = this.mdlCtrl.create(ChatbotExplorerComponent, {}, {
      cssClass: 'chatbot-explorerCSS',
      enableBackdropDismiss: true,
      showBackdrop: true
    })
    modalCtrl.onDidDismiss((data) =>
    {
      if (!this.utility.isEmptyOrNullOrUndefined(data) && !this.utility.isEmptyOrNullOrUndefined(data.moveToChatDetails))
      {
        this.navCtrl.push("ChatBot", {
          data: data.data
        })
      }
    })
    modalCtrl.present();
  }
}
