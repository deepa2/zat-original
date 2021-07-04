import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BusRoutePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bus-route',
  templateUrl: 'bus-route.html',
})
export class BusRoutePage {
private details:any;
private segmentModel: string = 'Root';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusRoutePage');
  }
  ngOnInit(){
    this.details=[
      {
        img1:"assets/zenAdmin/bus-route-icon.svg",
        route:"Route:",
        city:"Bhopal",
        img2:"assets/zenAdmin/arrow-icon.svg",
      },
      {
        img1:"assets/zenAdmin/bus-route-icon.svg",
        route:"Route:",
        city:"Bhopal",
        img2:"assets/zenAdmin/arrow-icon.svg",
      },
      {
        img1:"assets/zenAdmin/bus-route-icon.svg",
        route:"Route:",
        city:"Bhopal",
        img2:"assets/zenAdmin/arrow-icon.svg",
      },
      {
        img1:"assets/zenAdmin/bus-route-icon.svg",
        route:"Route:",
        city:"Bhopal",
        img2:"assets/zenAdmin/arrow-icon.svg",
      },
      {
        img1:"assets/zenAdmin/bus-route-icon.svg",
        route:"Route:",
        city:"Bhopal",
        img2:"assets/zenAdmin/arrow-icon.svg",
      },
      {

        img1:"assets/zenAdmin/bus-route-icon.svg",
        route:"Route:",
        city:"Bhopal",
        img2:"assets/zenAdmin/arrow-icon.svg",
      },
      {
        img1:"assets/zenAdmin/bus-route-icon.svg",
        route:"Route:",
        city:"Bhopal",
        img2:"assets/zenAdmin/arrow-icon.svg",
      },
      {
        img1:"assets/zenAdmin/bus-route-icon.svg",
        route:"Route:",
        city:"Bhopal",
        img2:"assets/zenAdmin/arrow-icon.svg",
      },
      {
        img1:"assets/zenAdmin/bus-route-icon.svg",
        route:"Route:",
        city:"Bhopal",
        img2:"assets/zenAdmin/arrow-icon.svg",
      },
      {
        img1:"assets/zenAdmin/bus-route-icon.svg",
        route:"Route:",
        city:"Bhopal",
        img2:"assets/zenAdmin/arrow-icon.svg",
      },
      {
        img1:"assets/zenAdmin/bus-route-icon.svg",
        route:"Route:",
        city:"Bhopal",
        img2:"assets/zenAdmin/arrow-icon.svg",
      },
    ]
  }

}
