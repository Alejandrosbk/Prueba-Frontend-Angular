import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Servicio para las peticiones http
import { CookieService } from 'ngx-cookie-service'; // Servicio para las coockies de login

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProductosComponent } from './components/productos/productos.component';
import { PreciosBajosSiempreComponent } from './components/productos/precios-bajos-siempre/precios-bajos-siempre.component';
import { BasicosParaTuHogarComponent } from './components/productos/basicos-para-tu-hogar/basicos-para-tu-hogar.component';
import { PorTiempoLimitadoComponent } from './components/productos/por-tiempo-limitado/por-tiempo-limitado.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductosComponent,
    PreciosBajosSiempreComponent,
    BasicosParaTuHogarComponent,
    PorTiempoLimitadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CookieService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
