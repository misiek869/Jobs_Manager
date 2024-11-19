import UserModel from '../models/UserModel.js'
import { StatusCodes } from 'http-status-codes'
import { hashedPassword, isPasswordMatch } from '../utils/passwordUtils.js'
import { Unauthenticated } from '../errors/customErrors.js'

export const registerUSer = async (req, res) => {
	const isFirstUser = (await UserModel.countDocuments()) === 0

	req.body.role = isFirstUser ? 'admin' : 'user'

	req.body.password = await hashedPassword(req.body.password)

	const user = await UserModel.create(req.body)

	res.status(StatusCodes.CREATED).json({ msg: 'user created' })
}

export const loginUser = async (req, res) => {
	const { email, password } = req.body

	const user = await UserModel.findOne({ email: email })

	if (!user) {
		throw new Unauthenticated('invalid credentials')
	}

	const isPasswordCorrect = await isPasswordMatch(password, user.password)

	if (!isPasswordCorrect) {
		throw new Unauthenticated('invalid credentials')
	}

	res.send('logged in')
}
