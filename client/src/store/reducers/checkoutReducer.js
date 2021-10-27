import {
	CHECKOUT_ALL,
	CHECKOUT_ADD,
	CHECKOUT_COUNT,
	CHECKOUT_REMOVE,
	CHECKOUT_TOTALPRICE,
} from '../actions/types'
import { v4 } from 'uuid'
const initialState = {
	items: [],
}

const checkoutReducer = (state = initialState, action) => {
	const { type, payload } = action

	switch (type) {
		case CHECKOUT_ALL:
			return { ...state, items: payload }
		case CHECKOUT_ADD:
			return {
				...state,
				items: [
					...state.items,
					{
						name: payload.name,
						description: payload.description,
						unitPrice: payload.unitPrice,
						totalPrice: payload.unitPrice,
						count: 1,
					},
				],
			}

		case CHECKOUT_COUNT:
			return {
				...state,
				items: state.items.map((item) =>
					item._id !== payload.id
						? item
						: { ...item, count: payload.count }
				),
			}
		case CHECKOUT_TOTALPRICE:
			return {
				...state,
				items: state.items.map((item) =>
					item._id !== payload.id
						? item
						: { ...item, totalPrice: payload.totalPrice }
				),
			}
		case CHECKOUT_REMOVE:
			return {
				...state,
				items: state.items.filter((item) => item._id !== payload.id),
			}
		default:
			return state
	}
}

export default checkoutReducer
