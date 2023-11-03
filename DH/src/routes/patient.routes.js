import express from 'express'
const router = express.Router();

import { getAllpatient, getpatientById, createpatient, updatepatient, deletepatient } from '../controllers/patient.controller.js'

router.route('/').get(getAllpatient).post(createpatient)
router.route('/:id').get(getpatientById).put(updatepatient).delete(deletepatient)

export default router
