import { Router } from 'express'

const router = Router()
import {
	getAllJobs,
	createJob,
	getSingleJob,
	editJob,
	deleteJob,
} from '../controllers/jobController.js'
import {
	validateIdParam,
	validateJobInput,
} from '../middleware/validationMiddleware.js'
import { checkForDemoUser } from '../middleware/userMiddlewate.js'

router
	.route('/')
	.get(getAllJobs)
	.post(checkForDemoUser, validateJobInput, createJob)
router
	.route('/:id')
	.get(validateIdParam, getSingleJob)
	.patch(checkForDemoUser, validateJobInput, validateIdParam, editJob)
	.delete(checkForDemoUser, validateIdParam, deleteJob)

export default router
