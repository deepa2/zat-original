import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResponseList } from '../../models/question.model';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';


@Component({
  selector: 'query-list',
  templateUrl: 'query-list.html'
})
export class QueryList {

  @Input() items: ResponseList;
  @Input() type: string;
  @Input() showOptions: string;
  @Input() detail: boolean;
  @Output() gotToDetail: EventEmitter<string> = new EventEmitter();
  timeline: boolean = false;

  constructor(private navCtrl: NavController, private utilities: CommonUtilities) { }

  gotTo(detailInfo) {

    this.gotToDetail.emit(detailInfo);
  }

  toggle() {
    this.timeline = !this.timeline;
  }
}

