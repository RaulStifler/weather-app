import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import transformForecast from '../../services/transformForecast';

const api_key = 'f99bbd9e4959b513e9bd0d7f7356b38d';
const url_base = 'http://api.openweathermap.org/data/2.5/forecast';

class ForecastExtended extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecastData: null,
    }
  }
  
  componentWillReceiveProps(nextProps) {
    const { city } = nextProps;
    this.setState({
      forecastData: null,
    });
    if (city !== 'Selecciona una ciudad') {
      fetch(this.getUrl(city))
        .then( res => res.json()
        .then( data => {
          const newData = transformForecast(data);
          this.setState({
            forecastData: newData,
          });
        })
        .catch(e =>{
          console.log(e);
        }) 
      );
    } 
  }
  
  
  
  getUrl = city => `${url_base}?q=${city}&appid=${api_key}&units=metric`;
  
  render(){
    const { city, clearCity } = this.props;
    const { forecastData } = this.state;
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
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    clearCity: PropTypes.func.isRequired,
};

ForecastExtended.defaultProps = {
  city: 'Selecciona una ciudad'
}

export default ForecastExtended;