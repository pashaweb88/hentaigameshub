export enum SearchActionTypes {
  SEARCH_CHANGE = "SEARCH_CHANGE",
  SEARCH_CLEAR = "SEARCH_CLEAR",
}

export interface ISearchState {
  search: string;
  active: boolean;
}

interface ISearchChange {
  type: SearchActionTypes.SEARCH_CHANGE;
  payload: string;
}
interface ISearchClear {
  type: SearchActionTypes.SEARCH_CLEAR;
}

export type SearchAction = ISearchChange | ISearchClear;
