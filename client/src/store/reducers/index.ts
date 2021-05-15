import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { gamesReducer } from "./gamesReducer";
import { persReducer } from "./persReducer";
import { searchReducer } from "./searchReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  pers: persReducer,
  games: gamesReducer,
  search: searchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
