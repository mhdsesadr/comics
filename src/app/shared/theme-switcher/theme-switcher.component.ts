import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {
  theme: 'dark' | 'light' = "light";
  @Output() changed: EventEmitter<'dark' | 'light'> = new EventEmitter();


  constructor() {
  }

  ngOnInit(): void {
  }

  changeTheme(theme: 'dark' | 'light') {
    this.theme = theme;
    this.changed.emit(theme);
  }
}
