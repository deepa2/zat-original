import { Component, Input } from '@angular/core';

@Component({
  selector: 'tool-tip',
  templateUrl: 'tool-tip.html'
})
export class ToolTipComponent {

  @Input() toolTipMsg;

  tooltipEvent: 'click' | 'press' = 'click';
  showArrow: boolean = true;
  duration: number = 3000; 

  constructor() {
  }
 
}
