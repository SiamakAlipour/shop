import React, { useState } from 'react'
import ProductAdd from './Options/ProductAdd'
import Profile from './Options/Profile'
import UsersManage from './Options/UsersManage'
import './styles/Option.scss'
function Option({ option }) {
	if (option === 0) {
		return (
			<div className='option'>
				<ProductAdd />
			</div>
		)
	} else if (option === 1) {
		return (
			<div className='option'>
				<UsersManage />
			</div>
		)
	} else if (option === 2) {
		return (
			<div className='option'>
				<Profile />
			</div>
		)
	}
}

export default Option
