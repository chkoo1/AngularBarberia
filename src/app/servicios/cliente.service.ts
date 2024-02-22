import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url_login = "http://127.0.0.1:3000/cliente/login";
  private url = "http://127.0.0.1:3000/cliente";


  constructor(private http:HttpClient) { }

  guardarEmp(){

  }

  login(email:String){
    return this.http.get<any>(this.url_login+"/"+email);
  }

}
