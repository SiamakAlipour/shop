import { combineReducers } from 'redux'
import searchReducer from './searchReducer'
import productReducer from './productReducer'
import checkoutReducer from './checkoutReducer'
import messageReducer from './messageReducer'
const rootReducer = combineReducers({
	search: searchReducer,
	product: productReducer,
	checkout: checkoutReducer,
	message: messageReducer,
})

export default rootReducer
