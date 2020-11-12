import {
  getPopularTracksRequest,
  getPopularTracksSuccess,
  getPopularTracksError,
  getDetailsTrackRequest,
  getDetailsTrackSuccess,
  getDetailsTrackError,
  searchTrackRequest,
  searchTrackSuccess,
  searchTrackError,
} from "./actions";
import { getPopularMusic, aboutArtist, searchTrackByName } from "../api/api";

const getTracks = () => (dispatch) => {
  dispatch(getPopularTracksRequest());
  getPopularMusic()
    .then((data) => dispatch(getPopularTracksSuccess(data.track)))
    .catch((error) => dispatch(getPopularTracksError(error)));
};

const getDetailsTrack = (name) => (dispatch) => {
  dispatch(getDetailsTrackRequest());
  aboutArtist(name)
    .then((data) => dispatch(getDetailsTrackSuccess(data)))
    .catch((error) => dispatch(getDetailsTrackError(error)));
};

const searchTrack = (name) => (dispatch) => {
  dispatch(searchTrackRequest());
  searchTrackByName(name)
    .then((data) => dispatch(searchTrackSuccess(data.track)))
    .catch((error) => dispatch(searchTrackError(error)));
};

export { getTracks, getDetailsTrack, searchTrack };
