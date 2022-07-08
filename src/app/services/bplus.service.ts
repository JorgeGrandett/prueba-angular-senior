import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {clienteData} from 'src/app/model/cliente';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BplusService {

  url: string = "";

  constructor(private http: HttpClient) {
    this.url = (environment.production) ? "http://localhost:3001/demo" : "http://localhost:3001/demo";
  }

  getAll (): Observable<clienteData[]> {
    return this.http.get<clienteData[]>(`${this.url}/viewClientes`);
  }

  getByCedula(cedula: number): Observable<clienteData>  {
    return this.http.get<clienteData>(`${this.url}/viewCliente?cedula=${cedula}`);
  }

  createCliente (data: clienteData): Observable <Boolean> {
    return this.http.post<Boolean>(`${this.url}/addCliente`, data);
  }

  updateClienteByCedula (cedula: number, data:clienteData): Observable<Boolean> {
    return this.http.put<Boolean>(`${this.url}/updateCliente?cedula=${cedula}`, data);
  }

  deleteClienteByCedula(cedula: number): Observable<Boolean> {
    return this.http.delete<Boolean>(`${this.url}/deleteCliente?cedula=${cedula}`);
  }

}
