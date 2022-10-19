import {createFeature, createReducer, on} from "@ngrx/store";
import {comicsInitialState} from "./comics.state";
import {comicsAction} from "./comics.action";

export const comicsFeature = createFeature({
  name: 'comic',
  reducer: createReducer(
    comicsInitialState,
    on(comicsAction.loadFavoriteComicsSuccess, (state, action) => ({
      ...state,
      favoriteComics: action.comics
    })),
    on(comicsAction.saveFavoriteComicSuccess, (state, action) => ({
      ...state,
      favoriteComics: [
        ...state.favoriteComics.filter(c => c.id !== action.comic.id),
        action.comic
      ]
    })),
    on(comicsAction.deleteFavoriteComicSuccess, (state, action) => ({
      ...state,
      favoriteComics: state.favoriteComics.filter(c => c.id !== action.comicID)
    }))
  )
})
