import { combineReducers } from 'redux'
import searchReducer from './searchReducer'
import productReducer from './productReducer'
import checkoutReducer from './checkoutReducer'
const rootReducer = combineReducers({
	search: searchReducer,
	product: productReducer,
	checkout: checkoutReducer,
})

export default rootReducer
