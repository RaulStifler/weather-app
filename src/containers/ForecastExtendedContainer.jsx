import React, { Component } from 'react';
import { connect } from 'react-redux';
import ForecastExtended from '../components/ForecastExtended/index';
import { clearCity } from '../actions'

class ForecastExtendedContainer extends Component {
  render() {
    const { city, clearCity } = this.props;
    return (
      <div>
        <ForecastExtended city={city} clearCity={clearCity}/>     
      </div>
    );
  }
}

const mapStateToProps = state =>({
  city: state.city,
})

const mapDispatchToProps = {
  clearCity,
}

export default connect(mapStateToProps,mapDispatchToProps)(ForecastExtendedContainer);