import {
	PRODUCT_ADD,
	PRODUCT_EDIT,
	PRODUCT_DELETE,
	PRODUCTS_ALL,
	PRODUCT_GET,
} from './types'

export const addProduct = (name, description, image, price) => ({
	type: PRODUCT_ADD,
	payload: {
		name,
		description,
		image,
		price,
	},
})
export const editProduct = (id) => ({
	type: PRODUCT_EDIT,
	payload: {
		id,
	},
})

export const deleteProduct = (id) => ({
	type: PRODUCT_DELETE,
	payload: {
		id,
	},
})
export const getProduct = (id) => ({
	type: PRODUCT_GET,
	payload: {
		id,
	},
})
export const allProducts = () => ({
	type: PRODUCTS_ALL,
})
