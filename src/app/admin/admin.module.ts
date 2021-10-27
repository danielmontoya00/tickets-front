import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AgregarCategoriaComponent } from './agregar-categoria/agregar-categoria.component';
import { AgregarEmpleadosComponent } from './agregar-empleados/agregar-empleados.component';
import { AgregarTicketsComponent } from './agregar-tickets/agregar-tickets.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { EditarCategoriaComponent } from './editar-categoria/editar-categoria.component';
import { EditarEmpleadoComponent } from './editar-empleado/editar-empleado.component';
import { EditarTicketComponent } from './editar-ticket/editar-ticket.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { ReportesComponent } from './reportes/reportes.component';
import { TicketsComponent } from './tickets/tickets.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AdminComponent,
    AgregarCategoriaComponent,
    AgregarEmpleadosComponent,
    AgregarTicketsComponent,
    CategoriasComponent,
    EditarCategoriaComponent,
    EditarEmpleadoComponent,
    EditarTicketComponent,
    EmpleadosComponent,
    ReportesComponent,
    TicketsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    FormsModule,
    SharedModule
  ]
})
export class AdminModule { }
