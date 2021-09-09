import express from 'express'
import Product from '../models/Product.js'

export const router = express.Router()
// Add product
router.post('/', async (req, res) => {
	const product = new Product({
		name: req.body.name,
		description: req.body.description,
		image: req.body.image,
	})
	try {
		const newProduct = await product.save()
		res.status(200).json(newProduct)
	} catch (error) {
		res.status(400).json({
			error,
		})
	}
})

// get all products
router.get('/', async (req, res) => {
	try {
		const products = await Product.find()
		res.status(200).json(products)
	} catch (error) {
		res.status(400).json({
			error,
		})
	}
})
// get a product
router.get('/:id', async (req, res) => {
	const productId = req.params.id
	try {
		const product = await Product.findById(productId)
		res.status(200).json(product)
	} catch (error) {
		res.status(400).json({
			error,
		})
	}
})
