import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { SearchPage } from './search';

@NgModule({
  declarations: [
    SearchPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(SearchPage),
  ],
})
export class SearchPageModule {}
