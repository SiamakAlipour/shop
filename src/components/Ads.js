import React from 'react'
import './styles/Ads.scss'
function Ads({ image, url = '#' }) {
	return (
		<div className='ads'>
			<h1>ADS</h1>
			<a href={url}>
				<img src={image} alt='' />
			</a>
		</div>
	)
}

export default Ads
