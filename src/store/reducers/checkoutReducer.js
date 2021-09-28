import { v4 } from 'uuid'
import { CHECKOUT_ADD, CHECKOUT_COUNT, CHECKOUT_REMOVE } from '../actions/types'

const initialState = []

const checkoutReducer = (state = initialState, action) => {
	const { type, payload } = action

	switch (type) {
		case CHECKOUT_ADD:
			state.push({
				id: payload.id,
				name: payload.name,
				description: payload.description,
				unitPrice: payload.unitPrice,
			})
			return state
		case CHECKOUT_COUNT:
			return state.map((state) =>
				state.id !== payload.id
					? state
					: { ...state, count: payload.count }
			)
		case CHECKOUT_REMOVE:
			return state.filter((state) => state.id !== payload.id)
		default:
			return state
	}
}

export default checkoutReducer
