import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSelectedCity } from '../actions'
import LocationList from '../components/LocationList';

class LocationListContainer extends Component {
  render() {
    const { cities, setSelectedCity } = this.props;
    return (
      <LocationList cities={cities} setSelectedCity={setSelectedCity} />
    );
  }
}


const mapStateToProps = ({
  cities
}) => ({
  cities
});

const mapDispatchToProps = {
  setSelectedCity,
}

export default connect(mapStateToProps,mapDispatchToProps)(LocationListContainer);