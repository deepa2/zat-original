import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController } from 'ionic-angular';
import { Store } from "@ngrx/store";
import * as fromStore from '../../store';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';
import * as faqModel from '../../models/faq.model';
import { FaqDetail } from '../../components/faq-detail/faq-detail';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { HttpProvider } from '../../providers/http/http';

@IonicPage()
@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
})
export class FaqPage
{
  information: faqModel.Detail[];
  loading$: Observable<any>;
  url: string = 'getDepartmentListFaqs';
  pageTitle: string;
  paramsFromChatBot: any;

  private _faqListener: Subscription = new Subscription();
  private _faqLoading: Subscription = new Subscription();

  constructor(private viewCtrl: ViewController, private utilities: CommonUtilities, private modalCtrl: ModalController,
    private navParams: NavParams, private popoverCtrl: PopoverController, private httpProvider: HttpProvider)
  {

  }
  ngOnInit()
  {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.getFaqData();
  }
  ionViewDidLoad()
  {

    // this.loading$ = this.store.select<any>(fromStore.getFAQLoading);
    // this._faqLoading = this.store.select<any>(fromStore.getFAQLoading).subscribe(loading => {
    //   this.utilities.updateLoader(loading);
    // });
    this.pageTitle = this.navParams.get('pageTitle');
    this.paramsFromChatBot = this.navParams.get('paramsFromChatBot')
    if (this.paramsFromChatBot)
    {
      this.pageTitle = this.paramsFromChatBot.pageTitle;
    }
  }

  getFaqData()
  {
    // this.store.dispatch(new fromStore.GetFaqAction(this.url));

    // return new Promise(resolve => {
    //   this._faqListener = this.store.select<any>(fromStore.getFAQState).subscribe((response: faqModel.faqState) => {
    //     if (response.pending == false) {
    //       this.information = response.data;
    //       resolve();
    //     }
    //   }, err => {
    //   })
    // })
    this.utilities.updateLoader(true);
    let data = {
      url: 'getDepartmentListFaqs',
      data: {},
      miscellaneous: true
    }
    this.httpProvider.http.commonService(data).subscribe((response: any) =>
    {
      //console.log(response);
      if (response.details)
      {
        this.utilities.updateLoader(false);
        this.information = response.details;
        if (!this.utilities.isEmptyOrNullOrUndefined(this.paramsFromChatBot))
        {
          if (this.paramsFromChatBot.openModal)
          {
            this.information.forEach(item =>
            {
              if (item.departmentId == this.paramsFromChatBot.departmentId)
                this.openModal(item);
            })
          }
        }
      }

    },
      error =>
      {
        this.utilities.updateLoader(false);
        //console.log(error)
      })
  }

  presentOptions(myEvent)
  {

    let popover = this
      .popoverCtrl
      .create('PopoverPage', { 'type': 'others' });

    popover.present({ ev: myEvent });
  }

  ionViewWillLeave()
  {
    this._faqListener.unsubscribe();
    this._faqLoading.unsubscribe();
  }

  // goToFaqDetails(item: faqModel.Detail) {
  //   this.navCtrl.push('FaqDetailsPage', {
  //     'deptId': item.departmentId,
  //     'pageTitle': item.departmentName

  //   });
  // }




  openModal(item)
  {
    let modal = this.modalCtrl.create(FaqDetail, {
      item: item
    }, {
      // cssClass: 'faq-modal'
      cssClass: 'modalCss',
    });
    modal.present();
  }
  //   dismiss() {
  //     this.viewCtrl.dismiss();
  // }

}
