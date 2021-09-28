import React, { useState } from 'react'
import './styles/Checkout.scss'
import LoadingButton from '@mui/lab/LoadingButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import CheckoutItem from '../components/CheckoutItem'
import { useSelector, useDispatch } from 'react-redux'
function Checkout() {
	const [totalCost, setTotalCost] = useState(0)
	const [loading, setLoading] = useState(false)
	const checkout = useSelector((state) => state.checkout)
	const dispatch = useDispatch()
	return (
		<div className='checkout'>
			<div className='checkout__header'>
				<h3>سبد خرید</h3>
				<div className='checkout__wraper'>
					<LoadingButton
						endIcon={<ShoppingCartIcon />}
						onClick={() => setLoading(true)}
						loading={loading}
						loadingPosition='end'
						variant='contained'>
						نهایی کردن خرید
					</LoadingButton>
					<p className='text-success'>مجموع خرید : {totalCost}</p>
				</div>
			</div>
			<div className='container'>
				<div className='checkout__products'>
					{checkout?.map((checkout, index) => (
						<CheckoutItem
							id={checkout.id}
							key={index}
							name={checkout.name}
							description={checkout.description}
							unitCost={checkout.unitPrice}
							count={checkout.count}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Checkout
