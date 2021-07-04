import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostQuestionPage } from './post-question';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PostQuestionPage,
  ],
  imports: [
    IonicPageModule.forChild(PostQuestionPage),
    FormsModule
  ],
})
export class PostQuestionPageModule { }
