import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCity } from '../actions'
import LocationList from '../components/LocationList';

class LocationListContainer extends Component {
  render() {
    const { cities, setCity } = this.props;
    return (
      <LocationList cities={cities} setCity={setCity} />
    );
  }
}


const mapStateToProps = ({
  cities
}) => ({
  cities
});

const mapDispatchToProps = {
  setCity,
}

export default connect(mapStateToProps,mapDispatchToProps)(LocationListContainer);