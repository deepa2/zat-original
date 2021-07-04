import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from '../../../providers/http/http';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts-x';
import { Label, Color } from 'ng2-charts'


/**
 * Generated class for the RtoCountryWisePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rto-country-wise',
  templateUrl: 'rto-country-wise.html',
})
export class RtoCountryWisePage {

  private lineChartData: ChartDataSets[];
  private lineChartLabels: Label[];
  private lineChartColors: Color[];
  private lineChartLegend = true;
  private lineChartType = 'bar';
  private lineChartPlugins = [];
  private lineChartColor = [];
  private chartoptions: ChartOptions = {}
  @ViewChild('myChart') canvas: ElementRef;
  //@ViewChild(BaseChartDirective) chart: BaseChartDirective;

  selectedCountryData: any;
  weekWiseData: any = [];
  monthsList: any = [];
  selectedMonth: any = "";
  selectedCountry: string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, private utility: CommonUtilities, private httpProvider: HttpProvider, private popOver: PopoverController) {
    this.selectedCountryData = this.navParams.get('selectedCountry');
    if (this.selectedCountryData.key == 'INDIA') {
      this.selectedCountry = 'IND';
    }else{
      this.selectedCountry = this.selectedCountryData.key;
    }

    //console.log(this.selectedCountryData)
  }

  ionViewDidLoad() {
    this.getCountryWiseData();


  }

  getCountryWiseData() {
    this.utility.updateLoader(true)
    let param = {
      url: 'covidSafetyDetail',
      data: {
        'country': this.selectedCountryData.key,
        'month': this.selectedMonth
      },
      miscellaneous: true
    }
    this.httpProvider.http.commonService(param).subscribe((response: any) => {
      //console.log(response);
      if (response && response.details) {
        if (this.selectedMonth == '') {
          this.monthsList = response.details.monthList;
          this.selectedMonth = this.monthsList[this.monthsList.length - 1];
          this.weekWiseData = response.details.weekWiseCovidDetail;
          // this.lineChartData =response.details.graphData
          let needHelpData = response.details.graphData[1].data;
          let safeData = response.details.graphData[0].data
          //console.log(needHelpData)
          this.lineChartData = [{ data: needHelpData, yAxisID: 'y-axis-1', type: 'line', fill: false, label: 'Need help' },
          { data: safeData, yAxisID: 'y-axis-0', label: 'I am safe' }]
          this.lineChartLabels = response.details.graphLabel;

          this.chartoptions = {
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  id: 'y-axis-0',
                  position: 'left',
                },
                {
                  id: 'y-axis-1',
                  position: 'right',
                  ticks: {
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }

          this.lineChartColors = [
            {
              pointBackgroundColor: 'white',
              borderWidth: 2,
              borderColor: '#FFBF5E',
              backgroundColor: '#FFBF5E'

            },
            {
              pointBackgroundColor: 'white',
              borderWidth: 1,
              backgroundColor: '#A2C3FF',
            }
          ];
        } else if (this.selectedMonth != '') {
          this.monthsList = response.details.monthList;
          this.weekWiseData = response.details.weekWiseCovidDetail;
          let needHelpData = response.details.graphData[1].data;
          let safeData = response.details.graphData[0].data
          //console.log(needHelpData)
          this.lineChartData = [{ data: needHelpData, yAxisID: 'y-axis-1', type: 'line', fill: false, label: 'Need help' },
          { data: safeData, yAxisID: 'y-axis-0', label: 'I am safe' }]
          this.lineChartLabels = response.details.graphLabel;

          this.chartoptions = {
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  id: 'y-axis-0',
                  position: 'left',
                },
                {
                  id: 'y-axis-1',
                  position: 'right',
                  ticks: {
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }

          this.lineChartColors = [
            {
              pointBackgroundColor: 'white',
              borderWidth: 2,
              borderColor: '#FFBF5E',
              backgroundColor: '#FFBF5E'

            },
            {
              pointBackgroundColor: 'white',
              borderWidth: 1,
              backgroundColor: '#A2C3FF',
            }
          ];
        }

      }
      this.utility.updateLoader(false);
    },
      error => {
        //console.log(error);
        this.utility.updateLoader(false);
      })
  }

  presentOption(event) {
    let popOver = this.popOver.create('PopoverPage', { 'type': 'rtoData', 'selectedMonth': this.selectedMonth, 'monthsData': this.monthsList })
    popOver.present({ ev: event });
    popOver.onDidDismiss(value => {
      if (value) {
        this.selectedMonth = value.month;
        this.getCountryWiseData();
      }
    })
  }

}
