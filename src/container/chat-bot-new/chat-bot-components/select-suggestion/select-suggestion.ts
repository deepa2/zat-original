import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EmpContactListModelComponent } from '../../../../components/emp-contact-list-model/emp-contact-list-model';
import { ModalController } from 'ionic-angular';
/**
 * Generated class for the SelectSuggestionComponent component.
 */
@Component({
  selector: 'select-suggestion',
  templateUrl: 'select-suggestion.html'
})
export class SelectSuggestionComponent {
  @Input() suggestionList: Array<any> = [];
  @Input() selectedValue: any;
  @Input() type: string = null;

  @Output() setSuggestion: EventEmitter<any> = new EventEmitter();

  constructor(private modalCtrl: ModalController) { }

  selectedSuggestion(obj) {
    this.setSuggestion.emit(obj);
  }

  ngOnChanges() {
  }

  openModal() {
    let title = this.getTitle(this.type);

    let modal = this.modalCtrl.create(EmpContactListModelComponent, {
      data: this.suggestionList,
      title,
      selectedValue: this.selectedValue
    }, {
      cssClass: 'listModal',
    });

    modal.present();
    modal.onDidDismiss((res) => {
      if (res) {
        this.selectedSuggestion(res);
      }
    })
  }

  getTitle(type) {
    switch (type) {
      case 'hour':
        {
          return 'Hour'
        }
      case 'formHour':
        {
          return 'Hour'
        }
      case 'formMilestone':
        {
          return 'Milestone'
        }
      default:
        return;
    }
  }

  matchMilestone(selMilestone, milestoneObj) {
    return JSON.stringify(selMilestone) === JSON.stringify(milestoneObj);
  }

}
