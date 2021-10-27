import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizeGuard } from '../guards/authorize.guard';
import { AdminComponent } from './admin.component';
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


const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path:'empleados',
                component: EmpleadosComponent
            },
            {
                path:'tickets',
                component: TicketsComponent
            },
            {
                path:'reportes',
                component: ReportesComponent
            },
            {
                path:'agregar-empleados',
                component:AgregarEmpleadosComponent
            },
            {
                path:'agregar-tickets',
                component:AgregarTicketsComponent
            },
            {
                path:'agregar-categoria',
                component:AgregarCategoriaComponent
            },
            {
                path:'categorias',
                component:CategoriasComponent
            },
            {
                path:'editar-empleado/:id',
                component:EditarEmpleadoComponent
            },
            {
                path:'editar-categoria/:id',
                component:EditarCategoriaComponent
            },
            {
                path:'editar-ticket/:id',
                component:EditarTicketComponent
            },
            {
                path: "",
                redirectTo: "empleados"
            }
        ]
    }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminRoutingModule { }
