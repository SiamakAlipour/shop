import React, { useEffect } from 'react'
import Ads from '../components/Ads'
import Sidebar from './Sidebar'
import Feed from './Feed'
import './styles/Main.scss'
import { useSelector, useDispatch } from 'react-redux'
import { removeMessage } from '../store/actions/message'
import Message from '../components/Message'
import { allCheckout } from '../store/actions/checkout'
// import { userService } from '../service/user.service'
// import axios from 'axios'
function Main() {
	const [info, message] = useSelector((state) => state.message)
	const dispatch = useDispatch()

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
				<Feed />
				{/* Sidebar */}
				<Sidebar />
			</div>
		</div>
	)
}

export default Main
