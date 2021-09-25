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
			image: 'https://picsum.photos/301/300',
			price: 25000,
		},
		{
			name: 'product 2',
			description: 'best product 2',
			image: 'https://picsum.photos/301/300',
			price: 50000,
		},
		{
			name: 'product 1',
			description: 'best product 1',
			image: 'https://picsum.photos/303/300',
			price: 25000,
		},
		{
			name: 'product 2',
			description: 'best product 2',
			image: 'https://picsum.photos/301/301',
			price: 50000,
		},
		{
			name: 'product 1',
			description: 'best product 1',
			image: 'https://picsum.photos/306/300',
			price: 253000,
		},
		{
			name: 'dad 2',
			description: 'best product 2',
			image: 'https://picsum.photos/301/300',
			price: 520000,
		},
		{
			name: 'bb 1',
			description: 'best product 1',
			image: 'https://picsum.photos/300/306',
			price: 25000,
		},
		{
			name: 'dad 2',
			description: 'best product 2',
			image: 'https://picsum.photos/301/300',
			price: 50000,
		},
		{
			name: 'f 1',
			description: 'best product 1',
			image: 'https://picsum.photos/307/300',
			price: 25000,
		},
		{
			name: 'd 2',
			description: 'best product 2',
			image: 'https://picsum.photos/301/308',
			price: 100000,
		},
		{
			name: 'product 1',
			description: 'best product 1',
			image: 'https://picsum.photos/300/300',
			price: 8000,
		},
		{
			name: 'h 2',
			description: 'best product 2',
			image: 'https://picsum.photos/301/300',
			price: 70000,
		},
		{
			name: 'g 1',
			description: 'best product 1',
			image: 'https://picsum.photos/309/300',
			price: 25000,
		},
		{
			name: 'product 2',
			description: 'best product 2',
			image: 'https://picsum.photos/301/310',
			price: 50000,
		},
		{
			name: 'product 1',
			description: 'best product 1',
			image: 'https://picsum.photos/300/390',
			price: 25000,
		},
		{
			name: 'd 2',
			description: 'best product 2',
			image: 'https://picsum.photos/311/300',
			price: 60000,
		},
		{
			name: 'b 1',
			description: 'best product 1',
			image: 'https://picsum.photos/300/310',
			price: 250900,
		},
		{
			name: 'test',
			description: 'best product 2',
			image: 'https://picsum.photos/321/300',
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
