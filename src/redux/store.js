import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import tracks from "./reducer";

const store = configureStore({
  reducer: {
    tracks,
  },
  middleware: [...getDefaultMiddleware()],
});

export { store };
