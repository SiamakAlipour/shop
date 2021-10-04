import React, { useRef, useState } from 'react'
import './styles/Login.scss'
// import Form from 'react-validation/build/form'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Redirect } from 'react-router'
import { useHistory } from 'react-router-dom'
import { useDispatch, connect } from 'react-redux'
import { login } from '../store/actions/auth'

function Login({ isLoggedIn }) {
	const [loading, setLoading] = useState(false)
	const usernameInput = useRef()
	const passwordInput = useRef()

	const dispatch = useDispatch()
	const history = useHistory()
	React.useEffect(() => {
		console.log(isLoggedIn)
	})
	const handleLogin = (value) => {
		setLoading(true)
		console.log(value.username, value.password)
		dispatch(login(value.username, value.password))
			.then(() => {
				history.push('/account')
				window.location.reload()
			})
			.catch(() => {
				setLoading(false)
			})
		console.log(isLoggedIn)
	}
	if (isLoggedIn) {
		console.log('Login')
		return <Redirect to='/account' />
	}
	const SigninSchema = Yup.object().shape({
		username: Yup.string()

			.min(2, 'نام کاربری وارد شده کوتاه است!')

			.required('لطفا وارد نمایید'),

		password: Yup.string()

			.min(2, 'رمز عبور وارد شده کوتاه است!')

			.required('لطفا وارد نمایید'),
	})
	return (
		<div className='login'>
			<div className='container'>
				{/* <form
					action=''
					className='login__form form-control'
					onSubmit={handleLogin}>
					<input
						type='text'
						placeholder='نام کاربری'
						className=' login__input form-control'
						ref={usernameInput}
					/>
					<input
						type='password'
						placeholder='رمز عبور'
						className=' login__input form-control'
						ref={passwordInput}
					/>
					<div className='login__formCheck'>
						<input
							type='checkbox'
							className='form-check-input'
							id='rememberCheckBox'
						/>
						<label htmlFor='rememberCheckBox'>
							مرا به خاطر بسپار
						</label>
					</div>
					<button className='btn btn-success'>
						{loading && (
							<span className='spinner-border spinner-border-sm'></span>
						)}
						<span>ورود</span>
					</button>
				</form> */}
				<Formik
					initialValues={{
						username: '',
						password: '',
					}}
					validationSchema={SigninSchema}
					validateOnSubmit
					onSubmit={handleLogin}>
					{({ errors, touched }) => (
						<Form className='login__form form-control'>
							<Field
								name='username'
								className=' login__input form-control'
								placeholder='نام کاربری'
							/>
							{errors.username && touched.username ? (
								<div className='login__text text-danger'>
									{errors.username}
								</div>
							) : null}
							<Field
								type='password'
								name='password'
								className=' login__input form-control'
								placeholder='رمز عبور'
							/>
							{errors.password && touched.password ? (
								<div className='login__text text-danger'>
									{errors.password}
								</div>
							) : null}
							<div className='login__formCheck'>
								<Field
									type='checkbox'
									name='checkbox'
									className='form-check-input'
									id='rememberCheckBox'
								/>
								<label htmlFor='rememberCheckBox'>
									{' '}
									مرا به خاطر بسپار
								</label>
							</div>
							<button type='submit' className='btn btn-success'>
								{loading && (
									<span className='spinner-border spinner-border-sm'></span>
								)}
								<span>ورود</span>
							</button>{' '}
						</Form>
					)}
				</Formik>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	const { isLoggedIn } = state.auth
	const { message } = state.message
	return {
		isLoggedIn,
		message,
	}
}
export default connect(mapStateToProps)(Login)
