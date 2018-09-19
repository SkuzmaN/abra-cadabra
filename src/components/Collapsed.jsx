import React from 'react';
import PropTypes from 'prop-types';
import Greetings from './Greetings';
import toggleable from '../hoc/toggleable';
import abra from '../abra.png';

export const Collapsed = ({ isVisable, toggle, hide }) => (
  <div>
    <Greetings name="Collapsed" isVisable={isVisable} />
    <header><button type="button" onClick={toggle}>Collapse section header. Click to expand</button></header>
    {isVisable && (
    <article>
      <img src={abra} alt="logo" />
      <button type="button" onClick={hide}>Close</button>
    </article>
    )
  }
  </div>
);

Collapsed.propTypes = {
  isVisable: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  hide: PropTypes.func.isRequired,
};

export default toggleable(Collapsed);
