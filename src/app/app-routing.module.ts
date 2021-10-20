import { CategoriasComponent } from './categorias/categorias.component';
import { Categoria } from './../models/Categoria.model';
import { AgregarTicketsComponent } from './agregar-tickets/agregar-tickets.component';
import { AgregarEmpleadosComponent } from './agregar-empleados/agregar-empleados.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados.component';
import { NoUserGuard } from './guards/no-user.guard';
import { LoginComponent } from './login/login.component';
import { ReportesComponent } from './reportes/reportes.component';
import { TicketsComponent } from './tickets/tickets.component';
import { AuthorizeGuard } from './guards/authorize.guard';
// import { compileFunction } from 'vm';
import { AgregarCategoriaComponent } from './agregar-categoria/agregar-categoria.component';


const routes: Routes = [
  {path:'',pathMatch:'full', redirectTo:'login'},
  {
    path:'login',
    component: LoginComponent,
    canActivate: [NoUserGuard]
  },
  {
    path:'empleados',
    component: EmpleadosComponent,
    canActivate: [AuthorizeGuard]
  },
  {
    path:'tickets',
    component: TicketsComponent,
    canActivate: [AuthorizeGuard]
  },
  {
    path:'reportes',
    component: ReportesComponent,
    canActivate: [AuthorizeGuard]
  },
  {
    path:'agregar-empleados',
    component:AgregarEmpleadosComponent,
    canActivate: [AuthorizeGuard]
  },
  {
    path:'agregar-tickets',
    component:AgregarTicketsComponent,
    canActivate: [AuthorizeGuard]
  },
  {
    path:'agregar-categoria',
    component:AgregarCategoriaComponent,
    canActivate: [AuthorizeGuard]
  },
  {
    path:'categorias',
    component:CategoriasComponent,
    canActivate: [AuthorizeGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
