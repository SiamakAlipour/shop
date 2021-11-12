import React, { useEffect } from 'react';
import './styles/SearchPart.scss';
import { useSelector } from 'react-redux';

function SearchPart() {
	const search = useSelector((state) => state.search);

	return (
		<div className='searchPart'>
			<h1>جستجو برای : {search}</h1>
		</div>
	);
}

export default SearchPart;
