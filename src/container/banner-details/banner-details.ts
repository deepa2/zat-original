import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Data } from '../../providers/data/data';
import { Observable } from 'rxjs';

/**
 * Generated class for the BannerDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-banner-details',
  templateUrl: 'banner-details.html',
})
export class BannerDetailsPage {

  bannerUrl: string = "getBannerDetail";
  bannerId: string;
  bannerName:string;
  bannerDetails: any;
  userType: any;
  loading$: Observable<any>;

  constructor(private navCtrl: NavController, private navParams: NavParams, private store: Store<fromStore.AppState>,
    private popoverCtrl: PopoverController, private dataService: Data) {
    this.bannerId = this.navParams.get("bannerId");
    this.bannerName=this.navParams.get('bannerName');

    this.dataService.getData('loginDetails').then((loginData:any) => {
      if (loginData.details) {
        this.userType = loginData.details.userDetails.userType;
      }
    })


  
  }

  ionViewDidLoad() {
    this.loading$ = this.store.select<any>(fromStore.getBannerDetailsLoader);

    let body = {
      bannerId: this.bannerId
    }

    this.store.dispatch(new fromStore.getBannerDetailsAction(this.bannerUrl, body));
    this.store.select<any>(fromStore.getBannerState).subscribe((bannerDetails) => {
      if (bannerDetails && bannerDetails.data && bannerDetails.data.response) {
        this.bannerDetails = bannerDetails.data.response
      }
    });
  }

  presentPopover(myEvent) {
    let popover = this
      .popoverCtrl
      .create('PopoverPage', { 'type': 'home' });
    popover.present({ ev: myEvent });
  }

}
