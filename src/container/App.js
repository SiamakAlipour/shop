import Header from './Header'
import './styles/App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { useSelector } from 'react-redux'
function App() {
	const search = useSelector((state) => state.search)
	console.log(search)
	return (
		<div className='App'>
			<Router>
				{/* Header */}
				<Header />
				<Switch>
					<Route path='/account/register'>
						<h1>it is register page</h1>
					</Route>
					<Route path='/account/login'>
						<h1>it is login page</h1>
					</Route>
					<Route path='/checkout'>
						<h1>this is checkout page</h1>
					</Route>
					<Route path='/'>
						<h1>home</h1>
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