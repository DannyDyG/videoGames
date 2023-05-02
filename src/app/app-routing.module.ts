import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularesComponent } from './menu/populares/populares.component';
import { DescargadosComponent } from './menu/descargados/descargados.component';
import { ProximamenteComponent } from './menu/proximamente/proximamente.component';
import { AgregarComponent } from './menu/agregar/agregar.component';
import { SesionComponent } from './autentificacion/sesion/sesion.component';
import { RegistroComponent } from './autentificacion/registro/registro.component';
import { MenuComponent } from './menu/menu/menu.component';

//*****Rutas de Navegacion */
const routes: Routes = [
{path: '', redirectTo: '/sesion', pathMatch: 'full'},
{path: 'populares', component:PopularesComponent},
{path: 'descargados', component:DescargadosComponent},
{path: 'proximamente', component:ProximamenteComponent},
{path: 'agregar', component:AgregarComponent},
{path: 'sesion', component: SesionComponent},
{path: 'registro', component:RegistroComponent},
{path: 'menu', component:MenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
