import mongoose from 'mongoose'

let productSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		min: 6,
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
	date: {
		type: Date,
		default: Date.now,
	},
})

export default mongoose.model('products', productSchema)
