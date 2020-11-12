import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { tracks, details, searchTrack } from "./reducer";

const store = configureStore({
  reducer: { tracks, details, searchTrack },
  middleware: [...getDefaultMiddleware()],
});

export { store };
