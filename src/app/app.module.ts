import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './old/pages/home/home.component';
import { ChildComponent } from './old/components/child/child.component';
import { AboutComponent } from './old/pages/about/about.component';
import { ApiService } from './old/services/api.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChildComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
