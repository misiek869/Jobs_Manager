import { body, param, validationResult } from 'express-validator'
import { BadRequestError, NotFoundError } from '../errors/customErrors.js'
import { JOB_STATUS, JOB_TYPE } from '../utils/constans.js'
import mongoose from 'mongoose'
import JobModel from '../models/JobModel.js'

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
	param('id').custom(async value => {
		const isValiId = mongoose.Types.ObjectId.isValid(value)
		if (!isValiId) {
			throw new BadRequestError('invalid MongoDB id')
		}
		const job = await JobModel.findById(value)

		if (!job) throw new NotFoundError(`there is no job with id ${value}`)
	}),
])

// export const validateTest = withValidationErrors([
// 	body('name')
// 		.notEmpty()
// 		.withMessage('name is required')
// 		.isLength({ min: 3 })
// 		.withMessage(' name must be at least 3 characters')
// 		.trim(),
// ])
