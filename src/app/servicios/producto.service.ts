import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url = "http://localhost:3000/producto";

  constructor(private http:HttpClient) {}

  guardar(nombre:string,
          descripcion:string,
          existencia:string,
          precio:string,
          file:File){

    const fd = new FormData();
      fd.append("nombre",nombre);
      fd.append("descripcion",descripcion);
      fd.append("existencia",existencia);
      fd.append("precio",precio);
      fd.append("imagen",file);
      
    return this.http.post<any>(this.url,fd);
  }

  modificar(nombre:string,
          descripcion:string,
          existencia:string,
          precio:string,
          file:File){

    const fd = new FormData();
    fd.append("nombre",nombre);
    fd.append("descripcion",descripcion);
    fd.append("existencia",existencia);
    fd.append("precio",precio);
    fd.append("imagen",file);

    return this.http.post<any>(this.url,fd);
  }

  consultar(nombre:String){
    return this.http.get<any>(this.url+"/nombre/"+nombre);
  }
  eliminar(nombre:String){
    return this.http.delete<any>(this.url+"/borrar/"+nombre);
  }
  consultartodo(nombre:String){
    return this.http.get<any>(this.url);
  }



}
