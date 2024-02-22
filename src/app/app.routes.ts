import { Routes } from '@angular/router';

//lista de componentes que participan en la navegación
import { InicionsesionComponent } from './inicionsesion/inicionsesion.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProductoComponent } from './producto/producto.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CatalogoComponent } from './catalogo/catalogo.component';

//lista de guardias (guard)
import { accesourlGuard } from './guardias/accesourl.guard';
import { accesogerenteGuard } from './guardias/accesogerente.guard';


export const routes: Routes = [
    {path:"iniciosesion",component:InicionsesionComponent},
    {path:"empleado",component:EmpleadoComponent,canActivate:[accesogerenteGuard]},
    {path:"cliente",component:ClienteComponent,canActivate:[accesogerenteGuard]},
    {path:"dashboard",component:InicioComponent},
    {path:"clientes",component:ContactoComponent},
    {path:"productos",component:CatalogoComponent},
    {path:"**",redirectTo:"/inicio"}

];

