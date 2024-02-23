import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsService } from '../services/clients.service';
import { FormsModule } from '@angular/forms';
import { last } from 'rxjs';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
})
export class ContactoComponent {
  action: string = 'agregar';

  clientes: any;

  cliente = {
    id: 0,
    first_name: '',
    last_name: '',
    phone: '',
  };

  constructor(private clientService: ClientsService) {}

  ngOnInit(): void {
    this.consultar();
  }

  consultar() {
    this.clientService.consultar().subscribe(
      (res) => {
        this.clientes = res;
        console.log(this.clientes);
      },
      (err) => {
        console.log('Error: ' + err);
      }
    );
  }

  guardar() {
    this.clientService
      .guardar(
        this.cliente.first_name,
        this.cliente.last_name,
        this.cliente.phone
      )
      .subscribe(
        (res) => {
          alert('Registro guardado');
          this.consultar();
          this.limpiar();
        },
        (err) => {
          alert('Error guardando el cliente');
        }
      );
  }

  modificar(id: number, first_name: string, last_name: string, phone: string) {
    this.cliente.id = id;
    this.cliente.first_name = first_name;
    this.cliente.last_name = last_name;
    this.cliente.phone = phone;
    this.action = "modificar";
  }

  actionModificar(id: number) {
    this.clientService.modificar(
        id,
        this.cliente.first_name,
        this.cliente.last_name,
        this.cliente.phone
      )
      .subscribe(
        (res) => {
          alert('Registro modificado');
          this.consultar();
          this.limpiar();
        },
        (err) => {
          alert('Error al modificar');
        }
      );
  }

  actionEliminar(id: number) { 
    this.clientService.eliminar(id).subscribe(
      (res) => {
        alert("Borrado con exito");
        this.consultar();
      },
      (err) => {
        alert("Error al borrar");
      }
    )
  }

  limpiar() {
    this.cliente.id = 0;
    this.cliente.first_name = "";
    this.cliente.last_name = "";
    this.cliente.phone = "";
    this.action = "agregar";
  }
}
