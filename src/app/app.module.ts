import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations'
import { CoreModule } from './core/core.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SigieNavbarComponent } from './core/sigie-navbar/sigie-navbar.component';
import { SigieFooterComponent } from './core/sigie-footer/sigie-footer.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    CoreModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
