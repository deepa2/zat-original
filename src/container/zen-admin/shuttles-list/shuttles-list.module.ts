import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PipesModule } from '../../../pipes/pipes.module';
import { ShuttlesListPage } from './shuttles-list';

@NgModule({
  declarations: [
    ShuttlesListPage
  ],
  imports: [
    IonicPageModule.forChild(ShuttlesListPage),
    PipesModule
  ],
})
export class ShuttlesListPageModule {}
