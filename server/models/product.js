import mongoose from 'mongoose'

let productSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		min: 2,
		max: 255,
	},
	description: {
		type: String,
		required: true,
		min: 6,
	},
	image: {
		type: String,
	},
	price: {
		type: Number,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
})

export default mongoose.model('products', productSchema)
