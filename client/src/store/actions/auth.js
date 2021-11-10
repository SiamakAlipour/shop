import { userService } from '../../service/user.service';

import {
	LOGIN_FAILED,
	LOGIN_SUCCESS,
	LOGOUT,
	MESSAGE_ADD,
	REGISTER_FAILED,
	REGISTER_SUCCESS,
	USER_EDIT,
} from './types';
export const register = (username, password, email) => (dispatch) => {
	return userService.register(username, password, email).then(
		(res) => {
			dispatch({
				type: REGISTER_SUCCESS,
			});
			dispatch({
				type: MESSAGE_ADD,
				payload: {
					info: 'alert-success',
					message: 'ثبت نام با موفقیت انجام شد',
				},
			});

			return Promise.resolve();
		},
		(error) => {
			dispatch({
				type: REGISTER_FAILED,
			});

			dispatch({
				type: MESSAGE_ADD,
				payload: {
					info: 'alert-danger',
					message: error.response.data,
				},
			});
			return Promise.reject();
		}
	);
};

export const login = (username, password) => (dispatch) => {
	return userService.login(username, password).then(
		(data) => {
			console.log('Userservice login');
			dispatch({
				type: LOGIN_SUCCESS,
				payload: {
					user: data,
				},
			});
			return Promise.resolve();
		},
		(error) => {
			dispatch({
				type: LOGIN_FAILED,
			});
			dispatch({
				type: MESSAGE_ADD,
				payload: {
					info: 'alert-danger',
					message: error.response.data,
				},
			});
			return Promise.reject();
		}
	);
};

export const logout = () => (dispatch) => {
	userService.logout();
	dispatch({
		type: LOGOUT,
	});
};

export const editUser = (user) => ({
	type: USER_EDIT,
	payload: user,
});
