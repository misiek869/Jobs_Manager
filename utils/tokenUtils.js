import jwt from 'jsonwebtoken'

export const crateJWT = payload => {
	const token = jwt.sign(payload, 'secret', {
		expiresIn: '1d',
	})
	return token
}
