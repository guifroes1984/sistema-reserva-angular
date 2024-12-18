import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { EmpresaComponent } from './empresa.component';
import { PainelDaEmpresaComponent } from './pages/painel-da-empresa/painel-da-empresa.component';


@NgModule({
  declarations: [
    EmpresaComponent,
    PainelDaEmpresaComponent
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule
  ]
})
export class EmpresaModule { }
