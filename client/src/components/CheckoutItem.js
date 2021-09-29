import React, { useState, useRef, useEffect } from 'react'
import './styles/CheckoutItem.scss'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import { useDispatch } from 'react-redux'
import {
	removeCheckoutItem,
	checkoutCount,
	checkoutTotalCost,
} from '../store/actions/checkout'

function CheckoutItem({ id, name, description, unitCost, totalCost, countCh }) {
	const countInput = useRef()
	const [count, setCount] = useState(countCh)
	const dispatch = useDispatch()
	const handleTotalCost = (e) => {
		let totalCostValue = countInput.current.value * unitCost
		dispatch(checkoutCount(id, parseInt(countInput.current.value)))
		dispatch(checkoutTotalCost(id, totalCostValue))
		setCount(e.target.value)
	}
	const handlePrice = (price) => {
		var nf = new Intl.NumberFormat()
		let pc = nf.format(price)
		return pc
	}
	return (
		<div className='checkoutItem'>
			<div className='checkoutItem__info'>
				{/* name */}
				<h4>{name}</h4>
				{/* description */}
				<p>{description}</p>
			</div>
			<div className='checkoutItem__buyInfo'>
				{/* cost one product */}
				<div className='checkoutItem__unitCost'>
					قیمت واحد : {handlePrice(unitCost)}{' '}
				</div>
				{/* cost all product */}
				<div className='checkoutItem__totalCost'>
					قیمت کل : {handlePrice(totalCost)}
				</div>
				{/* edit count */}

				<input
					type='number'
					min='0'
					className='form-control'
					ref={countInput}
					value={count}
					onChange={handleTotalCost}
				/>

				{/* delete */}
				<IconButton
					color='error'
					onClick={() => dispatch(removeCheckoutItem(id))}>
					<DeleteIcon />
				</IconButton>
			</div>
		</div>
	)
}

export default CheckoutItem
