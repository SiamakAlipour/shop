import React, { useState } from 'react'
import './styles/CheckoutItem.scss'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
function CheckoutItem({ name, description, unitCost }) {
	const [totalCost, setTotalCost] = useState('0')
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

				<input type='number' min='0' className='form-control' />

				{/* delete */}
				<IconButton color='error'>
					<DeleteIcon />
				</IconButton>
			</div>
		</div>
	)
}

export default CheckoutItem
