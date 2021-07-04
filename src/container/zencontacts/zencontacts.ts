import { Component, Input, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Subscription } from "rxjs/Subscription";
import * as fromStore from "@app/store";
import { FormControl, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-zencontacts',
  templateUrl: 'zencontacts.html',
})
export class ZencontactsPage implements OnInit {

  @Input() user: any;
  private _zenContacts: Subscription = new Subscription();
  searchQuery: string[];
  items: any[];
  private searchInput = '';
  url: string = "getEmployeeContactList";
  appName: string = "";
  versionNumber: any = "";
  releaseNumber: string = "";
  pageType: string;
  loading$: Observable<any>;
  itemsLength: any;
  searchedData: any;
  startList: number = 0;
  endList: number = 15;
  searchControl: FormControl;
  infiniteScroll: any;
  totalResultCount: number
  resultPending: boolean = false;
  noResult: string = "No results found";
  refresher: any = '';
  pageTitle: any = '';
  params: any = {
    "startList": this.startList,
    "endList": this.endList
  }

  constructor(private navCtrl: NavController, private navParams: NavParams,
    private popoverCtrl: PopoverController, private store: Store<fromStore.AppState>, ) {
    this.searchControl = new FormControl('', Validators.required);
    this.pageTitle = this.navParams.get('pageTitle')

  }

  ngOnInit() {
  }


  ionViewDidLoad() {
    this.store.dispatch(new fromStore.GetZenContactsResetAction());
    this.loading$ = this.store.select<any>(fromStore.getZenContactsLoading);
    this.getData();

    this.searchControl.valueChanges.debounceTime(1000).subscribe(search => {
      this.store.dispatch(new fromStore.GetZenContactsResetAction());
      this.startList = 0;
      this.endList = 15;
      this.getData()
    });
  }

  ionViewWillLeave() {
    this._zenContacts.unsubscribe();
  }

  getItems(ev: any) {
    const val = ev.target.value;
    if (val && val.trim() !== '') {
      // this.getData();
      return this.searchedData
    }
  }

  presentOptions(myEvent) {

    let popover = this
      .popoverCtrl
      .create('PopoverPage', { 'type': 'others' });

    popover.present({ ev: myEvent });
  }

  getData() {

    let params = {
      "start": this.startList,
      "end": this.endList,
      "search": this.searchInput
    };

    this.store.dispatch(new fromStore.GetZenContactsAction(this.url, params));
    this.resultPending = true;
    return new Promise(resolve => {
      this._zenContacts = this.store
        .select<any>(fromStore.getZenContactsState)
        .subscribe(
          response => {
            if (!response.pending && response.data) {
              this.resultPending = false;
              this.searchedData = response.data;
              this.totalResultCount = this.searchedData.length;

              if (!response.pending && this.infiniteScroll) {
                this.infiniteScroll.complete();
              }

              if (!response.pending && this.refresher) {
                this.refresher.complete();
              }
              resolve();
            }
          },
          err => {
          }
        );
    });

  }


  doInfinite(infiniteScroll) {

    if (!this.resultPending) {
      this.startList = this.endList;
      this.endList = this.startList + 15;
      this.getData().then(() => {
        infiniteScroll.complete();
      });
    }

  }

  /* doRefresh(refresher) {

    this.refresher = refresher;

    this.startList = 0;
    this.endList = 15;

    this.params = {
      "start": this.startList,
      "end": this.endList
    };

    //  this.searchControl.valueChanges.debounceTime(1000).subscribe(search => {
    this.store.dispatch(new fromStore.GetZenContactsResetAction());
    // this.startList = 0;
    // this.endList = 10;
    // this.getData()
    // this.selectedIndex();
    // });

    // this.store.dispatch(new fromStore.GetInternalJobPostingAction(this.internalJobPostingurl, this.params));
  
  } */


  /**
   * Method which redirect to New profile page.
   * sending userId and profileType to the next view.
   * @param event
   * @param employeeId 
   */
  goToProfile(event, employeeId: any) {
    // event.stopPropagation();
    this.navCtrl.push('NewProfilePage', {
      'userId': parseInt(employeeId),
      'profileType': 'zencontacts'
    });

  }
}
