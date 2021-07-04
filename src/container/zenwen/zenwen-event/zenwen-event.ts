import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ModalController } from 'ionic-angular';
import { HttpProvider } from '../../../providers/http/http';
import * as environment from "@app/env";
import * as moment from 'moment';
import { EventDetailModalComponent } from '../../../components/event-detail-modal/event-detail-modal';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities';
/**
 * Generated class for the ZenwenEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zenwen-event',
  templateUrl: 'zenwen-event.html'
})
export class ZenwenEventPage {
  @ViewChild(Slides) slides: Slides;
  private eventType: string = 'live';
  private liveEventList: Array<any> = [];
  private upcomingEventList: Array<any> = [];
  private actualUpcomingEventList: Array<any> = [];
  private pastEventList: Array<any> = [];
  private actualPastEventList: Array<any> = [];
  private imgUrl: string;
  private countries: Array<any> = ['All', 'India', 'USA', 'SouthAfrica', 'U.K', 'Global'];
  private country: string;
  private isShowupNoEvent: boolean=false;
  private isShowpastNoEvent: boolean=false;
  private isShowliveNoEvent: boolean=false;
  private selectOptions = {
    title: 'Select Country',
    // subTitle: 'Equipos no disponibles'        
  };
  private tabname:string = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpProvider: HttpProvider,
    private modalCtrl: ModalController, private utility:CommonUtilities) {
    this.tabname =  this.navParams.get('tabname');
    if(this.tabname == 'upcoming'){
      // this.eventType = 'upcoming';
      setTimeout(() => {
        this.slides.slideTo(1);
      }, 200);
     
    }else if(this.tabname == 'past'){
      // this.eventType = 'past';
      setTimeout(() => {
        this.slides.slideTo(2);
      }, 200);
    }
  
    this.imgUrl = environment.zenwenImgUrl;
    this.country = "All";
  }
  
  ionViewDidLoad() {
    this.getEventData(1);
    this.getEventData(2);
    this.getEventData(3);
    this.onCountryChange(this.country);
  }
  
  slideTo(slideNumber) {
    this.slides.slideTo(slideNumber, 500);
  }
  
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    switch (currentIndex) {
      case 0:
      this.eventType = 'live'
      break;
      case 1:
      this.eventType = 'upcoming'
      break;
      case 2:
      this.eventType = 'past'
      break;
    }
    this.onCountryChange(this.country);
  }

  getEventData(type) {
    this.utility.updateLoader(true);
    let url = 'events';
    let params = { "type": type.toString() }
    this.httpProvider.http.zenwenCommonGETService({ url, params, events: true }).subscribe((res: any) => {
      this.utility.updateLoader(false);
      if (type == 1) {
        this.liveEventList = [];
        this.liveEventList = res.model.calendarBookingModels ? (Array.isArray(res.model.calendarBookingModels) ? res.model.calendarBookingModels : [...this.liveEventList, res.model.calendarBookingModels]) : [];
        
        if(this.liveEventList.length == 0){
          this.isShowliveNoEvent=true;
        }
      } else if (type == 2) {
        this.upcomingEventList = [];
        this.upcomingEventList = res.model.calendarBookingModels ? (Array.isArray(res.model.calendarBookingModels) ? res.model.calendarBookingModels : [...this.upcomingEventList, res.model.calendarBookingModels]) : [];
        this.actualUpcomingEventList = this.upcomingEventList;
        if(this.upcomingEventList.length == 0){
          this.isShowupNoEvent=true;
        }
      } else if (type == 3) {
        this.pastEventList = [];
        this.pastEventList = res.model.calendarBookingModels ? (Array.isArray(res.model.calendarBookingModels) ? res.model.calendarBookingModels : [...this.pastEventList, res.model.calendarBookingModels]) : [];
        this.actualPastEventList = this.pastEventList;
        if(this.pastEventList.length == 0){
          this.isShowpastNoEvent=true;
        }
      }
    })
  }

  onCountryChange(e) {
    if (e == 'All') {
      this.upcomingEventList = this.actualUpcomingEventList;
      this.pastEventList = this.actualPastEventList;
    } else {
      this.upcomingEventList = this.actualUpcomingEventList.filter(eventObj => eventObj.country == e);
      this.pastEventList = this.actualPastEventList.filter(eventObj => eventObj.country == e);
      if(this.upcomingEventList.length == 0){
        this.isShowupNoEvent=true;
      }
      if(this.pastEventList.length == 0){
        this.isShowpastNoEvent=true;
      }
    }
  }

  dateConversion(val, param) {
    let date = moment(val);
    if (param == 'day') {
      return moment(date).format('DD');
    } else if (param == 'month') {
      return moment(date).format('MMM');
    }
  }

  //Open event detail modal
  async openEventDetailModal(obj, selIndex, eventType) {
    let eventModal = this.modalCtrl.create(EventDetailModalComponent, {
      eventObj: obj,
      selIndex,
      eventType
    }, {
        cssClass: 'zenwenEventModal',
        // enableBackdropDismiss: true,
        // showBackdrop: true
      });

    eventModal.present();
    eventModal.onDidDismiss((selectedIndex: any) => {
      if (selectedIndex != null) {
        this.upcomingEventList[selectedIndex].hasRegistered = !this.upcomingEventList[selectedIndex].hasRegistered;
      }
    });
  }

}
