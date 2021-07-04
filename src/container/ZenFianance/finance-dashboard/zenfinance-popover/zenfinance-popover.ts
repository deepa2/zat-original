import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";
import { HttpProvider } from '../../../../providers/http/http';
import { CommonUtilities } from '../../../../providers/commonUtilities/commonUtilities'
import { PopoverController } from 'ionic-angular';

@Component({
    selector: "zenfinance-popover-page",
    templateUrl: "zenfinance-popover.html"
})

export class ZenfinancePopoverPage {

    constructor(private utility: CommonUtilities, private httpProvider: HttpProvider, private navParams: NavParams, public popoverCtrl: PopoverController) { }

}
