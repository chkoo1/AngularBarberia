import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  logged = false;
  private url = "http://localhost:81/api/login";

  constructor(private http: HttpClient) { }
  
  login(
    email: string,
    password: string
  ) {
    const fd = new FormData();

    fd.append("email", email);
    fd.append("password", password);

    return this.http.post<any>(this.url, fd);
  }
}
