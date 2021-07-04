import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

/**
 * Generated class for the FaqModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'faq-modal',
  templateUrl: 'faq-modal.html'
})
export class FaqModalComponent {
  
  private title:string = null;
  private faqList: Array<any> = [];

  constructor(private navParams:NavParams) {
    let faqData = this.navParams.get('faqData');
    
    this.title = faqData.title;
    this.faqList = faqData.data;
    this.faqList.map((item)=>item.expanded = false);
  }

  expandItem(item) {
    this.faqList.map(listItem => {
      if (item == listItem) {
        listItem.expanded = !listItem.expanded;
      } else {
        listItem.expanded = false;
      }
    });
  }

}
