import { MESSAGE_ADD, MESSAGE_REMOVE } from '../actions/types'

const initialState = [null, null]

const messageReducer = (state = initialState, action) => {
	const { type, payload } = action
	switch (type) {
		case MESSAGE_ADD:
			return [payload.info, payload.message]
		case MESSAGE_REMOVE:
			return ''
		default:
			return state
	}
}

export default messageReducer
