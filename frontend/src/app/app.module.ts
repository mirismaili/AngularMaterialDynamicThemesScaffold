// core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// routes
import { AppRoutingModule } from './app-routing.module';
// services
import { KojiService } from './services';
// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components';
// pages
import { HomeComponent } from './pages';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    KojiService,
    { provide: LOCALE_ID, useValue: 'en-Us' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
