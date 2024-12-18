import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'empresa', loadChildren: () => import('./empresa/empresa.module').then(m => m.EmpresaModule) }, { path: 'cliente', loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
