import React from 'react';
import PropTypes from 'prop-types';

const Greetings = ({ name, isVisable }) => (
  <div>
    {`Hello I'm ${name}! I'm ${isVisable ? 'visible' : 'hidden'} right now`}
  </div>
);

Greetings.propTypes = {
  name: PropTypes.string.isRequired,
  isVisable: PropTypes.bool.isRequired,
};

export default Greetings;
