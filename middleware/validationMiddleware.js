import { body, validationResult } from 'express-validator'
import { BadRequestError } from '../errors/customErrors.js'
import { JOB_STATUS, JOB_TYPE } from '../utils/constans.js'

const withValidationErrors = validateValues => {
	return [
		validateValues,
		(req, res, next) => {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				const errorMessages = errors.array().map(error => error.msg)
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
	body().isIn(Object.values(JOB_STATUS)).withMessage('not valid status value'),
	body().isIn(Object.values(JOB_TYPE)).withMessage('not valid job type value'),
])

// export const validateTest = withValidationErrors([
// 	body('name')
// 		.notEmpty()
// 		.withMessage('name is required')
// 		.isLength({ min: 3 })
// 		.withMessage(' name must be at least 3 characters')
// 		.trim(),
// ])
