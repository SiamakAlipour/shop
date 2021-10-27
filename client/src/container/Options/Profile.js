import React, { useState } from 'react'
import './Profile.scss'
import { Formik, Field } from 'formik'
import axios from 'axios'
import * as Yup from 'yup'
import { TextField, Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { addMessage } from '../../store/actions/message'
import { logout } from '../../store/actions/auth'
const userEdit = axios.create({
	baseURL: 'http://127.0.0.1:8001/api/users',
})
function Profile() {
	const user = JSON.parse(localStorage.getItem('user'))
	const [disable, setDisable] = useState(true)

	const dispatch = useDispatch()

	const handleEdit = async (u, p, e) => {
		const passwordPattern =
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
		let username = null ? user.username : u
		let password = user.password
		let email = null ? user.email : e
		if (username.length < 6) {
			dispatch(
				addMessage('alert-danger', 'نام کاربری باید حداقل 6 حرف باشد.')
			)

			return
		}
		if (p && p.match(passwordPattern)) {
			password = p
		} else if (p && !p.match(passwordPattern)) {
			dispatch(
				addMessage(
					'alert-danger',
					'رمز عبور باید دارای حداقل 8 حرف شامل اعداد و حروف خاص باشد.'
				)
			)

			return
		}
		if (
			username === user.username &&
			password === user.password &&
			email === user.email
		) {
			dispatch(addMessage('alert-danger', 'هیچ تغییری انجام نشده است.'))

			return
		}

		await userEdit
			.patch(`/${user.id}/${username}/${password}/${email}`)
			.then((res) => {
				dispatch(
					addMessage(
						'alert-success',
						'با موفقیت ویرایش شد از ابتدا وارد شوید .'
					)
				)

				dispatch(logout())
			})
			.catch((err) => {
				dispatch(addMessage('alert-danger', 'test'))
			})
	}

	return (
		<div className='profile form-control'>
			<Formik
				initialValues={{
					username: user.username,
					password: '',
					email: user.email,
					admin: user.admin,
				}}>
				{({
					values,
					errors,
					handleChange,
					handleBlur,
					handleSubmit,
				}) => (
					<form
						className='profile__form'
						onSubmit={(e) => {
							e.preventDefault()
						}}>
						<div className='profile--wrap'>
							<label htmlFor='username'>نام کاربری : </label>
							<Field
								name='username'
								className='profile__input'
								as={TextField}
								disabled={disable}
							/>
						</div>
						<p>{errors.username}</p>
						<div className='profile--wrap'>
							<label htmlFor='username'>رمز عبور : </label>
							<Field
								type='password'
								name='password'
								className='profile__input'
								as={TextField}
								disabled={disable}
							/>
						</div>
						<p>{errors.password}</p>
						<div className='profile--wrap'>
							<label htmlFor='username'>ایمیل : </label>
							<Field
								name='email'
								className='profile__input'
								as={TextField}
								disabled={disable}
							/>
						</div>
						<p>{errors.email}</p>
						<div className='profile--wrap'>
							<label htmlFor='username'>سطح کاربری : </label>
							<Field
								name='admin'
								className='profile__input'
								as={TextField}
								value={values.admin ? 'مدیر' : 'کاربر عادی'}
								disabled
							/>
						</div>
						{disable ? (
							<Button
								variant='contained'
								onClick={() => setDisable(false)}>
								ویرایش حساب کاربری
							</Button>
						) : (
							<div className='profile__buttonWrap'>
								<Button
									variant='contained'
									color='success'
									type='submit'
									onClick={() =>
										handleEdit(
											values.username,
											values.password,
											values.email
										)
									}>
									ثبت ویرایش
								</Button>
								<Button
									variant='contained'
									color='error'
									onClick={() => setDisable(true)}>
									خروج از حالت ویرایش
								</Button>
							</div>
						)}
					</form>
				)}
			</Formik>
		</div>
	)
}

export default Profile
