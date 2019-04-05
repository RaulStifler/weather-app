import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({
  humidity,
  wind,
}) => {
  return (
    <div className="extra-info-container">
      <p>
        <span className="extra-info-text">{`Humedad: ${humidity}%`}</span>
        <span className="extra-info-text">{`Vientos: ${wind}`}</span>
      </p>
    </div>
  );
};

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;