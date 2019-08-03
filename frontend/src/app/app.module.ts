// core
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule, LOCALE_ID} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from '../material-module'
// services
import {KojiService} from './services';
// components
import {AppComponent} from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [
    KojiService,
    {provide: LOCALE_ID, useValue: 'en-Us'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
