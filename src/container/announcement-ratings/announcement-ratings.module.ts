import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnnouncementRatingsPage } from './announcement-ratings';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    AnnouncementRatingsPage,
  ],
  imports: [
    ComponentsModule, 
    IonicPageModule.forChild(AnnouncementRatingsPage),
  ],
})
export class AnnouncementRatingsPageModule {}
