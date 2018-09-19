import React from 'react';
import PropTypes from 'prop-types';
import Greetings from './Greetings';
import toggleable from '../hoc/toggleable';

export const Tooltip = ({ isVisable, show, hide }) => (
  <div>
    <Greetings isVisable={isVisable} name="Tooltip" />
    <button
      type="button"
      onMouseEnter={show}
      onMouseLeave={hide}
    >
            hover on
    </button>
  </div>
);

Tooltip.propTypes = {
  isVisable: PropTypes.bool.isRequired,
  show: PropTypes.func.isRequired,
  hide: PropTypes.func.isRequired,
};

export default toggleable(Tooltip);
