import { Router } from 'express'

const router = Router()

import {
	getCurrentUser,
	getAppStats,
	updateUser,
} from '../controllers/currentUserController.js'

router.get('/admin/stats', getAppStats)
router.get('/current-user', getCurrentUser)
router.patch('/update-user', updateUser)

export default router
