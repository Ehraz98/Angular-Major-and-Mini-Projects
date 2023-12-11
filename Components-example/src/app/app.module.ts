import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuccessComponent } from './success/success.component';
import { FailedComponent } from './failed/failed.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    FailedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports:[
    FailedComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
