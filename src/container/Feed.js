import React, { useState } from 'react'
import Product from '../components/Product'
import './styles/Feed.scss'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Pagination from '@material-ui/lab/Pagination'
import { FixedSizeList } from 'react-window'

function Feed() {
	const [catValue, setCatValue] = useState('0')
	const handleCatValue = (e) => {
		setCatValue(e.currentTarget.attributes['data-value'].value)
	}
	return (
		<div className='feed'>
			<div className='feed__header'>
				<h3>محصولات</h3>
				<div className='feed__category'>
					<InputLabel id='label' style={{ fontFamily: 'IRANSans' }}>
						دسته بندی
					</InputLabel>
					<Select
						labelId='label'
						style={{ fontFamily: 'IRANSans' }}
						id='select'
						value={catValue}>
						<MenuItem
							style={{ fontFamily: 'IRANSans' }}
							value='0'
							onClick={handleCatValue}>
							تازه ترین ها
						</MenuItem>
						<MenuItem
							style={{ fontFamily: 'IRANSans' }}
							value='1'
							onClick={handleCatValue}>
							Twenty
						</MenuItem>
					</Select>
				</div>
			</div>
			<div className='feed__products'>
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
			</div>
			<Pagination style={{ direction: 'ltr' }} count={10} />
		</div>
	)
}

export default Feed
