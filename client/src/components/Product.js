import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/Product.scss'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import IconButton from '@mui/material/IconButton'
import { useDispatch } from 'react-redux'
import { addCheckout } from '../store/actions/checkout'
import { addMessage } from '../store/actions/message'
function Product({ id, name, image, description, price }) {
	const [priceComma, setPriceComma] = useState(price)
	useEffect(() => {
		var nf = new Intl.NumberFormat()
		let pc = nf.format(price)
		setPriceComma(pc)
	}, [price])
	const dispatch = useDispatch()

	return (
		<div className='product'>
			<div className='product__content'>
				<img src={image} alt='' />
				<p className='product__name'>{name}</p>
				<p className='product__description'>{description}</p>
			</div>
			<div className='product__footer '>
				<p className='text-success'>{priceComma}</p>
				<IconButton
					color='inherit'
					onClick={() => {
						dispatch(addCheckout(id, name, description, price))
						dispatch(
							addMessage('alert-success', 'به سبد کالا اضافه شد')
						)
					}}>
					<ShoppingCartIcon />
				</IconButton>
			</div>
		</div>
	)
}

export default Product
