import { Component, Renderer, ElementRef, ViewChild } from "@angular/core"
import { ViewController, NavParams } from "ionic-angular";
import { CommonUtilities } from "../../providers/commonUtilities/commonUtilities";
import { HttpProvider } from "../../providers/http/http";


@Component({
    selector: "page-chat-bot-model",
    templateUrl: "chat-bot-model.html"
})

export class ChatBotModel
{


    private title: string;
    private data: any;
    private chatbotSuggestions: any;
    private searchedSuggestionList: any = [];

    // @ViewChild('detail1') list1: ElementRef;

    constructor(public renderer: Renderer,
        public viewCtrl: ViewController,
        private navParams: NavParams,
        private utilities: CommonUtilities,
        private httpProvider: HttpProvider)
    {

        this.title = this.navParams.get('title');
        this._getChatBotInfoList()
    }

    _getChatBotInfoList()
    {
        this.utilities.updateLoader(true);
        let data = {
            url: 'getInfoData',
            data: {},
            chatBotInfoList: true
        }
        this.httpProvider.http.commonService(data).subscribe((response: any) =>
        {
            if (response.details)
            {
                this.utilities.updateLoader(false);
                this.chatbotSuggestions = response.details.responseList.data;
                this.searchedSuggestionList = this.chatbotSuggestions
                setTimeout(() =>
                {
                    document.getElementById('list0').setAttribute('open', 'true');
                }, 100);
            }


        },
            error =>
            {
                this.utilities.updateLoader(false);
            })
    }
    // http://10.42.204.141/com.zensar.zenconverseassist/pgetDashboardData/getInfoList

    dismiss()
    {
        this.viewCtrl.dismiss();
    }

    initiateReq(phraseList)
    {
        if (phraseList)
            this.viewCtrl.dismiss(phraseList);
    }

    /**
    * search function
    * @param ev input string for search
    */
    _searchItems(ev: any)
    {
        // set val to the value of the searchbar
        const val = ev.target.value;
        // Reset groupItems back to all of the groupItems
        // for deep copying of object need to stringify
        let tempList = JSON.stringify(this.chatbotSuggestions);

        this.searchedSuggestionList = JSON.parse(tempList)
        // if the value is an empty string don't filter the groupItems
        if (val && val.trim() != '' && !this.utilities.isEmptyOrNullOrUndefined(val))
        {
            this.searchedSuggestionList = [];
            this.chatbotSuggestions.forEach(SuggestionItem =>
            {
                let list: any;
                list = SuggestionItem.phraseList.filter((item: any) =>
                {
                    return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
                })
                if (list.length > 0)
                {
                    this.searchedSuggestionList.push(SuggestionItem);
                    this.searchedSuggestionList.forEach(element =>
                    {
                        if (element.categoryId == SuggestionItem.categoryId)
                        {
                            element.phraseList = list;
                        }
                    });
                }
            });
            setTimeout(() =>
            {
                document.getElementById('list0').setAttribute('open', 'true');
            }, 500);
        } else
        {
            setTimeout(() =>
            {
                document.getElementById('list0').setAttribute('open', 'true');
            }, 500);
        }
        this.chatbotSuggestions = JSON.parse(tempList)
    }

}