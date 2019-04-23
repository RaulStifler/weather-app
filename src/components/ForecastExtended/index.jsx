import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';
import CircularProgress from '@material-ui/core/CircularProgress';

const ForecastExtended = ({
  city,
  clearCity,
  forecastData
}) => {
  return (
    <div className="forecast-container">
    <h3 onClick={clearCity}>{city}</h3>
        { (city !== 'Selecciona una ciudad' && !forecastData) && 
          <CircularProgress />
        }
        { forecastData &&
          forecastData.map( forecast =>
            <ForecastItem
              key={`${forecast.weekDay}${forecast.hour}`}
              weekDay={forecast.weekDay} hour={forecast.hour}
              data={forecast.data}
            />)
        }
      </div>
    );
  }

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    clearCity: PropTypes.func.isRequired,
    forecastData: PropTypes.array,
};

ForecastExtended.defaultProps = {
  city: 'Selecciona una ciudad'
}

export default ForecastExtended;