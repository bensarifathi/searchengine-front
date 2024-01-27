import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookComponent} from "./pages/book/book.component";
import { BookDetailComponent } from './pages/book-detail/book-detail.component';

const routes: Routes = [
  {path: "", component: BookComponent},
  {path: ":id", component: BookDetailComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
