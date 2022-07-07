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
    nombres: null,
    apellidos: null,
    cedula: null,
    direccion: null,
    edad: null
  };
  opcion : number = null;
  auxCedula : number = null;

  constructor(private bPlus :BplusService) {
    this.opcion = 0;
    this.limpiarDatos();
  }

  ngOnInit(): void { 
  }

  limpiarDatos () {
    this.datos = {
      nombres: null,
      apellidos: null,
      cedula: null,
      direccion: null,
      edad: null
    };
    this.auxCedula = null;
  }

  addCliente() {
    console.log(this.bPlus.createCliente(this.datos)); 
  }

  listClientes () {
    console.log(this.bPlus.getAll()); 
  }

  searchCliente () {
    console.log(this.bPlus.getByCedula(this.auxCedula));
  }

  updateCliente (){
    console.log(this.bPlus.updateClienteByCedula(this.auxCedula, this.datos));
  }

  deleteCliente () {
    console.log(this.bPlus.deleteClienteByCedula(this.auxCedula));
  }

}
