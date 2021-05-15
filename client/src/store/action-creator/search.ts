import { SearchActionTypes } from "../../types/search";

export const searchHandler = (searchText: string) => {
  return {
    type: SearchActionTypes.SEARCH_CHANGE,
    payload: searchText,
  };
};

export const searchClear = () => {
  return {
    type: SearchActionTypes.SEARCH_CLEAR,
  };
};
