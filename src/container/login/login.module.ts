import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { FormsModule } from '@angular/forms';
import { Data } from '../../providers/data/data';
import { Dialogs } from '@ionic-native/dialogs';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects ,metaReducers} from '../../store';


@NgModule({
  declarations: [LoginPage],
  imports: [
    IonicPageModule.forChild(LoginPage),
    FormsModule,
    StoreModule.forFeature('app', reducers,{metaReducers}),
    EffectsModule.forFeature(effects),
  ],
  providers:[
    Data,
    Dialogs
  ]
})
export class LoginPageModule { }