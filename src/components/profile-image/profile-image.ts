import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'profile-image',
  templateUrl: 'profile-image.html'
})
export class ProfileImage {

  @Input() profilePic: string;
  @Output() profileClick: EventEmitter<number> = new EventEmitter();

  profileClicked() {
    this.profileClick.emit();
  }

}