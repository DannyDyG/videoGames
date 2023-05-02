import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(private router: Router) { }

  onLogoutClick() {
    // Aquí es donde se realiza la lógica para cerrar sesión, si es que se tiene.
  
    // Luego, navegas al componente de sesión utilizando el objeto Router.
    this.router.navigate(['/sesion']);
  }

}
