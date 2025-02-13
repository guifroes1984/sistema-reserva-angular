import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UsuarioStorageService } from '../storage/usuario-storage.service';

const BASIC_URL = 'http://localhost:8080/';
export const AUTH_HEADER = 'authorization';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private usuarioStorageService: UsuarioStorageService) { }

  registrarCliente(inscreverRequestDTO: any): Observable<any> {
    return this.http.post(BASIC_URL + "cliente/inscrever", inscreverRequestDTO);
  }

  registrarEmpresa(inscreverRequestDTO: any): Observable<any> {
    return this.http.post(BASIC_URL + "empresa/inscrever", inscreverRequestDTO);
  }

  login( userName: string, password: string) {
    return this.http.post(BASIC_URL + "autenticar", {userName, password}, {observe: 'response'})
      .pipe(
        map((res: HttpResponse<any>) => {
          console.log(res.body)
          this.usuarioStorageService.salvarUsuario(res.body);
          const tokenLength = res.headers.get(AUTH_HEADER)?.length;
          const bearerToken = res.headers.get(AUTH_HEADER)?.substring(7, tokenLength);
          console.log(bearerToken);
          this.usuarioStorageService.salvarToken(bearerToken);
          return res;
        })
      );
  }

}
