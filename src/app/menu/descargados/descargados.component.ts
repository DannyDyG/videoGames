import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-descargados',
  templateUrl: './descargados.component.html',
  styleUrls: ['./descargados.component.scss']
})
export class DescargadosComponent {
  constructor(private router: Router) { }

  onLogoutClick() {
    // Aquí es donde se realiza la lógica para cerrar sesión, si es que se tiene.
  
    // Luego, navegas al componente de sesión utilizando el objeto Router.
    this.router.navigate(['/sesion']);
  }

}
