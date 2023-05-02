import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Servicio1Service {
  private datos: any[] = [];

  agregarDato(nuevoDato: any) {
    this.datos.push(nuevoDato);
  }

  obtenerDatos() {
    return this.datos;
  }

  constructor() { }
}
