import axios, { AxiosRequestConfig } from "axios";
import { Dispatch } from "redux";
import { PersAction, PersActionTypes } from "../../types/pers";

// TODO:

// 1. catch block change to RIGHT!! action types!

interface IUploadForm {
  name: string;
  posterPath: any;
  bannerPath: any;
}
const uploadSetting: AxiosRequestConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const persUpload = (form: IUploadForm) => {
  return async (dispatch: Dispatch<PersAction>) => {
    try {
      dispatch({ type: PersActionTypes.PERS_REQUEST });
      await axios.post("/pers/create", form, uploadSetting);
      dispatch({ type: PersActionTypes.PERS_UPLOAD });
    } catch (e) {
      dispatch({ type: PersActionTypes.PERS_UPLOAD });
    }
  };
};

export const persFetch = () => {
  return async (dispatch: Dispatch<PersAction>) => {
    try {
      dispatch({ type: PersActionTypes.PERS_REQUEST });
      const res = await axios.get("/pers/all");
      console.log(res);
      dispatch({ type: PersActionTypes.PERS_FETCH, payload: res.data });
    } catch (e) {
      dispatch({ type: PersActionTypes.PERS_UPLOAD });
    }
  };
};

export const persDetail = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: PersActionTypes.PERS_REQUEST });
      const res = await axios.get(`/pers/detail/${id}`);
      dispatch({ type: PersActionTypes.PERS_DETAIL, payload: res.data });
    } catch (e) {
      dispatch({ type: PersActionTypes.PERS_UPLOAD });
    }
  };
};
