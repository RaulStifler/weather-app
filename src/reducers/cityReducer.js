import { SET_CITY, CLEAR_CITY } from '../actions';

export const cityReducer = (state='Selecciona una ciudad', action) => {    
    switch(action.type){
        case SET_CITY:
            return action.city;
        case CLEAR_CITY:
            return 'Selecciona una ciudad';
        default:
            return state;
    }
}

export default cityReducer;