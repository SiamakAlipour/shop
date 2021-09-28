import { CHECKOUT_ADD, CHECKOUT_COUNT, CHECKOUT_REMOVE } from './types'

export const addCheckout = (id, name, description, unitPrice) => ({
	type: CHECKOUT_ADD,
	payload: {
		id,
		name,
		description,
		unitPrice,
	},
})

export const checkoutCount = (id, count) => ({
	type: CHECKOUT_COUNT,
	payload: {
		id,
		count,
	},
})

export const removeCheckoutItem = (id) => ({
	type: CHECKOUT_REMOVE,
	payload: {
		id,
	},
})
