import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IniciosesionService {
  
  private url = "http://127.0.0.1:3000/usuario/login"

  constructor(private http:HttpClient,private router : Router) { }
  
  login(usuario:object){
    return this.http.post<any>(this.url,usuario)
  }
  
  eslogueado(){
    return !!localStorage.getItem("nombre");
  }
  
  esempleado(){
    return !!localStorage.getItem("perfil");
  }

  tipoempleado(){
    return localStorage.getItem("perfil");
  }
  getToken(){
    return localStorage.getItem("token");
  }

  cerrarsesion(){
    localStorage.clear();
    this.router.navigate(["/iniciosesion"]);
  }
}
