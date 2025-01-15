import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente.component';
import { PainelDoClienteComponent } from './pages/painel-do-cliente/painel-do-cliente.component';

const routes: Routes = [
  { path: '', component: ClienteComponent },
  { path: 'painel', component: PainelDoClienteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
