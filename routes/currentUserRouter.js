import { Router } from 'express'

const router = Router()

import {
	getCurrentUser,
	getAppStats,
	updateUser,
} from '../controllers/currentUserController.js'
import { validateUpdateUser } from '../middleware/validationMiddleware.js'
import { authorizePermissions } from '../middleware/userMiddlewate.js'

router.get('/admin/stats', authorizePermissions('admin'), getAppStats)
router.get('/current-user', getCurrentUser)
router.patch('/update-user', validateUpdateUser, updateUser)

export default router
