import {ComicModel} from "../../models/comic.model";

export interface ComicsState {
  favoriteComics: ComicModel[],
}

export const comicsInitialState: ComicsState = {
  favoriteComics: []
}
