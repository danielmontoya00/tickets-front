import { CategoriasComponent } from './categorias/categorias.component';
import { Categoria } from './../models/Categoria.model';
import { AgregarTicketsComponent } from './agregar-tickets/agregar-tickets.component';
import { AgregarEmpleadosComponent } from './agregar-empleados/agregar-empleados.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados.component';
import { LoginComponent } from './login/login.component';
import { ReportesComponent } from './reportes/reportes.component';
import { TicketsComponent } from './tickets/tickets.component';
// import { compileFunction } from 'vm';
import { AgregarCategoriaComponent } from './agregar-categoria/agregar-categoria.component';


const routes: Routes = [
  {path:'',pathMatch:'full', redirectTo:'login'},
  {path:'login', component:LoginComponent},
  {path:'empleados', component:EmpleadosComponent},
  {path:'tickets', component:TicketsComponent},
  {path:'reportes', component:ReportesComponent},
  {path:'agregar-empleados', component:AgregarEmpleadosComponent},
  {path:'agregar-tickets', component:AgregarTicketsComponent},
  {path:'agregar-categoria', component:AgregarCategoriaComponent},
  {path:'categorias', component:CategoriasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
