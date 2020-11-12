import axios from "axios";

axios.defaults.baseURL = "http://ws.audioscrobbler.com/2.0/";
axios.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const getPopularMusic = () => {
  const requestParams =
    "?method=chart.gettoptracks&api_key=c6cf44fe31333d3e0297aee40cd0c75d&format=json&limit=5";
  return axios
    .get(requestParams)
    .then(({ data }) => data.tracks)
    .catch((error) => console.warn(error));
};

const aboutArtist = (name) => {
  const requestParams = `?method=artist.getinfo&artist=${name}&api_key=c6cf44fe31333d3e0297aee40cd0c75d&format=json`;
  return axios
    .get(requestParams)
    .then(({ data }) => data.artist)
    .catch((error) => console.warn(error));
};

const searchTrackByName = (name) => {
  const requestParams = `?method=track.search&track=${name}&api_key=c6cf44fe31333d3e0297aee40cd0c75d&format=json&limit=5`;
  return axios
    .get(requestParams)
    .then(({ data }) => data.results.trackmatches)
    .catch((error) => console.warn(error));
};

export { getPopularMusic, aboutArtist, searchTrackByName };
