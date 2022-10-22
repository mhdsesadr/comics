import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {MatSidenav} from "@angular/material/sidenav";
import {map, Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {BreakpointObserver} from "@angular/cdk/layout";
import {userQuery} from "../../../store/user/user.selectors";
import {userActions} from "../../../store/user/user.action";

const SMALL_WIDTH_BREAKPOINT = 959;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  @Output() themeChanged: EventEmitter<'dark' | 'light'> = new EventEmitter();


  isScreenSmall!: Observable<boolean>;

  user$ = this.store.select(userQuery.selectUser);

  constructor(private _route: ActivatedRoute, breakpoints: BreakpointObserver, private store: Store) {
    this.isScreenSmall = breakpoints.observe(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)
      .pipe(map(breakpoint => breakpoint.matches));
  }

  changeTheme(theme: 'dark' | 'light') {
    this.themeChanged.emit(theme);
  }

  onLogout() {
    this.store.dispatch(userActions.logout())
  }

  ngOnInit(): void {
  }

}
