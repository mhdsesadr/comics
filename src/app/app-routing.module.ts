import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from "./services/auth-guard/auth-guard.service";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'comics/list'
  },
  {
    path: 'auth',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'comics',
    loadChildren: () => import('./comics/comics.module').then(m => m.ComicsModule),
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
