import axios from "axios";

axios.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const getCurrentWeatherByQuery = (query) => {
  const baseURL = "http://api.weatherstack.com/";
  const requestParams = `?access_key=fe27553a221f3a38ea4012e0aec8e317&query=${query}`;
  return axios
    .get(baseURL + "current" + requestParams)
    .then(({ data }) => data);
};

const showPopularMovies = () => {
  const baseURL = "https://api.themoviedb.org/3/trending/all/day";
  const requestParams = "?api_key=ffb803f52f4e27e6105837b5e1f7e8d0&page=1";
  return axios.get(baseURL + requestParams).then(({ data }) => data.results);
};

export { getCurrentWeatherByQuery, showPopularMovies };
