import { Component } from "@angular/core";
import { ModalController, NavParams, ViewController } from "ionic-angular";
import { HttpProvider } from '../../../providers/http/http';
import { CommonUtilities } from '../../../providers/commonUtilities/commonUtilities'
import { Constants } from "@app/constants";
import { MoveToPageService } from "../../../container/chat-bot-new/chat-bot-new-services/moveToPage.service";
@Component({
    selector: "sucessSumbit-page",
    templateUrl: "sucessSumbit.html"
})


export class SumbitPage {
    private successResponse:string;
    constructor(private moveToPageService: MoveToPageService, private utility: CommonUtilities, private httpProvider: HttpProvider, private navParams: NavParams,
        private viewCtrl: ViewController, private modalCtrl: ModalController) {
           //console.log(this.navParams.get('successResponse'));
           this.successResponse = this.navParams.get('successResponse');
    }



    _okay() {
        this.viewCtrl.dismiss();
        this.moveToPageService.sfList.next();
    }




}
