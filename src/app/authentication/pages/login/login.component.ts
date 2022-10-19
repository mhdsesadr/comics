import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {userActions} from "../../../store/user/user.action";
import {userQuery} from "../../../store/user/user.selectors";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  themeClass = '';

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);

  loginForm = new FormGroup({
    email: this.emailFormControl,
    password: this.passwordFormControl
  });

  changeTheme(theme: 'dark' | 'light') {
    if (theme === 'dark') {
      this.themeClass = 'dark-mode';
    } else {
      this.themeClass = '';
    }
  }

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.store.dispatch(userActions.login({
      email: this.loginForm.value.email as string,
      password: this.loginForm.value.password as string
    }))
  }
}
