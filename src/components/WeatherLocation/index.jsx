import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';

const api_key = 'f99bbd9e4959b513e9bd0d7f7356b38d';
const url_base = 'http://api.openweathermap.org/data/2.5/weather';


class WeatherLocation extends Component {
  constructor(props){
    super(props);
    this.state = {
      weather: null
    }
    this.actualizarEstado = this.actualizarEstado.bind(this);
  }

  componentDidMount() {
    this.actualizarEstado();
  }
  
  getUrl = city => `${url_base}?q=${city}&appid=${api_key}&units=metric`;

  getData = weatherData => {
    const { humidity, temp } = weatherData.main;
    const { speed } = weatherData.wind;
    const weatherState = 'Cloudy';
    const data = {
      humidity,
      temperature: temp,
      weatherState,
      wind: `${speed} m/s`,
    }
    return data;
  }

  actualizarEstado(){
    const { city } = this.props;
    fetch(this.getUrl(city))
      .then( res => res.json()
      .then( data => {
        const newWeather = this.getData(data);
        this.setState({
          weather: newWeather
        });
      })
      .catch(e =>{
        console.log(e);
      }) 
    );
  }
  render() {
    const { weather } = this.state;
    const { city, selectLocation } = this.props;
    return (
      <div className="weather-location-container" onClick={selectLocation}>
        <Location locationName={city} />
        { weather ?
          <WeatherData data={weather} /> :
          <CircularProgress />
        }
      </div>
    );
  }
};

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  selectLocation: PropTypes.func.isRequired,
}

export default WeatherLocation;