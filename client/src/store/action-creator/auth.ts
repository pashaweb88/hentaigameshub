import axios, { AxiosRequestConfig } from "axios";
import { Dispatch } from "redux";
import { AuthAction, AuthActionTypes } from "../../types/auth";
import { ILoginForm } from "../../types/data";

const reqSettings: AxiosRequestConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const fetchAuth = (data: ILoginForm) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({ type: AuthActionTypes.LOGIN_FETCH });
      const url = "/user/login";
      const res = await axios.post(url, data, reqSettings.headers);
      dispatch({ type: AuthActionTypes.LOGIN_SUCESS, payload: res.data });
    } catch (e) {
      dispatch({
        type: AuthActionTypes.LOGIN_SUCESS,
        payload: { token: "", userId: "" },
      });
    }
  };
};
