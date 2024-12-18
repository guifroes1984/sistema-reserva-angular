import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
import { PainelDoClienteComponent } from './pages/painel-do-cliente/painel-do-cliente.component';


@NgModule({
  declarations: [
    ClienteComponent,
    PainelDoClienteComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
