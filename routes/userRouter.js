import { Router } from 'express'
import {
	validateRegisterUser,
	validateLoginUser,
} from '../middleware/validationMiddleware.js'

const router = Router()

import { registerUSer, loginUser } from '../controllers/userController.js'

router.post('/register', validateRegisterUser, registerUSer)
router.post('/login', validateLoginUser, loginUser)

export default router
