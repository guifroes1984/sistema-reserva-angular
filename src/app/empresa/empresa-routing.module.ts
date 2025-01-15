import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaComponent } from './empresa.component';
import { PainelDaEmpresaComponent } from './pages/painel-da-empresa/painel-da-empresa.component';

const routes: Routes = [
  { path: '', component: EmpresaComponent },
  { path: 'painel', component: PainelDaEmpresaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaRoutingModule { }
