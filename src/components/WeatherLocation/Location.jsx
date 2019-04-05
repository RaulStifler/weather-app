import React from 'react';
import PropTypes from 'prop-types';

const Location = ({
    locationName,
}) => {
  return (
    <div className="location-container">
      <h2>{locationName}</h2>
    </div>
  );
};

Location.propTypes = {
  locationName: PropTypes.string.isRequired,
};

export default Location;