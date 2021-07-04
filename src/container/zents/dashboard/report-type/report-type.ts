import { Component, SimpleChanges } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ReportTsStatusModalComponent } from '../../../../components/reportTS/report-ts-status-modal/report-ts-status-modal';
import { ReportTsAssociateListModalComponent } from '../../../../components/reportTS/report-ts-associateList-modal/report-ts-associateList-modal';

/**
 * Generated class for the ReportTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report-type',
  templateUrl: 'report-type.html',
})
export class ReportTypePage
{

  params: any;
  private reportNA: boolean = false;
  private dates: any = {};
  private datesFromServer: any = {}

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private modalController: ModalController)
  {
    this.params = this.navParams.get('reportType');
    this.datesFromServer = this.navParams.get('datesFromServer');
    // console.log(this.params)
    // let curDateMonth = new Date();
    // this.dates = {
    //   startDate: `${curDateMonth.getFullYear()}-${("0" + curDateMonth.getMonth()).slice(-2)}-${("0" + curDateMonth.getDate()).slice(-2)}`,
    //   endDate: `${curDateMonth.getFullYear()}-${("0" + (curDateMonth.getMonth() + 1)).slice(-2)}-${("0" + curDateMonth.getDate()).slice(-2)}`,
    // }
    // let convertedStartDate = curDateMonth.setDate(curDateMonth.getMonth() - 1);
    // this.dates.currentMonth = new Date(convertedStartDate).toISOString();

    let curDateMonth = new Date();
    this.dates = {
      startDate: this.datesFromServer.weekSatrtDate,
      endDate: this.datesFromServer.weekEndDate,
    }

    // let convertedStartDate = curDateMonth.setDate(curDateMonth.getMonth() - 1);
    // this.dates.currentMonth = new Date(convertedStartDate).toISOString();


  }

  _getStartDate(event: any)
  {
    // let getStartDate = new Date(event.year, event.month, event.day + 2);
    // let convertedStartDate = getStartDate.setDate(getStartDate.getDate());
    // this.dates.endDate = new Date(convertedStartDate).toISOString();
    let date1: any = new Date(`${event.year}-${event.month}-${event.day}`);
    let date2: any = new Date(this.dates.endDate);
    let diffTime: any = Math.abs(date2 - date1);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    // console.log(diffTime + " milliseconds");
    let getStartDate = new Date(event.year, event.month - 1, event.day);
    // let convertedStartDate = getStartDate.setDate(getStartDate.getDate());
    // console.log(convertedStartDate)
    let endDate = new Date(getStartDate);
    // var today = new Date(this.datesFromServer.weekEndDate);
    // today.setHours(0, 0, 0, 0);
    // if (!(endDate > today)) {
    //   this.dates.endDate = endDate.toISOString()
    // } else {
    //   this.dates.endDate = this.datesFromServer.weekEndDate
    // }

    if (diffDays > 30)
    {
      this.reportNA = true
    } else
    {
      this.reportNA = false
    }
  }

  _getEndDate(event: any)
  {
    let date1: any = new Date(this.dates.startDate);
    let date2: any = new Date(`${event.year}-${event.month}-${event.day}`);
    let diffTime: any = Math.abs(date2 - date1);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays > 30)
    {
      this.reportNA = true
    } else
    {
      this.reportNA = false
    }
  }
}
