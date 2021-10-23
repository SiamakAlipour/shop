import {
	PRODUCT_ADD,
	PRODUCT_EDIT,
	PRODUCT_DELETE,
	PRODUCTS_ALL,
	PRODUCT_GET,
	MESSAGE_ADD,
} from './types'
import axios from 'axios'
import authHeader from '../../service/auth-header'
import { productService } from '../../service/product.service'
const products = axios.create({
	baseURL: 'http://127.0.0.1:8001/api/products',
})
export const allProducts = () => async (dispatch) => {
	// await productService.allProducts().then(
	// 	(res) => {
	// 		// Res

	// 		return Promise.resolve()
	// 	},
	// 	(error) => {
	// 		//  Error
	// 		return Promise.reject()
	// 	}
	// )
	await products.get('/').then((res) => {
		dispatch({
			type: PRODUCTS_ALL,
			payload: res.data,
		})
	})
}

export const addProduct = (formData) => (dispatch) => {
	return productService.addProduct(formData).then(
		(res) => {
			dispatch({
				type: MESSAGE_ADD,
				payload: {
					info: 'alert-success',
					message: 'کالا با موفقیت اضافه شد.',
				},
			})
			return Promise.resolve()
		},
		(error) => {
			dispatch({
				type: MESSAGE_ADD,
				payload: {
					info: 'alert-danger',
					message: error.response.data,
				},
			})
			return Promise.reject()
		}
	)
}
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
