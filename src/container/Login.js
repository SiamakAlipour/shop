import React from 'react'
import './styles/Login.scss'
import Button from '@material-ui/core/Button'

function Login() {
	return (
		<div className='login'>
			<div className='container'>
				<form action='' className='login__form form-control'>
					<input
						type='text'
						placeholder='نام کاربری'
						className=' login__input form-control'
					/>
					<input
						type='password'
						placeholder='رمز عبور'
						className=' login__input form-control'
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
					<button className='btn btn-success'>ورود</button>
				</form>
			</div>
		</div>
	)
}

export default Login
