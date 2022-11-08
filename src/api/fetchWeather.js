import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "e31d15c58b8398ebe9c1a620f9f5fc38";

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      lang: "ru",
      appid: API_KEY,
    },
  });

  return data;
};

export const fetchWeatherId = async (id) => {
  const { data } = await axios.get(URL, {
    params: {
      id: id,
      units: "metric",
      lang: "ru",
      appid: API_KEY,
    },
  });

  return data;
};
