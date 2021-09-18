import {
	PRODUCT_ADD,
	PRODUCT_EDIT,
	PRODUCT_DELETE,
	PRODUCTS_ALL,
	PRODUCT_GET,
} from '../actions/types'
import { v4 } from 'uuid'
const initialState = {
	items: [
		{
			name: 'product 1',
			description: 'best product 1',
			image: 'https://picsum.photos/300/300',
			price: 25000,
		},
		{
			name: 'product 2',
			description: 'best product 2',
			image: 'https://picsum.photos/301/300',
			price: 50000,
		},
	],
}
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
