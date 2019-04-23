import React from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';

// getData = weatherData => {
//   const { humidity, temp } = weatherData.main;
//   const { speed } = weatherData.wind;
//   const weatherState = 'Cloudy';
//   const data = {
//     humidity,
//     temperature: temp,
//     weatherState,
//     wind: `${speed} m/s`,
//   }
//   return data;
// }



const WeatherLocation = ({
  weather,
  data,
  city,
  selectLocation
}) => (
  <div className="weather-location-container" onClick={selectLocation}>
    <Location locationName={city} />
    { data ?
      <WeatherData data={data} /> :
      <CircularProgress />
    }
  </div>
);

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  selectLocation: PropTypes.func.isRequired,
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  }),
}

export default WeatherLocation;