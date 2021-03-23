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
import { PublicationItemComponent } from './publication-item/publication-item.component';

import { AuthGuard } from './_guard/auth.guard';
import { AuthModule } from './auth/auth.module';
import { LayoutModule } from './layout/layout.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AvatarComponent } from './svg-icon/avatar/avatar.component';


@NgModule({
  declarations: [
    AppComponent,
    PublicationsComponent,
    AddPublicationComponent,
    PublicationItemComponent,
    NavbarComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),

    AppRoutingModule,
    AuthModule,
    LayoutModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
