import { createReducer } from "@reduxjs/toolkit";
import {
  getPopularTracksSuccess,
  getDetailsTrackSuccess,
  searchTrackSuccess,
} from "./actions";

const tracks = createReducer([], {
  [getPopularTracksSuccess]: (_, action) => action.payload,
});

const details = createReducer(null, {
  [getDetailsTrackSuccess]: (_, action) => action.payload,
});

const searchTrack = createReducer(null, {
  [searchTrackSuccess]: (_, action) => action.payload,
});

export { tracks, details, searchTrack };
