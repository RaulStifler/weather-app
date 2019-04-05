import { combineReducers } from 'redux';
import { cityReducer } from './cityReducer';
import citiesReducer from './citiesReducer';

export const mainReducer = combineReducers({
    city: cityReducer,
    cities: citiesReducer,
})