import { SET_CITIES, CLEAR_CITIES, SET_FORECAST_DATA, SET_WEATHER_CITY, GET_WEATHER_CITY } from '../actions';

export const citiesReducer = (state=[
    {name:'Guadalajara, mx', key: 1},
    {name:'Paris, fr', key: 2},
    {name: 'Tokyo, jp', key: 3},
    {name: 'Madrid, es', key: 4},
    {name: 'Cairo, eg', key: 5}
  ],
  action) => {
    switch(action.type){
        case SET_CITIES:
            return action.cities;
        case CLEAR_CITIES:
            return [];
        default:
            return state;
    }
}

export const cities = (state = {}, action) => {
    switch (action.type) {
        case SET_FORECAST_DATA: {
            const { city, forecastData } = action.city;
            return {...state, [city]: {...state[city],forecastData}};
        }
        case GET_WEATHER_CITY: {
            const city = action.city;
            return { ...state, [city]: {...state[city],weather: null }}
        }
        case SET_WEATHER_CITY: {
            const { city, weather } = action.city;
            return { ...state, [city.name]: {...state[city],weather}}
        }
        default:
            return state;
    }
}