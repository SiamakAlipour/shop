import { combineReducers } from 'redux'
import searchReducer from './searchReducer'
import productReducer from './productReducer'
const rootReducer = combineReducers({
	search: searchReducer,
	product: productReducer,
})

export default rootReducer
