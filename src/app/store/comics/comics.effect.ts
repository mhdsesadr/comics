import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {LocalStorageService} from "../../services/local-storage/local-storage.service";
import {comicsAction} from "./comics.action";
import {map, mergeMap, tap} from "rxjs";


@Injectable()
export class ComicsEffect {
  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService,
  ) {
  }

  $loadFavoriteComics = createEffect(() =>
    this.actions$.pipe(
      ofType(comicsAction.loadFavoriteComics),
      mergeMap((action) =>
        this.localStorageService.getFavoriteComics().pipe(
          map(comics => comicsAction.loadFavoriteComicsSuccess({comics}))
        )
      )
    )
  )

  $saveFavoriteComic = createEffect(() =>
    this.actions$.pipe(
      ofType(comicsAction.saveFavoriteComic),
      mergeMap((action) =>
        this.localStorageService.saveFavoriteComic(action.comic).pipe(
          map(() => comicsAction.saveFavoriteComicSuccess({comic: action.comic})))
      )
    )
  )

  $deleteFavoriteComic = createEffect(() =>
    this.actions$.pipe(
      ofType(comicsAction.deleteFavoriteComic),
      mergeMap((action) =>
        this.localStorageService.deleteFavoriteComic(action.comicID).pipe(
          map(() => comicsAction.deleteFavoriteComicSuccess({comicID: action.comicID}))
        )
      )
    )
  )
}
