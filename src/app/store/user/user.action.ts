import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {UserModel} from "../../models/user.model";

export const userActions = createActionGroup({
  source: 'User',
  events: {
    'Login': props<{ email: string, password: string }>(),
    'Login Failure': props<{ error: string }>(),
    'Login Success': props<{ user: UserModel }>(),
    'Logout': emptyProps(),
    'Logout Success': emptyProps(),
    'Load User': emptyProps(),
    'Load User Failure': props<{ error: string }>(),
    'Load User Success': props<{ user: UserModel }>(),
  }
})
