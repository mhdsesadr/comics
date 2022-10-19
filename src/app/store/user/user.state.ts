import {UserModel} from "../../models/user.model";

export interface UserState {
  loggedIn: boolean;
  user: UserModel;
}

export const userInitialState: UserState = {
  loggedIn: false,
  user: {
    email: '',
    password: '',
    age: 0,
    name: ''
  }
};
