import { MESSAGE_ADD, MESSAGE_REMOVE } from './types';

export const addMessage = (info, message) => ({
  type: MESSAGE_ADD,
  payload: {
    info,
    message,
  },
});
export const removeMessage = () => ({
  type: MESSAGE_REMOVE,
});
