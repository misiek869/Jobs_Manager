// express-async-errors must be on top
import 'express-async-errors'

import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'

// routers
import jobRouter from './routes/jobRouter.js'
import userRouter from './routes/userRouter.js'
import currentUserRouter from './routes/currentUserRouter.js'

// middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js'
import { authenticateUser } from './middleware/userMiddlewate.js'

const app = express()

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'))
}

app.use(cookieParser())
app.use(express.json())

app.get('/', (req, res) => {
	res.send('hello world')
})

app.use('/api/v1/jobs', authenticateUser, jobRouter)

app.use('/api/v1/auth', userRouter)

app.use('/api/v1/users', currentUserRouter)

app.use('*', (req, res) => {
	res.status(404).json({ msg: 'not found' })
})

app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5100

try {
	await mongoose.connect(process.env.MONGO_URL)
	app.listen(port, () => {
		console.log(`server is running on port ${port}`)
	})
} catch (error) {
	console.log(error)
	process.exit(1)
}
