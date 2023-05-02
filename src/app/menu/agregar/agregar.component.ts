import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Servicio1Service } from 'src/app/servicio1.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent {
  nuevoDato: any = {};

  constructor(private router: Router,  //no olvidar comas
    private miServicio: Servicio1Service)

   { }

   agregar() {
    this.miServicio.agregarDato(this.nuevoDato);
    this.nuevoDato = {};
  }

// *****Aquí es donde se realiza la lógica para cerrar sesión, si es que se tiene.******
  
  onLogoutClick() {
    
    // Luego, navegas al componente de sesión utilizando el objeto Router.
    this.router.navigate(['/sesion']);
  }

}
