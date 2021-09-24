import React, { useState } from 'react'
import './styles/Option.scss'
function Option({ option }) {
	const [price, setPrice] = useState()
	const handleChange = ({ target }) => {
		if (isNaN(parseInt(target.value))) {
			setPrice()
			return
		}
		let digitPrice = target.value.replace(/\D/g, '')
		let formattedPrice = parseInt(digitPrice).toLocaleString()
		setPrice(formattedPrice)
	}

	if (option === 0) {
		return (
			<div className='option'>
				<div className='option__addProduct form-control'>
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
			</div>
		)
	} else if (option === 1) {
		return <div className='option'>1</div>
	} else if (option === 2) {
		return <div className='option'>2</div>
	} else if (option === 3) {
		return <div className='option'>3</div>
	}
}

export default Option
