import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

  constructor(
    private router: Router,
  ){ }
  
//*******MODELO PARA CAPTURAR DATOS******

newUser={
email: "",
name:"",
password: ""
}

//  *****Se crea una funcion*****
enviar(){
  console.log(this.newUser);
  this.router.navigate(['/menu']);   
}
}
