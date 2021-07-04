import { Component } from '@angular/core';
import { NavController, App, ViewController, NavParams } from 'ionic-angular';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities'
import { AlertController } from 'ionic-angular';
import { HttpProvider } from '../../../providers/http/http';
import { Constants } from "@app/constants";

@Component({
    selector: 'goalListModel-page',
    templateUrl: 'goalListModel.html'
})

/**
 * Dashboard Page contains two Tabs.
 */
export class GoalListModelPage
{
    private goalData: any = [];
    private sfData: any;
    private selectedRadio: string;
    private resultPending: boolean = true;
    private errorMessage: string;

    private limit: any = {
        start: 0,
        end: 15
    }

    constructor(private utilities: CommonUtilities, private navParams: NavParams,
        private viewCtrl: ViewController, public alertCtrl: AlertController, private httpProvider: HttpProvider, private navCtrl: NavController)
    {
        this.getGoals(this.limit.start, this.limit.end)
        this.sfData = this.navParams.get("data");
    }

    getGoals(start, end)
    {
        const url: string = "getUserGoals";
        const data: any = {
            start: start,
            end: end
        };
        this.utilities.updateLoader(true);

        this.httpProvider.http.commonService({ url, data, sfModuleURL: true }).subscribe((res: any) =>
        {
            if (!this.utilities.isEmptyOrNullOrUndefined(res) && !this.utilities.isEmptyOrNullOrUndefined(res.details))
            {
                this.utilities.updateLoader(false);
                if (res.details.responseList.length == 0)
                {
                    this.resultPending = false
                    this.navCtrl.pop()
                    let alert = this.alertCtrl.create({
                        message: 'No Data Available',
                        cssClass: 'discard-alert',
                        buttons: [
                            {
                                text: 'Ok',
                            },
                        ]
                    }).present();
                    this.errorMessage = 'No Data Available!'

                } else
                {
                    this.goalData = this.goalData.concat(res.details.responseList);
                    this.selectedRadio = this.goalData[0].goalName;
                }


            } else
            {
                this.errorMessage = 'No Data Available!'
                this.utilities.updateLoader(false);
            }
        }, err =>
        {
            this.utilities.updateLoader(false);
        });
    }

    _dismiss()
    {
        this.viewCtrl.dismiss();
    }
    _addGoal()
    {
        this.viewCtrl.dismiss(this.selectedRadio);
    }

    _selectedSiteButtton(selectedItem: any)
    {
        this.selectedRadio = selectedItem
    }


    /**
 *  infinite loader for scroll
 */
    loadData(infiniteScroll)
    {
        if (this.resultPending)
        {
            setTimeout(() =>
            {
                this.limit.start = this.limit.end
                this.limit.end += 10;
                this.getGoals(this.limit.start, this.limit.end)
                infiniteScroll.complete();
            }, 1000);
        } else
        {
            infiniteScroll.complete();

        }
    }
}
