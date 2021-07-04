import { Component, Input } from '@angular/core';
import { ResponseList } from '../../models/question.model';

@Component({
  selector: 'query-item',
  templateUrl: 'query-item.html'
})
export class QueryItem {

  @Input() item: ResponseList;
  @Input() showOptions: string;
  @Input() detail: boolean;
  

  constructor() {
  }

  ionViewDidEnter(){
    
  }

  formatDate(obj) {
    if (obj) {
      return obj.toString().replace(/\s/g, "T");
    } else {
      return '';
    }
  }

}