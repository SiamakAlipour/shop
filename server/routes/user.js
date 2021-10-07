import express from 'express'
import bcrypt from 'bcryptjs'
import User from '../models/User'
import { loginValidation, registerValidation } from '../validation'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
export const router = express.Router()
// register a user

router.post('/register', async (req, res) => {
	// Register validation
	const { error } = registerValidation(req.body)
	if (error) return res.status(400).send(error.details[0].message)
	// check if email is already in DB
	const checkEmailExist = await User.findOne({ email: req.body.email })
	if (checkEmailExist) return res.status(400).send('Email already exist')
	// hashing password
	const salt = await bcrypt.genSalt(10)
	const hashedPassword = await bcrypt.hash(req.body.password, salt)
	// create a user
	const user = new User({
		username: req.body.username,
		password: hashedPassword,
		email: req.body.email,
		admin: req.body.admin,
	})
	try {
		const newUser = await user.save()
		res.status(200).send({ message: 'ثبت نام شما با موفقیت انجام شد.' })
	} catch (error) {
		res.status(400).json({
			error,
		})
	}
})
// login a user

router.post('/login', async (req, res) => {
	// request body destructuring
	const { username, password } = req.body
	// Validation
	const { error } = loginValidation(req.body)
	if (error) return res.status(400).send(error.details[0].message)
	// find if username exist
	const userFind = await User.findOne({ username })
	if (!userFind) return res.status(400).send('Invalid username or password')
	// check if password is correct
	const validPass = await bcrypt.compare(password, userFind.password)
	if (!validPass) return res.status(400).send('Invalid username or password')
	// Create and asign token
	const token = jwt.sign({ _id: userFind._id }, process.env.SECRET)
	res.header('auth-header', token).send({
		id: userFind._id,
		username: userFind.username,
		password: userFind.password,
		admin: userFind.admin,
		token,
	})
})
