import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/Product.scss'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import IconButton from '@mui/material/IconButton'
import { useSelector, useDispatch } from 'react-redux'
import {
	addCheckout,
	checkoutCount,
	checkoutTotalCost,
} from '../store/actions/checkout'
import { addMessage } from '../store/actions/message'
function Product({ id, name, image, description, price }) {
	const [priceComma, setPriceComma] = useState(price)
	useEffect(() => {
		var nf = new Intl.NumberFormat()
		let pc = nf.format(price)
		setPriceComma(pc)
	}, [price])
	const checkout = useSelector((state) => state.checkout)
	const auth = useSelector((state) => state.auth)
	const dispatch = useDispatch()
	const handleCheckout = () => {
		if (auth.isLoggedIn) {
			if (checkout.some((checkout) => checkout.id === id)) {
				let checkoutItemIndex = checkout.findIndex(
					(item) => item.id === id
				)
				console.log(checkoutItemIndex)
				dispatch(
					checkoutCount(id, checkout[checkoutItemIndex].count + 1)
				)
				dispatch(
					checkoutTotalCost(
						id,
						checkout[checkoutItemIndex].unitPrice *
							(checkout[checkoutItemIndex].count + 1)
					)
				)
				dispatch(
					addMessage(
						'alert-success',
						`تعداد کالا به ${
							checkout[checkoutItemIndex].count + 1
						} افزایش یافت`
					)
				)
			} else {
				dispatch(addCheckout(id, name, description, price))
				dispatch(addMessage('alert-success', 'به سبد کالا اضافه شد'))
			}
		} else {
			console.log(auth)
			dispatch(
				addMessage(
					'alert-danger',
					'برای اضافه کردن به سبد کالا باید وارد حساب کاربری شوید.'
				)
			)
		}
	}

	return (
		<div className='product'>
			<div className='product__content'>
				<img src={image} alt='' />
				<p className='product__name'>{name}</p>
				<p className='product__description'>{description}</p>
			</div>
			<div className='product__footer '>
				<p className='text-success'>{priceComma}</p>
				<IconButton color='inherit' onClick={handleCheckout}>
					<ShoppingCartIcon />
				</IconButton>
			</div>
		</div>
	)
}

export default Product
