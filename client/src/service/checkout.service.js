import axios from 'axios'

const checkout = axios.create({
	baseURL: 'http://127.0.0.1:8001/api/users/checkout',
})
const user = JSON.parse(localStorage.getItem('user'))
export const allCheckout = async () => {
	await checkout.get(`/${user.id}`)
}

export const addCheckout = async (name, description, unitPrice) => {
	await await checkout.post(`/${user.id}`, {
		name,
		description,
		unitPrice: unitPrice,
		totalPrice: unitPrice,
		count: 1,
	})
}
export const checkoutCount = async (checkoutID, count) => {
	await checkout.patch(`/${user.id}/${checkoutID}`, { count })
}
export const checkoutTotalPrice = async (checkoutID, totalPrice) => {
	await checkout.patch(`/${user.id}/${checkoutID}`, { totalPrice })
}

export const removeCheckoutItem = async (checkoutID) => {
	await checkout.delete(`/${user.id}`, { checkoutID })
}

export const checkoutService = {
	allCheckout,
	addCheckout,
	checkoutCount,
	checkoutTotalPrice,
	removeCheckoutItem,
}
