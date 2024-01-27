import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxsModule} from "@ngxs/store";
import {HttpClientModule} from "@angular/common/http";
import {BookState} from "./state/book.state";
import {LanguageState} from "./state/language.state";
import { BookComponent } from './pages/book/book.component';
import { FormsModule } from '@angular/forms';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    SearchFormComponent,
    BookDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxsModule.forRoot([BookState, LanguageState]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
