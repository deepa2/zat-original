import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchRoutePage } from './search-route';

@NgModule({
  declarations: [
    SearchRoutePage,
  ],
  imports: [
    IonicPageModule.forChild(SearchRoutePage),
  ],
})
export class SearchRoutePageModule {}
