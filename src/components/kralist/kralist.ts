import { Component, Input, Output, EventEmitter } from '@angular/core';


/**
 * Generated class for the KralistComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'kralist',
  templateUrl: 'kralist.html'
})
export class KralistComponent {

  text: string;
  @Input() item: any;
  @Output() goToKra: EventEmitter<string> = new EventEmitter();
  @Output() goToTeam: EventEmitter<string> = new EventEmitter();
  enlarge: boolean = false;

  constructor() {
    this.text = 'Hello World';
  }

  goToKRA(data: any) {
    if (data.isDisable == false) {
      this.goToKra.emit(data);
    }
  }

  goToTeamList() {
    this.goToTeam.emit()
  }

  onCardCliked() {
    this.enlarge = !this.enlarge
  }

}
