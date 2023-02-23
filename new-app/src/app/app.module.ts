import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EnlacesComponent } from './enlaces/enlaces.component';
import { EnlacesPaginasWebComponent } from './enlaces-paginas-web/enlaces-paginas-web.component';
import { EnlacesRedesSocialesComponent } from './enlaces-redes-sociales/enlaces-redes-sociales.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EnlacesComponent,
    EnlacesPaginasWebComponent,
    EnlacesRedesSocialesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
