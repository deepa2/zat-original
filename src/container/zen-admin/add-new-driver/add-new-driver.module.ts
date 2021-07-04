import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PipesModule } from '../../../pipes/pipes.module';
import { AddNewDriverPage } from './add-new-driver';

@NgModule({
  declarations: [
    AddNewDriverPage,
  ],
  imports: [
    IonicPageModule.forChild(AddNewDriverPage),
    PipesModule
  ],
})
export class AddNewDriverPageModule {}
