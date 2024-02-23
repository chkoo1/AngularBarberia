import { Component } from '@angular/core';
import { InicionsesionComponent } from '../inicionsesion/inicionsesion.component';
import { Router, RouterModule } from '@angular/router';
import { CatalogoComponent } from '../catalogo/catalogo.component';
import { ContactoComponent } from '../contacto/contacto.component';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [
    InicionsesionComponent,
    RouterModule,
    InicionsesionComponent,
    CatalogoComponent,
    ContactoComponent,
    RouterModule
  ],
  templateUrl: './encabezado.component.html',
  styleUrl: './encabezado.component.css'
})
export class EncabezadoComponent {

}
