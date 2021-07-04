import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import * as fromStore from '../../store';
import 'rxjs/add/operator/debounceTime';
import { Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { searchService } from '../../providers/services/searchService/searchService';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  items$: any;
  loading$: Observable<any>;
  startList: number = 0;
  endList: number = 15;
  searchTerm: string = '';
  searchType: any;
  searchControl: FormControl;
  searching: any = false;
  infiniteScroll: any;
  pageName: string = 'search';
  recentSearchItems: Array<any> = [];
  role: string;
  totalResultCount: number;
  showOptions: boolean = true;
  itemsLength: number;
  @ViewChild('inputToFocus') inputToFocus;

  private _searchListener: Subscription = new Subscription();
  private _searchTextUpdateListener: Subscription = new Subscription();
  private _loaderListener: Subscription = new Subscription();
  private _roleListener: Subscription = new Subscription();

  constructor(private navCtrl: NavController, private navParams: NavParams,
    private store: Store<fromStore.AppState>, private searchService: searchService) {
    this.searchControl = new FormControl('', Validators.required);

  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.inputToFocus.setFocus();
    });
  }

  ionViewDidLoad() {

    this.searchType = this.navParams.get('searchType');

    this.loading$ = this.store.select<any>(fromStore.getSearchLoading);

    this._searchTextUpdateListener = this.store.select<any>(fromStore.getSearchText).subscribe(values => {
      this.recentSearchItems = values;
    }, err => {
    });

    this.searchControl.valueChanges.debounceTime(1000).subscribe(search => {
      if (!this.searchControl.hasError('required')) {
        this.setFilteredItems('get');
      } else if (this.searchControl.hasError('required')) {
        this.setFilteredItems('reset');
      }
    });
  }

  ionViewWillEnter() {

    this._roleListener = this.store.select<any>(fromStore.getRole).subscribe((res) => {

      this.role = res;

      if (this.role == 'admin' || this.role == 'hr') {
        this.showOptions = true;
      } else {
        this.showOptions = false;
      }

    });

  }

  setFilteredItems(type: string) {

    let url, params;

    if (this.searchType == "query") {

      params = {
        "start": this.startList,
        "end": this.endList,
        "role": this.role,
        "searchText": this.searchTerm,
        "status": "All"
      }
      url = "getQuestionList";

    }
    else {

      params = {
        "start": this.startList,
        "end": this.endList,
        "searchText": this.searchTerm,
      }
      url = "getAllAnnouncements";

    }


    if (type == 'update') {
      this.store.dispatch(new fromStore.UpdateSearchAction(url, params, this.searchType));
    }
    else if (type == "get") {
      this.store.dispatch(new fromStore.OverallSearchAction(url, params, this.searchType));
    }
    else if (type == 'reset') {
      this.store.dispatch(new fromStore.ResetSearchAction());
    }

    return new Promise(resolve => {
      this._searchListener = this.store.select<any>(fromStore.getSearchState).subscribe(response => {

        if (response.pending == false && response.loadMore == false && response.pullToRefresh == false) {
          if (response.data) {
            this.items$ = response.data;
            this.totalResultCount = this.items$.length;
          }
          resolve();
        }

        // if (response) {
        //   this.items$ = response;
        //   this.itemsLength = response.length;
        //   resolve();
        // }

      }, err => {
      });
    });
  }

  onSearchInput(ev) {
    if (ev._value) {
      this.searching = true;
    } else {
      this.searching = false;
    }
  }

  doInfinite(infiniteScroll) {
    this.infiniteScroll = infiniteScroll;

    if (this.totalResultCount) {
      this.startList = this.endList;
      this.endList = this.startList + 15;
      this.setFilteredItems('update').then(() => {
        infiniteScroll.complete();
      });
    } else {
      infiniteScroll.complete();
    }

  }

  ionViewWillLeave() {
    this._searchListener.unsubscribe();
    this._searchTextUpdateListener.unsubscribe();
    this._loaderListener.unsubscribe();
    this._roleListener.unsubscribe();
  }

  clearRecentSearch() {
    this.store.dispatch(new fromStore.OverallSearchClear());
  }

  searchRecent(value) {
    this.searchTerm = value;
  }

  gotToListDetail(item) {

    if (this.searchType == "query") {
      this.navCtrl.push('DetailPage', {
        'id': item.questionId
      });
    }

  }

  



}
