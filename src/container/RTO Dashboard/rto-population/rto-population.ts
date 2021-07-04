import { Component, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from '../../../providers/http/http';

/**
 * Generated class for the RtoPopulationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rto-population',
  templateUrl: 'rto-population.html',
})
export class RtoPopulationPage {
  selected: any = 0;
  selectedValue: any = 'BU';
  private selectedMonth: any = '';
  private displayMonth: any = '';
  rtoPopulationData: any = [];
  private monthData: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private httpProvider: HttpProvider, private utilities: CommonUtilities, private popOver: PopoverController) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad RtoPopulationPage');
    this.getData();
  }
  getData() {
    this.utilities.updateLoader(true);
    let param = {
      url: 'rtoPopulationData',
      data: {
        type: this.selectedValue,
        month: this.selectedMonth
      },
      miscellaneous: true
    }
    this.httpProvider.http.commonService(param).subscribe((response: any) => {

      //console.log(response)
      if (response && response.details) {

        if (this.selectedMonth == '') {
          this.rtoPopulationData = response.details.rtopopulationDataBUWise;
          this.monthData = response.details.monthList;
          let month;
          for(let month of this.monthData){
            if(month.isSelected){
              this.displayMonth = month.month;
            }
          }
          //console.log(this.displayMonth);

        } else if (this.selectedMonth != '') {
          this.rtoPopulationData = response.details.rtopopulationDataBUWise;
          // this.monthData = response.details.monthList;
        }
      }
      this.utilities.updateLoader(false);
    }, error => {
      //console.log(error)
      this.utilities.updateLoader(false);
    })
  }


  selectTab(data, value) {
    this.selected = data;
    this.selectedValue = value;
    this.getData();
  }

  openFilter(event) {
    let popOver = this.popOver.create('PopoverPage', { 'monthFilter': this.monthData, 'type': 'rtoPopulation' })
    popOver.present({ ev: event });
    popOver.onDidDismiss((data) => {
      if (data) {
        this.displayMonth = data.month;
        this.selectedMonth = data.month;
        this.monthData = this.monthData.map(value => {
          if (value.month == data.month) {
            value.isSelected = true;
          } else {
            value.isSelected = false;
          }
          return value;
        })

        //console.log(this.monthData);
        this.getData()
      }
    })
  }


}
