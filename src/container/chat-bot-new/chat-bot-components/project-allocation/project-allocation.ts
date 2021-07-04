import { Component, Input } from "@angular/core";

/**
 * Generated class for the CreateTaskComponent component.
 */
@Component({
  selector: 'project-allocation',
  templateUrl: 'project-allocation.html',
})

export class ProjectAllocationComponent {
  @Input() chatListItem: any;
  ngOnInit() {
  }
}