import { Router } from 'express'

import {
	getCurrentUser,
	getAppStats,
	updateUser,
} from '../controllers/currentUserController.js'
import { validateUpdateUser } from '../middleware/validationMiddleware.js'
import {
	authorizePermissions,
	checkForDemoUser,
} from '../middleware/userMiddlewate.js'
import upload from '../middleware/multerMiddleware.js'

const router = Router()

router.get('/admin/stats', authorizePermissions('admin'), getAppStats)
router.get('/current-user', getCurrentUser)
router.patch(
	'/update-user',
	checkForDemoUser,
	upload.single('avatar'),
	validateUpdateUser,
	updateUser
)

export default router
