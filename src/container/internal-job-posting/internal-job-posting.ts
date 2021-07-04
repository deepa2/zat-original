import { Component, ViewChild, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, Content } from 'ionic-angular';
import * as fromStore from "@app/store";
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities'
import { Data } from '../../providers/data/data';
import { HttpProvider } from '../../providers/http/http';



@IonicPage()
@Component({
  selector: 'page-internal-job-posting',
  templateUrl: 'internal-job-posting.html',
})
export class InternalJobPostingPage {

  open: any = false;
  itemsLength: any;
  loading$: Observable<any>;
  jobList: any;
  private _internalJobPosting: Subscription = new Subscription();
  //internalJobPostingurl: string = "jobOpenings";
  internalJobPostingurl: string = "tabWiseJobOpenings";
  searchControl: FormControl;
  startList: number = 0;
  endList: number = 10;
  infiniteScroll: any = '';
  totalResultCount: number
  resultPending: boolean = false;
  private searchInput = '';
  pageTitle: any;
  noresult: string;
  //selectedTab:any;
  appliedJobs: Array<any> = [];
  nonAppliedJobs: Array<any> = [];
  nonAppliedJobsLength: any;
  appliedJobLength: any;
  allJobs: Array<any> = [];
  allJobsLength: any;
  appliedTabIndex: any;
  selectedTab = 0;
  refresher: any = '';
  showloader: boolean = true;
  jobs: Array<any> = [];
  jobKeys: Array<any> = [];
  jobValues: Array<any> = [];
  loadmore: boolean = false
  Doloadmore: any;
  isResult: boolean = false;
  isToggled: boolean;
  isServiceCalled: boolean = false;
  jobTypeName: string;
  jobType: string;
  istabChanged: boolean = false;
  id: any;
  private resolve: Function;

  params: any = {
    "startList": this.startList,
    "endList": this.endList
  }
  @ViewChild('search') search: any;
  @ViewChild(Content) content: Content;

  constructor(private navCtrl: NavController, private navParams: NavParams, private dataService: Data,
    private store: Store<fromStore.AppState>, private utility: CommonUtilities, private httpProvider: HttpProvider, private popoverCtrl: PopoverController) {

    this.pageTitle = this.navParams.get('pageTitle');
    if (this.pageTitle == undefined || this.pageTitle == null) {
      this.pageTitle = 'Job Opportunities';
    }
    this.searchControl = new FormControl('', Validators.required);

    this.appliedTabIndex = this.navParams.get('appliedIndex');
  }

  ionViewDidLoad() {
    this.resolve = this.navParams.get('resolve');
    this.dataService.getData("loginDetails").then((result: any) => {



      this.loading$ = this.store.select<any>(fromStore.getInternalJobPostingLoading);
      this.store.dispatch(new fromStore.GetInternalJobPostingResetAction());
      this.getData();

      this.searchControl.valueChanges.debounceTime(1000).subscribe(search => {
        this.store.dispatch(new fromStore.GetInternalJobPostingResetAction());
        this.startList = 0;
        this.endList = 10;
        this.getData()
        //this.selectedIndex(); 

      });

    })
  }

  focusButton() {
    setTimeout(() => {
      this.search.setFocus();
    }, 500);

    this.content.scrollToTop();
    this.open = "true";
  }

  ionViewWillLeave() {
    this._internalJobPosting.unsubscribe();
    if (this.resolve) {
      this.resolve();
    }
  }

  getItems(ev: any) {
    const val = ev.target.value;
    if (val && val.trim() !== '') {
      // this.getData();
      return this.jobList
    }
  }

  getData() {
    this.isToggled = true;
    this.utility.updateLoader(true)
    let params = {
      "start": this.startList,
      "end": this.endList,
      "searchText": this.searchInput,
      "type": "complete",
      "id": 0
    }
    let data = {
      url: this.internalJobPostingurl, data: params, ijp: true
    }
    return new Promise<void>(resolve => {
      this.httpProvider.http.commonService(data).subscribe((res: any) => {

        if (res) {
          if (res.details) {
            this.jobKeys = res.details;
            this.jobType = this.jobKeys[this.selectedTab].key;
            //console.log(this.jobType);
            this.jobs = res.details;
            this.isServiceCalled = true;

            if (this.jobKeys.length == 1) {
              this.jobKeys.filter(item => {
                this.jobTypeName = item.key;
              })
            }

            this.utility.updateLoader(false)
            // }

            resolve();
          }
        }
      },
        error => {
          this.utility.updateLoader(false);
        })
    })
  }

  doInfinite(infiniteScroll) {

    if (this.istabChanged) {
      //infiniteScroll.enable(false);
      infiniteScroll.complete();
      this.istabChanged = false;


    } else {

      this.jobs.filter(item => {
        if (item.key == this.jobType) {
          this.startList = item.value.length;
          this.endList = this.startList + 10;
          //console.log(item.value[item.value.length - 1].jobCode);
          this.id = item.value[item.value.length - 1].id;

        }
      })

      let params = {
        "start": this.startList,
        "end": this.endList,
        "searchText": this.searchInput,
        "type": this.jobType,
        "id": this.id
      }
      let data = {
        url: this.internalJobPostingurl, data: params, ijp: true
      }
      this.isServiceCalled = false;
      this.httpProvider.http.commonService(data).subscribe((res: any) => {

        if (res) {
          if (res.details) {
            //console.log(res.details)
            //this.jobKeys = res.details;
            //this.jobs = res.details;
            let data = res.details
            for (let i = 0; i < this.jobs.length; i++) {
              if (this.jobType == this.jobs[i].key) {
                this.jobs[i].value = this.jobs[i].value.concat(data[0].value)

              }
            }

            setTimeout(() => {
              if (infiniteScroll) {
                infiniteScroll.complete();
                this.isServiceCalled = true;
              }
            }, 1000);
          }
        }
      })

    }
  }

  selectTab(i, selectedTabData) {
    this.content.scrollToTop(100);
    this.selectedTab = i;
    //console.log("tab list length", selectedTabData.value.length)
    this.istabChanged = true;
    this.jobType = selectedTabData.key
  }

  presentOptions(myEvent) {

    let popover = this
      .popoverCtrl
      .create('PopoverPage', { 'type': 'others' });

    popover.present({ ev: myEvent });
  }

  formatDate(obj) {
    return this.utility.formatDate(obj);
  }
  presentIjpModal(data) {
    this.navCtrl.push('JobSkillDataPage', { selectedJob: data });
  }

  // jobInsights() {
  //   //console.log("jobs skill data");
  //   this.navCtrl.push("JobSkillDataPage", {})
  // }

  markInterest(selectedData) {
    //console.log(selectedData)
    let url = "markInterested";
    if (selectedData.isInterested) {
      let param = {
        "jobCode": selectedData.jobCode,
        "upcomingFlag": -1
      }
      let data = { url: url, data: param, ijp: true }
      this.httpProvider.http.commonService(data).subscribe((response: any) => {
        for (let i = 0; i < this.jobs.length; i++) {
          if (this.jobType == this.jobs[i].key) {
            //console.log(this.jobs[i].value)
            for (let j = 0; j < this.jobs[i].value.length; j++) {
              if (this.jobs[i].value[j].jobCode == selectedData.jobCode) {
                //console.log(this.jobs[i].value[j].jobCode + "  " + selectedData.jobCode)
                this.jobs[i].value[j].isInterested = false;
              }
            }
          }
          //console.log(this.jobs[i].value)
        }
      })


    } else if (!selectedData.isInterested) {
      let param = {
        "jobCode": selectedData.jobCode,
        "upcomingFlag": 1
      }
      let data = { url: url, data: param, ijp: true }
      this.httpProvider.http.commonService(data).subscribe((response: any) => {
        ////console.log(response);
        for (let i = 0; i < this.jobs.length; i++) {
          if (this.jobType == this.jobs[i].key) {
            //console.log(this.jobs[i].value)
            for (let j = 0; j < this.jobs[i].value.length; j++) {
              if (this.jobs[i].value[j].jobCode == selectedData.jobCode) {
                //console.log(this.jobs[i].value[j].jobCode + "  " + selectedData.jobCode)
                this.jobs[i].value[j].isInterested = true;
              }
            }
          }
        }
      })
    }
  }

}
