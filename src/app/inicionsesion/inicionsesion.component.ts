import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SesionService } from '../services/sesion.service';
@Component({
  selector: 'app-inicionsesion',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './inicionsesion.component.html',
  styleUrl: './inicionsesion.component.css'
})
export class InicionsesionComponent {
  usuario = {
    email: "",
    password: ""
  }

  constructor(private sesionService: SesionService, private router: Router) { }

  login() {
    this.sesionService.login(
      this.usuario.email,
      this.usuario.password
    ).subscribe(
      (res) => {
        alert("Bienvenido");
        this.sesionService.logged = true;
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        alert("Revisa tus credenciales")
        console.log(err);
      }
    )
  }
}
