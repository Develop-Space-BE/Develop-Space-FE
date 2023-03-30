import {
  AnyAction,
  combineReducers,
  configureStore,
  Store,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import mainList from "../modules/mainList";

const rootReducer = combineReducers({
  mainList,
});

// 사용자 지정 AppStore로 스토어 생성
const store: AppStore = configureStore({
  reducer: rootReducer,
});

// 리듀서에서 루트 상태 유형 가져오기
export type RootState = ReturnType<typeof rootReducer>;
// Thunk 디스패치 유형 만들기
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
// 루트 상태 및 Thunk 지원 디스패치를 사용하여 저장소 유형 생성
export type AppStore = Omit<Store<RootState, AnyAction>, "dispatch"> & {
  dispatch: AppThunkDispatch;
};

// 위의 명시적 유형을 사용하여 일부 중복 제거 훅를 만들 수도 있습니다
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
