import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ComicsModule} from "./comics/comics.module";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {HttpClientModule} from "@angular/common/http";
import {userFeature} from "./store/user/user.reduser";
import {UserEffects} from "./store/user/user.effect";
import {SharedModule} from './shared/shared.module';
import {comicsFeature} from "./store/comics/comics.reduser";
import {ComicsEffect} from "./store/comics/comics.effect";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComicsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([UserEffects, ComicsEffect]),
    StoreModule.forFeature(
      userFeature.name,
      userFeature.reducer
    ),
    StoreModule.forFeature(
      comicsFeature.name,
      comicsFeature.reducer
    ),
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
