import { Component, Renderer, ViewChild } from "@angular/core"
import { ViewController, NavParams, Content } from "ionic-angular";
import { CommonUtilities } from "../../../../providers/commonUtilities/commonUtilities";
import { HttpProvider } from "../../../../providers/http/http";


@Component({
    selector: "chat-bot-suggestion-model",
    templateUrl: "chat-bot-suggestion-model.html"
})

export class ChatBotSuggestionModel {

    @ViewChild(Content) content: Content;

    private title: string;
    private data: any;
    private chatbotSuggestions: any;
    private searchedSuggestionList: any = [];
    // private suggestionCont: any;
    private suggestionID1: any;
    private suggestionID2: any;
    private headerFlag: boolean = true;
    private listOfSelected: any;
    // @ViewChild('detail1') list1: ElementRef;

    constructor(public renderer: Renderer, public viewCtrl: ViewController, private navParams: NavParams,
        private utilities: CommonUtilities, private httpProvider: HttpProvider) {

        this.title = this.navParams.get('title');
        this._getChatBotInfoList()
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
    }

    ionViewDidEnter() {
        // this.suggestionCont = document.getElementById('suggestionCont')
        // this.suggestionCont.style.width = `${window.innerWidth}px`
        this.suggestionID1 = document.getElementById('suggestionID1');
        this.suggestionID2 = document.getElementById('suggestionID2');
        // this.suggestionID1.style.width = `${window.innerWidth}px`
        // this.suggestionID2.style.width = '0px';
        this.suggestionID1.style.display = 'block';
        this.suggestionID2.style.display = 'none';
    }

    _getChatBotInfoList() {
        this.utilities.updateLoader(true);
        let data = {
            url: 'getInfoData',
            data: {},
            chatBotInfoList: true
        }
        this.httpProvider.http.commonService(data).subscribe((response: any) => {
            //this.utilities.consoleLog(response);
            if (response.details) {
                this.utilities.updateLoader(false);
                this.chatbotSuggestions = response.details.responseList.data;
                this.searchedSuggestionList = this.chatbotSuggestions
                setTimeout(() => {
                    document.getElementById('list0').setAttribute('open', 'true');
                }, 100);
            }
        }, error => {
            this.utilities.updateLoader(false);
            //this.utilities.consoleLog(error)
        })
    }
    // http://10.42.204.141/com.zensar.zenconverseassist/pgetDashboardData/getInfoList

    dismiss() {
        this.viewCtrl.dismiss();
    }

    initiateReq(phraseList) {
        if (phraseList)
            this.viewCtrl.dismiss(phraseList);
    }

    /**
    * search function
    * @param ev input string for search
    */
    _searchItems(ev: any) {
        // set val to the value of the searchbar
        const val = ev.target.value;
        // Reset groupItems back to all of the groupItems
        // for deep copying of object need to stringify
        let tempList = JSON.stringify(this.chatbotSuggestions);

        this.searchedSuggestionList = JSON.parse(tempList)
        // if the value is an empty string don't filter the groupItems
        if (val && val.trim() != '' && !this.utilities.isEmptyOrNullOrUndefined(val)) {
            this.searchedSuggestionList = [];
            this.chatbotSuggestions.forEach(SuggestionItem => {
                let list: any;
                list = SuggestionItem.phraseList.filter((item: any) => {
                    return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
                })
                if (list.length > 0) {
                    this.searchedSuggestionList.push(SuggestionItem);
                    this.searchedSuggestionList.forEach(element => {
                        if (element.categoryId == SuggestionItem.categoryId) {
                            element.phraseList = list;
                        }
                    });
                }
            });
            if (this.searchedSuggestionList.length > 0)
                setTimeout(() => {
                    document.getElementById('list0').setAttribute('open', 'true');
                }, 500);
        } else {
            setTimeout(() => {
                document.getElementById('list0').setAttribute('open', 'true');
            }, 500);
        }
        this.chatbotSuggestions = JSON.parse(tempList)
    }

    _more(list) {
        this.headerFlag = !this.headerFlag
        if (this.suggestionID1.style.display == 'block') {
            this.suggestionID1.style.display = 'none';
            this.suggestionID2.style.display = 'block';
            // this.listOfSelected = list;
            this.chatbotSuggestions.filter((item) => {
                if (item.categoryName == list.categoryName)
                    this.listOfSelected = item;
            })
        } else {
            this.suggestionID1.style.display = 'block';
            this.suggestionID2.style.display = 'none';
        }
    }

    _scrollToBottom(index) {
        if (index != -1 && (index == this.searchedSuggestionList.length - 1)) {
            setTimeout(() => {
                if (!this.utilities.isEmptyOrNullOrUndefined(this.content))
                    this.content.scrollToBottom();
            }, 100);
        }
    }

}