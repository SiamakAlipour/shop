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
					message: JSON.stringify(error.response.data, null, 4),
				},
			})
			return Promise.reject()
		}
	)
}
export const editProduct = (id, formData) => (dispatch) => {
	return productService.editProduct(id, formData).then(
		(data) => {
			// data ra begir az backend + path image ta ba redux update koni
			console.log(data)
			dispatch({
				type: PRODUCT_EDIT,
				payload: {
					id,
					formData,
				},
			})
			dispatch({
				type: MESSAGE_ADD,
				payload: {
					info: 'alert-success',
					message: 'کالای مورد نظر با موفقیت ویرایش شد.',
				},
			})
			return Promise.resolve()
		},
		(err) => {
			dispatch({
				type: MESSAGE_ADD,
				payload: {
					info: 'alert-danger',
					message: JSON.stringify(err.response.data, null, 4),
				},
			})
			return Promise.reject()
		}
	)
}
export const deleteProduct = (id) => (dispatch) => {
	return productService.deleteProduct(id).then(
		(data) => {
			dispatch({
				type: MESSAGE_ADD,
				payload: {
					info: 'alert-success',
					message: 'کالا با موفقیت حذف شد.',
				},
			})
			dispatch({
				type: PRODUCT_DELETE,
				payload: {
					id,
				},
			})

			return Promise.resolve()
		},
		(err) => {
			dispatch({
				type: MESSAGE_ADD,
				payload: {
					info: 'alert-danger',
					message: JSON.stringify(err.response.data, null, 4),
				},
			})
			return Promise.reject()
		}
	)
}
export const getProduct = (id) => ({
	type: PRODUCT_GET,
	payload: {
		id,
	},
})
