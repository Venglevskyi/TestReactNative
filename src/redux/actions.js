import { createAction } from "@reduxjs/toolkit";

const getPopularTracksRequest = createAction("tracks/request");
const getPopularTracksSuccess = createAction("tracks/success");
const getPopularTracksError = createAction("tracks/error");

const getDetailsTrackRequest = createAction("details/request");
const getDetailsTrackSuccess = createAction("details/success");
const getDetailsTrackError = createAction("details/error");

const searchTrackRequest = createAction("search/request");
const searchTrackSuccess = createAction("search/success");
const searchTrackError = createAction("search/error");

export {
  getPopularTracksRequest,
  getPopularTracksSuccess,
  getPopularTracksError,
  getDetailsTrackRequest,
  getDetailsTrackSuccess,
  getDetailsTrackError,
  searchTrackRequest,
  searchTrackSuccess,
  searchTrackError,
};
