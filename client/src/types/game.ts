export enum GamesActionTypes {
  GAME_FETCH = "GAME_FETCH",
  GAME_REQUEST = "GAME_REQUEST",
  GAME_UPLOAD = "GAME_UPLOAD",
  GAME_ERROR = "GAME_ERROR",
}

export interface IGamesState {
  games: any[];
  loading: boolean;
  err: null | string;
}

interface IGamesFetchAction {
  type: GamesActionTypes.GAME_FETCH;
  payload: any[];
}

interface IGamesUploadAction {
  type: GamesActionTypes.GAME_UPLOAD;
}

interface IGamesErrorAction {
  type: GamesActionTypes.GAME_ERROR;
}
interface IGamesRequestAction {
  type: GamesActionTypes.GAME_REQUEST;
}

export type GamesAction =
  | IGamesErrorAction
  | IGamesFetchAction
  | IGamesUploadAction
  | IGamesRequestAction;
