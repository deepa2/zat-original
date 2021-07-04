import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { CommonUtilities } from '../../providers/commonUtilities/commonUtilities';
import { PopoverPage } from '../../container/popover/popover';
/**
 * Generated class for the AccordianComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'accordian',
  templateUrl: 'accordian.html'
})
export class AccordianComponent
{

  showAnswer: boolean = true;
  selectedStar: any;
  constructor(private utility: CommonUtilities, private popOver: PopoverController)
  {
    setTimeout(() =>
    {
      if (this.exitStatusData)
      {
        this.getRating();
      }

    }, 0)
  }

  @Input() faqData: any;
  @Input() type: string;
  @Input() exitStatusData: any;
  @Input() length: any;
  @Input() index: any;
  @Output() sendMail: EventEmitter<any> = new EventEmitter();
  @Output() updateRating: EventEmitter<any> = new EventEmitter();




  getRating()
  {
    this.selectedStar = this.exitStatusData.rating;
  }

  mailTo(selectedVal, data)
  {
    if (selectedVal.isExitTrackerOpen)
    {

      this.sendMail.emit(data);


    } else
    {
      this.utility.showToast("Department can be contacted only after the process is initiated.")
    }

  }


  expandAnswer()
  {
    this.showAnswer = !this.showAnswer;
  }

  openRating(data)
  {
    this.updateRating.emit(data);
  }

  call(selectedValue, selectedDepartment, type)
  {

    if (selectedValue.isExitTrackerOpen)
    {

      if (type = 'mobile')
      {
        this.utility.callNumber(selectedDepartment.mobileNumber);
      } else
      {
        this.utility.callNumber(selectedDepartment.extension);
      }



    } else
    {
      this.utility.showToast("Department can be contacted only after the process is initiated.")
    }
    // this.utility.callNumber(callData)
  }

}
