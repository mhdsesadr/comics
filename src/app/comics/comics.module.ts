import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComicsRoutingModule} from './comics-routing.module';
import {NavbarComponent} from './components/navbar/navbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from '@angular/material/card';
import {ProfilePreviewComponent} from './components/profile-preview/profile-preview.component';
import {ComicComponent} from './components/comic/comic.component';
import {FavoriteComicsComponent} from './pages/favorite-comics/favorite-comics.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ComicsContainerComponent} from './components/comics-container/comics-container.component';
import {SharedModule} from "../shared/shared.module";
import {ComicsComponent} from './comics.component';
import {ComicsListComponent} from "./pages/comics-list/comics-list.component";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    NavbarComponent,
    ProfilePreviewComponent,
    ComicComponent,
    FavoriteComicsComponent,
    ComicsContainerComponent,
    ComicsComponent,
    ComicsComponent,
    ComicsListComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ComicsRoutingModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ComicsModule {
}
