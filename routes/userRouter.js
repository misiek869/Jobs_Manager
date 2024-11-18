import { Router } from 'express'

const router = Router()

import { registerUSer, loginUser } from '../controllers/userController.js'

router.post('/register', registerUSer)
router.post('/login', loginUser)

export default router
