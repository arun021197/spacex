import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiservService } from './apiserv.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightComponent } from './flight/flight.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiservService],
  bootstrap: [AppComponent]
})
export class AppModule { }
