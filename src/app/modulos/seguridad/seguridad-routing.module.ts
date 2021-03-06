import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'identificacion',
    component: IdentificacionComponent
  },
  {
    path: 'cambio-clave',
    component: CambioClaveComponent
  },
  {
    path: 'recuperar-clave',
    component: RecuperarClaveComponent
  },
  {
    path: 'cerrar-sesion',
    component: CerrarSesionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
