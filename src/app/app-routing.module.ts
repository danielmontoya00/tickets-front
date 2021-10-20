import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados.component';
import { NoUserGuard } from './guards/no-user.guard';
import { LoginComponent } from './login/login.component';
import { ReportesComponent } from './reportes/reportes.component';
import { TicketsComponent } from './tickets/tickets.component';
import { AuthorizeGuard } from './guards/authorize.guard';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
