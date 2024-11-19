import bcrypt from 'bcryptjs'

export const hashedPassword = async password => {
	const salt = await bcrypt.genSalt(10)

	const securePassword = await bcrypt.hash(password, salt)

	return securePassword
}
