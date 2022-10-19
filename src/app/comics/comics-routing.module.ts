import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FavoriteComicsComponent} from "./pages/favorite-comics/favorite-comics.component";
import {ComicsListComponent} from "./pages/comics-list/comics-list.component";
import {ComicsComponent} from "./comics.component";

const routes: Routes = [
  {
    path: '',
    component: ComicsComponent,
    children: [
      {
        path: 'list',
        component: ComicsListComponent
      },
      {
        path: 'favorites',
        component: FavoriteComicsComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicsRoutingModule {
}
