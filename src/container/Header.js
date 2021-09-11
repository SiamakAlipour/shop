import React, { useRef, useEffect } from 'react'
import './styles/Header.scss'
// Material-ui
import SearchIcon from '@material-ui/icons/Search'
import { useSelector, useDispatch } from 'react-redux'
import { addSearch } from '../store/actions/search'
import { Link } from 'react-router-dom'

function Header() {
	const searchInput = useRef()
	const search = useSelector((state) => state.search)
	const dispatch = useDispatch()
	const handleSubmit = (e) => {
		e.preventDefault()
		const searchValue = searchInput.current.value
		dispatch(addSearch(searchValue))
	}

	return (
		<div className='header'>
			{/* logo */}
			<Link to='/'>
				<div className='header__logo'></div>
			</Link>

			{/* searchBox */}
			<form className='header__searchBox' onSubmit={handleSubmit}>
				<input type='text' placeholder='جستجو...' ref={searchInput} />
				<SearchIcon />
			</form>
			{/* login & register */}
			<div className='header__loginRegister'>
				<ul>
					<Link to='/account/login'>
						<li>ورود</li>
					</Link>
					<Link to='/account/register'>
						<li>ثبت نام</li>
					</Link>
				</ul>
			</div>
		</div>
	)
}

export default Header