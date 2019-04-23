import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from '../WeatherLocation';

const LocationList = ({
  cities,
  setSelectedCity,
  data
}) => {
  const selectLocation = city => {
    setSelectedCity(city);
  }
  return (
    <div>
      {
        cities.map(city =>
          <WeatherLocation 
            key={city.key}
            city={city.name} 
            selectLocation={()=>selectLocation(city.name)}
            data={city.data} />
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