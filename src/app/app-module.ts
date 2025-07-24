import { importProvidersFrom, NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Clienti } from './component/clienti/clienti';
import { Fatture } from './component/fatture/fatture';
import { Ordini } from './component/ordini/ordini';
import { Servizi } from './component/servizi/servizi';
import { Navbar } from './navbar/navbar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Clienti,
    Fatture,
    Ordini,
    Servizi,
    Navbar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
