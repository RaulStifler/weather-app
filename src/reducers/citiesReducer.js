import { SET_CITIES, CLEAR_CITIES } from '../actions';

const citiesReducer = (state=[
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
export default citiesReducer;