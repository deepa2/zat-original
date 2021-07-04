import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnnouncementPage } from './announcement';
import { ComponentsModule } from '../../components/components.module'; 

@NgModule({
  declarations: [
    AnnouncementPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AnnouncementPage)
  ],

})
export class AnnouncementPageModule { }
