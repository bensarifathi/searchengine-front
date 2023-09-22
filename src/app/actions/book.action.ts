export class GetBookAction {
  static readonly type = '[Book] Get books';
  constructor(public language: string) {}
}
