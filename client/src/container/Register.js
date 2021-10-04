import React, { useState, useRef } from 'react'
import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'
import './styles/Register.scss'
import { useDispatch } from 'react-redux'
import { register } from '../store/actions/auth'
import { addMessage } from '../store/actions/message'
function Register() {
	const [loading, setLoading] = useState(false)

	const dispatch = useDispatch()
	const handleRegister = (value) => {
		setLoading(true)
		dispatch(register(value.username, value.password, value.email))
			.then(() => {
				console.log('test')
				addMessage('alert-success', 'ثبت نام شما با موفقیت انجام شد')
			})
			.catch(() => {
				setLoading(false)
			})
	}
	const SignupSchema = Yup.object().shape({
		username: Yup.string('نام کاربری را وارد نمایید')

			.min(2, 'نام کاربری حداقل باید 2 حرف باشد.')

			.required('لطفا نام کاربری را وارد نمایید'),

		password: Yup.string('رمز عبور را وارد نمایید')

			.min(2, 'رمز عبور حداقل باید 2 حرف باشد.')

			.required('لطفا رمز عبور را وارد نمایید'),

		passwordRepeat: Yup.string('تکرار رمز عبور را وارد نمایید').when(
			('password',
			{
				is: (val) => (val && val.length > 0 ? true : false),
				then: Yup.string().oneOf(
					[Yup.ref('password')],
					'تکرار رمز عبور صحیح نیست!'
				),
			})
		),

		email: Yup.string('ایمیل را وارد نمایید')

			.email('ایمیل معتبر وارد نمایید')

			.required('لطفا ایمیل را وارد نمایید'),
		checkbox: Yup.boolean().oneOf([true], 'قوانین را باید قبول کنید!'),
	})
	return (
		<div className='register'>
			<div className='container'>
				<Formik
					initialValues={{
						username: '',
						password: '',
						passwordRepeat: '',
						email: '',
					}}
					validationSchema={SignupSchema}
					validationOnSubmit
					onSubmit={handleRegister}>
					{({ errors, touched }) => (
						<Form className='register__form form-control'>
							<Field
								name='username'
								className='register__input form-control'
								placeholder='نام کاربری'
							/>
							{errors.username && touched.username ? (
								<div className='register__text text-danger'>
									{errors.username}
								</div>
							) : null}
							<Field
								type='password'
								name='password'
								className='register__input form-control'
								placeholder='رمز عبور'
							/>
							{errors.password && touched.password ? (
								<div className='register__text text-danger'>
									{errors.password}
								</div>
							) : null}
							<Field
								type='password'
								name='passwordRepeat'
								className='register__input form-control'
								placeholder='تکرار رمز عبور'
							/>
							{errors.passwordRepeat && touched.passwordRepeat ? (
								<div className='register__text text-danger'>
									{errors.passwordRepeat}
								</div>
							) : null}
							<Field
								name='email'
								className='register__input form-control'
								placeholder='ایمیل'
							/>
							{errors.email && touched.email ? (
								<div className='register__text text-danger'>
									{errors.email}
								</div>
							) : null}
							<div className='register__formCheck'>
								<Field
									type='checkbox'
									name='checkbox'
									className='form-check-input'
									id='rememberCheckBox'
								/>
								<label htmlFor='rememberCheckBox'>
									{' '}
									<a href='#قوانین'>قوانین</a> را قبول دارم
								</label>
							</div>
							{errors.checkbox && touched.checkbox ? (
								<div className='register__text text-danger'>
									{errors.checkbox}
								</div>
							) : null}
							<button type='submit' className='btn btn-primary'>
								{loading && (
									<span className='spinner-border spinner-border-sm'></span>
								)}
								<span>ثبت نام</span>
							</button>{' '}
						</Form>
					)}
				</Formik>
			</div>
		</div>
	)
}

export default Register
