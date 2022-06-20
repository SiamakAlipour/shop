import React from 'react';

import PropTypes from 'prop-types';

import './styles/Ads.scss';

function Ads({ image, url = '#' }) {
  return (
    <div className="ads">
      <h1>ADS</h1>
      <a href={url}>
        <img src={image} alt="" />
      </a>
    </div>
  );
}

Ads.propTypes = {
  image: PropTypes.string.isRequired,
  url: PropTypes.string,
};

Ads.defaultProps = {
  url: '#',
};

export default Ads;
