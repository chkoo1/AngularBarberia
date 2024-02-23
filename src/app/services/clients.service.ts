import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private url = "http://localhost:81/api/admin/customer";
  constructor(private http:HttpClient) { }

  guardar(
    first_name: string,
    last_name: string,
    phone: string
  ){
    const fd = new FormData();
    fd.append("first_name", first_name);
    fd.append("last_name", last_name);
    fd.append("phone", phone);

    return this.http.post<any>(this.url, fd);
  }

  consultar(){
    return this.http.get<any[]>(this.url);
  }

  modificar(
    id: number,
    first_name: string,
    last_name: string,
    phone: string
  ){
    const fd = new FormData();
    fd.append("first_name", first_name);
    fd.append("last_name", last_name);
    fd.append("phone", phone);
    fd.append("_method", "PUT");

    return this.http.post<any>(this.url + "/" + id, fd);
  }

  eliminar(id: number) {
    const fd = new FormData();
    fd.append("_method", "DELETE");

    return this.http.post<any>(this.url + "/" + id, fd);
  }
}
