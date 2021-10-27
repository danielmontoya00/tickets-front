import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import { MisTicketsComponent } from './mis-tickets/mis-tickets.component';


const routes: Routes = [
    {
        path: "",
        component: ClientComponent,
        children: [
            {
                path: "mis-tickets",
                component: MisTicketsComponent,
            },
            {
                path: "",
                redirectTo: "mis-tickets",
                pathMatch: "full"
            },
            {
                path: "**",
                redirectTo: "mis-tickets",
            }
        ]
    }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
