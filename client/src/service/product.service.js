import axios from 'axios'

const products = axios.create({
	baseURL: 'http://127.0.0.1:8001/api/products',
})

const editProduct = () => {}
