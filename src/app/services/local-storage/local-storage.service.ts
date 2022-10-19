import {Injectable} from '@angular/core';
import {UserModel} from "../../models/user.model";
import {EMPTY, lastValueFrom, map, mergeMap, observable, Observable, tap} from "rxjs";
import {ComicModel} from "../../models/comic.model";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  readonly USER_KEY = 'user';
  readonly FAVORITES_KEY = 'favorites';

  constructor() {
  }

  saveUser(user: UserModel): Observable<void> {
    return new Observable<void>(observer => {
      localStorage.setItem(this.USER_KEY, JSON.stringify(user));

      observer.complete();
    })
  }

  getUser(): Observable<UserModel> {
    return new Observable<UserModel>(observer => {
      const user = localStorage.getItem(this.USER_KEY);
      if (!user) {
        observer.error('not found');
        observer.complete();
        return;
      }

      observer.next(JSON.parse(user));
      observer.complete();
    })
  }

  deleteUser(): Observable<void> {
    return new Observable<void>(observer => {
      localStorage.removeItem(this.USER_KEY);

      observer.complete();
    })
  }

  getFavoriteComics(): Observable<ComicModel[]> {
    return new Observable<ComicModel[]>(observer => {
      const favorites = localStorage.getItem(this.FAVORITES_KEY);
      if (!favorites) {
        observer.next([]);
        observer.complete();
        return;
      }

      observer.next(JSON.parse(favorites));
      observer.complete();
    })
  }

  isComicFavorite(comicID: number): Observable<boolean> {
    return this.getFavoriteComics().pipe(
      map(comics => comics.some(c => c.id === comicID))
    )
  }

  saveFavoriteComic(comic: ComicModel): Observable<void> {
    return this.getFavoriteComics().pipe(
      map(comics => {
        if (comics.some(c => c.id === comic.id)) {
          return;
        }

        const newFavorites = [...comics, comic];
        localStorage.setItem(this.FAVORITES_KEY, JSON.stringify(newFavorites));
      })
    )
  }

  deleteFavoriteComic(comicID: number): Observable<void> {
    return this.getFavoriteComics().pipe(
      map(comics => {
        const newFavorites = comics.filter(c => c.id !== comicID);
        localStorage.setItem(this.FAVORITES_KEY, JSON.stringify(newFavorites));
      })
    )
  }
}
