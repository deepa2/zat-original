import { HttpProvider } from './../../../providers/http/http';
import { CommonUtilities } from './../../../providers/commonUtilities/commonUtilities';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the SearchRoutePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-route',
  templateUrl: 'search-route.html',
})
export class SearchRoutePage {
  private segmentModel: string = 'route'
  private searchInputText: any
  private searchResult: any = [];
  private routeList: any = [];
  private showSegment: boolean = false;
  private showNoDatatxt: boolean = false;
  constructor(public navCtrl: NavController, private utility: CommonUtilities, private httpProvider: HttpProvider) {
  }


  ionViewDidLoad() {
  }

  // Method called when user enters text in search box
  onSearchRoute() {
    if (this.searchInputText.length >= 3) {
      this.getRouteDetails()
    }
    else {
      this.routeList = []
    }
  }
  
  /**
   * Service call for route details-Returns list of available routes
   */
  getRouteDetails() {

    this.httpProvider.http.commonService({ url: "getSearchBusRouteDetails", isZenAdmin: true, data: { "searchKeyWord": this.searchInputText } })
      .subscribe((response: any) => {
        if (!this.utility.isEmptyOrNullOrUndefined(response) && !this.utility.isEmptyOrNullOrUndefined(response['data']) && response.status["statusCode"] == '1') {
          this.searchResult = response['data']
          this.routeList = this.searchResult;
        }
        else if (response.status["statusCode"] == '1' && this.utility.isEmptyOrNullOrUndefined(response['data'])) {
          // no pass available
          this.showNoDatatxt = true;
          this.routeList = []
        }
      }, (err) => {
        this.utility.updateLoader(false)
      })
  }
  
  /**
   * Redirect to route details page
   * @param busRouteId particular route id
   * @param busData bus data to be passed to route details page
   */
  gotoRouteDetails(busRouteId, busData) {
    this.navCtrl.push('ZenadminRouteDetailsPage', { 'busRouteId': busRouteId, 'busDetailsData': busData })
  }

  /**
   * Method called when user clears search text-Clear the searchtext and route list variables
   * @param event event details
   */
  onCancel(event) {
    this.searchInputText = "";
    this.routeList = [];
  }
}
