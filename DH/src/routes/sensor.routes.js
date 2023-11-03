import express from 'express'
const router = express.Router();
import { getAllSensorData, createSensorData, deleteSensorData, getSensorDataById } from "../controllers/sensor.controller.js"

router.route('/').get(getAllSensorData).post(createSensorData)
router.route('/:id').get(getSensorDataById).delete(deleteSensorData)

export default router
