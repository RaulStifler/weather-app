import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from '../WeatherLocation';

const LocationList = ({
  cities,
  setCity
}) => {
  const selectLocation = city => {
    setCity(city);
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
  setCity: PropTypes.func.isRequired,
}

export default LocationList;