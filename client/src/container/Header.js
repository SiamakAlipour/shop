import React, { useRef, useState, useEffect } from 'react'
import './styles/Header.scss'
// Material-ui
import SearchIcon from '@material-ui/icons/Search'
import { useDispatch, useSelector } from 'react-redux'
import { addSearch } from '../store/actions/search'
import { Link } from 'react-router-dom'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import IconButton from '@mui/material/IconButton'
// import authHeader from '../service/auth-header'
function Header() {
	const checkout = useSelector((state) => state.checkout.items)
	const { isLoggedIn } = useSelector((state) => state.auth)
	const searchInput = useRef()
	const dispatch = useDispatch()
	const handleSubmit = (e) => {
		e.preventDefault()
		const searchValue = searchInput.current.value
		dispatch(addSearch(searchValue))
	}

	return (
		<div className='header'>
			{/* logo */}
			<div className='header__wrapper'>
				{/* searchBox */}
				<form className='header__searchBox' onSubmit={handleSubmit}>
					<input
						type='text'
						placeholder='جستجو...'
						ref={searchInput}
					/>
					<SearchIcon />
				</form>
			</div>

			{/* login & register */}
			<div className='header__loginRegister'>
				<ul>
					{!isLoggedIn ? (
						<>
							<Link to='/'>
								<li>خانه</li>
							</Link>
							<Link to='/account/login'>
								<li>ورود</li>
							</Link>
							<Link to='/account/register'>
								<li>ثبت نام</li>
							</Link>
						</>
					) : (
						<>
							<Link to='/'>
								<li>خانه</li>
							</Link>
							<Link to='/account'>
								<li>حساب کاربری</li>
							</Link>
							<Link to='/checkout'>
								<li>
									<IconButton className='header__basketIcon'>
										<ShoppingBasketIcon />
										{checkout.length === 0 ? null : (
											<div className='header__basketBadge'>
												{checkout.length}
											</div>
										)}
									</IconButton>
								</li>
							</Link>
						</>
					)}
				</ul>
			</div>
		</div>
	)
}

export default Header
