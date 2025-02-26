import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const editorGuard: CanActivateFn = (route, state) => {
  const roleLS = localStorage.getItem('userRole');
  const router: Router = inject(Router)

  if(roleLS !== 'editor'){
    console.log('No tienes permisos para ingresar aqui')
  router.navigate(['/home'])
  return false;
  }

  return true;
};
