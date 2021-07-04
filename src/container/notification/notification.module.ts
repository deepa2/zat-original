import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { NotificationPage } from './notification';

@NgModule({
  declarations: [
    NotificationPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(NotificationPage),
  ],
})
export class NotificationPageModule { }
