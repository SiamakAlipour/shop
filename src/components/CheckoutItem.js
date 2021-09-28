import React, { useState, useRef, useEffect } from 'react'
import './styles/CheckoutItem.scss'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import { useDispatch } from 'react-redux'
import { removeCheckoutItem } from '../store/actions/checkout'
function CheckoutItem({ name, description, unitCost, id }) {
	const countInput = useRef()
	const [totalCost, setTotalCost] = useState(unitCost)
	const [count, setCount] = useState(1)
	const dispatch = useDispatch()
	const handleTotalCost = (e) => {
		let totalCostValue = countInput.current.value * unitCost
		setCount(e.target.value)
		setTotalCost(totalCostValue)
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
					قیمت واحد : {unitCost}{' '}
				</div>
				{/* cost all product */}
				<div className='checkoutItem__totalCost'>
					قیمت کل : {totalCost}
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
