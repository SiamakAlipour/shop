import React, { useState, useEffect } from 'react'
import axios from 'axios'
import faker from 'faker'
import './UsersManage.scss'
const users = axios.create({
	baseURL: 'http://127.0.0.1:8001/api/users',
})
function UsersManage() {
	const [usersList, setUsersList] = useState([])
	const bigList = [...Array(15)].map(() => ({
		username: faker.internet.userName(),
	}))
	useEffect(() => {
		// users.get('/').then((res) => {
		// 	setUsersList(res.data)
		// })
		setUsersList(bigList)
		console.log(usersList)
		console.log(bigList)
	}, [])
	return (
		<div className='usersManage form-control'>
			{usersList?.map((user, index) => (
				<div className='usersManage__item' key={index}>
					{user.username}
				</div>
			))}
		</div>
	)
}

export default UsersManage
