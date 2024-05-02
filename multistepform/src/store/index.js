import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import cartReducer from "./slice/cartSlice";

const store = configureStore({
  // 여러 리듀서를 자동으로 합쳐주고 미들웨어랑 데브툴즈 기능제공한다
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
