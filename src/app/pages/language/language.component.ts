import { Component, OnInit } from '@angular/core';
import {Store} from "@ngxs/store";
import {GetLanguagesAction} from "../../actions/languages.action";
import {Observable} from "rxjs";
import {LanguageState} from "../../state/language.state";

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  languages$: Observable<string[]>;

  constructor(private store: Store) {
    this.languages$ = this.store.select(LanguageState.languages);
  }

  ngOnInit(): void {
    this.getLanguages();
  }

  getLanguages() {
    this.store.dispatch(new GetLanguagesAction());
  }

}
