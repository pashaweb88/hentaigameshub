import {
  ISearchState,
  SearchAction,
  SearchActionTypes,
} from "../../types/search";

const initialState: ISearchState = {
  search: "",
  active: false,
};

export const searchReducer = (
  state = initialState,
  action: SearchAction
): ISearchState => {
  switch (action.type) {
    case SearchActionTypes.SEARCH_CHANGE:
      return { active: true, search: action.payload };
    case SearchActionTypes.SEARCH_CLEAR:
      return { active: false, search: "" };
    default:
      return state;
  }
};
