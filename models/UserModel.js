import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
	name: String,
	email: String,
	password: String,
	lastName: {
		type: String,
		default: 'John',
	},
	location: {
		type: String,
		default: 'Poland',
	},
	role: {
		type: String,
		enum: ['user', 'admin'],
		default: 'user',
	},
})

export default mongoose.model('User', UserSchema)
