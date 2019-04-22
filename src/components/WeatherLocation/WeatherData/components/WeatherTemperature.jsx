import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcons from 'react-weathericons';

const icons = {
  cloud: "cloud",
  cloudy: "cloudy",
  sun: "day-sunny",
  rain: "rain",
  snow: "snow",
  windy: "windy",
};

const getWeatherIcon = weatherState => {
  const icon = icons[weatherState];
  if (icon) {
    return (
      <WeatherIcons className="weather-icon" name={icon} size="4x" />
    );
  }
  return (
    <WeatherIcons className="weather-icon" name="day-sunny" size="4x" />
  );
}

const WeatherTemperature = ({
  temperature,
  weatherState,
}) => {
  return (
    <div className="temperature-container">
      {
        getWeatherIcon(weatherState)
      }
      <span className="temperature-amount">
        {temperature}
      </span>
      <span className="temperature-type">
        °C
      </span>
    </div>
  );
};

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;