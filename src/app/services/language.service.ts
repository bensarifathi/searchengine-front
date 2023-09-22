import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {


  constructor(private http: HttpClient) { }

  getLanguages(): Observable<string[]> {
    return this.http.get("assets/database.json")
      .pipe(map((data) => Object.keys(data)));
  }

}
