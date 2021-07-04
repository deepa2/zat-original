import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonicSelectableModule } from 'ionic-selectable';
import { CreateDapPage } from './create-dap';
import { FormControlService } from '../../../providers/formService/form-control.service';
import { ComponentsModule } from '../../../components/components.module';
import { TooltipsModule } from 'ionic-tooltips';


@NgModule({
  declarations: [
    CreateDapPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateDapPage),
    ComponentsModule,
    IonicSelectableModule,
    TooltipsModule
  ],
  providers: [
    
    FormControlService
  ]
})
export class CreateDapPageModule {}
