import React, { useEffect } from 'react'
import Ads from '../components/Ads'
import Sidebar from './Sidebar'
import Feed from './Feed'
import './styles/Main.scss'
import { userService } from '../service/user.service'
import axios from 'axios'
function Main() {
	useEffect(() => {
		axios
			.post('http://127.0.0.1:8001/api/users/login', {
				username: 'siamak',
				password: '13801380',
			})
			.then((res) => {
				localStorage.setItem('user', JSON.stringify(res.data))
			})
		let x = localStorage.getItem('user')
		console.log(x)
	}, [])

	return (
		<div className='main'>
			{/*! ADS & Banner | Main Header */}
			<div className='main__banner'>
				<div className='main__bannerImage'></div>
				<div className='main__ads'>
					<Ads image={'https://picsum.photos/468/60'} />
					<Ads image={'https://picsum.photos/468/60'} />
					<Ads image={'https://picsum.photos/468/60'} />
				</div>
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
