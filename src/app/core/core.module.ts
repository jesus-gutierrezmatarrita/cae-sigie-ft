import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigieHeaderComponent } from './sigie-header/sigie-header.component';
import { CaeSigieStepperComponent } from './cae-sigie-stepper/cae-sigie-stepper.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SigieNavbarComponent } from './sigie-navbar/sigie-navbar.component';
import { SigieFooterComponent } from './sigie-footer/sigie-footer.component';


@NgModule({
  declarations: [
    SigieHeaderComponent,
    CaeSigieStepperComponent,
    SigieNavbarComponent,
    SigieFooterComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    FlexLayoutModule
  ],
  exports: [
    SigieHeaderComponent,
    CaeSigieStepperComponent,
    SigieNavbarComponent,
    SigieFooterComponent
  ]
})
export class CoreModule { }
