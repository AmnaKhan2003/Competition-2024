import { configureStore } from "@reduxjs/toolkit";

export const Store = configureStore({
  reducer: {
    auth1: UserSlice.reducer,

    [ApiSlice.reducerPath]: ApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiSlice.middleware),
  devTools: true,
});

export default Store;
