import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { getPopularTracksSuccess } from "./actions";

const tracks = createReducer([], {
  [getPopularTracksSuccess]: (state, action) => action.payload,
});

export default combineReducers({ tracks });
