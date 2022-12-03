import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigieHeaderComponent } from './sigie-header/sigie-header.component';
import { CaeSigieStepperComponent } from './cae-sigie-stepper/cae-sigie-stepper.component';
import { AppMaterialModule } from '../app-material/app-material.module';



@NgModule({
  declarations: [
    SigieHeaderComponent,
    CaeSigieStepperComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    SigieHeaderComponent,
    CaeSigieStepperComponent,
    //navbar
  ]
})
export class CoreModule { }
