import { StatusCodes } from 'http-status-codes'

import JobModel from '../models/JobModel.js'
import UserModel from '../models/UserModel.js'

export const getCurrentUser = async (req, res) => {
	const user = await UserModel.findOne({ _id: req.user.userId })
	const userWithoutPassword = user.toJSON()
	res.status(StatusCodes.OK).json({ user: userWithoutPassword })
}

export const getAppStats = async (req, res) => {
	res.status(StatusCodes.OK).json({ msg: 'app stats' })
}

export const updateUser = async (req, res) => {
	const obj = { ...req.body }

	delete obj.password

	const updatedUser = await UserModel.findByIdAndUpdate(req.user.userId, obj)

	res.status(StatusCodes.OK).json(updatedUser)
}
