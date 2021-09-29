import React from 'react'
import './styles/Widget.scss'
function Widget({ content, title, icons }) {
	return (
		<div className='widget'>
			<h3 className='widget__name'>{title}</h3>
			{content}
			<div className='widget__footer'>{icons}</div>
		</div>
	)
}

export default Widget
