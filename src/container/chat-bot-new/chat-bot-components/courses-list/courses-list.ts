import { Component, EventEmitter, Input, Output, SimpleChanges } from "@angular/core";
import { CommonUtilities } from '../../../../providers/commonUtilities/commonUtilities';
import { ChatBotServices } from "../../chat-bot-new-services/chat-bot-new.services";
import { NavController } from "ionic-angular";
import { MoveToPageService } from "../../../../container/chat-bot-new/chat-bot-new-services/moveToPage.service";
import { Subscription } from "rxjs";
/**
 * Generated class for the CreateTaskComponent component.
 */
@Component({
  selector: 'courses-list',
  templateUrl: 'courses-list.html',
})

export class CoursesListComponent {

  @Input() responseList: any;
  @Output() scrollToBottom: EventEmitter<any> = new EventEmitter();

  private $withDrawCourse: Subscription = new Subscription();

  errorMsg: string;
  private courseList: Array<Object> = []
  constructor(private moveToPageService: MoveToPageService, private utilities: CommonUtilities, private chatBotServices: ChatBotServices, private navCtrl: NavController) {


    this.$withDrawCourse = this.moveToPageService.withDrawCourse.subscribe((res: any) => {
      this._getCoursesList();
    })
  }

  ngOnInit() {
    this._getCoursesList()
  }
  ngOnDestroy() {
    this.$withDrawCourse.unsubscribe();
  }

  _getCoursesList() {
    this.utilities.updateLoader(true);
    let data = {
      url: this.responseList.restApi.split(",")[0],
      params: this.responseList.parameters
    }
    this.chatBotServices._restAPICall(data).then((response: any) => {
      if (response.data.details) {
        this.courseList = response.data.details;
        this.scrollToBottom.emit();
        this.utilities.updateLoader(false);
      }
    },
      error => {
        this.utilities.updateLoader(false);
      })
  }

  _viewAll(selectedCourse) {
    this.navCtrl.push("OfferingDetailsPage", { selectedCourse: selectedCourse })

  }
}