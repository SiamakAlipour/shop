import express from 'express'
import Product from '../models/Product.js'

export const router = express.Router()
// Add product
router.post('/', async (req, res) => {
	const product = new Product({
		name: req.body.name,
		description: req.body.description,
		image: req.body.image,
		price: req.body.price,
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

//  remove a product
router.delete('/:id', async (req, res) => {
	try {
		const removedProduct = await Product.remove({ _id: req.params.id })
		res.status(200).json(removedProduct)
	} catch (error) {
		res.status(400).json({
			error,
		})
	}
})

// update a product
router.patch('/:id', async (req, res) => {
	try {
		const updatedPost = await Product.updateOne(
			{ _id: req.params.id },
			{
				$set: {
					name: req.params.name,
					description: req.params.description,
					image: req.params.image,
				},
			}
		)
		res.status(200).json(updatedPost)
	} catch (error) {
		res.status(400).json({
			error,
		})
	}
})
