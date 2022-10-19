import {Component, Input, OnInit} from '@angular/core';
import {ComicModel} from "../../../models/comic.model";
import {LocalStorageService} from "../../../services/local-storage/local-storage.service";
import {Observable, of} from "rxjs";
import {Store} from "@ngrx/store";
import {comicsAction} from "../../../store/comics/comics.action";
import {comicsQuery} from "../../../store/comics/comics.selector";

@Component({
  selector: 'app-comics-container',
  templateUrl: './comics-container.component.html',
  styleUrls: ['./comics-container.component.scss']
})
export class ComicsContainerComponent implements OnInit {
  @Input() comics$: Observable<ComicModel[]> = of([]);

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

  isComicFavorite(comicID: number): Observable<boolean> {
    return this.store.select(comicsQuery.selectIsComicFavorite(comicID))
  }

  onFavoriteComic(comic: ComicModel, isFavorite: boolean) {
    if (isFavorite) {
      this.store.dispatch(comicsAction.saveFavoriteComic({comic}))
    } else {
      this.store.dispatch(comicsAction.deleteFavoriteComic({comicID: comic.id}))
    }
  }
}
