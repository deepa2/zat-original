import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavParams, NavController, AlertController, LoadingController, Loading, Content, Navbar } from 'ionic-angular';
import { Store } from "@ngrx/store";
import * as fromStore from '../../store';
import { Subscription } from 'rxjs/Subscription';

@IonicPage()
@Component({
  selector: 'page-tag',
  templateUrl: 'tag.html'
})
export class TagPage {
 
  searchTerm: any;
  searchMember:any;
  addTagUrl: string = 'tagQuestionTo'; 
  url: string = 'getGroupList';
  getGroupMemberList: string = 'getGroupMemberList';
  group: any = [];
  groupMember: any = [];  
  queryId: number;
  groupId: number;
  loader: Loading;
  showGroup: boolean = false;
  showGroupMembers: boolean = false;
  role: string;
  @ViewChild(Content) content: Content;
  @ViewChild(Navbar) navBar: Navbar;

  private _groupListener: Subscription = new Subscription();
  private _groupMemberListener: Subscription = new Subscription();
  private _roleListener: Subscription = new Subscription();
  private _addLoadingListener: Subscription = new Subscription();
  private _addSuccessListener: Subscription = new Subscription();

  constructor(private store: Store<fromStore.AppState>,
    private alertCtrl: AlertController,
    private params: NavParams,
    private navCtrl: NavController,
    private loadingController: LoadingController) {
    this.queryId = params.get('queryId');
    this.groupId = params.get('groupId');
  }

  setBackButtonAction() {
    this.navBar.backButtonClick = () => {
 
      if (this.showGroupMembers && this.group.length > 0) {
        this.showGroup = true;
        this.showGroupMembers = false;
      } else {
        this.navCtrl.pop();
      }

    }
  }

  ionViewWillEnter() {

    this._roleListener = this.store.select<any>(fromStore.getRole).subscribe((role) => {
      this.role = role;
    });

    this._addLoadingListener = this.store.select<any>(fromStore.getTagLoading).subscribe(loading => {
      this.updateLoader(loading);
    });

    this._addSuccessListener = this.store.select<any>(fromStore.getAddTagResponse).subscribe((res) => {
      if (res) {
        this.store.dispatch(new fromStore.AddTagResetAction());
        this.presentAlert();
      }
    });

    if (this.groupId == 0) {
      this.store.dispatch(new fromStore.GetGroupAction(this.url, {}));

      this._groupListener = this.store.select<any>(fromStore.getGroupData).subscribe((res) => {
        if (res) {
          this.showGroup = true;
          this.group = res;
        }
      });
    } else {
      
      this.getMemberList(this.groupId);
    }

    this.setBackButtonAction();

  }

  ionViewWillLeave() {
    this._groupListener.unsubscribe();
    this._groupMemberListener.unsubscribe();
    this._roleListener.unsubscribe();
    this._addLoadingListener.unsubscribe();
    this._addSuccessListener.unsubscribe();
  }

  tagQuery(tag) {

    let alert = this.alertCtrl.create({
      // title: 'Confirmation',
      message: 'Confirm to assign?',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Yes',
          handler: () => {

            let parameters = {
              "groupLevelUserMappingId": tag.employeeId,
              "questionId": this.queryId,
              "role": this.role
            }

            this.store.dispatch(new fromStore.AddTagAction(this.addTagUrl, parameters));

          }
        }
      ],
      cssClass: 'alertCustomCss'
    });

    alert.present();

  }

  updateLoader(loading) {

    if (loading) {
      this.loader = this.loadingController.create();
      this.loader.present()
    } else {
      if (this.loader) {
        this.loader.dismiss();
        this.loader = null;
      }
    }

  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      // title: 'Confirmation',
      subTitle: 'Tagged Successfully',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            //this.navCtrl.pop();
            // let currentIndex = this.navCtrl.getActive().index;
            // this.navCtrl.remove(currentIndex);
            // this.navCtrl.push('QuestionsPage'); 

            let currentIndex = this.navCtrl.getActive().index - 1;
            this.navCtrl.remove(currentIndex, 2);

          }
        }
      ]
    });
    alert.present();

  }

  getMemberList(groupLevelId) {

    this.content.scrollToTop();

    this.showGroup = false;
    this.showGroupMembers = true;

    let parameters = {
      'groupLevelId': groupLevelId,
      "role": this.role 
    };

    this.store.dispatch(new fromStore.GetGroupMemberAction(this.getGroupMemberList, parameters));

    this._groupMemberListener = this.store.select<any>(fromStore.getGroupMembersData).subscribe((res) => {
      this.groupMember = res;
    });

  }

}