import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ThemeSwitcherComponent} from "./theme-switcher/theme-switcher.component";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    ThemeSwitcherComponent
  ],
    imports: [
        CommonModule,
        MatIconModule,

    ],
  exports:[
    ThemeSwitcherComponent
  ]
})
export class SharedModule { }
