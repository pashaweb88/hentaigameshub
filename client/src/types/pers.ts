export enum PersActionTypes {
  PERS_FETCH = "PERS_FETCH",
  PERS_REQUEST = "PERS_REQUEST",
  PERS_UPLOAD = "PERS_UPLOAD",
  PERS_ERROR = "PERS_ERROR",
  PERS_DETAIL = "PERS_DETAIL",
}

export interface IPersState {
  detail: any;
  pers: any[];
  loading: boolean;
  err: null | string;
}

interface IPersFetchAction {
  type: PersActionTypes.PERS_FETCH;
  payload: any[];
}
interface IPersDetailAction {
  type: PersActionTypes.PERS_DETAIL;
  payload: any[];
}

interface IPersUploadAction {
  type: PersActionTypes.PERS_UPLOAD;
}

interface IPersErrorAction {
  type: PersActionTypes.PERS_ERROR;
}
interface IPersRequestAction {
  type: PersActionTypes.PERS_REQUEST;
}

export type PersAction =
  | IPersFetchAction
  | IPersUploadAction
  | IPersErrorAction
  | IPersRequestAction
  | IPersDetailAction;
