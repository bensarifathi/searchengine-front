import {State, Action, StateContext, Selector} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {GetLanguagesAction} from "../actions/languages.action";
import {LanguageService} from "../services/language.service";
import {switchMap} from "rxjs";


export interface LanguageStateModel {
  languages: string[],
}

@State<LanguageStateModel>(
  {
    name: "language",
    defaults: {
      languages: [],
    }
  }
)
@Injectable()
export class LanguageState {

  constructor(private readonly languageService: LanguageService) {
  }

  @Selector()
  static languages(state: LanguageStateModel) {
    return state.languages;
  }

  @Action(GetLanguagesAction)
  getLanguages(ctx: StateContext<LanguageStateModel>) {
    return this.languageService.getLanguages().pipe(
      switchMap((languages => {
        ctx.setState({languages});
        return languages;
      }))
    )
  }
}
