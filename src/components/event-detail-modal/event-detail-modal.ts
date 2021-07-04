import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import * as moment from 'moment';
import { HttpProvider } from '../../providers/http/http';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
/**
 * Generated class for the EventDetailModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'event-detail-modal',
  templateUrl: 'event-detail-modal.html'
})
export class EventDetailModalComponent {

  private eventObj: any;
  private selectedIndex: number = null;
  private eventType: string;
  private openFor: string = null;
  private btnName: string = null;

  constructor(private navParams: NavParams, private httpProvider: HttpProvider, private utility: CommonUtilities,
    private viewCtrl: ViewController) {
    this.eventObj = this.navParams.get('eventObj');
    this.selectedIndex = this.navParams.get('selIndex');
    this.eventType = this.navParams.get('eventType');
    this.openFor = this.eventObj.hasRegistrationRequired ? this.eventObj.seats : 'All';
    this.btnName = this.eventObj.hasRegistered ? "Cancel your seat" : "Book your seat";
  }

  dateConversion(val) {
    let date = moment(val);
    let formatDate = moment(date).format('DD') + "/" + moment(date).format('MM') + "/" + moment(date).format('YYYY') + " " + moment(date).format('HH') + ":" + moment(date).format('mm');
    return formatDate;
  }

  //Confirm Booking 
  showBookingConfirmAlert() {
    let alertMsg = this.eventObj.hasRegistered ? "Are you sure you want to cancel your registration ?" : "Are you sure you want to register ?";
    let alert = this.utility.presentConfirmation(alertMsg);
    alert.then(() => {
      if (this.eventObj.attenders == this.eventObj.seats && !this.eventObj.hasRegistered) {
        this.utility.presentAlert('Sorry..!!You are late...Booking is Full');
      } else {
        this.bookSeat();
      }
    });
  }

  bookSeat() {
    this.utility.updateLoader(true);
    let url = "joinEvent";
    let params = { "calendarBookingId": this.eventObj.calendarEntryId.toString() }
    // let formData = new FormData();
    // formData.append("calendarBookingId", this.eventObj.calendarEntryId.toString())
    // let data = formData;
    this.httpProvider.http.zenwenCommonPostService({ url, params, zenEvents: true }).subscribe((res: any) => {
      this.utility.updateLoader(false);
      if (res && res.success) {
        this.utility.presentAlert("Event booking successfull").then(() => {
          this.viewCtrl.dismiss(this.selectedIndex);
        });
      } else if (res && !res.success) {
        this.utility.presentAlert("Event booking cancelled").then(() => {
          this.viewCtrl.dismiss(this.selectedIndex);
        });
      }
    })
  }

}
