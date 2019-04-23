import React, { Component } from 'react';
import { connect } from 'react-redux';
import ForecastExtended from '../components/ForecastExtended/index';
import { clearCity } from '../actions'

class ForecastExtendedContainer extends Component {
  render() {
    const { city, clearCity, forecastData } = this.props;
    return (
      <div>
        <ForecastExtended city={city} clearCity={clearCity} forecastData={forecastData} />     
      </div>
    );
  }
}

const mapStateToProps = ({
  city,
  cities,
}) =>({
  city,
  forecastData: cities[city] && cities[city].forecastData,
})

const mapDispatchToProps = {
  clearCity,
}

export default connect(mapStateToProps,mapDispatchToProps)(ForecastExtendedContainer);