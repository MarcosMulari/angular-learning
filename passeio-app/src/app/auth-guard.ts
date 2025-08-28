import { CanActivateFn, Router } from '@angular/router';

import { Injectable, inject } from '@angular/core';
import { AuthgoogleService } from './authgoogle-service';

export const authGuard: CanActivateFn = (route, state) => {
  const googleAuth: AuthgoogleService = inject(AuthgoogleService)
  const router : Router = inject(Router)

  const loggedProfile = googleAuth.getLoggedProfile()
  if (loggedProfile)
  {
    return true
  }

  router.navigate([''])

  return false
};
