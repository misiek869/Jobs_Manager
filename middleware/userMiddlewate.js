import {
	Unauthenticated,
	Unauthorized,
	BadRequestError,
} from '../errors/customErrors.js'
import { verifyJWT } from '../utils/tokenUtils.js'

export const authenticateUser = async (req, res, next) => {
	const { token } = req.cookies

	if (!token) {
		throw new Unauthenticated('authentication invalid')
	}

	try {
		const { userId, role } = verifyJWT(token)
		const demoUser = userId === '674409980c56ab642cafd00e'
		req.user = { userId, role, demoUser }
		next()
	} catch (error) {
		throw new Unauthenticated('authentication invalid')
	}
}

export const authorizePermissions = (...rest) => {
	return (req, res, next) => {
		if (!rest.includes(req.user.role)) {
			throw new Unauthorized(`You can't access this route `)
		}
		next()
	}
}

export const checkForDemoUser = (req, res, next) => {
	if (req.user.demoUser) {
		throw new BadRequestError('Demo User. Read Only.')
	}
	next()
}
