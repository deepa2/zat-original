import { Injectable, NgModule } from '@angular/core';
import { Network } from '@ionic-native/network';
import { AlertController } from 'ionic-angular';
import { Subscription } from 'rxjs';

@NgModule({
    providers: [Network]
})

@Injectable()
export class ConnectivityService {

    onDevice: Boolean;
    isNetworkOnline: Boolean;
    private disconnectSubscription: Subscription;
    private connectSubscription: Subscription;

    constructor(private alertCtrl: AlertController, private network: Network) {

        this.isNetworkOnline = (this.network.type == "none") ? false : true;

        // //watch network for disconnection
        // this.disconnectSubscription = this.network.onDisconnect().subscribe(() => {
        //     // alert('network was disconnected');
        //     this.isNetworkOnline = false;
        // });

        // //watch network for a connection
        // this.connectSubscription = this.network.onConnect().subscribe(() => {
        //     // alert('network is connected');
        //     this.isNetworkOnline = true;
        // });
    }

    isOnline(): Boolean {
        return this.isNetworkOnline;
    }

}
