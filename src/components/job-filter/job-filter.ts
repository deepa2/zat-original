import { Component } from '@angular/core';

/**
 * Generated class for the JobFilterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'job-filter',
  templateUrl: 'job-filter.html'
})
export class JobFilterComponent
{

  text: string;

  constructor()
  {
    this.text = 'Hello World';
  }

}
