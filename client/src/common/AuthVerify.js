import React from 'react'
import { withRouter } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

const AuthVerify = (props) => {
	props.history.listen(() => {
		const user = JSON.parse(localStorage.getItem('user'))
		if (user) {
			const decodedJwt = jwt_decode(user.token)
			if (decodedJwt.exp * 1000 < Date.now()) {
				props.logOut()
			}
		}
	})

	return <div></div>
}

export default withRouter(AuthVerify)
