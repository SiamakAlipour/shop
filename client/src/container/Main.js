import React, { useEffect, useState } from 'react';
import Ads from '../components/Ads';
import Sidebar from './Sidebar';
import Feed from './Feed';
import './styles/Main.scss';
import { useSelector, useDispatch } from 'react-redux';
import SearchPart from './SearchPart';
import { useLocation, useHistory } from 'react-router-dom';
import { addSearch } from '../store/actions/search';

// import axios from 'axios'

function Main() {
	// let location = useQuery();
	const history = useHistory();
	const searchID = useLocation().search;
	const name = new URLSearchParams(searchID).get('value');
	const [info, message] = useSelector((state) => state.message);
	const search = useSelector((state) => state.search);
	const dispatch = useDispatch();

	useEffect(() => {
		if (name) dispatch(addSearch(name.replace(/-/g, ' ')));
		else dispatch(addSearch(''));
	}, [name]);
	return (
		<div className='main'>
			{/*! ADS & Banner | Main Header */}

			<div className='main__banner'>
				<div className='main__bannerImage'></div>
				{/* <div className='main__ads'>
					<Ads image={'https://picsum.photos/468/60'} />
					<Ads image={'https://picsum.photos/468/60'} />
					<Ads image={'https://picsum.photos/468/60'} />
				</div> */}
			</div>
			{/* Content */}
			<div className='main__content'>
				{/* Feed */}
				{search ? <SearchPart /> : <Feed />}
				{/* Sidebar */}
				<Sidebar />
			</div>
		</div>
	);
}

export default Main;
