// imports modules
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { router as productRouter } from './routes/product.js'
// App config
dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000

// middlewares
app.use(express.json())
app.use('/api/products', productRouter)
// DB Config
mongoose.connect(process.env.DB, () => {
	console.log('connected to db')
})

// API Endpoints
app.get('/', (req, res) => {
	res.send('hell')
})
// listener
app.listen(PORT, () => {
	console.log(`running on port ${PORT}`)
})
