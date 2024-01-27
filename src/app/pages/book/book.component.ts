import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Book} from "../../models/book";
import {Store} from "@ngxs/store";
import {BookState} from "../../state/book.state";
import {GetRandomBookAction, SearchBoookAction} from "../../actions/book.action";
import {ActivatedRoute} from "@angular/router";
import { SearchForm } from 'src/app/models/search-form';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books$: Observable<Book[]>;
  recommendBooks$: Observable<Book[]>;
  isReady$: Observable<boolean>;

  constructor(private store: Store, private route: ActivatedRoute) {
    this.books$ = this.store.select(BookState.books);
    this.isReady$ = this.store.select(BookState.isReady);
    this.recommendBooks$ = this.store.select(BookState.recommendedBooks);
  }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.store.dispatch(new GetRandomBookAction());
  }

  handleFormData(searchData: SearchForm) {
    this.store.dispatch(new SearchBoookAction(searchData));
  }
}
