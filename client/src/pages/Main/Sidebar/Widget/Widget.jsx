import React from 'react';

import PropTypes from 'prop-types';

import './styles/Widget.scss';

function Widget({ Content, title }) {
  return (
    <div className="widget">
      <h3 className="widget__name">{title}</h3>
      <Content />
    </div>
  );
}

Widget.propTypes = {
  Content: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
};
export default Widget;
