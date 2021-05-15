import axios, { AxiosRequestConfig } from "axios";
import { Dispatch } from "redux";
import { IGameForm } from "../../types/data";
import { GamesActionTypes } from "../../types/game";

const uploadSetting: AxiosRequestConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const gamesUpload = (form: IGameForm) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: GamesActionTypes.GAME_REQUEST });
      await axios.post("/game/create", form, uploadSetting);
      dispatch({ type: GamesActionTypes.GAME_UPLOAD });
    } catch (e) {
      dispatch({ type: GamesActionTypes.GAME_ERROR });
    }
  };
};

export const gamesFetch = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: GamesActionTypes.GAME_REQUEST });
      const res = await axios.get(`/game/all/${id}`);
      dispatch({ type: GamesActionTypes.GAME_FETCH, payload: res.data });
    } catch (e) {
      dispatch({ type: GamesActionTypes.GAME_ERROR });
    }
  };
};
