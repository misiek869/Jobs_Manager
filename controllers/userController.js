import UserModel from '../models/UserModel.js'
import { StatusCodes } from 'http-status-codes'

export const registerUSer = async (req, res) => {
	const isFirstUser = (await UserModel.countDocuments()) === 0

	req.body.role = isFirstUser ? 'admin' : 'user'

	const user = await UserModel.create(req.body)

	res.status(StatusCodes.CREATED).json({ user })
}

export const loginUser = async (req, res) => {
	res.send('logged in')
}
