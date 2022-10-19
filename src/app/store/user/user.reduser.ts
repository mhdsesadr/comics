import {createFeature, createReducer, on} from "@ngrx/store";
import {userInitialState} from "./user.state";
import {userActions} from "./user.action";

export const userFeature = createFeature({
  name: 'user',
  reducer: createReducer(
    userInitialState,
    on(userActions.loginSuccess, (state, action) => ({
      ...state,
      loggedIn: true,
      user: action.user,
    })),
    on(userActions.logout, userActions.loadUserFailure, () => userInitialState),
    on(userActions.loadUserSuccess, (state, action) => ({
      ...state,
      loggedIn: true,
      user: action.user,
    })),
  )
})
