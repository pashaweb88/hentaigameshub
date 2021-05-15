import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers";

export const usedTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
