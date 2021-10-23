import React, { useState, useRef } from 'react'
import { addProduct } from '../../store/actions/product'
import { useDispatch } from 'react-redux'
import './ProductAdd.scss'
import axios from 'axios'

const products = axios.create({
	baseURL: 'http://127.0.0.1:8001/api/products',
	headers: {
		Accept: 'multipart/form-data',
	},
})
function ProductAdd() {
	const productName = useRef()
	const productDescription = useRef()
	const priceInput = useRef()
	const [selectedFile, setSelectedFile] = useState(null)
	const [price, setPrice] = useState()
	const dispatch = useDispatch()
	const handleFile = (e) => {
		setSelectedFile(e.target.files[0])
	}
	const handleUpload = () => {
		const formData = new FormData()
		console.log(price)
		console.log(parseInt(price))
		formData.append('image', selectedFile, selectedFile.name)
		formData.append('name', productName.current.value)
		formData.append('description', productDescription.current.value)
		formData.append('price', parseInt(price.replace(/\D/g, '')))
		// await products.post('/', formData)
		dispatch(addProduct(formData))
	}
	const handleChange = ({ target }) => {
		if (isNaN(parseInt(target.value))) {
			setPrice()
			return
		}
		let digitPrice = target.value.replace(/\D/g, '')
		let formattedPrice = parseInt(digitPrice).toLocaleString()
		setPrice(formattedPrice)
	}
	return (
		<div className='productAdd form-control'>
			<input
				type='text'
				className='form-control'
				placeholder='نام کالا'
				ref={productName}
				required
			/>
			<input
				type='text'
				className='form-control'
				placeholder='توضیحات کالا'
				required
				ref={productDescription}
			/>
			<input
				type='file'
				name='image'
				className='form-control'
				placeholder=''
				onChange={handleFile}
				required
			/>
			<input
				type='text'
				className='form-control'
				placeholder='قیمت کالا'
				value={price}
				onChange={handleChange}
				required
				ref={priceInput}
			/>
			<input
				type='button'
				value='اضافه کردن کالا'
				onClick={handleUpload}
				className='btn btn-primary'
			/>
		</div>
	)
}

export default ProductAdd
