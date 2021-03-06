import { combineReducers } from 'redux';
import { cityReducer } from './cityReducer';
import { citiesReducer, cities } from './citiesReducer';

export const mainReducer = combineReducers({
    city: cityReducer,
    citiesList: citiesReducer,
    cities,
})