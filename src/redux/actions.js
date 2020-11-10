import { createAction } from "@reduxjs/toolkit";

const getPopularTracksRequest = createAction("tracks/request");
const getPopularTracksSuccess = createAction("tracks/success");
const getPopularTracksError = createAction("tracks/error");

export {
  getPopularTracksRequest,
  getPopularTracksSuccess,
  getPopularTracksError,
};
