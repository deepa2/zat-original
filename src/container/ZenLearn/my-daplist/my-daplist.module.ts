import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyDaplistPage } from './my-daplist';

@NgModule({
  declarations: [
    MyDaplistPage,
  ],
  imports: [
    IonicPageModule.forChild(MyDaplistPage),
  ],
})
export class MyDaplistPageModule {}
