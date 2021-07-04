import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DashboardDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard-detail',
  templateUrl: 'dashboard-detail.html',
})
export class DashboardDetailPage {
  width = '100%';
  height = '50%';
  type = 'splinearea';
  dataFormat = 'json';
  dataSource = {
    "chart": {
      //"chartLeftMargin": "5",
      "caption": "Yearly sales of iPhone",
      "yaxisname": "Number of units sold",
      "subcaption": "2007-2016",
      "plottooltext": "<div><b>$dataValue</b> iPhones sold in $label</div>",
      "theme": "ocean"
    },
    "data": [
      {
        "label": "2007",
        "value": "1380000"
      },
      {
        "label": "2008",
        "value": "1450000"
      },
      {
        "label": "2009",
        "value": "1610000"
      },
      {
        "label": "2010",
        "value": "1540000"
      },
      {
        "label": "2011",
        "value": "1480000"
      },
      {
        "label": "2012",
        "value": "1573000"
      },
      {
        "label": "2013",
        "value": "2232000"
      },
      {
        "label": "2014",
        "value": "2476000"
      },
      {
        "label": "2015",
        "value": "2832000"
      },
      {
        "label": "2016",
        "value": "3808000"
      }
    ]
  }
  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

}
