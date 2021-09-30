import Header from './Header'
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
import { useSelector } from 'react-redux'
function App() {
	const [info, message] = useSelector((state) => state.message)
	return (
		<div className='App'>
			<Router>
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
			</Router>
		</div>
	)
}

export default App
