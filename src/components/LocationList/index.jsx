import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from '../WeatherLocation';

const LocationList = ({
  cities,
  setSelectedCity
}) => {
  const selectLocation = city => {
    setSelectedCity(city);
  }
  return (
    <div>
      {
        cities.map(city =>
          <WeatherLocation 
            key={city}
            city={city} 
            selectLocation={()=>selectLocation(city)} />
        )
      }
    </div>
  );
};

LocationList.protoTypes = {
  cities: PropTypes.array.isRequired,
  setSelectedCity: PropTypes.func.isRequired,
}

export default LocationList;