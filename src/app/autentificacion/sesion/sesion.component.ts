import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.scss']
})
export class SesionComponent {
  constructor(
    private router: Router,
  ){ }
  
//*******MODELO PARA CAPTURAR DATOS******

newUser={
email: "",
password: ""
}

//  *****Se crea una funcion*****
irARegistrarse(){
  console.log(this.newUser);
  this.router.navigate(['/registro']);   
}
irAMenu(){
  console.log(this.newUser);
  this.router.navigate(['/menu']);   
}
}
