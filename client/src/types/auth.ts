export enum AuthActionTypes {
  LOGIN_FETCH = "LOGIN_FETCH",
  LOGIN_SUCESS = "LOGIN_SUCESS",
}

export interface IAuthState {
  userId: string;
  token: string;
  loading: boolean;
  err: null | string;
}

interface IAuthLoginFetchAction {
  type: AuthActionTypes.LOGIN_FETCH;
}

interface IAuthLoginSuccessAction {
  type: AuthActionTypes.LOGIN_SUCESS;
  payload: any;
}

export type AuthAction = IAuthLoginFetchAction | IAuthLoginSuccessAction;
