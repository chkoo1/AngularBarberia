import { Component } from '@angular/core';
import { EmpleadoService } from '../servicios/empleado.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {

  empleados:any;

  empleado = {
        nombre:"",
        ap_paterno:"",
        ap_materno:"",
        telefono:"",
        email:"",
        fecha_nac:"",
        RFC:"",
        direccion:"",
        sueldo:"",
        puesto:""
  }

  constructor(private servicioEmp:EmpleadoService){}

  verEmpleados(){
    this.empleados = this.servicioEmp.consultartodo();
  }
  guardar(){
    this.servicioEmp.guardarEmp(this.empleado).subscribe(
      res=>{
        alert("Registro guardado");
        this.verEmpleados();
        this.limpiar();

      },
      err =>{
        alert("Registro no guardado");
      } 
    );
  }
  limpiar(){
        this.empleado.nombre="",
        this.empleado.ap_paterno="",
        this.empleado.ap_materno="",
        this.empleado.telefono="",
        this.empleado.email="",
        this.empleado.fecha_nac="",
        this.empleado.RFC="",
        this.empleado.direccion="",
        this.empleado.sueldo="",
        this.empleado.puesto=""

  }

}
