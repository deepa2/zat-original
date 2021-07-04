import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ModalController } from 'ionic-angular';
import { HttpProvider } from '../../../providers/http/http';
import * as environment from "@app/env";
import * as moment from 'moment';
import { EventDetailModalComponent } from '../../../components/event-detail-modal/event-detail-modal';

/**
 * Generated class for the Safety@Zensar page.
 */

@IonicPage()
@Component({
  selector: 'zensar-safety',
  templateUrl: 'zensar-safety.html'
})
export class ZensarSafetyPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private httpProvider: HttpProvider,
    private modalCtrl: ModalController) {
   
  }

  ionViewDidLoad() {
    this.getEventData(3);
  }

  
  getEventData(type) {
    
    let url = 'events';
    let params = { "type": type.toString() }
    this.httpProvider.http.zenwenCommonGETService({ url, params, events: true }).subscribe((res: any) => {
      
    })
  }


}
