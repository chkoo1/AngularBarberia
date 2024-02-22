import { CanActivateFn,Router } from '@angular/router';
import { IniciosesionService } from '../servicios/iniciosesion.service';
import { inject } from '@angular/core';


export const accesourlGuard: CanActivateFn = (route, state) => {
  const serviciologin  = inject(IniciosesionService);
  const router = inject(Router);

  if(serviciologin.esempleado()){
    return true;
  }

  else{
    router.navigate(["/inicio"])
    return false;
  }

};
