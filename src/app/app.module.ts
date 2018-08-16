import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// import wijmo modules
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';

// apply wijmo license key
import { setLicenseKey } from 'wijmo/wijmo';
setLicenseKey('your license key goes here');


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WjGridModule,
    WjChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
