import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '9a55530fc429560972d8926e6f6dc7b6';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            lang: 'ru',
            APPID: API_KEY
        }
    })

    return data;
}

export const fetchWeatherId = async (id) => {
    const { data } = await axios.get(URL, {
        params: {
            id: id,
            units: 'metric',
            lang: 'ru',
            APPID: API_KEY
        }
    })

    return data;
}