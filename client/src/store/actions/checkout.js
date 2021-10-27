import {
	CHECKOUT_ADD,
	CHECKOUT_ALL,
	CHECKOUT_COUNT,
	CHECKOUT_REMOVE,
	CHECKOUT_TOTALPRICE,
	MESSAGE_ADD,
} from './types'
import { checkoutService } from '../../service/checkout.service'
import axios from 'axios'
const user = JSON.parse(localStorage.getItem('user'))

const checkout = axios.create({
	baseURL: 'http://127.0.0.1:8001/api/users/checkout',
})
export const allCheckout = () => async (dispatch) => {
	await checkout.get(`/${user.id}`).then((res) => {
		dispatch({
			type: CHECKOUT_ALL,
			payload: res.data,
		})
	})
}
export const addCheckout =
	(name, description, unitPrice) => async (dispatch) => {
		return checkoutService.addCheckout(name, description, unitPrice).then(
			(res) => {
				dispatch({
					type: CHECKOUT_ADD,
					payload: {
						name,
						description,
						unitPrice,
					},
				})
				return Promise.resolve()
			},
			(err) => {
				console.log(err.response.data)
				return Promise.reject()
			}
		)
	}

export const checkoutCount = (id, count) => async (dispatch) => {
	return checkoutService.checkoutCount(id, count).then(
		(res) => {
			dispatch({
				type: CHECKOUT_COUNT,
				payload: {
					id,
					count,
				},
			})
			return Promise.resolve()
		},
		(err) => {
			console.log(err.response.data)
			return Promise.reject()
		}
	)
}
export const checkoutTotalPrice = (id, totalPrice) => ({
	type: CHECKOUT_TOTALPRICE,
	payload: {
		id,
		totalPrice,
	},
})
export const removeCheckoutItem = (id) => (dispatch) => {
	return checkoutService.removeCheckoutItem(id).then(
		(res) => {
			console.log(res)
			dispatch({
				type: CHECKOUT_REMOVE,
				payload: {
					id,
				},
			})
			return Promise.resolve()
		},
		(err) => {
			console.log(err.response.data)
			return Promise.reject()
		}
	)
}
