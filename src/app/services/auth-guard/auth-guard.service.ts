import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {map, Observable, of} from "rxjs";
import {LocalStorageService} from "../local-storage/local-storage.service";
import {catchError} from "rxjs/operators";
import {UserModel} from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private localStorageService: LocalStorageService) {
  }

  canActivate(): Observable<boolean> {
    return this.localStorageService.getUser().pipe(
      catchError(() => of(false)),
      map((data) => {
        if (!data) {
          this.router.navigate(['/auth/login']);
          return false;
        }
        return true;
      })
    );
  }
}
