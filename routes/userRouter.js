import { Router } from 'express'
import {
	validateRegisterUser,
	validateLoginUser,
} from '../middleware/validationMiddleware.js'

const router = Router()

import {
	registerUSer,
	loginUser,
	logout,
} from '../controllers/userController.js'

router.post('/register', validateRegisterUser, registerUSer)
router.post('/login', validateLoginUser, loginUser)
router.get('/logout', logout)

export default router
