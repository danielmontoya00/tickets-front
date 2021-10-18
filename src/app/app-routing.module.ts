import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados.component';
import { LoginComponent } from './login/login.component';
import { ReportesComponent } from './reportes/reportes.component';
import { TicketsComponent } from './tickets/tickets.component';


const routes: Routes = [
  {path:'',pathMatch:'full', redirectTo:'login'},
  {path:'login', component:LoginComponent},
  {path:'empleados', component:EmpleadosComponent},
  {path:'tickets', component:TicketsComponent},
  {path:'reportes', component:ReportesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
