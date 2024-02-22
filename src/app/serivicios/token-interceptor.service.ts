import { Injectable } from '@angular/core';
import { IniciosesionService } from '../servicios/iniciosesion.service';
import { HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private servicioLogin : IniciosesionService) { }
  intercept(req:HttpRequest<any>,next: HttpHandler){
    const tokenReq = req.clone({
      setHeaders:{
        Authorization : ""+this.servicioLogin.getToken()
      }
    });
    return next.handle(tokenReq);
  }
}
