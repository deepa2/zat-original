import { Component, Input, ViewChild, ElementRef,Renderer2 } from '@angular/core';

/**
 * Generated class for the ExpandCollapseComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'expand-collapse',
  templateUrl: 'expand-collapse.html'
})
export class ExpandCollapseComponent {
  // @ViewChild("expandWrapper", { read: ElementRef }) expandWrapper: ElementRef;
  // @Input() expandHeight: string = "150px";

  @Input() expanded:boolean = false;
  @Input() data:any;
 

  constructor(public renderer: Renderer2) {}

  ngAfterViewInit() {
    // this.renderer.setStyle(this.expandWrapper.nativeElement, "max-height", this.expandHeight);
  }

}
