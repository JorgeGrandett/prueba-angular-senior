import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {clienteData} from 'src/app/model/cliente';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BplusService {

  url: string = "";

  constructor(private http: HttpClient) {
    this.url = (environment.production) ? "localhost/3001/demo/" : "localhost/3001/demo/";

  }

  getAll () {
    return this.http.get(`${this.url}/viewClientes`);
  }

  getByCedula(cedula: number) {
    return this.http.get(`${this.url}/viewCliente?cedula=${cedula}`)
  }

  createCliente (data: clienteData) {
    return this.http.post(`${this.url}/addCliente`, data);
  }

  updateClienteByCedula (cedula: number, data:clienteData) {
    return this.http.put(`${this.url}/updateCliente?cedula=${cedula}`, data)
  }

  deleteClienteByCedula(cedula: number) {
    return this.http.delete(`${this.url}/deleteCliente?cedula=${cedula}`);
  }

}
