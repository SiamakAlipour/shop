import React, { useEffect } from 'react';
import Ads from '../components/Ads';
import Sidebar from './Sidebar';
import Feed from './Feed';
import './styles/Main.scss';
import { useSelector, useDispatch } from 'react-redux';
import { removeMessage } from '../store/actions/message';
import Message from '../components/Message';
import { allCheckout } from '../store/actions/checkout';
import SearchPart from './SearchPart';
// import { userService } from '../service/user.service'
// import axios from 'axios'
function Main() {
	const [info, message] = useSelector((state) => state.message);
	const search = useSelector((state) => state.search);
	const dispatch = useDispatch();
	useEffect(() => {
		console.log(search.length);
		console.log(search);
	}, []);
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
