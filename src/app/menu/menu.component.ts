import { Component } from '@angular/core';
import { InicionsesionComponent } from '../inicionsesion/inicionsesion.component';
import { EmpleadoComponent } from '../empleado/empleado.component';
import { ClienteComponent } from '../cliente/cliente.component';
import { ProductoComponent } from '../producto/producto.component';
import { Router, RouterModule } from '@angular/router';
import { IniciosesionService } from '../servicios/iniciosesion.service';
import { CatalogoComponent } from '../catalogo/catalogo.component';
import { ContactoComponent } from '../contacto/contacto.component';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [InicionsesionComponent,
    RouterModule,
    EmpleadoComponent,
    ClienteComponent,
    InicionsesionComponent,
    CatalogoComponent,
    ContactoComponent,
  ProductoComponent,RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(public serviciologin : IniciosesionService){}
}
