export const SET_CITY = 'SET_CITY';
export const CLEAR_CITY = 'CLEAR_CITY';
export const SET_CITIES = 'SET_CITIES';
export const CLEAR_CITIES = 'CLEAR_CITIES';

export const setCity = city => ({
    type: SET_CITY,
    city,
});
export const clearCity = () => ({
    type: CLEAR_CITY,
});

export const setCities = cities => ({
    type: SET_CITIES,
    cities,
})

export const clearCities = () => ({
    type: CLEAR_CITIES,
})
