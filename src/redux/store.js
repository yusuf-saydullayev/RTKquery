import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { Userapi } from "./UserApi";

export const store = configureStore({
  reducer: {
    [Userapi.reducerPath]: Userapi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Userapi.middleware),
});

setupListeners(store.dispatch);
