import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginAuthGuard implements CanActivate{

  constructor(private auth: AuthService, private router: Router) { }

  canActivate() {
    return this.auth.user$.map( user => {
      if (!user) return true;

      this.router.navigateByUrl("/");
      return false;
    })
  }
}
