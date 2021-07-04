import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SavedProfilePage } from './saved-profile';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SavedProfilePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(SavedProfilePage),
  ]
})
export class SavedProfilePageModule { }
