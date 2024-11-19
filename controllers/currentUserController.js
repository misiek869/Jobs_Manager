import { StatusCodes } from 'http-status-codes'

import JobModel from '../models/JobModel.js'
import UserModel from '../models/UserModel.js'

export const getCurrentUser = async (req, res) => {
	res.status(StatusCodes.OK).json({ msg: 'get current user' })
}

export const getAppStats = async (req, res) => {
	res.status(StatusCodes.OK).json({ msg: 'app stats' })
}

export const updateUser = async (req, res) => {
	res.status(StatusCodes.OK).json({ msg: 'update user' })
}