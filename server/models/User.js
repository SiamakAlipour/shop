import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
	username: {
		type: String,
		required: true,
		min: 6,
		max: 255,
	},
	password: {
		type: String,
		required: true,
		min: 8,
		max: 1024,
	},

	email: {
		type: String,
		required: true,
		min: 6,
		max: 255,
	},
	admin: {
		type: Boolean,
		default: false,
	},
	checkout: [
		{
			name: {
				type: String,
				required: true,
			},
			description: {
				type: String,
				required: true,
			},
			date: {
				type: Date,
				default: Date.now,
			},
			unitPrice: {
				type: Number,
			},
			count: {
				type: Number,
				required: true,
			},
		},
	],
})

export default mongoose.model('users', userSchema)
