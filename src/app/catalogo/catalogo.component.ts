import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CatalogoService } from '../services/catalogo.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {
  action: string = 'agregar';

  productos: any;
  producto = {
    id: 0,
    name: "",
    quantity: "",
    price: "",
    image1: "",
    image2: "",
    image3: ""
  };

  img1: any;
  img2: any;
  img3: any;

  constructor(private servicioCat: CatalogoService) { }
  
  fotoseleccionada1(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.img1 = <File>event.target.files[0];
    }
  }

  fotoseleccionada2(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.img2 = <File>event.target.files[0];
    }
  }

  fotoseleccionada3(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.img3 = <File>event.target.files[0];
    }
  }

  ngOnInit(): void{
    this.consultar();
  }

  consultar() {
    this.servicioCat.consultar().subscribe(
      (res) => {
        this.productos = res;
        console.log(this.productos);
      },
      (err) => {
        console.log('Error: ' + err);
      }
    );
  }

  guardar() {
    this.servicioCat
      .guardar(
        this.producto.name,
        this.producto.quantity,
        this.producto.price,
        this.img1,
        this.img2,
        this.img3
        )
        .subscribe(
        (res) => {
          alert('Registro guardado');
          this.consultar();
          this.limpiar();
        },
        (err) => {
          console.error(err);
        }
      );
  }

  modificar(id: number, name: string, quantity: string, price: string) {
    this.producto.id = id;
    this.producto.name = name;
    this.producto.quantity = quantity;
    this.producto.price = price;
    this.action = "modificar";
  }

  actionModificar(id: number) {
    this.servicioCat.modificar(
        id,
        this.producto.name,
        this.producto.quantity,
        this.producto.price,
        this.img1,
        this.img2,
        this.img3
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
    this.servicioCat.eliminar(id).subscribe(
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
    this.producto.id = 0;
    this.producto.name = "";
    this.producto.quantity = "";
    this.producto.price = "";
    this.action = "agregar";
  }
}
