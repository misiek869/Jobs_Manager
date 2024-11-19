import { Unauthenticated } from '../errors/customErrors.js'
import { verifyJWT } from '../utils/tokenUtils.js'

export const authenticateUser = async (req, res, next) => {
	const { token } = req.cookies

	if (!token) {
		throw new Unauthenticated('authentication invalid')
	}

	try {
		const { userId, role } = verifyJWT(token)
		req.user = { userId, role }
		next()
	} catch (error) {
		throw new Unauthenticated('authentication invalid')
	}
}

export const authorizePermissions = (...rest) => {
	console.log(rest)
	next()
}
