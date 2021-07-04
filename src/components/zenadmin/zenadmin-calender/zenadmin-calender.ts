import { HttpProvider } from './../../../providers/http/http';
import { CommonUtilities } from './../../../providers/commonUtilities/commonUtilities';
import { NavParams, ModalController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { Component } from '@angular/core';
import * as moment from 'moment';


/**
 * Generated class for the ZenadminCalenderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'zenadmin-calender',
  templateUrl: 'zenadmin-calender.html'
})
export class ZenadminCalenderComponent {

  private tempDates: any = [];
  private monthNames: any = [];
  private monthModel: any;
  private responseList: any;
  private selectOptions: any;
  private datesInFirstMonth: any = []
  private datesInCurrentMonth: any = []
  private currentYear = moment().year();
  private daysInThisMonth: any = []
  private daysInLastMonth: any = []
  private daysInNextMonth: any = []
  private daysArray: any = [
    { day: 'Sunday' },
    { day: 'Monday' },
    { day: 'Tuesday' },
    { day: 'Wednesday' },
    { day: 'Thursday' },
    { day: 'Friday' },
    { day: 'Saturday' },

  ]

  constructor(private viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams, private utility: CommonUtilities, private httpProvider: HttpProvider, private modalCtrl: ModalController) {
    this.getCalendarDetails()
    this.selectOptions = {
      title: 'Select Month',
    };
  }
  
  dismissModal() {
    this.viewCtrl.dismiss()
  }

  /**
   * Service call to get calendar details.
   * Returns pass status details for each month
   */
  getCalendarDetails() {
    this.utility.updateLoader(true)
    this.httpProvider.http.commonService({ url: 'getUserCalendarDetails', data: {}, isZenAdmin: true })
      .subscribe((response: any) => {
        if (response) {
          this.utility.updateLoader(false);
          if (!this.utility.isEmptyOrNullOrUndefined(response['data']) && response.status["statusCode"] == '1') {
            this.responseList = response['data'];
            const [FirstMonth, SecondMonth, ThirdMonth] = this.responseList

            this.responseList.forEach(element => {
              this.monthNames.push(element.monthName)
            });
            this.monthModel = SecondMonth.monthName

            this.datesInFirstMonth = SecondMonth.calendarDOs
            this.datesInCurrentMonth = this.datesInFirstMonth
            let [startDay] = this.datesInFirstMonth
            for (let index = 0; index < this.daysArray.length; index++) {
              if (this.daysArray[index].day == startDay.day)
                break
              else
                this.daysInLastMonth.push({ day: this.daysArray[index].day })

            }
          }
        }
      }, error => {
        this.utility.updateLoader(false);
      });
  }

  /**
   * Handles month change event.
   * Calculates the current month details and assigns it to the datesInCurrentMonth variable
   * @param selectedMonthName selected month name 
   */
  OnMonthChange(selectedMonthName) {
    this.daysInLastMonth = []
    let selectedMontDetails = this.responseList.find((monthItem) => {
      if (selectedMonthName == monthItem.monthName) {
        return monthItem
      }
    })
    this.datesInCurrentMonth = selectedMontDetails.calendarDOs
    let temp = this.datesInCurrentMonth
    let [startDay] = temp
    for (let index = 0; index < this.daysArray.length; index++) {
      if (this.daysArray[index].day == startDay.day)
        break
      else
        this.daysInLastMonth.push({ day: this.daysArray[index].day })

    }

  }
}
