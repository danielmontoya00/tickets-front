import { AgregarEmpleadosComponent } from './agregar-empleados/agregar-empleados.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReportesComponent } from './reportes/reportes.component';
import { TicketsComponent } from './tickets/tickets.component';
import { AuthInterceptor } from './services/http.interceptor';
import { appReducers } from './store/app.store';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { EffectsArray } from './store/effects';
import { PrintErrorComponent } from './print-error/print-error.component';
import { AgregarTicketsComponent } from './agregar-tickets/agregar-tickets.component';
import { AgregarCategoriaComponent } from './agregar-categoria/agregar-categoria.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { EditarEmpleadoComponent } from './editar-empleado/editar-empleado.component';
import { EditarCategoriaComponent } from './editar-categoria/editar-categoria.component';
import { EditarTicketComponent } from './editar-ticket/editar-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    ReportesComponent,
    TicketsComponent,
    EmpleadosComponent,
    PrintErrorComponent,
    AgregarEmpleadosComponent,
    AgregarTicketsComponent,
    AgregarCategoriaComponent,
    CategoriasComponent,
    EditarEmpleadoComponent,
    EditarCategoriaComponent,
    EditarTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(EffectsArray),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
