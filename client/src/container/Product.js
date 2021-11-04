import React from 'react';
import ProductItem from '../components/ProductItem';
import './styles/Product.scss';
function Product({ currentPosts }) {
	React.useEffect(() => {}, [currentPosts]);
	return (
		<div className='product'>
			{currentPosts?.map((product) => (
				<ProductItem
					key={product._id}
					id={product._id}
					name={product.name}
					image={product.image}
					price={product.price}
					description={product.description}
				/>
			))}
		</div>
	);
}

export default Product;
