import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './auth/clientes/clientes.component';
import { EmpleadosComponent } from './auth/empleados/empleados.component';
import { NavbarComponent } from './auth/navbar/navbar.component';

const routes: Routes = [
  //{path: '', redirectTo:'/auth', pathMatch: 'full'},
  {path: 'auth', loadChildren: () => import ('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'navbar', component: NavbarComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'empleados', component: EmpleadosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }
