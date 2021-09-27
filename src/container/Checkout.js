import React, { useState } from 'react'
import './styles/Checkout.scss'
import LoadingButton from '@mui/lab/LoadingButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import CheckoutItem from '../components/CheckoutItem'
function Checkout() {
	const [loading, setLoading] = useState(false)
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
					<p className='text-success'>مجموع خرید : {250000}</p>
				</div>
			</div>
			<div className='container'>
				<div className='checkout__products'>
					<CheckoutItem
						name={'بست کمری'}
						description={'بست عالی'}
						unitCost={25000}
					/>
					<CheckoutItem
						name={'بست فلزی'}
						description={'فلز عالی'}
						unitCost={15000}
					/>
					<CheckoutItem
						name={'روغن ترمز'}
						description={'بهترین کیفیت روغن ترمز'}
						unitCost={25000}
					/>
					<CheckoutItem
						name={'بست کمری'}
						description={'بست عالی'}
						unitCost={25000}
					/>
				</div>
			</div>
		</div>
	)
}

export default Checkout
