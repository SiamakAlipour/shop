import React, { useState } from 'react'
import Product from '../components/Product'
import './styles/Feed.scss'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Pagination from '@material-ui/lab/Pagination'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'
import { allProducts } from '../store/actions/product'

function Feed({ allProducts, product }) {
	const [productItems, setProductItems] = useState()
	const [catValue, setCatValue] = useState('0')
	const [loading, setLoading] = useState(true)

	const handleCatValue = (e) => {
		setCatValue(e.currentTarget.attributes['data-value'].value)
	}
	React.useEffect(() => {
		allProducts()
	}, [])
	React.useEffect(() => {
		setProductItems(product)
		if (productItems) {
			setLoading(false)
		}
	}, [product])
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
							{productItems?.map((product) => {
								return (
									<Product
										key={product._id}
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

const mapStateToProps = (state) => ({
	product: state.product.items,
})
const mapDispatchToProps = (dispatch) => {
	return {
		allProducts: () => dispatch(allProducts()),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Feed)
