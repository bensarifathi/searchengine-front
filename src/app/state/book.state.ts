import {State, Action, StateContext, Selector} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {Book} from "../models/book";
import {GetBookAction} from "../actions/book.action";
import {BookService} from "../services/book.service";
import {switchMap} from "rxjs";




export interface BooksStateModel {
  books: Book[]
}

@State<BooksStateModel>({
  name: 'book',
  defaults: {books: []},
})
@Injectable()
export class BookState {

  constructor(private readonly bookService: BookService) {
  }

  @Selector()
  static books(state: BooksStateModel) {
    return state.books;
  }

  @Action(GetBookAction)
  getBooks(ctx: StateContext<BooksStateModel>, action: GetBookAction) {
    // service call
    return this.bookService.getBooks(action.language).pipe(
      switchMap((books) => {
        ctx.setState({books});
        return books;
      })
    )
  }
}
