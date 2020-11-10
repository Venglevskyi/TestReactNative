import {
  getPopularTracksRequest,
  getPopularTracksSuccess,
  getPopularTracksError,
} from "./actions";
import { getPopularMusic } from "../api/api";

const getTracks = () => (dispatch) => {
  dispatch(getPopularTracksRequest());
  getPopularMusic()
    .then((data) => dispatch(getPopularTracksSuccess(data.track)))
    .catch((error) => dispatch(getPopularTracksError(error)));
};

export { getTracks };
