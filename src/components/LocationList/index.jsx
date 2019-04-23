import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from '../WeatherLocation';

const LocationList = ({
  citiesList,
  setSelectedCity,
  cities
}) => {
  const selectLocation = city => {
    setSelectedCity(city);
  }
  return (
    <div>
      {
        citiesList.map(city =>
          <WeatherLocation 
            key={city.key}
            city={city.name} 
            selectLocation={()=>selectLocation(city.name)}
            data={cities[city.name] ? cities[city.name].weather:null} />
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