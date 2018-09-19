import React from 'react';
import PropTypes from 'prop-types';
import Greetings from './Greetings';
import toggleable from '../hoc/toggleable';

export const Modal = ({ isVisable, toggle }) => (
  <div>
    <Greetings isVisable={isVisable} name="Modal" />
    <button type="button" onClick={toggle}>{isVisable ? 'hide' : 'show'}</button>
  </div>
);
Modal.propTypes = {
  isVisable: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};
export default toggleable(Modal);
