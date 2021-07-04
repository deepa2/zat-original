import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { PipesModule } from '../../../pipes/pipes.module';
import { BusSearchPage } from "./bus-search";

@NgModule({
  declarations: [
    BusSearchPage
  ],
  imports: [
    IonicPageModule.forChild(BusSearchPage),
    PipesModule
  ],
})
export class BusSearchPageModule { }
