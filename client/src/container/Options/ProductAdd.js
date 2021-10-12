import React, { useState } from 'react'
import './ProductAdd.scss'
function ProductAdd() {
	const [file, setFile] = useState(null)
	const [price, setPrice] = useState()
	const handleFile = (e) => {
		setFile(e.target.files[0])
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
				required
			/>
			<input
				type='text'
				className='form-control'
				placeholder='توضیحات کالا'
				required
			/>
			<input
				type='file'
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
			/>
			<input
				type='button'
				value='اضافه کردن کالا'
				className='btn btn-primary'
			/>
		</div>
	)
}

export default ProductAdd
