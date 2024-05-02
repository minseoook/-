import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const userSlice = createSlice({
  //슬라이스 이름, 초기값, 리듀서로 이루어진 객체
  name: "user",
  initialState,
  reducers: {
    addUser(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { addUser } = userSlice.actions; //액션을 내보내줘야지 dispatch가 가능하다

export default userSlice.reducer; //컨피규어스토어에서 합치기 위해
