import { Router } from 'express'
const router = new Router()
import { getIncome } from '../controllers/report.js'

// Create Comment
// http://localhost:3002/api/comments/:id
router.get('/:tag',  getIncome)

export default router


