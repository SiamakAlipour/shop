import axios from 'axios'

let user = axios.create({
	baseURL: 'http://127.0.0.1:8001/api/users',
})

const login = async (username, password) => {
	await user.post('/login', { username, password }).then((res) => {
		if (res.data.token) {
			localStorage.setItem('user', JSON.stringify(res.data))
		}
		return res.data
	})
}
const logout = () => {
	localStorage.removeItem('user')
}
export const userService = { login, logout }
