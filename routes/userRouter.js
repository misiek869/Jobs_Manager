import { Router } from 'express'

const router = Router()

import { createUser } from '../controllers/userController.js'

router.post('/register', register)
router.post('/login', login)

export default router
