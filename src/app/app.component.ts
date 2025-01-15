import { Component } from '@angular/core';
import { UsuarioStorageService } from './basico/services/storage/usuario-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SistemaReservaServicoWeb';

  clienteLogado: boolean = UsuarioStorageService.clienteLogado();
  empresaLogado: boolean = UsuarioStorageService.empresaLogado();

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      this.clienteLogado = UsuarioStorageService.clienteLogado();
      this.empresaLogado = UsuarioStorageService.empresaLogado();
    })
  }

  logout() {
    UsuarioStorageService.sair();
    this.router.navigateByUrl('login');
  }

}
