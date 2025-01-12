import { createSlice } from "@reduxjs/toolkit";
import Cookie from "js-cookie";
const authtoken = Cookie.get("authToken");
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user:
      (!authtoken ? null : JSON.parse(localStorage.getItem("user"))) || null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },
});

export const { setUser } = authSlice.actions;
