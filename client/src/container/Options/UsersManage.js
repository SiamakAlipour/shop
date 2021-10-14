import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import faker from 'faker'

import Rodal from 'rodal'
import DeleteIcon from '@mui/icons-material/Delete'

// include styles
import 'rodal/lib/rodal.css'
import './UsersManage.scss'
const users = axios.create({
	baseURL: 'http://127.0.0.1:8001/api/users',
})
function UsersManage() {
	const username = useRef()
	const password = useRef()
	const email = useRef()
	const [visible, setVisible] = useState(false)
	const [usersList, setUsersList] = useState([])
	const [user, setUser] = useState({})
	const [userEdit, setUserEdit] = useState(false)
	const bigList = [...Array(50)].map(() => ({
		username: faker.internet.userName(),
	}))
	const show = () => {
		setVisible(true)
	}

	const hide = () => {
		setVisible(false)
		setUserEdit(false)
	}
	const handleUsers = (user) => {
		show()
		setUser(user)
	}
	const handleUserRemove = (user) => {
		users.delete(`/${user._id}`).then((res) => {
			console.log(res.data)
		})
		hide()
	}
	const handleUserEdit = (user, username, password, email) => {
		users
			.patch(`/${user._id}/${username}/${password}/${email}`)
			.then((res) => {
				console.log(res.data)
			})
	}
	useEffect(() => {
		users.get('/').then((res) => {
			setUsersList(res.data)
		})
	}, [usersList])
	return (
		<div className='usersManage form-control'>
			<div className='usersManage__header'>
				<input
					type='search'
					className='form-control'
					placeholder='جستجوی کاربران'
				/>
			</div>
			<div className='usersManage__usersList'>
				{usersList?.map((user) => (
					<div
						className='usersManage__item'
						key={user._id}
						onClick={() => handleUsers(user)}>
						{user.username}
					</div>
				))}
				<Rodal
					visible={visible}
					onClose={hide}
					animation='fade'
					className='usersManage__modal'>
					{!userEdit ? (
						<div className='usersManage__modalContent form-control'>
							<div>
								نام کاربری : <span>{user.username}</span>
							</div>

							<div>
								ایمیل : <span>{user.email}</span>
							</div>
							<div>
								مدیر : <span>{user.admin ? 'Yes' : 'No'}</span>
							</div>
						</div>
					) : (
						<div className='usersManage__modalContent form-control'>
							<input
								type='username'
								placeholder={user.username}
								className='form-control'
								ref={username}
							/>
							<input
								type='password'
								className='form-control'
								autoComplete='new-password'
								ref={password}
							/>
							<input
								type='email'
								placeholder={user.email}
								className='form-control'
								ref={email}
							/>
						</div>
					)}
					{!userEdit ? (
						<div className='usersManage__modalFooter'>
							<button
								className='btn btn-danger btn-sm'
								onClick={() => handleUserRemove(user)}>
								حذف حساب کاربری <DeleteIcon />
							</button>
							<button
								className='btn btn-outline-success btn-sm'
								onClick={() => setUserEdit(true)}>
								ویرایش حساب کاربری
							</button>
							<button
								className='btn btn-outline-primary '
								onClick={hide}>
								بستن
							</button>
						</div>
					) : (
						<div className='usersManage__modalFooter'>
							<button
								className='btn btn-primary'
								onClick={() =>
									handleUserEdit(
										user,
										username.current.value,
										password.current.value,
										email.current.value
									)
								}>
								ویرایش
							</button>
							<button
								className='btn btn-outline-success'
								onClick={() => setUserEdit(false)}>
								خروج از حالت ویرایش
							</button>
						</div>
					)}
				</Rodal>
			</div>
		</div>
	)
}

export default UsersManage
