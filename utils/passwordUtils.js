import bcrypt from 'bcryptjs'

export const hashedPassword = async password => {
	const salt = await bcrypt.genSalt(10)

	const securePassword = await bcrypt.hash(password, salt)

	return securePassword
}

export const isPasswordMatch = async (password, hashedPassword) => {
	const isMatch = await bcrypt.compare(password, hashedPassword)
	return isMatch
}
