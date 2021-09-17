import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/Product.scss'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

function Product({ name, image, description, price }) {
	const [priceComma, setPriceComma] = useState(price)
	useEffect(() => {
		var nf = new Intl.NumberFormat()
		let pc = nf.format(price)
		setPriceComma(pc)
	}, [price])

	return (
		<div className='product'>
			<div className='product__content'>
				<img src={image} alt='' />
				<p className='product__name'>{name}</p>
				<p className='product__description'>{description}</p>
			</div>
			<div className='product__footer '>
				<p className='text-success'>{priceComma}</p>
				<ShoppingCartIcon />
			</div>
		</div>
	)
}

export default Product
