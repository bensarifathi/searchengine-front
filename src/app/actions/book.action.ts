import { SearchForm } from "../models/search-form";

export class GetRandomBookAction {
  static readonly type = '[Book] Get Random books';
  constructor() {}
}

export class GetBookContentAction {
  static readonly type = '[Book] Get content';
  constructor(public bookId: number) {}
}

export class SearchBoookAction {
  static readonly type = '[Book] Searcg books';
  constructor(public bookQuery: SearchForm) {};
}

export class RecommendBookAction {
  static readonly type = '[Book] Recommend content';
  constructor(public bookId: string) {}
}