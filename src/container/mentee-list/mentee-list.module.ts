import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenteeListPage } from './mentee-list';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MenteeListPage,
  ],
  imports: [
    IonicPageModule.forChild(MenteeListPage),
    ComponentsModule,
  ],
})
export class FaqPageModule  { }
