import { Component, OnInit } from '@angular/core';
import {clienteData} from 'src/app/model/cliente';
import { BplusService } from './services/bplus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  datos : clienteData = {
    nombre: null,
    apellidos: null,
    cedula: null,
    direccion: null,
    edad: null
  };
  opcion : number = null;
  auxCedula : number = null;
  response : any;


  constructor(private bPlus :BplusService) {
    this.opcion = 0;
    this.limpiarDatos();
  }

  ngOnInit(): void { 
  }

  limpiarDatos () {
    this.datos = {
      nombre: null,
      apellidos: null,
      cedula: null,
      direccion: null,
      edad: null
    };
    this.auxCedula = null;
    this.response = null;
  }

  async addCliente() {
    for (const key in this.datos) {
      if (this.datos[key as keyof typeof this.datos] == null) {
        return alert("Falta uno o varios campos");
      }
    }
    this.bPlus.createCliente(this.datos).subscribe((respuesta) => {
                                                                  this.response = respuesta;
                                                                  console.log(respuesta);
                                                                  this.limpiarDatos();
                                                                }); 
  }

  listClientes () {
    this.bPlus.getAll().subscribe((respuesta) => {
                                                  this.response = respuesta;
                                                  console.log(this.response);
                                                  this.limpiarDatos();
                                                });
  }

  searchCliente () {
    this.bPlus.getByCedula(this.auxCedula).subscribe((respuesta) => {
                                                                    this.response = respuesta;
                                                                    console.log(this.response);
                                                                    this.limpiarDatos();
                                                                  });
  }

  updateCliente (){
    if(this.auxCedula == null) {
      return alert("Especifique la cedula del cliente que desea editar");
    }
    this.bPlus.updateClienteByCedula(this.auxCedula, this.datos).subscribe((respuesta) => {
                                                                                          this.response = respuesta;
                                                                                          console.log(this.response);
                                                                                          this.limpiarDatos();
                                                                                        });
  }

  deleteCliente () {
    if(this.auxCedula == null) {
      return alert("Especifique la cedula del cliente que desea eliminar");
    }
    this.bPlus.deleteClienteByCedula(this.auxCedula).subscribe((respuesta) => {
                                                                              this.response = respuesta;
                                                                              console.log(this.response);
                                                                              this.limpiarDatos();
                                                                            });
  }

}
