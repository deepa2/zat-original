import { Component } from "@angular/core";
import { AlertController, ModalController, NavController, NavParams, ViewController } from "ionic-angular";
import { HttpProvider } from '../../../providers/http/http';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities'
import { Constants } from "@app/constants";
import { Data } from "../../../providers/data/data";
@Component({
    selector: "addComment-page",
    templateUrl: "addComment.html"
})

export class AddCommentPage
{

    private title: string = ""
    private actionCheck: boolean = false;
    private managerID: any;
    private associateID: any;
    private sfDigData: any

    constructor(private utility: CommonUtilities, private httpProvider: HttpProvider, private navParams: NavParams,
        private viewCtrl: ViewController, private modalCtrl: ModalController, private alertCtrl: AlertController,
        private navCtrl: NavController, private data: Data)
    {
        this.data.getData('loginDetails').then((res: any) =>
        {
            this.managerID = res.details.userDetails.userId;
        })
        this.associateID = this.navParams.get('userIdAccossiate');
        this.sfDigData = this.navParams.get('sfDetailsData');
    }

    dismiss()
    {
        this.viewCtrl.dismiss();
    }

    checkboxClick(e)
    {
        this.actionCheck = e.checked
    }

    showConfirm()
    {
        if (this.title.trim().length <= 0)
        {
            this.utility.showAlert('Add Comment', 'Comment cannot be empty')
            return;
        }

        const confirm = this.alertCtrl.create({
            title: 'Submit',
            message: 'Are you sure you want to submit?',
            buttons: [{
                text: 'No',
                handler: () =>
                {

                }
            }, {
                text: 'Yes',
                handler: () =>
                {
                    this.createcomment()
                }
            }
            ],
            cssClass: 'addDig-alert'
        });
        confirm.present();
    }

    createcomment()
    {
        const url: string = "addCommentOnActivity";
        const data: any = {
            userId: this.associateID,
            commentText: this.title,
            activityId: this.sfDigData.dialogId,
            isAction: this.actionCheck,
            commentatorId: this.managerID
        };
        this.utility.updateLoader(true);

        this.httpProvider.http.commonService({ url, data, sfModuleURL: true }).subscribe((res: any) =>
        {
            if (!this.utility.isEmptyOrNullOrUndefined(res) && !this.utility.isEmptyOrNullOrUndefined(res.details))
            {
                this.utility.updateLoader(false);
                if (res.status.statusCode == 1)
                {
                    this.dismiss()
                }
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
}
