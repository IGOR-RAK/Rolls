import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootReduser } from "../store/reducers";

export const useTypedSelector: TypedUseSelectorHook<RootReduser> = useSelector;