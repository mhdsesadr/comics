import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {ComicModel} from "../../models/comic.model";

export const comicsAction = createActionGroup({
  source: 'Comics',
  events: {
    'Load Favorite Comics': emptyProps(),
    'Load Favorite Comics Success': props<{ comics: ComicModel[] }>(),
    'Save Favorite Comic': props<{ comic: ComicModel }>(),
    'Save Favorite Comic Success': props<{ comic: ComicModel }>(),
    'Delete Favorite Comic': props<{ comicID: number }>(),
    'Delete Favorite Comic Success': props<{ comicID: number }>(),
    'Delete All Favorite Comics': emptyProps()
  }
})
