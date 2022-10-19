import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {userActions} from "../store/user/user.action";

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {
  themeClass = '';

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(userActions.loadUser())
  }

  changeTheme(theme: 'dark' | 'light') {
    if (theme === 'dark') {
      this.themeClass = 'dark-mode';
    } else {
      this.themeClass = '';
    }
  }
}
