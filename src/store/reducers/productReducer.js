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
			_id: v4(),
			name: 'product 1',
			description: 'best product 1',
			image: 'https://picsum.photos/301/300',
			price: 25000,
		},
		{
			_id: v4(),
			name: 'product 2',
			description: 'best product 2',
			image: 'https://picsum.photos/301/300',
			price: 50000,
		},
		{
			_id: v4(),
			name: 'product 1',
			description: 'best product 1',
			image: 'https://picsum.photos/303/300',
			price: 25000,
		},
		{
			_id: v4(),
			name: 'product 2',
			description: 'best product 2',
			image: 'https://picsum.photos/301/301',
			price: 50000,
		},
		{
			_id: v4(),
			name: 'product 1',
			description: 'best product 1',
			image: 'https://picsum.photos/306/300',
			price: 253000,
		},
		{
			_id: v4(),
			name: 'dad 2',
			description: 'best product 2',
			image: 'https://picsum.photos/301/300',
			price: 520000,
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
