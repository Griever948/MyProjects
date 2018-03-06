import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DocumentoComponent } from './documento/documento.component';
import { FascicoloComponent } from './fascicolo/fascicolo.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { DocumentoService } from './documento.service';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { FascicoloService } from './fascicolo.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    DocumentoComponent,
    FascicoloComponent,
    MessagesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }),
    AppRoutingModule
  ],
  providers: [MessageService, DocumentoService, FascicoloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
