import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './auth/navbar/navbar.component';
import { ClientesComponent } from './auth/clientes/clientes.component';
import { EmpleadosComponent } from './auth/empleados/empleados.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientesComponent,
    EmpleadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
