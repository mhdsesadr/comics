import {Component, OnInit} from '@angular/core';
import {ComicsService} from "../../../services/comics/comics.service";
import {LocalStorageService} from "../../../services/local-storage/local-storage.service";
import {THREE} from "@angular/cdk/keycodes";
import {ComicModel} from "../../../models/comic.model";
import {Store} from "@ngrx/store";
import {comicsAction} from "../../../store/comics/comics.action";
import {comicsQuery} from "../../../store/comics/comics.selector";

@Component({
  selector: 'app-favorite-comics',
  templateUrl: './favorite-comics.component.html',
  styleUrls: ['./favorite-comics.component.scss']
})
export class FavoriteComicsComponent implements OnInit {
  comics$ = this.store.select(comicsQuery.selectFavoriteComics);

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(comicsAction.loadFavoriteComics());
  }
}
