import { configureStore } from "@reduxjs/toolkit";
import { userAuth } from "./state/user-auth/userAuth";
import { dashboard } from "./state/userData/dashboard";
import { authSlice } from "./state/user-auth/authSlice";
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [userAuth.reducerPath]: userAuth.reducer,
    [dashboard.reducerPath]: dashboard.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userAuth.middleware)
      .concat(dashboard.middleware),
});

export default store;
