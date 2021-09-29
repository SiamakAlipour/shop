import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()
const verifyToken = (req, res, next) => {
	const token = req.headers['x-access-token']

	if (!token) return res.status(401).send('Access Denied')
	try {
		const verified = jwt.verify(token, process.env.SECRET)
		req.user = verified
		next()
	} catch (error) {
		res.status(400).send('Invalid Token')
	}
}

export default verifyToken
