import {
	PRODUCT_ADD,
	PRODUCT_EDIT,
	PRODUCT_DELETE,
	PRODUCTS_ALL,
	PRODUCT_GET,
} from '../actions/types'
import { v4 } from 'uuid'
const initialState = { items: [] }
const productReducer = (state = initialState, action) => {
	const { type, payload } = action
	switch (type) {
		case PRODUCTS_ALL:
			return { ...state, items: payload }
		default:
			return state
	}
}

export default productReducer
