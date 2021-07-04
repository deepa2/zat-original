import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { API_END_POINTS_REPORT } from '../../../../providers/app-services-list/app.services-list';
import { CommonUtilities } from '../../../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from '../../../../providers/http/http';



/**
 * Generated class for the ReportsTsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage
{

  private reportList: Array<Object> = [];
  private datesFromServer: Object = {}

  constructor(public navCtrl: NavController, public navParams: NavParams, private utilities: CommonUtilities, private httpProvider: HttpProvider)
  {
    this._getReoprtList()
  }


  _moveToReportType(reportType: Object)
  {
    this.navCtrl.push('ReportTypePage', { reportType: reportType, datesFromServer: this.datesFromServer })
  }

  _getReoprtList()
  {
    let data = {
      url: API_END_POINTS_REPORT.REPORT_ACCESS_FLAG,
      data: {},
      zenTsReport: true
    }
    this.utilities.updateLoader(true);
    this.httpProvider.http.zentsCommonService(data).subscribe((response: any) =>
    {
      if (response.data)
      {
        this.reportList = response.data.accessList;
        this.datesFromServer = response.data.date
      }

      this.utilities.updateLoader(false);
    },
      error =>
      {
        this.utilities.updateLoader(false);
        //console.log(error)
      })
  }
}
