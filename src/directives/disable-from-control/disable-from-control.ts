import { NgControl } from '@angular/forms';
import { Directive, Input, ChangeDetectorRef } from '@angular/core';

/**
 * Generated class for the DisableFromControlDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[disableControl]' // Attribute selector
})
export class DisableFromControlDirective {

  @Input() set disableControl(condition: boolean) {
    const action = condition ? 'disable' : 'enable';

    this.ngControl.control[action]();
    this.cdr.detectChanges();


  }

  constructor(private ngControl: NgControl, private cdr: ChangeDetectorRef) {

  }

}






