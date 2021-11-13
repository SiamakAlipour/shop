import React, { useEffect, useState } from 'react';
import './styles/SearchPart.scss';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { allProducts } from '../store/actions/product';
import Product from './Product';
function SearchPart({ product, allProducts, name }) {
	const search = useSelector((state) => state.search);
	const [searchList, setSearchList] = useState([]);
	useEffect(() => {
		allProducts();
		// eslint-disable-next-line
	}, []);
	useEffect(() => {
		setSearchList(
			product.filter((product) =>
				product.name.toLowerCase().includes(search.toLowerCase())
			)
		);
		console.log(name, search);
	}, [search, searchList]);

	return (
		<div className='searchPart'>
			<h3>جستجو برای : {search}</h3>
			<div className='searchPart__content'>
				<div className='searchPart__products'>
					<Product currentPosts={searchList} />
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	product: state.product.items,
});
const mapDispatchToProps = (dispatch) => ({
	allProducts: () => dispatch(allProducts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchPart);
