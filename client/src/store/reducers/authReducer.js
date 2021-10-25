import {
	LOGIN_FAILED,
	LOGIN_SUCCESS,
	LOGOUT,
	REGISTER_FAILED,
	REGISTER_SUCCESS,
	USER_EDIT,
} from '../actions/types'

const user = JSON.parse(localStorage.getItem('user'))

const initialState = user
	? { isLoggedIn: true, user }
	: { isLoggedIn: false, user: null }

const authReducer = (state = initialState, action) => {
	const { type, payload } = action

	switch (type) {
		case REGISTER_SUCCESS:
			return {
				...state,
				isLoggedIn: false,
			}
		case REGISTER_FAILED:
			return {
				...state,
				isLoggedIn: false,
			}
		case LOGIN_SUCCESS:
			return {
				...state,
				isLoggedIn: true,
				user: payload.user,
			}
		case LOGIN_FAILED:
			return {
				...state,
				isLoggedIn: false,
				user: null,
			}
		case LOGOUT:
			return {
				...state,
				isLoggedIn: false,
				user: null,
			}
		case USER_EDIT:
			return {
				...state,
				isLoggedIn: true,
				payload,
			}
		default:
			return state
	}
}

export default authReducer
