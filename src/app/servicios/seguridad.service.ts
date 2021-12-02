import { ModeloIdentificar } from './../modelos/identificar.modelo';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, retry } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  
  url='http://127.0.0.1:3000';
  datosUsuarioEnSesion = new BehaviorSubject<ModeloIdentificar>(new ModeloIdentificar())

  constructor(private http: HttpClient) {
    this.VerificarSesionActual();
   }

  VerificarSesionActual(){
    let datos = this.ObtenerInformacionSesion();
    if(datos){
      this.RefrescarDatosSesion(datos);
    }
  }

  RefrescarDatosSesion(datos: ModeloIdentificar){
    this.datosUsuarioEnSesion.next(datos);
  }

  ObtenerDatosUsuarioEnSesion(){
    return this.datosUsuarioEnSesion.asObservable();
  }

   Identificar(usuario: string, clave: string):Observable<ModeloIdentificar>{
     return this.http.post<ModeloIdentificar>(`${this.url}/identificarUsuario`,{
       usuario:usuario,
       clave:clave
     },{
       headers: new HttpHeaders({

       })
     })
   }
   
   ObtenerInformacionSesion(){
     let datosString = localStorage.getItem("datosSesion");
     if(datosString){
       let datos = JSON.parse(datosString);
       return datos;

     }else{
      return null;
     }
   }

   AlmacenarSesion(datos: ModeloIdentificar){
    datos.siestaIdentificado= true;
    let stringDatos = JSON.stringify(datos);
    localStorage.setItem("datosSesion",stringDatos);
    this.RefrescarDatosSesion(datos);
   }

   EliminarInformacionSesion(){
    localStorage.removeItem("datosSesion");
    this.RefrescarDatosSesion(new ModeloIdentificar());
   }

   SeHaIniciadoSesion(){
    let datosString = localStorage.getItem("datosSesion");
    return datosString;
   }
}
