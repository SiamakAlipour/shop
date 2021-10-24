import React, { useState } from 'react'
import './Profile.scss'
import { Formik, Field } from 'formik'

import { TextField, Button } from '@mui/material'
function Profile() {
	const user = JSON.parse(localStorage.getItem('user'))
	const [disable, setDisable] = useState(true)
	React.useEffect(() => {
		console.log(user)
	})
	const handleEdit = (e) => {
		setDisable(false)
	}

	return (
		<div className='profile form-control'>
			<Formik
				initialValues={{
					username: user.username,
					email: user.email,
					admin: user.admin,
				}}>
				{({ values, handleChange, handleBlur, handleSubmit }) => (
					<form className='profile__form'>
						<div className='profile--wrap'>
							<label htmlFor='username'>نام کاربری : </label>
							<Field
								name='username'
								className='profile__input'
								as={TextField}
								disabled={disable}
							/>
						</div>
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
						<div className='profile--wrap'>
							<label htmlFor='username'>ایمیل : </label>
							<Field
								name='email'
								className='profile__input'
								as={TextField}
								disabled={disable}
							/>
						</div>
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
							<Button variant='contained' onClick={handleEdit}>
								ویرایش حساب کاربری
							</Button>
						) : (
							<div className='profile__buttonWrap'>
								<Button variant='contained' color='success'>
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
