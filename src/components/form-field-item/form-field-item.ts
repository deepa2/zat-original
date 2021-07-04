import { Component } from '@angular/core';

/**
 * Generated class for the FormFieldItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'form-field-item',
  templateUrl: 'form-field-item.html'
})
export class FormFieldItemComponent {

  text: string;

  constructor() {
    this.text = 'Hello World';
  }

}
