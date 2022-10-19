import {comicsFeature} from "./comics.reduser";
import {createSelector} from "@ngrx/store";

export const {selectFavoriteComics} = comicsFeature;

const selectIsComicFavorite = (comicID: number) => createSelector(selectFavoriteComics,
  comics => comics.some(c => c.id === comicID))

export const comicsQuery = {
  selectFavoriteComics,
  selectIsComicFavorite
}
