import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import IconButton from '@mui/material/IconButton';

import { removeMessage } from '../store/actions/message';

import './styles/Message.scss';

function Message({ info, message }) {
  const dispatch = useDispatch();
  useEffect(() => {
    clearTimeout();
    if (message) setTimeout(() => dispatch(removeMessage()), 3000);
  });
  if (message) {
    return (
      <div className={`alert ${info} message`}>
        {message}
        <IconButton color="inherit" onClick={() => dispatch(removeMessage())}>
          <HighlightOffIcon />
        </IconButton>
      </div>
    );
  }
  return null;
}

Message.propTypes = {
  info: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Message;
