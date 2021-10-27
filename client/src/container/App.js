import Header from './Header'
import React, { useEffect } from 'react'
import './styles/App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Main from './Main'
import Footer from './Footer'
import Register from './Register'
import Login from './Login'
import Account from './Account'
import Option from './Option'
import Sidebar from './Sidebar'
import Checkout from './Checkout'
import Message from '../components/Message'
import { useSelector, useDispatch } from 'react-redux'
import AuthVerify from '../common/AuthVerify'
import { userService } from '../service/user.service'
import { allCheckout } from '../store/actions/checkout'
import { allProducts } from '../store/actions/product'
function App() {
	const [info, message] = useSelector((state) => state.message)
	const dispatch = useDispatch()
	const user = JSON.parse(localStorage.getItem('user'))

	useEffect(() => {
		if (user) {
			dispatch(allCheckout())
		}
	}, [])
	return (
		<Router>
			<div className='App'>
				{/* Header */}
				<Header />
				<Message info={info} message={message} />
				<Switch>
					<Route path='/account/register'>
						<Register />
					</Route>
					<Route path='/account/login'>
						<Login />
					</Route>
					<Route path='/checkout'>
						<Checkout />
					</Route>
					<Route path='/account'>
						<Account />
					</Route>
					<Route path='/'>
						<Main />
						<Footer />
					</Route>
					{/* Navigation */}
					{/* Slider of new posts */}
					{/* Products */}
				</Switch>
				{/* Footer */}
				<AuthVerify logOut={userService.logout} />
			</div>
		</Router>
	)
}

export default App
