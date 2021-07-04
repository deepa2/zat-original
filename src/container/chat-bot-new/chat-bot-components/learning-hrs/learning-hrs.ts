import { Component, EventEmitter, Input, Output, SimpleChanges } from "@angular/core";
import { CommonUtilities } from '../../../../providers/commonUtilities/commonUtilities';
import { HttpProvider } from '../../../../providers/http/http';
import { GetterSetter } from "../../../../providers/getterSetter/getterSetter";
import { ChatBotServices } from "../../../../container/chat-bot-new/chat-bot-new-services/chat-bot-new.services";
import { NavController } from "ionic-angular";
/**
 * Generated class for the CreateTaskComponent component.
 */
@Component({
  selector: 'learning-hrs',
  templateUrl: 'learning-hrs.html',
})

export class learningHrsComponent {

  @Input() responseList: any;
  @Output() scrollToBottom: EventEmitter<any> = new EventEmitter();

  learningHistory: Array<object> = null;
  referralData: Array<object> = null;
  errorMsg: string;
  noJobsAvailable: string = '';
  constructor(private httpProvider: HttpProvider, private utilities: CommonUtilities, private chatBotServices: ChatBotServices, private getterSetter: GetterSetter, private navCtrl: NavController) { }

  ngOnInit() {
    this._getLearningHrs()
  }

  _getLearningHrs() {
    this.utilities.updateLoader(true);
    let data = {
      url: this.responseList.restApi.split(",")[0],
      params: {
      },
    }
    this.chatBotServices._restAPICall(data).then((response: any) => {
      this.utilities.consoleLog(response);
      this.learningHistory = response.data.details.responseList.learningHistory;
      this.scrollToBottom.emit();
      this.utilities.updateLoader(false)
    },
      error => {
        this.utilities.updateLoader(false);
      })
  }

  allOffering(selectedCourse: any) {
    let showAllFilters: boolean = true
    if (this.utilities.isEmptyOrNullOrUndefined(selectedCourse)) {
      selectedCourse = selectedCourse;
      showAllFilters = false

    }
    this.navCtrl.push("CourseListPage", { selectedCourse: selectedCourse, showAllFilters: showAllFilters })
  }
}