import { Component, OnInit } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { IonicPage, NavParams, ModalController, NavController, ViewController, PopoverController } from 'ionic-angular';
import { Store } from "@ngrx/store";
import * as fromStore from '../../store';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';
import { Data } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage
{


  items: any = {};
  answers$: any = [];
  loading$: Observable<any>;
  questionId: number;
  currentDate: any = new Date();
  timeline: boolean = false;
  showOptions: boolean = true;
  showQueryListOptions: boolean = true;
  showQueryOption: boolean = true;
  pageName: string = 'list';
  showFooter: boolean = false;
  role: any;
  notificationCount: number;
  userType: any

  private _itemListener: Subscription = new Subscription();
  private _itemDetailsListener: Subscription = new Subscription();
  private _roleListener: Subscription = new Subscription();
  private _notificationListener: Subscription = new Subscription();

  constructor(
    private navParams: NavParams,
    private navCtrl: NavController,
    private store: Store<fromStore.AppState>,
    private modalCtrl: ModalController,
    private popoverCtrl: PopoverController,
    private dataService: Data,
    private viewCtrl: ViewController)
  {
    this.dataService.getData('loginDetails').then((loginData: any) =>
    {
      if (loginData.details)
      {
        this.userType = loginData.details.userDetails.userType;
      }
    })
  }

  ngOnInit()
  {
    this.answers$ = [];
    this.questionId = this.navParams.get('id');
  }

  ionViewWillEnter()
  {
    this.getNotificationCount();
  }

  toggle()
  {
    this.timeline = !this.timeline;
  }

  getItem()
  {

    this._itemListener = this.store.select<any>(fromStore.getQuestionState).subscribe(response =>
    {

      if (response)
      {

        if (response && response.pending == false)
        {

          this.items = response.data.filter((item) =>
          {
            return item.questionId == this.questionId
          })[0];
        }
      }

    }, err =>
    {
    });

  }

  getItemDetail()
  {

    let currentURL = "getQuestionTrail";

    let params = {
      'questionId': this.questionId,
      'role': this.role
    };

    this.store.dispatch(new fromStore.GetQueryDetailAction(currentURL, params));

    this._itemDetailsListener = this.store.select<any>(fromStore.getQueryDetailData).subscribe(response =>
    {

      if (response)
      {
        this.answers$ = response.responseList;
        this.items = response.questionDetails;
      }
    });

    this.loading$ = this.store.select<any>(fromStore.getQueryDetailLoading);
    setTimeout(() =>
    {
      console.log('Scroll Content')
      var footerHeight = document.getElementById('detail-footer').offsetHeight;
      console.log('footerHeight::', footerHeight)
      var contentPadding = document.querySelector('#scroll-custom-height .scroll-content');
      if (footerHeight)
      {
        contentPadding.setAttribute('style', `padding:${footerHeight}px 0px !important`)
      }
    }, 500);

  }

  presentFeedback()
  {
    let feedbackModal = this.modalCtrl.create('FeedbackPage', { queryId: this.questionId });
    feedbackModal.onDidDismiss((status) =>
    {
      if (status)
      {
        console.log(status);
        let currentIndex = this.navCtrl.getActive().index - 1;
        this.navCtrl.remove(currentIndex, 2);
      }

    });

    feedbackModal.present().then(() =>
    {
    });
  }

  ionViewDidLoad()
  {

    this._roleListener = this.store.select<any>(fromStore.getRole).subscribe((role) =>
    {


      this.role = role;

      this.showFooter = true;

      if (role == 'admin' || role == 'hr')
      {
        this.showOptions = false;
      } else
      {
        this.showOptions = true;
      }
    });

    this.getItemDetail();
    this.getNotificationCount();
  }

  getNotificationCount()
  {
    this._notificationListener = this.store.select<any>(fromStore.getNotificationCount).subscribe((res) =>
    {
      this.notificationCount = res;
    });
  }

  goToPage(page)
  {
    if (page == 'SearchPage')
    {
      this.navCtrl.push(page, { 'searchType': 'query' });
    } else if (page == 'NotificationPage')
    {
      this.navCtrl.push(page, { 'notificationType': 'QUESTION' });
    } else
    {
      this.navCtrl.push(page);
    }

  }

  presentOptions(myEvent)
  {

    let popover = this
      .popoverCtrl
      .create('PopoverPage', { 'type': 'others', userType: this.userType });

    popover.present({ ev: myEvent });

    popover.onDidDismiss((type) =>
    {

      if (type)
      {
        this.dataService.saveData('role', type);
        this.store.dispatch(new fromStore.SetRole(type));
      }

    })

  }

  tag(type)
  {
    this.navCtrl.push('TagPage', {
      'queryId': this.questionId,
      'groupId': this.items.groupId
    })
  }

  ionViewWillLeave()
  {
    this._itemDetailsListener.unsubscribe();
    this._roleListener.unsubscribe();
    this._itemListener.unsubscribe();
    this._notificationListener.unsubscribe();
  }


  addAnswer(answerType)
  {
    this.navCtrl.push('AddPage', { 'type': 'addAnswer', 'questionId': this.questionId, 'answerType': answerType })
      .then(() =>
      {
        // first we find the index of the current view controller:
        //const index = this.viewCtrl.index;
        // then we remove it from the navigation stack
        //this.navCtrl.remove(index);
      });;
  }

  goToHome()
  {
    this.navCtrl.push('HomePage', {

    });
  }

}
