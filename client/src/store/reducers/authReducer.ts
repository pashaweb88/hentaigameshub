import { IAuthState, AuthAction, AuthActionTypes } from "../../types/auth";

const initialState: IAuthState = {
  token: "",
  userId: "",
  loading: false,
  err: null,
};

export const authReducer = (
  state = initialState,
  action: AuthAction
): IAuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_FETCH:
      return { token: "", userId: "", loading: true, err: null };
    case AuthActionTypes.LOGIN_SUCESS:
      return {
        token: action.payload.token,
        userId: action.payload.userId,
        loading: false,
        err: null,
      };
    default:
      return state;
  }
};
