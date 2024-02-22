import { Component } from '@angular/core';
import { IniciosesionService } from '../servicios/iniciosesion.service';
import { EmpleadoService } from '../servicios/empleado.service';
import { ClienteService } from '../servicios/cliente.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-inicionsesion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inicionsesion.component.html',
  styleUrl: './inicionsesion.component.css'
})
export class InicionsesionComponent {
  usuario = {
    usuario : "",
    password : ""
  }

  constructor(private serviciologin : IniciosesionService,
    private servicioemp : EmpleadoService,
    private serviciocli : ClienteService,
    private router : Router){}
  
    login(){
    this.serviciologin.login(this.usuario).subscribe(
      res=>{
        if(res.usu_enviar.tipo == 1){
            this.servicioemp.login(this.usuario.usuario).subscribe(
              res=>{
                localStorage.setItem("token",res.emp_enviar.jwtoken);
                localStorage.setItem("perfil",res.emp_enviar.puesto);
                localStorage.setItem("nombre",res.emp_enviar.nombre+" "+res.emp_enviar.ap_paterno);
                alert("Bienvenido al sistema "+localStorage.getItem("nombre"));
                console.log(res.emp_enviar.nombre);
                
                this.router.navigate(["/empleado"]);
              },
              err=>{

              }
            );
        }
        else if(res.usu_enviar.tipo == 2){
          this.serviciocli.login(this.usuario.usuario).subscribe(
              res=>{
                localStorage.setItem("token",res.cli_enviar.jwtoken);
                localStorage.setItem("nombre",res.cli_enviar.nombre+" "+res.cli_enviar.ap_paterno);
                alert("Bienvenido al sistema "+localStorage.getItem("nombre"));
                this.router.navigate(["/cliente"]);
              },
              err=>{
                
              }
            );
        }
        
      },
      err=>{
          
      }

    )
  }
}
