import { Routes } from '@angular/router';

//lista de componentes que participan en la navegación
import { InicionsesionComponent } from './inicionsesion/inicionsesion.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CatalogoComponent } from './catalogo/catalogo.component';

export const routes: Routes = [
    {path:"iniciosesion",component:InicionsesionComponent},
    {path:"dashboard",component:InicioComponent},
    {path:"clientes",component:ContactoComponent},
    {path:"productos",component:CatalogoComponent},
    { path: "**", redirectTo: "/iniciosesion" },

];

