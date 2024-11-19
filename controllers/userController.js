import UserModel from '../models/UserModel.js'
import { StatusCodes } from 'http-status-codes'
import bcrypt from 'bcryptjs'

export const registerUSer = async (req, res) => {
	const isFirstUser = (await UserModel.countDocuments()) === 0

	req.body.role = isFirstUser ? 'admin' : 'user'

	const salt = await bcrypt.genSalt(10)

	const hashedPassword = await bcrypt.hash(req.body.password, salt)

	req.body.password = hashedPassword

	const user = await UserModel.create(req.body)

	res.status(StatusCodes.CREATED).json({ msg: 'user created' })
}

export const loginUser = async (req, res) => {
	res.send('logged in')
}
