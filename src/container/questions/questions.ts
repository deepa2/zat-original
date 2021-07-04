import { Component, ViewChild } from '@angular/core';
import { NavController, Content, NavParams } from 'ionic-angular';
import { IonicPage, LoadingController, PopoverController } from 'ionic-angular';
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { Subscription } from 'rxjs/Subscription';
import * as fromStore from '../../store';
import { Data } from '../../providers/data/data';



@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'questions.html'
})
export class QuestionsPage {

  items$: Observable<any>;
  loading$: Observable<any>;
  startList: number = 0;
  endList: number = 15;
  itemsLength: number = 0;
  currentURL: string = "getQuestionList";
  type: string;
  role: string;
  pageTitle: string;
  pageName: string = 'list';
  showOptions: boolean = true;
  notificationCount: number;
  totalResultCount: number;
  title: string;
  unratedQuestion: boolean;
  unratedMessage: string;
  params: any = {};
  boardingType: any;
  userType: any;
  selectedFilter: any;

  @ViewChild(Content) content: Content;
  private _listListener: Subscription = new Subscription();
  private _roleListener: Subscription = new Subscription();
  private _notificationListener: Subscription = new Subscription();


  constructor(private navCtrl: NavController,
    private navParams: NavParams,
    private store: Store<fromStore.AppState>,
    private loadingController: LoadingController,
    private popoverCtrl: PopoverController,
    private dataService: Data) {

    this.unratedQuestion = this.navParams.get('unratedQuestion');
    this.pageTitle = this.navParams.get('pageTitle');
    if (this.pageTitle == "Ask Question") {
      this.pageTitle = "Questions";
    } else if (this.pageTitle == undefined || this.pageTitle == null) {
      this.pageTitle = "Questions";
    } else if (this.pageTitle == "Ask a Question") {
      this.pageTitle = "Questions";
    }
    this.unratedMessage = this.navParams.get('unratedMessage');
    this.dataService.getData('loginDetails').then((loginData: any) => {
      if (loginData.details) {
        this.userType = loginData.details.userDetails.userType;
      }
    })
  }

  loadQueries(type) {

    if (this.unratedQuestion && this.role == "associates") {
      this.params = {
        "role": this.role,
        "start": this.startList,
        "end": this.endList,
        "status": "UnRated"
      }
    } else {
      this.params = {
        "role": this.role,
        "start": this.startList,
        "end": this.endList,
        "status": this.type
      }
    }


    if (type == 'update') {
      this.store.dispatch(new fromStore.UpdateQuestionAction(this.currentURL, this.params));
    }
    else if (type == "get") {
      this.store.dispatch(new fromStore.GetQuestionAction(this.currentURL, this.params));
    }
    else if (type == 'refresh') {
      this.store.dispatch(new fromStore.ReloadQuestionAction(this.currentURL, this.params));
    }

    return new Promise<void>(resolve => {

      this._listListener = this.store.select<any>(fromStore.getQuestionState).subscribe(response => {

        if (response.pending == false && response.loadMore == false && response.pullToRefresh == false) {

          if (response.data) {
            this.items$ = response.data;
            this.totalResultCount = response.totalResultCount;
            this.itemsLength = response.data.length;
          }

          resolve();
        }

      }, err => {
      });

    });

  }

  doInfinite(infiniteScroll) {


    this.startList = this.itemsLength;
    this.endList = this.endList + 15;
    this.loadQueries('update').then(() => {
      infiniteScroll.complete();
    });

  }

  presentFilter(myEvent) {
    let popover = this
      .popoverCtrl
      .create('PopoverPage', { 'type': 'filter', 'value': this.type });



    popover.present({ ev: myEvent });

    popover.onDidDismiss((type) => {



      if (type) {
        this.store.dispatch(new fromStore.SetFilter(type))
        this.type = type;
        this.startList = 0;
        this.endList =15;

        this.loadQueries('get').then(() => {
          this.content.scrollToTop();
        });
      }


    })

  }

  presentOptions(myEvent) {

    let popover = this
      .popoverCtrl
      .create('PopoverPage', { 'type': 'options', userType: this.userType });

    popover.present({ ev: myEvent });

    popover.onDidDismiss((type) => {

      if (type) {
        this.dataService.saveData('role', type);
        this.store.dispatch(new fromStore.ResetFilter())
        this.selectedFilter = null;
        this.store.dispatch(new fromStore.SetRole(type));

      }

    })

  }

  // doRefresh(refresher) {


  //   this.startList = 0;

  //   this.loadQueries('refresh').then(() => {
  //     refresher.complete();
  //   });

  // }

  goToPage(page) {
    if (page == 'SearchPage') {
      this.navCtrl.push(page, { 'searchType': 'query' });
    } else if (page == 'NotificationPage') {
      this.navCtrl.push(page, { 'notificationType': 'QUESTION' });
    } else {
      this.navCtrl.push(page);
    }
  }


  gotToListDetail(item) {
    this.navCtrl.push('DetailPage', {
      'id': item.questionId
    });
  }

  add() {
    this.navCtrl.push('AddPage', { 'type': 'addQuestion', 'questionId': null, 'answerType': null });
  }

  ionViewDidLoad() {
    //this.store.dispatch(new fromStore.ResetQuestions());

    this.dataService.getData('role').then((data) => {
      if (data) {
        this.store.dispatch(new fromStore.SetRole(data));
      } else {
        this.store.dispatch(new fromStore.SetRole('associates'));

      }
    });

    this.loading$ = this.store.select<any>(fromStore.getAllQuestionsLoading);

  }

  ionViewWillEnter() {


    this.store.select<any>(fromStore.getFilter).subscribe((filter) => {
      if (filter) {
        this.selectedFilter = filter;
      }

    })

    this.dataService.getData('miscData').then((res: any) => {

      this._roleListener = this.store.select<any>(fromStore.getRole).subscribe((selectedRole) => {

        if (selectedRole == 'associate') {
          if (this.selectedFilter) {
            this.type = this.selectedFilter
          } else {
            this.type = res.associatesQuestionStatusList[0].value;
          }

        } else if (selectedRole == 'admin') {

          if (this.selectedFilter) {
            this.type = this.selectedFilter
          } else {
            this.type = res.adminQuestionStatusList[0].value;
          }

        } else if (selectedRole == 'hr') {

          if (this.selectedFilter) {
            this.type = this.selectedFilter
          } else {
            this.type = res.hrQuestionStatusList[0].value;
          }

        } else {

          if (this.selectedFilter) {
            this.type = this.selectedFilter
          } else {
            this.type = res.questionStatusList[0].value;
          }


        }

        if (selectedRole) {

          if (selectedRole == 'admin' || selectedRole == 'hr') {
            this.showOptions = true;
            this.title = '';
          } else {
            this.showOptions = false;
            this.title = '';
          }

          this.role = selectedRole;

          this.startList = 0;

          this.loadQueries('get').then(() => {
            //this.content.scrollToTop(); 
          });

        }

        //assign current selected filter type


      });

    })

    this.getNotificationCount();

  }

  getNotificationCount() {
    this._notificationListener = this.store.select<any>(fromStore.getNotificationCount).subscribe((res) => {
      this.notificationCount = res;
    });
  }



  ionViewWillLeave() {
    this._listListener.unsubscribe();
    this._roleListener.unsubscribe();
    this._notificationListener.unsubscribe();
  }

}
