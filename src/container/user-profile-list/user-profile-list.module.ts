import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserProfileListPage } from './user-profile-list';

@NgModule({
  declarations: [
    UserProfileListPage,
  ],
  imports: [
    IonicPageModule.forChild(UserProfileListPage),
  ],
})
export class UserProfileListPageModule {}
