import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { exercisesApi } from "./apiSlice";

export const store = configureStore({
  reducer: {
    [exercisesApi.reducerPath]: exercisesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(exercisesApi.middleware),
});

setupListeners(store.dispatch);
