import React from 'react';

import PropTypes from 'prop-types';

import './Widget.scss';

const Widget = ({ Content, title }) => (
  <div className="widget">
    <h3 className="widget__name">{title}</h3>
    <Content />
  </div>
);

Widget.propTypes = {
  Content: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
};
export default Widget;
