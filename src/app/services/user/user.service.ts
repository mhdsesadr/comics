import {Injectable} from '@angular/core';
import {UserModel} from "../../models/user.model";
import {Observable} from "rxjs";

const USERS_DB: UserModel[] = [
  {
    "name": 'niloofar',
    "email": "niloofar@baam.sadad.co.ir",
    "password": '123456',
    "age": 30
  },
  {
    "name": 'orkide',
    "email": "orkide@baam.sadad.co.ir",
    "password": '654321',
    "age": 25
  },
  {
    "name": 'roz',
    "email": "roz@baam.sadad.co.ir",
    "password": '1qaz',
    "age": 30
  }
]

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {
  }

  public login(email: string, password: string): Observable<UserModel> {
    return new Observable<UserModel>(observer => {
      const user = USERS_DB.find(user => user.email === email && user.password === password);
      if (!user) {
        observer.error('invalid email/password')
      }

      observer.next(user)
      observer.complete()
    })
  }
}
