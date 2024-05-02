import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  //슬라이스 이름, 초기값, 리듀서로 이루어진 객체
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      return [action.payload];
    },
    addToCart2(state, action) {
      console.log(action.payload);
      if (action.payload.length === 0) {
        return [];
      }

      return [...action.payload];
    },
  },
});

export const { addToCart, addToCart2 } = cartSlice.actions; //액션을 내보내줘야지 dispatch가 가능하다

export default cartSlice.reducer; //컨피규어스토어에서 합치기 위해
