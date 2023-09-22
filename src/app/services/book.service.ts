import { Injectable } from '@angular/core';
import {Book} from "../models/book";
import {HttpClient} from "@angular/common/http";
import * as http from "http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient

  ) { }

  getBooks(language: string): Observable<Book[]> {
    return this.http.get<any>("assets/database.json").pipe(
      map(data => {
        if(language != "all")
          return data[language];
        else
          return Object.values(data).reduce((acc: any[], currentValue) => acc.concat(currentValue), []);
      })
    );
  }
}
