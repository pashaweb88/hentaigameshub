import { IGamesState, GamesAction, GamesActionTypes } from "../../types/game";

const initialState: IGamesState = {
  games: [],
  loading: false,
  err: null,
};

export const gamesReducer = (
  state = initialState,
  action: GamesAction
): IGamesState => {
  switch (action.type) {
    case GamesActionTypes.GAME_ERROR:
      return { games: [], err: "err", loading: false };
    case GamesActionTypes.GAME_UPLOAD:
      return { games: [], err: null, loading: false };
    case GamesActionTypes.GAME_FETCH:
      return { games: action.payload, err: null, loading: false };
    case GamesActionTypes.GAME_REQUEST:
      return { games: [], loading: true, err: null };
    default:
      return state;
  }
};
