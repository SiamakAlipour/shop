import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/Product.scss'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import IconButton from '@mui/material/IconButton'
import { useSelector, useDispatch } from 'react-redux'
import {
	addCheckout,
	checkoutCount,
	checkoutTotalPrice,
} from '../store/actions/checkout'
import { addMessage } from '../store/actions/message'
import { CHECKOUT_COUNT } from '../store/actions/types'
function Product({ id, name, image, description, price }) {
	const [priceComma, setPriceComma] = useState(price)
	useEffect(() => {
		var nf = new Intl.NumberFormat()
		let pc = nf.format(price)
		setPriceComma(pc)
	}, [price])
	const checkout = useSelector((state) => state.checkout.items)
	const auth = useSelector((state) => state.auth)
	const dispatch = useDispatch()
	const handleCheckout = () => {
		if (auth.isLoggedIn) {
			if (checkout.some((checkout) => checkout.name === name)) {
				let checkoutItemIndex = checkout.findIndex(
					(item) => item.name === name
				)
				dispatch(
					checkoutCount(
						checkout[checkoutItemIndex]._id,
						checkout[checkoutItemIndex].count + 1
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
				dispatch(addCheckout(name, description, price))
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
	const configImage = (image) => {
		return 'http://localhost:8001/uploads/' + image
	}
	return (
		<div className='product'>
			<div className='product__content'>
				<img src={configImage(image)} alt='' />
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
