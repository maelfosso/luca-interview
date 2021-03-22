import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ReactiveFormsModule } from '@angular/forms';

import { InMemoryDataService } from './_services/in-memory-data.service';

import { AppComponent } from './app.component';
import { PublicationsComponent } from './publications/publications.component';
import { AppRoutingModule } from './app-routing.module';
import { AddPublicationComponent } from './add-publication/add-publication.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicationsComponent,
    AddPublicationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
