import { Injectable } from '@angular/core';
import {Book} from "../models/book";
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";
import { BookContent } from '../models/book-content';
import { SearchForm } from '../models/search-form';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient

  ) { }

  getRandomBooks(): Observable<Book[]> {
    return this.http.get<Book[]>("http://localhost:8080/api/books/random");
  }

  getBookContent(bookId: number): Observable<BookContent> {
    return this.http.get(`http://localhost:8080/api/books/${bookId}/`, {responseType: 'text'})
    .pipe(
      map((response: string) => {
        const bookContent: BookContent = {
          content: response
        };
        return bookContent;
      }))
  };

  searchBooks(bookQuery: SearchForm): Observable<Book[]> {
    let params = new HttpParams();
    params = params.set("pattern", bookQuery.searchInput);
    params = params.set("isRegex", bookQuery.selectedCategory);
    params = params.set("algorithm", bookQuery.centrality);
    return this.http.get<Book[]>('http://localhost:8080/api/books', {params: params});
  }

  recommendBooks(bookId: string): Observable<Book[]> {
    {
      let params = new HttpParams();
      params = params.set("bookId", bookId);
      return this.http.get<Book[]>('http://localhost:8080/api/books/recommend', {params: params});
    }
  }
}
