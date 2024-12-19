import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = 'http://localhost:8080/'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registrarCliente(inscreverRequestDTO: any): Observable<any> {
    return this.http.post(BASIC_URL + "cliente/inscrever", inscreverRequestDTO);
  }

  registrarEmpresa(inscreverRequestDTO: any): Observable<any> {
    return this.http.post(BASIC_URL + "empresa/inscrever", inscreverRequestDTO);
  }

}
