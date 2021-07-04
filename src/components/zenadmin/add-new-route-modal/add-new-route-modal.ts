import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { CommonUtilities } from './../../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from './../../../providers/http/http';


/**
 * Generated class for the AddNewRouteModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'add-new-route-modal',
  templateUrl: 'add-new-route-modal.html'
})
export class AddNewRouteModalComponent {

  private searchInputText: any
  private routeListData: any;
  private searchResult: any = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, private utility: CommonUtilities,private httpProvider: HttpProvider) {

    // if (!this.utility.isEmptyOrNullOrUndefined(this.navParams.get('data')))
    //   this.routeListData = this.navParams.get('data').routeList


    console.log('routeListData', this.routeListData)
    // this.text = 'Hello World';
  }
  // filterRoutes(ev: any) {

  //   const val = ev.target.value;
  //   if (val && val.trim() != '') {
  //     this.routeListData = this.routeListData.filter((routes) => {
  //       return (routes.routeName.toLowerCase().indexOf(val.toLowerCase()) > -1);

  //     })
      
      
  //   }
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewRoutePage');
  }
  routesArray: any = [];


  closeModal() {
    this.viewCtrl.dismiss(null);
  }
  addNewRoute() {
    this.viewCtrl.dismiss(this.searchInputText)
  }

  onCancel(event) {
    //console.log("cancel called")

    this.searchInputText = ""
    this.routeListData=[]

  }
  onSelectRouteName(routeDetail) {
    if (!this.utility.isEmptyOrNullOrUndefined(routeDetail))
      this.viewCtrl.dismiss({routeDetail:routeDetail})
  }
    /**
   * Service call for route details-Returns list of available routes
   */
  getRouteDetails() {

    this.httpProvider.http.commonService({ url: "getSearchBusRouteDetails", isZenAdmin: true, data: { "searchKeyWord": this.searchInputText ,"searchType" : "route"} })
      .subscribe((response: any) => {
        if (!this.utility.isEmptyOrNullOrUndefined(response) && !this.utility.isEmptyOrNullOrUndefined(response['data']) && response.status["statusCode"] == '1') {
          this.searchResult = response['data']
          this.routeListData = this.searchResult;
        }
        else if (response.status["statusCode"] == '1' && this.utility.isEmptyOrNullOrUndefined(response['data'])) {
          // no pass available
          // this.showNoDatatxt = true;
          this.routeListData = []
        }
      }, (err) => {
        this.utility.updateLoader(false)
      })
  }
   // Method called when user enters text in search box
   onSearchRoute() {
    if (this.searchInputText.length >= 3) {
      this.getRouteDetails()
    }
    else {
      this.routeListData = []
    }
  }
}
