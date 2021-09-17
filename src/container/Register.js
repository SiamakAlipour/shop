import React from 'react'
import './styles/Register.scss'
function Register() {
	return (
		<div className='register'>
			<div className='container'>
				<form action='' className='register__form form-control'>
					<input
						type='text'
						placeholder='نام کاربری'
						className='register__input form-control'
					/>
					<input
						type='password'
						placeholder='رمز عبور'
						className='register__input form-control'
					/>
					<input
						type='password'
						placeholder='تکرار رمز عبور'
						className='register__input form-control'
					/>
					<input
						type='email'
						className='register__input form-control'
						placeholder='ایمیل'
					/>
					<div className='register__formCheck'>
						<input
							type='checkbox'
							className='form-check-input'
							id='rememberCheckBox'
						/>
						<label htmlFor='rememberCheckBox'>
							<a href=''>قوانین</a> را قبول دارم
						</label>
					</div>
					<button className='btn btn-primary'>ثبت نام</button>
				</form>
			</div>
		</div>
	)
}

export default Register
