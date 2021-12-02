import { ModeloIdentificar } from './../../modelos/identificar.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { SeguridadModule } from './../../modulos/seguridad/seguridad.module';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-navb',
  templateUrl: './menu-navb.component.html',
  styleUrls: ['./menu-navb.component.css']
})
export class MenuNavbComponent implements OnInit {

  seInicioSesion :boolean= false;

  subs:Subscription = new Subscription();
  constructor(private SeguridadService: SeguridadService) {

   }

  ngOnInit(): void {
    this.subs =this.SeguridadService.ObtenerDatosUsuarioEnSesion().subscribe((datos:ModeloIdentificar) =>{
      this.seInicioSesion=datos.siestaIdentificado;
    })
  }

}
