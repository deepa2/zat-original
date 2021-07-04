import { Component, } from "@angular/core";
import { IonicPage, NavParams, Events, Platform } from "ionic-angular";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Subscription } from "rxjs/Subscription";
import { AppVersion } from "@ionic-native/app-version";
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities'
import { Constants } from "@app/constants";
import * as fromStore from "@app/store";

@IonicPage()
@Component({
  selector: "page-about",
  templateUrl: "about.html"
})
export class AboutPage {
  loading$: Observable<any>;
  private _aboutListener: Subscription = new Subscription();
  private about: any;
  private url: string = "getHTMLParagraph";
  private appName: string = "";
  private versionNumber: any = "";
  private pageType: string;

  constructor(
    private navParams: NavParams,
    private store: Store<fromStore.AppState>,
    private appVersion: AppVersion,
    private utility: CommonUtilities,
    private events: Events
) { }

  //on Page load, ionic executes this function and all the initialization methods executes here
   ionViewDidLoad() {
    this.pageType = this.navParams.get('type');
    this.appName = Constants.appName;
    this.appVersion.getVersionNumber().then(res => {
      this.versionNumber = res;
    });
    
    this.getData();
    this.loading$ = this.store.select<any>(fromStore.getAboutLoading);
    this.events.subscribe('hide-loader', (data: any) => {
      this.utility.updateLoader(false)
      //console.log('Hide loader')
    })
  }

  ionViewWillLeave() {
    this._aboutListener.unsubscribe();
  }

  //get about data from server
  getData() {
    //if device platform available 
    if (this.utility.platformAvailable()) {
      this.utility.updateLoader(true);
      this.appVersion.getVersionNumber().then((response: any) => {
        let params = { 'type': this.pageType, 'versionNo': response }
        this.store.dispatch(new fromStore.GetAboutAction(this.url, params));
        return new Promise(resolve => {
          this._aboutListener = this.store
            .select<any>(fromStore.getAboutState)
            .subscribe(
              response => {
                if (response) {
                  if (response.pending == false) {
                    this.about = response.data;
                    this.utility.updateLoader(response.pending)
                    resolve();
                  }
                }
              },
              err => {
                this.utility.updateLoader(false)
              }
            );
        });
      })
    } //else, for desktop browser
    else {
      this.utility.updateLoader(true);
      let params = { 'type': this.pageType, 'versionNo': Constants.new_version }
      this.store.dispatch(new fromStore.GetAboutAction(this.url, params));
      return new Promise(resolve => {
        this._aboutListener = this.store
          .select<any>(fromStore.getAboutState)
          .subscribe(
            response => {
              if (response) {
                if (response.pending == false) {
                  this.about = response.data;
                  this.utility.updateLoader(response.pending)
                  resolve();
                }
              }
            },
            err => {
              this.utility.updateLoader(false)
            }
          );
      });
    }

  }
}
