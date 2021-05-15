import { IPersState, PersAction, PersActionTypes } from "../../types/pers";

const initalState: IPersState = {
  pers: [],
  loading: false,
  err: null,
  detail: null,
};

export const persReducer = (
  state = initalState,
  action: PersAction
): IPersState => {
  switch (action.type) {
    case PersActionTypes.PERS_REQUEST:
      return { pers: state.pers, loading: true, err: null, detail: null };
    case PersActionTypes.PERS_UPLOAD:
      return { pers: state.pers, loading: false, err: null, detail: null };
    case PersActionTypes.PERS_FETCH:
      return { pers: action.payload, loading: false, err: null, detail: null };
    case PersActionTypes.PERS_DETAIL:
      return {
        pers: state.pers,
        loading: false,
        err: null,
        detail: action.payload,
      };
    default:
      return state;
  }
};
