import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopularesComponent } from './menu/populares/populares.component';
import { RegistroComponent } from './autentificacion/registro/registro.component';
import { SesionComponent } from './autentificacion/sesion/sesion.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu/menu.component';
import { DescargadosComponent } from './menu/descargados/descargados.component';
import { ProximamenteComponent } from './menu/proximamente/proximamente.component';
import { AgregarComponent } from './menu/agregar/agregar.component';


@NgModule({
  declarations: [
    AppComponent,
    PopularesComponent,
    RegistroComponent, 
    SesionComponent,
    MenuComponent,
    DescargadosComponent,
    ProximamenteComponent,
    AgregarComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
