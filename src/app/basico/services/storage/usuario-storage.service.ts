import { Injectable } from '@angular/core';

const TOKEN = 's_token';
const USUARIO = 's_usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioStorageService {

  constructor() { }

  public salvarToken(token: string): void {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN, token);
  }

  static getToken(): string {
    return localStorage.getItem(TOKEN);
  }

  public salvarUsuario(usuario): void {
    window.localStorage.removeItem(USUARIO);
    window.localStorage.setItem(USUARIO, JSON.stringify(usuario));
  }

  static getUsuario(): any {
    return JSON.parse(localStorage.getItem(USUARIO));
  }

  static getUsuarioId(): string {
    const usuario = this.getUsuario();
    if(usuario === null){return '';}
    return usuario.usuarioId;
  }

  static getUsuarioRole(): string {
    const usuario = this.getUsuario();
    if(usuario === null){return '';}
    return usuario.role;
  }

  static clienteLogado(): boolean {
    if(this.getToken() === null) {
      return false;
    }
    const role: string = this.getUsuarioRole();
    return role == 'CLIENTE';
  }

  static empresaLogado(): boolean {
    if(this.getToken() === null) {
      return false;
    }
    const role: string = this.getUsuarioRole();
    return role == 'EMPRESA';
  }

  static sair(): void {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USUARIO);
  }
 
}
