import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController,LoadingController } from 'ionic-angular';
import { Store } from "@ngrx/store";
import * as fromStore from '../../store';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';
import { Data } from '../../providers/data/data';
import * as faqModel from '../../models/faq.model';
import { HttpProvider } from '../../providers/http/http';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities'


@IonicPage()
@Component({
  selector: 'page-faq-details',
  templateUrl: 'faq-details.html',
})
export class FaqDetailsPage {
  information: faqModel.Detail[];
  loading$: Observable<any>;
  url: string = 'getFaqsData';
  deptId: number;
  pageTitle: string;


  private _faqListener: Subscription = new Subscription();

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController,
    private httpProvider: HttpProvider, private store: Store<fromStore.AppState>, private utilities: CommonUtilities,private loader:LoadingController) {
  }

  ionViewDidLoad() {

    this.loading$ = this.store.select<any>(fromStore.getFAQLoading);

    this.deptId = this.navParams.get('deptId')

    this.getFaqData();

    this.pageTitle = this.navParams.get('pageTitle');
  }

  getFaqData() {
    let loader = this.loader.create({
      content:'Please wait'
    });
    loader.present();
    let data = {
      url: 'getFaqsData',
      data: { "departmentId": this.deptId },
      miscellaneous: true

    }
    this.httpProvider.http.commonService(data).subscribe((response: any) => {
      //this.utilities.updateLoader(false);
      if (response.details) {
        this.information = response.detailData;
        loader.dismiss();
      }
    }, error => {
      this.utilities.updateLoader(false);
      loader.dismiss();
      //console.log(error);

    })


    // this.store.dispatch(new fromStore.GetFaqDetailsAction(this.url, data));

    // return new Promise(resolve => {
    //   this._faqListener = this.store.select<any>(fromStore.getFAQState).subscribe((response: faqModel.faqState) => {
    //     if (response.pending == false) {
    //       this.information = response.detailData;
    //       resolve();
    //     }
    //   }, err => {
    //   })
    // })
  }


  presentOptions(myEvent) {

    let popover = this
      .popoverCtrl
      .create('PopoverPage', { 'type': 'others' });

    popover.present({ ev: myEvent });
  }

  ionViewWillLeave() {
    this._faqListener.unsubscribe();
  }

}


