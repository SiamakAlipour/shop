import React, { useState, useEffect } from 'react'
import './styles/Checkout.scss'
import LoadingButton from '@mui/lab/LoadingButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import CheckoutItem from '../components/CheckoutItem'
import { allCheckout } from '../store/actions/checkout'
import { connect } from 'react-redux'
function Checkout({ allCheckout, checkout }) {
	const [totalCost, setTotalCost] = useState(0)
	const [loading, setLoading] = useState(false)
	const [checkoutItem, setCheckoutItem] = useState()
	const handlePrice = (price) => {
		let nf = new Intl.NumberFormat()
		let pc = nf.format(price)
		return pc
	}
	useEffect(() => {
		allCheckout()
	}, [])

	useEffect(() => {
		let temp = 0
		checkout.map(
			(checkout) => (temp += checkout.count * checkout.unitPrice)
		)

		setTotalCost(handlePrice(temp))
	}, [checkout])

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
							id={checkout._id}
							key={index}
							name={checkout.name}
							description={checkout.description}
							unitCost={checkout.unitPrice}
							countCh={checkout.count}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
const mapStateToProps = (state) => ({
	checkout: state.checkout.items,
})
const mapDispatchToProps = (dispatch) => {
	return {
		allCheckout: () => dispatch(allCheckout()),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
