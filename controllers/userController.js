import UserModel from '../models/UserModel.js'
import { StatusCodes } from 'http-status-codes'

export const createUser = async (req, res) => {
	const { name, email, password, lastName, location, role } = req.body

	const user = await UserModel.create({
		name,
		email,
		password,
		lastName,
		location,
		role,
	})

	res.status(StatusCodes.CREATED).json({ user })
}
