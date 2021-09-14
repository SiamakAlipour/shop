import { v4 } from 'uuid'
import {
	PRODUCT_ADD,
	PRODUCT_EDIT,
	PRODUCT_DELETE,
	PRODUCTS_ALL,
	PRODUCT_GET,
} from '../actions/types'
const initialState = [
	{
		id: v4(),
		name: 'first product',
		description: 'hello this is my first product',
		image: 'https://picsum.photos/200/300',
		price: 1000000,
	},
	{
		id: v4(),
		name: 'second product',
		description: 'hello this is my second product',
		image: 'https://picsum.photos/300/300',
		price: 250000,
	},
	{
		id: v4(),
		name: 'third product',
		description: 'hello this is my third product',
		image: 'https://picsum.photos/400/300',
		price: 100000000,
	},
	{
		id: v4(),
		name: 'second product',
		description: 'hello this is my second product',
		image: 'https://picsum.photos/300/300',
		price: 250000,
	},
	{
		id: v4(),
		name: 'third product',
		description: 'hello this is my third product',
		image: 'https://picsum.photos/400/300',
		price: 100000000,
	},
]
const productReducer = (state = initialState, action) => {
	const { type, payload } = action
	switch (type) {
		case PRODUCT_ADD:
			return [
				...state,
				{
					name: payload.name,
					description: payload.description,
					image: payload.image,
					price: payload.price,
				},
			]
		case PRODUCT_EDIT:
		case PRODUCT_DELETE:
		case PRODUCTS_ALL:
		case PRODUCT_GET:
		default:
			return state
	}
}

export default productReducer
