import React from 'react';
import PropTypes from 'prop-types';

const Panel = ({ children }) => (
  <div className="panel">
    <div className="panel-block">
      {children}
    </div>
  </div>
);

Panel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Panel;
