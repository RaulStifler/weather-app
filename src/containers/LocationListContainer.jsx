import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSelectedCity, setWeather } from '../actions'
import LocationList from '../components/LocationList';

class LocationListContainer extends Component {
  componentDidMount() {
    this.props.setWeather(this.props.citiesList);
  }
  
  render() {
    const { citiesList, cities, setSelectedCity } = this.props;
    return (
      <LocationList citiesList={citiesList} cities={cities} setSelectedCity={setSelectedCity} />
    );
  }
}


const mapStateToProps = ({
  citiesList,
  cities,
}) => ({
  citiesList,
  cities,
});

const mapDispatchToProps = {
  setSelectedCity,
  setWeather,
}

export default connect(mapStateToProps,mapDispatchToProps)(LocationListContainer);