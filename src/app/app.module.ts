import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {NgxsModule} from "@ngxs/store";
import {HttpClientModule} from "@angular/common/http";
import { LanguageComponent } from './pages/language/language.component';
import {BookState} from "./state/book.state";
import {LanguageState} from "./state/language.state";
import { BookComponent } from './pages/book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LanguageComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([BookState, LanguageState]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
