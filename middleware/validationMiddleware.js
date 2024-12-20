import { body, param, validationResult } from 'express-validator'
import {
	BadRequestError,
	NotFoundError,
	Unauthorized,
} from '../errors/customErrors.js'
import { JOB_STATUS, JOB_TYPE } from '../utils/constans.js'
import mongoose from 'mongoose'
import JobModel from '../models/JobModel.js'
import UserModel from '../models/UserModel.js'

const withValidationErrors = validateValues => {
	return [
		validateValues,
		(req, res, next) => {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				const errorMessages = errors.array().map(error => error.msg)

				if (errorMessages[0].startsWith('there is no job')) {
					throw new NotFoundError(errorMessages)
				}

				if (errorMessages[0].startsWith('not authorized')) {
					throw new Unauthorized('not authorized to access this path')
				}

				throw new BadRequestError(errorMessages)
			}

			next()
		},
	]
}

export const validateJobInput = withValidationErrors([
	body('company').notEmpty().withMessage('company is required'),
	body('position').notEmpty().withMessage('position is required'),
	body('jobLocation').notEmpty().withMessage('job location is required'),
	body('jobStatus')
		.isIn(Object.values(JOB_STATUS))
		.withMessage('not valid status value'),
	body('jobType')
		.isIn(Object.values(JOB_TYPE))
		.withMessage('not valid job type value'),
])

export const validateIdParam = withValidationErrors([
	param('id').custom(async (value, { req }) => {
		const isValiId = mongoose.Types.ObjectId.isValid(value)
		if (!isValiId) {
			throw new BadRequestError('invalid MongoDB id')
		}
		const job = await JobModel.findById(value)

		if (!job) throw new NotFoundError(`there is no job with id ${value}`)

		const isAdmin = req.user.role === 'admin'
		const isOwner = req.user.userId === job.createdBy.toString()

		if (!isAdmin && !isOwner) {
			throw new Unauthorized('not authorized to access this path')
		}
	}),
])

export const validateRegisterUser = withValidationErrors([
	body('name').notEmpty().withMessage('name is required'),
	body('email')
		.notEmpty()
		.isEmail()
		.withMessage('valid email is required')
		.custom(async email => {
			const user = await UserModel.findOne({ email })
			if (user) {
				throw new BadRequestError('email already exists')
			}
		}),
	body('password')
		.notEmpty()
		.withMessage('password is required')
		.isLength({ min: 8 })
		.withMessage('password must be at least 8 characters'),
	body('lastName').notEmpty().withMessage('last name is required'),
	body('location').notEmpty().withMessage('location is required'),
])

export const validateLoginUser = withValidationErrors([
	body('email')
		.notEmpty()
		.withMessage('email is required')
		.isEmail()
		.withMessage('valid email is required'),
	body('password').notEmpty().withMessage('password is required'),
])

export const validateUpdateUser = withValidationErrors([
	body('name').notEmpty().withMessage('name is required'),
	body('email')
		.notEmpty()
		.withMessage('email is required')
		.isEmail()
		.withMessage('invalid email format')
		.custom(async (email, { req }) => {
			const user = await UserModel.findOne({ email })
			if (user && user._id.toString() !== req.user.userId) {
				throw new Error('email already exists')
			}
		}),
	body('lastName').notEmpty().withMessage('last name is required'),
	body('location').notEmpty().withMessage('location is required'),
])
