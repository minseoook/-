import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import cartReducer from "./slice/cartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

// const store = configureStore({
//   // 여러 리듀서를 자동으로 합쳐주고 미들웨어랑 데브툴즈 기능제공한다
//   reducer: {
//     user: userReducer,
//     cart: cartReducer,
//   },
// });
const reducers = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

const persistConfig = {
  key: "root",
  storage, // 로컬 스토리지에 저장
  whitelist: ["user", "cart"],
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
});
export default store;
