import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Book} from "../../models/book";
import {Store} from "@ngxs/store";
import {BookState} from "../../state/book.state";
import {GetBookAction} from "../../actions/book.action";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books$: Observable<Book[]>
  language: string
  constructor(private store: Store, private route: ActivatedRoute) {
    this.books$ = this.store.select(BookState.books);
    this.language = this.route.snapshot.params["language"];
  }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.store.dispatch(new GetBookAction(this.language));
  }
}
