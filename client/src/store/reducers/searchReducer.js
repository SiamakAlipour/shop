import { SEARCH_ADD } from '../actions/types';
const searchReducer = (state = '', action) => {
	switch (action.type) {
		case SEARCH_ADD:
			return action.payload.value;
		default:
			return state;
	}
};

export default searchReducer;
