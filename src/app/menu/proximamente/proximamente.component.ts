import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proximamente',
  templateUrl: './proximamente.component.html',
  styleUrls: ['./proximamente.component.scss']
})
export class ProximamenteComponent {
  constructor(private router: Router) { }

  onLogoutClick() {
    // Aquí es donde se realiza la lógica para cerrar sesión, si es que se tiene.
  
    // Luego, navegas al componente de sesión utilizando el objeto Router.
    this.router.navigate(['/sesion']);
  }


}
