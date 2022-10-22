import {Injectable} from "@angular/core";
import {userActions} from "./user.action";
import {Actions, ofType, createEffect,} from '@ngrx/effects';
import {mergeMap, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {UserService} from "../../services/user/user.service";
import {Router} from "@angular/router";
import {LocalStorageService} from "../../services/local-storage/local-storage.service";



@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
  }

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.login),
      mergeMap((action) =>
        this.userService.login(action.email, action.password).pipe(
          map(user => userActions.loginSuccess({user})),
          catchError((error: string) => of(userActions.loginFailure({error})))
        ))
    )
  );

  loginFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.loginFailure),
      tap((action) => {
        alert(action.error)
      })
    ), {dispatch: false}
  )

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.loginSuccess),
      tap((action) => {
        this.localStorageService.saveUser(action.user).subscribe({
          complete: () => this.router.navigate(['/comics/list'])
        })
      })
    ), {dispatch: false}
  )

  logOut$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.logout),
      tap(() => this.localStorageService.deleteUser().subscribe({
        // ????????????????????????????????????????????/
        complete: () => this.localStorageService.deleteAllFavoriteComics().subscribe({
          complete: () => this.router.navigate(['/auth/login'])
        })
      })),
    ), {dispatch: false}
  )


  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.loadUser),
      mergeMap(() =>
        this.localStorageService.getUser().pipe(
          map(user => userActions.loadUserSuccess({user})),
          catchError((error: string) => of(userActions.loadUserFailure({error})))
        ))
    )
  );

  loadUserFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.loadUserFailure),
      tap((action) => {
        alert(action.error);
        this.router.navigate(['/auth/login']);
      })
    ), {dispatch: false}
  )
}
