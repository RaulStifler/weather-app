import { transformForecast, getData } from '../services/transformForecast';
export const SET_CITY = 'SET_CITY';
export const CLEAR_CITY = 'CLEAR_CITY';
export const SET_CITIES = 'SET_CITIES';
export const CLEAR_CITIES = 'CLEAR_CITIES';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';

const api_key = 'f99bbd9e4959b513e9bd0d7f7356b38d';
const url_base = 'http://api.openweathermap.org/data/2.5/forecast';

export const setCity = city => ({ type: SET_CITY, city });
export const setForecastData = city => ({ type: SET_FORECAST_DATA, city });
export const clearCity = () => ({ type: CLEAR_CITY });
export const setCities = cities => ({ type: SET_CITIES, cities })
export const clearCities = () => ({ type: CLEAR_CITIES })

export const setSelectedCity = city => {
    return dispatch => {
        const url_forecast = `${url_base}?q=${city}&appid=${api_key}&units=metric`;
        
        dispatch(setCity(city));

        return fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                dispatch(setForecastData({city, forecastData}));
            }
        );
    };
}

const getWeatherCity = city => ({type: GET_WEATHER_CITY, city});
const setWeatherCity = city => ({type: SET_WEATHER_CITY, city});

export const setWeather = cities => {
    return dispatch => {
        cities.forEach(city => {
            dispatch(getWeatherCity(city.name));
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=f99bbd9e4959b513e9bd0d7f7356b38d&units=metric`).then(
                res => res.json().then(
                    data => {                        
                        const weather = getData(data);
                        dispatch(setWeatherCity({city, weather}));
                    }).catch(
                        e =>{
                            console.log(e);
                        })
                    );
                });
    }
}