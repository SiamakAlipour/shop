import axios from 'axios'

const client = axios.create({
	baseURL: 'http://localhost:8001/api/products',
})

export const allProducts = async () => {
	try {
		return await client.get('/')
	} catch (error) {
		console.log(error)
	}
}
