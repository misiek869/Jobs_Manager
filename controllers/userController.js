import UserModel from '../models/UserModel.js'
import { StatusCodes } from 'http-status-codes'
import { hashedPassword } from '../utils/passwordUtils.js'

export const registerUSer = async (req, res) => {
	const isFirstUser = (await UserModel.countDocuments()) === 0

	req.body.role = isFirstUser ? 'admin' : 'user'

	req.body.password = await hashedPassword(req.body.password)

	const user = await UserModel.create(req.body)

	res.status(StatusCodes.CREATED).json({ msg: 'user created' })
}

export const loginUser = async (req, res) => {
	res.send('logged in')
}
