import { Component } from '@angular/core';

/**
 * Generated class for the ApplicationDownComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'application-down',
  templateUrl: 'application-down.html'
})
export class ApplicationDownComponent
{

  text: string;

  constructor()
  {
    this.text = 'Hello World';
  }

}
