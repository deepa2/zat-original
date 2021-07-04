import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpProvider } from '../../providers/http/http';
import * as moment from 'moment';
import * as env from '@app/env';
import { EmojiService } from 'angular-emojione';
/**
 * Generated class for the AddCommentModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'add-comment-modal',
  templateUrl: 'add-comment-modal.html'
})

export class AddCommentModalComponent {
  private addCommentForm: FormGroup;
  private userList: Array<any> = [];
  private showList: boolean = false;
  private selectedUser: any = null;
  private selectedUserName: any = '';
  private formData: FormData;
  private type: string = null;
  private wofObj: any;
  private commentList: Array<any> = [];
  private imgUrl: string;
  private emoji: any
  //   keyword = 'name';
  //   data = [
  //     {
  //       id: 1,
  //       name: 'Usa'
  //     },
  //     {
  //       id: 2,
  //       name: 'England'
  //     }
  //  ];

  constructor(private viewCtrl: ViewController, private fb: FormBuilder, private httpProvider: HttpProvider, private emojiService: EmojiService,
    private navParam: NavParams) {

    this.imgUrl = env.zenwenImgUrl;
    this.type = this.navParam.get('type');

    if (this.type == 'comment') {
      this.wofObj = this.navParam.get('wofObj');
      this.commentList = this.wofObj && this.wofObj.commnetList ? (Array.isArray(this.wofObj.commnetList) ? this.wofObj.commnetList : [...this.commentList, this.wofObj.commnetList]) : [];
    }

    this.addCommentForm = this.fb.group({
      to: ['', Validators.required],
      comment: ["", Validators.required]
    });

    this.addCommentForm.get('to').valueChanges.debounceTime(500).subscribe(search => {
      if (search != this.selectedUserName) {
        this.showList = true;
        let url = "searchUser";
        let params = {
          "start": "0",
          "end": "-1",
          "keywords": search
        }
        this.httpProvider.http.zenwenCommonGETService({ url, params, user: true }).subscribe((res: any) => {
          if (res && res.list) {
            this.userList = [];
            this.userList = Array.isArray(res.list) ? res.list : [...this.userList, res.list];
          }
        })
      } else {
        this.userList = [];
        this.showList = false;
      }
    });

    this.formData = new FormData();
  }

  setUser(user) {
    this.showList = false;
    this.selectedUser = user;
    this.selectedUserName = user.userName;
    this.addCommentForm.get('to').setValue(user.userName);
  }
  closeModal() {
    this.viewCtrl.dismiss(null);
  }
  onSubmit() {
    if (this.type == 'comment') {
      this.addCommentForm.get('to').clearValidators();
      this.addCommentForm.get('to').updateValueAndValidity();
      if(this.addCommentForm.status=="INVALID"){
        alert("Please Enter Comment")
      }
    }
    else if (this.type == 'post') {
      if(this.addCommentForm.status=="INVALID"){
        alert("Please Enter Post")
      }
    }
    if (this.addCommentForm.valid && this.type == 'post') {
      // this.formData.append("to", this.selectedUser.emailAddress);
      // this.formData.append("description", this.addCommentForm.get('comment').value),
      // this.formData.append("cardId", '');
      // let data = this.formData;

      let params = {
        "to": this.selectedUser.emailAddress.toString(),
        "description": this.emojiService.unicodeToShortname(this.addCommentForm.get('comment').value),
        "cardId": ""
      }

      let url = "wallofFameNomination";

      this.httpProvider.http.zenwenCommonPostService({ url, params, zenMedia: true }).subscribe((res: any) => {
        if (res && res.model) {
          this.viewCtrl.dismiss(res.model);
        }
      })
    } else if (this.addCommentForm.valid && this.type == 'comment') {
      // this.formData.append("entryId", this.wofObj.fileEntryId);
      // this.formData.append("commentText", this.addCommentForm.get('comment').value),
      // this.formData.append("parentMessageId", "0");
      // let data = this.formData;

      let params = {
        "entryId": this.wofObj.fileEntryId.toString(),
        "commentText":this.emojiService.unicodeToShortname(this.addCommentForm.get('comment').value),
        "parentMessageId": "0"
      }

      let url = "postComment";
      this.httpProvider.http.zenwenCommonPostService({ url, params, zenCollaboration: true }).subscribe((res: any) => {
        if (res && res.model) {
          this.viewCtrl.dismiss(res.model);
        }
      })
    }
  }

  dateConversion(input) {
    let date = moment(input).format('D MMM YYYY h:mma');
    return date;
  }

  // selectEvent(item) {
  //   // do something with selected item
  // }

  // onChangeSearch(val: string) {
  //   // fetch remote data from here
  //   // And reassign the 'data' which is binded to 'data' property.
  // }

  // onFocused(e){
  //   // do something when input is focused
  // }

}
