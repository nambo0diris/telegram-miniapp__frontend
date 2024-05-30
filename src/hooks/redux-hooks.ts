import {AppDispatch, AppStore, RootState} from "../services/store/types/types.ts";
import {
    useDispatch as dispatchHook,
    useSelector as selectorHook, useStore,
} from 'react-redux'
import type {TypedUseSelectorHook} from "react-redux"
export const useAppDispatch: () => AppDispatch = dispatchHook
export const useAppSelector: TypedUseSelectorHook<RootState> = selectorHook
export const useAppStore: () => AppStore = useStore
