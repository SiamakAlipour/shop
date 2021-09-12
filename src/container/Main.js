import React from 'react'
import Ads from '../components/Ads'
import Sidebar from './Sidebar'
import Feed from './Feed'
import './styles/Main.scss'
function Main() {
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
				{/* Sidebar */}
				<Sidebar />
				{/* Feed */}
				<Feed />
			</div>
		</div>
	)
}

export default Main
