import { SET_CITIES, CLEAR_CITIES, SET_FORECAST_DATA } from '../actions';

export const citiesReducer = (state=[
    'Guadalajara, mx',
    'Paris, fr',
    'Tokyo, jp',
    'Madrid, es',
    'Cairo, eg'
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
        case SET_FORECAST_DATA:
            const { city, forecastData } = action.city;
            return {...state, [city]: {forecastData}};
        default:
            return state;
    }
}