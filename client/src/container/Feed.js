import React, { useState } from 'react'
import Product from '../components/Product'
import './styles/Feed.scss'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Pagination from '@material-ui/lab/Pagination'
import { useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'
function Feed() {
	const product = useSelector((state) => state.product)
	const [catValue, setCatValue] = useState('0')
	const [loading, setLoading] = useState(true)
	const handleCatValue = (e) => {
		setCatValue(e.currentTarget.attributes['data-value'].value)
	}
	React.useEffect(() => {
		console.log(product)
	})
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
			<div className='feed__content'>
				{loading ? (
					<Loader
						type='Oval'
						color='#212121'
						height={100}
						width={100}
					/>
				) : (
					<div className='feed__products'>
						<div className='feed__productsList'>
							{product.map((product) => {
								return (
									<Product
										name={product.name}
										image={product.image}
										price={product.price}
									/>
								)
							})}
						</div>
						<Pagination style={{ direction: 'ltr' }} count={10} />
					</div>
				)}
			</div>
		</div>
	)
}

export default Feed
