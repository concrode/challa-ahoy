import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisitorRegisterComponent } from './visitor/visitor-register/visitor-register.component';
import { VisitorConfirmComponent } from './visitor/visitor-confirm/visitor-confirm.component';
import { VisitorSubmitComponent } from './visitor/visitor-submit/visitor-submit.component';

@NgModule({
  declarations: [
    AppComponent,
    VisitorRegisterComponent,
    VisitorConfirmComponent,
    VisitorSubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
