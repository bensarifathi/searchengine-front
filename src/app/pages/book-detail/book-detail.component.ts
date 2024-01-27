import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetBookContentAction, RecommendBookAction } from 'src/app/actions/book.action';
import { BookContent } from 'src/app/models/book-content';
import { BookState } from 'src/app/state/book.state';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  bookContent$: Observable<BookContent | null>;

  constructor(private store: Store, private route: ActivatedRoute) { 
    this.bookContent$ = this.store.select(BookState.bookContent);
  }

  ngOnInit(): void {
    this.getContent();
  }

  getContent() {
    this.store.dispatch(new GetBookContentAction(this.route.snapshot.params['id']));
    this.store.dispatch(new RecommendBookAction(this.route.snapshot.params['id']));
  }

}
