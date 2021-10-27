import React, { useState, useRef, useEffect } from 'react'
import './styles/CheckoutItem.scss'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import { useSelector, useDispatch } from 'react-redux'
import {
	removeCheckoutItem,
	checkoutCount,
	checkoutTotalPrice,
	allCheckout,
} from '../store/actions/checkout'
import { addMessage } from '../store/actions/message'
import Message from './Message'

function CheckoutItem({ id, name, description, unitCost, countCh }) {
	const countInput = useRef()
	const [count, setCount] = useState(countCh)
	const [totalTemp, setTotalTemp] = useState(unitCost * countCh)
	const dispatch = useDispatch()
	const handleTotalCost = (e) => {
		let totalCostValue = countInput.current.value * unitCost
		setCount(e.target.value)
		setTotalTemp(totalCostValue)
		dispatch(checkoutCount(id, parseInt(countInput.current.value)))
		dispatch(checkoutTotalPrice(id, totalCostValue))
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
					قیمت کل : {handlePrice(totalTemp)}
				</div>
				{/* edit count */}

				<input
					type='number'
					min='1'
					className='form-control'
					ref={countInput}
					value={count}
					onChange={handleTotalCost}
				/>

				{/* delete */}
				<IconButton
					color='error'
					onClick={() => {
						dispatch(removeCheckoutItem(id))
						dispatch(
							addMessage('alert-danger', 'از سبد کالا حذف شد')
						)
					}}>
					<DeleteIcon />
				</IconButton>
			</div>
		</div>
	)
}

export default CheckoutItem
