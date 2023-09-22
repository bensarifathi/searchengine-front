import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {LanguageComponent} from "./pages/language/language.component";
import {BookComponent} from "./pages/book/book.component";

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "lang", component: LanguageComponent},
  {path: "lang/:language", component: BookComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
