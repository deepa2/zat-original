import { Component, Input } from "@angular/core";
import { Events, ModalController, NavParams, ViewController, ToastController } from "ionic-angular";
import { HttpProvider } from '../../../providers/http/http';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities'
import { Constants } from "@app/constants";
import moment from "moment";
import { AddCommentPage } from "../addComment/addComment";
import { Data } from "../../../providers/data/data";
import { LinkyPipe } from "ngx-linky";

@Component({
    selector: "sfDetails-page",
    templateUrl: "sfDetails.html",
    providers: [LinkyPipe],
})

export class SfDetailsPage
{

    private goalList: any
    private dialogId: any;
    private sfDetailsData: any;
    private commentData: any;
    private roleAcess: any;
    private userIdAccossiate: any
    private commentList: any;
    private commentId: any;
    private markComplete: boolean
    private isAction: any;
    private currenTab: any;
    private errorMessage: string;
    private commentUpdatedDate: any;

    constructor(private utility: CommonUtilities, private httpProvider: HttpProvider, private navParams: NavParams,
        private viewCtrl: ViewController, private modalCtrl: ModalController, private events: Events, public dataService: Data,
        private toastCtrl: ToastController)
    {

        this.goalList = this.navParams.get("data")
        this.currenTab = this.navParams.get("currentTab")
        this.userIdAccossiate = this.navParams.get('userId')
        this.dialogId = this.goalList.dialogId
        this.dataService.getData('roleAccess').then((result: any) =>
        {
            this.roleAcess = result.mangerAcess
        })
        this.getSfData()
    }

    getSfData()
    {
        const url: string = "getDialogDetails";
        const data: any = {
            dialogId: this.dialogId,
            userId: this.userIdAccossiate
        }
        this.utility.updateLoader(true);

        this.httpProvider.http.commonService({ url, data, sfModuleURL: true }).subscribe((res: any) =>
        {
            if (!this.utility.isEmptyOrNullOrUndefined(res) && !this.utility.isEmptyOrNullOrUndefined(res.details) && res.status.statusCode == 1)
            {
                this.utility.updateLoader(false);
                if (!this.utility.isEmptyOrNullOrUndefined(res.details.responseList))
                {
                    this.sfDetailsData = res.details.responseList;
                }
                if (!this.utility.isEmptyOrNullOrUndefined(this.sfDetailsData.commentDO))
                {
                    this.commentList = this.sfDetailsData.commentDO
                    this.markComplete = this.sfDetailsData.commentDO.isComplete
                    this.commentData = this.urlify(this.commentList.commentText)
                    this.commentId = this.sfDetailsData.commentDO.commentId
                    this.isAction = this.commentList.isAction
                    this.commentUpdatedDate = res.details.responseList.commentDO.commentUpdatedDate

                }

            } else
            {
                this.errorMessage = 'No Data Available!'
                this.utility.updateLoader(false);
                this.utility.showAlert('SF', Constants["erroMessageFor No Data"])
            }
        }, err =>
        {
            this.errorMessage = 'No Data Available!'
            this.utility.updateLoader(false);
        });
    }
    markCompletionData()
    {
        const url: string = "markCommentAsComplete";
        const data: any = {
            commentId: this.commentId,
            isComplete: true
        }
        this.utility.updateLoader(true);

        this.httpProvider.http.commonService({ url, data, sfModuleURL: true }).subscribe((res: any) =>
        {
            if (!this.utility.isEmptyOrNullOrUndefined(res) && !this.utility.isEmptyOrNullOrUndefined(res.details))
            {
                this.utility.updateLoader(false);

                if (!this.utility.isEmptyOrNullOrUndefined(res.details.responseList))
                {
                    let toast = this.toastCtrl.create({
                        message: 'Action Completed successfully',
                        duration: 3000,
                        position: 'bottom'
                    });

                    this.commentUpdatedDate = res.details.responseList.commentUpdatedDate

                    toast.onDidDismiss(() =>
                    {
                    });

                    toast.present();
                }
                this.markComplete = true


            } else
            {
                this.utility.updateLoader(false);
                this.utility.showAlert('SF', Constants["erroMessageFor No Data"])
            }
        }, err =>
        {
            this.utility.updateLoader(false);
        });
    }

    dismiss()
    {
        this.viewCtrl.dismiss();
    }

    _getFormatDate(date)
    {
        return moment(date).format('DD MMM YYYY');
    }

    movetoAddComment(data)
    {
        let addCommentModel = this.modalCtrl.create(AddCommentPage, { userIdAccossiate: this.userIdAccossiate, sfDetailsData: this.sfDetailsData }, { cssClass: 'addComment-model' })
        addCommentModel.present();
        addCommentModel.onDidDismiss(() =>
        {
            this.getSfData()
        })
    }
    urlify(text)
    {
        if (text != undefined)
        {
            //;
            var newText = text.replace(/\n/g, "<br/>");
            var urlRegex = /(https?:\/\/[^\s]+)/g;
            return newText.replace(urlRegex, function (url)
            {
                // ;
                return '<a class="linkline">' + url + '</a>';
            })

        }
    }

    checkLink(data)
    {
        let url = data.match(/\bhttps?:\/\/\S+/gi);
        if (url && url[0])
        {
            let urlValue = url[0].replace(/(<([^>]+)>)/ig, '');
            this.utility.openWithSystemBrowser(urlValue);
        }
    }



}
