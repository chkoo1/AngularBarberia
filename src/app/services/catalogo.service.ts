import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  private url = "http://localhost:81/api/admin/product-service";

  constructor(private http: HttpClient) { }
  
  guardar(
    name: string,
    quantity: string,
    price: string,
    image1: File,
    image2: File,
    image3: File
  ) {
    const fd:any = new FormData();

    fd.append("name", name);
    fd.append("quantity", quantity);
    fd.append("price", price);
    fd.append("image1", image1);
    fd.append("image2", image2);
    fd.append("image3", image3);

    return this.http.post<any>(this.url, fd);
  }

  consultar(){
    return this.http.get<any[]>(this.url);
  }

  modificar(
    id: number,
    name: string,
    quantity: string,
    price: string,
    image1: File,
    image2: File,
    image3: File
  ){
    const fd = new FormData();
    fd.append("name", name);
    fd.append("quantity", quantity);
    fd.append("price", price);
    fd.append("image1", image1);
    fd.append("image2", image2);
    fd.append("image3", image3);
    fd.append("_method", "PUT");

    return this.http.post<any>(this.url + "/" + id, fd);
  }

  eliminar(id: number) {
    const fd = new FormData();
    fd.append("_method", "DELETE");

    return this.http.post<any>(this.url + "/" + id, fd);
  }
}
