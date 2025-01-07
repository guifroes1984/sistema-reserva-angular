import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscreverClienteComponent } from './basico/componentes/inscrever-cliente/inscrever-cliente.component';
import { InscreverEmpresaComponent } from './basico/componentes/inscrever-empresa/inscrever-empresa.component';
import { LoginComponent } from './basico/componentes/login/login.component';

const routes: Routes = [
  { path: 'registrar_cliente', component: InscreverClienteComponent},
  { path: 'registrar_empresa', component: InscreverEmpresaComponent},
  { path: 'login', component: LoginComponent},
  { path: 'empresa', loadChildren: () => import('./empresa/empresa.module').then(m => m.EmpresaModule) }, 
  { path: 'cliente', loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
