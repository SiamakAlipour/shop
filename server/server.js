// imports modules
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { router as productRouter } from './routes/product.js'
import { router as userRouter } from './routes/user'
// import { router as uploadRouter } from './routes/upload'
import cors from 'cors'
// App config
dotenv.config()
const app = express()
const PORT = process.env.PORT || 8001

// middlewares
app.use(express.json())
app.use(cors())
// app.use(
// 	fileUpload({
// 		createParentPath: true,
// 	})
// )
app.use('/uploads', express.static('uploads'))
app.use('/api/products', productRouter)
app.use('/api/users', userRouter)

// app.use('/upload', uploadRouter)

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
