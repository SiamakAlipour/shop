import express from 'express'
import bcrypt from 'bcryptjs'
import User from '../models/User'
import {
	editValidation,
	loginValidation,
	registerValidation,
} from '../validation'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
export const router = express.Router()
// register a user

router.post('/register', async (req, res) => {
	// Register validation
	let { username, password, email, admin } = req.body
	const { error } = registerValidation(req.body)
	if (error) return res.status(400).send(error.details[0].message)
	// check if username is already in DB
	const checkUsernameExist = await User.findOne({
		username: username.toLowerCase(),
	})
	if (checkUsernameExist)
		return res.status(400).send('Username already exist')
	// check if email is already in DB
	const checkEmailExist = await User.findOne({
		email: email.toLowerCase(),
	})
	if (checkEmailExist) return res.status(400).send('Email already exist')
	// hashing password
	const salt = await bcrypt.genSalt(10)
	const hashedPassword = await bcrypt.hash(password, salt)
	// create a user
	const user = new User({
		username: username.toLowerCase(),
		password: hashedPassword,
		email: email.toLowerCase(),
		admin: admin,
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
	const userFind = await User.findOne({ username: username.toLowerCase() })
	if (!userFind) return res.status(400).send('Invalid username or password')
	// check if password is correct
	const validPass = await bcrypt.compare(password, userFind.password)
	if (!validPass) return res.status(400).send('Invalid username or password')
	// Create and asign token
	const token = jwt.sign({ _id: userFind._id }, process.env.SECRET, {
		expiresIn: '30d',
	})
	res.header('auth-header', token).send({
		id: userFind._id,
		username: userFind.username,
		password: userFind.password,
		email: userFind.email,
		admin: userFind.admin,
		token,
	})
})
// Delete user
router.delete('/:id', async (req, res) => {
	try {
		const removedProduct = await User.remove({ _id: req.params.id })
		res.status(200).json({
			message: 'removed',
			removedProduct,
		})
	} catch (error) {
		res.status(400).json({ error })
	}
})
// Edit user
router.patch('/:id', async (req, res) => {
	const { id } = req.params
	const { username, password, email, admin } = req.body

	let finalPassword

	const userEditFind = await User.findOne({ _id: id })

	const usernameFind = await User.findOne({
		username: username.toLowerCase(),
	})

	if (
		username.toLowerCase() !== userEditFind.username.toLowerCase() &&
		usernameFind
	) {
		return res.status(400).send('این نام کاربری استفاده شده است')
	}
	if (password === userEditFind.password) {
		finalPassword = userEditFind.password
	} else {
		const salt = await bcrypt.genSalt(10)
		finalPassword = await bcrypt.hash(password, salt)
	}

	try {
		const updatedUser = await User.updateOne(
			{ _id: id },
			{
				$set: {
					username: username.toLowerCase(),
					password: finalPassword,
					email: email.toLowerCase(),
					admin,
				},
			}
		)
		res.status(200).json(updatedUser)
	} catch (error) {
		res.status(400).json({ error })
	}
})
// Get all users list
router.get('/', async (req, res) => {
	try {
		const users = await User.find()
		res.status(200).json(users)
	} catch (error) {
		res.status(400).json({ error })
	}
})
// get user all checkout
router.get('/checkout/:id', async (req, res) => {
	try {
		const userFind = await User.findOne({ _id: req.params.id })
		res.status(200).json(userFind.checkout)
	} catch (error) {
		res.status(400).json({ error })
	}
})
// post a checkout
router.post('/checkout/:id', async (req, res) => {
	const { name, description, unitPrice, count } = req.body
	const checkIfExist = await User.findOneAndUpdate(
		{
			_id: req.params.id,
			'checkout.name': name,
		},
		{
			$inc: {
				'checkout.$.count': 1,
			},
		}
	)
	if (checkIfExist) return res.status(200).send(checkIfExist)
	try {
		const userFind = await User.findOne({ _id: req.params.id })
		userFind.checkout.push({
			name,
			description,
			unitPrice,
			count,
		})
		userFind.save()
		res.status(200).json(userFind.checkout)
	} catch (error) {
		res.status(400).json({ error })
	}
})
router.patch('/checkout/:id/:checkoutID', async (req, res) => {
	const { id, checkoutID } = req.params
	let { name, description, unitPrice, count } = req.body
	await User.findById(id)
		.then((user) => {
			const checkout = user.checkout.id(checkoutID) // returns a matching subdocument
			name = name == null ? checkout.name : name
			description =
				description == null ? checkout.description : description
			unitPrice = unitPrice == null ? checkout.unitPrice : unitPrice
			count = count == null ? checkout.count : count
			checkout.set({
				name,
				description,
				unitPrice,
				count,
			})
			return user.save()
		})
		.then((user) => {
			res.status(200).send(user)
		})
		.catch((e) => res.status(400).send(e))
})
router.delete('/checkout/:id/:checkoutID', async (req, res) => {
	try {
		const deleteCheckout = await User.updateOne(
			{
				_id: req.params.id,
			},
			{
				$pull: {
					checkout: {
						_id: req.params.checkoutID,
					},
				},
			}
		)
		res.status(200).send('حذف شد')
	} catch (error) {
		res.status(400).json({ error })
	}
})
