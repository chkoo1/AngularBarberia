import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private url_login = "http://127.0.0.1:3000/empleado/login";
  private url = "http://127.0.0.1:3000/empleado";


  constructor(private http:HttpClient) { }

  guardarEmp(empleado:Object){
    return this.http.post<any>(this.url,empleado);
  }

  login(email:String){
    return this.http.get<any>(this.url_login+"/"+email);
  }

  consultartodo(){
    return this.http.get<any>(this.url);
  }

}
