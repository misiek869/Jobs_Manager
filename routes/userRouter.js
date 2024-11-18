import { Router } from 'express'

const router = Router()

import { registerUSer } from '../controllers/userController.js'

router.post('/register', registerUSer)
// router.post('/login', login)

export default router
