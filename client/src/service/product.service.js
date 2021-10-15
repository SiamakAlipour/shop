import axios from 'axios'

const products = axios.create({
	baseURL: 'http://127.0.0.1:8001/api/products',
})

const allProducts = async () => {
	await products.get('/')
}
const addProduct = async (name, description, image, price) => {
	await products.post('/', {
		name,
		description,
		image,
		price,
	})
}
const editProduct = async (id, name, description, image, price) => {
	await products.patch(`/${id}`, {
		name,
		description,
		image,
		price,
	})
}
const deleteProduct = async (id) => {
	await products.delete(`/${id}`)
}

export const productService = {
	allProducts,
	addProduct,
	editProduct,
	deleteProduct,
}
