import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../app/shared/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService,
                private router: Router ) {}

    canActivate(): boolean {
      if (this.authService.loggedIn()) {
          return true; 
      } else {
        this.router.navigateByUrl('/login');
        return false;
      }

    }
  
}
