import { Component } from '@angular/core';
import { Network } from '@ionic-native/network';

/**
 * Generated class for the ConnectivityAlertComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'connectivity-alert',
  templateUrl: 'connectivity-alert.html'
})
export class ConnectivityAlertComponent {

  // connectivityStatus$: Observable<any>;
  // private connectSubscription: Subscription;

  constructor(private network: Network) {
    // this.checkConnectivity();
  }

  // checkConnectivity() {
  //   //watch network for a connection
  //   this.connectSubscription = this.network.onConnect().subscribe(() => {
  //   })
  // }

  ionViewWillLeave() {
    // this.connectSubscription.unsubscribe()
  }
}
