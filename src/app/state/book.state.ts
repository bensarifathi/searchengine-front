import {State, Action, StateContext, Selector} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {Book} from "../models/book";
import {GetBookContentAction, GetRandomBookAction, RecommendBookAction, SearchBoookAction} from "../actions/book.action";
import {BookService} from "../services/book.service";
import {of, switchMap} from "rxjs";
import { BookContent } from "../models/book-content";




export interface BooksStateModel {
  books: Book[],
  content: BookContent | null,
  isReady: boolean,
  recommendedBooks: Book[]
}

@State<BooksStateModel>({
  name: 'book',
  defaults: {books: [], content: null, isReady: false, recommendedBooks: []},
})
@Injectable()
export class BookState {

  constructor(private readonly bookService: BookService) {
  }

  @Selector()
  static books(state: BooksStateModel) {
    return state.books;
  }

  @Selector()
  static bookContent(state: BooksStateModel) {
    return state.content;
  }

  @Selector()
  static isReady(state: BooksStateModel) {
    return state.isReady;
  }

  @Selector()
  static recommendedBooks(state: BooksStateModel) {
    return state.recommendedBooks;
  }

  @Action(GetRandomBookAction)
  getBooks(ctx: StateContext<BooksStateModel>, action: GetRandomBookAction) {
    ctx.patchState({isReady: false});
    return this.bookService.getRandomBooks().pipe(
      switchMap((books) => {
        ctx.patchState({books, isReady: true});
        return books;
      })
    )
  }

  @Action(SearchBoookAction)
  searcgBooks(ctx: StateContext<BooksStateModel>, action: SearchBoookAction) {
    ctx.patchState({isReady: false});
    return this.bookService.searchBooks(action.bookQuery).pipe(
      switchMap((books) => {
        ctx.patchState({books, isReady: true});
        return books;
      })
    );
  }

  @Action(GetBookContentAction)
  getContent(ctx: StateContext<BooksStateModel>, action: GetBookContentAction) {
    return this.bookService.getBookContent(action.bookId).pipe(
      switchMap((bookContent) => {
        ctx.patchState({content: bookContent});
        return of(bookContent);
      })
    )
  };

  @Action(RecommendBookAction)
  recommendContent(ctx: StateContext<BooksStateModel>, action: RecommendBookAction) {
    return this.bookService.recommendBooks(action.bookId).pipe(
      switchMap((books) => {
        console.log("am called ", books)
        ctx.patchState({recommendedBooks: books});
        return books;
      })
    )
  }
}
