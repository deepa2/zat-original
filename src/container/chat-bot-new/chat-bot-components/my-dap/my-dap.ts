import { Component, Input, Output, SimpleChanges, EventEmitter, ViewChild } from '@angular/core';
import { ChatBotServices } from '../../../../container/chat-bot-new/chat-bot-new-services/chat-bot-new.services';
import {  Slides } from 'ionic-angular';
import { CommonUtilities } from '../../../../providers/commonUtilities/commonUtilities';

/**
 * Generated class for the ReferralComponent component.
 */
@Component({
  selector: 'my-dap',
  templateUrl: 'my-dap.html'
})
export class MyDAP {

  @ViewChild(Slides) slides: Slides;

  @Input() myDAPDetails: any;
  @Output() scrollToBottom: EventEmitter<any> = new EventEmitter();

  myDAPData: any;
  slidePerView: string = '1';

  constructor(private utilities: CommonUtilities, private chatBotServices: ChatBotServices) {
  }

  ngOnInit() {
    this._countteamMembersDAP(this.myDAPDetails.restApi, this.myDAPDetails.parameters)
  }


  _countteamMembersDAP(restApi, body) {
    this.utilities.updateLoader(true);
    this.chatBotServices._restAPICall({ url: restApi, params: body }).then((response: any) => {
      if (response.data.details) {
        this.myDAPData = response.data.details
        if (this.myDAPData.length > 0)
          this.slidePerView = "1.2";
      }
      this.scrollToBottom.emit();
      this.utilities.updateLoader(false);
    },
      error => {
        this.utilities.updateLoader(false);
      })
  }
}
