import { io } from '../../app.js';
import SensorData from '../models/sensor.model.js'

const getAllSensorData = async (req, res) => {
    const { patientId } = req.query

    try {
        const sensorData = await SensorData.findAll({
            where: {
                patientId: parseInt(patientId)
            }
        });
        res.json(sensorData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching sensor data' });
    }
};

const getSensorDataById = async (req, res) => {
    const { id, patientId } = req.query;

    try {
        const sensorData = await SensorData.findOne({
            where: {
                id: parseInt(id),
                patientId: parseInt(patientId)
            }
        });
        if (!sensorData) {
            return res.status(404).json({ error: 'Sensor data not found' });
        }
        res.json(sensorData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching sensor data' });
    }
};

const createSensorData = async (req, res) => {
    const { heartRate, bodyTemperature, patientId } = req.body;

    try {
        const newSensorData = await SensorData.create({ heartRate, bodyTemperature, patientId });
        const allSensorData = await SensorData.findAll({
            where: {
                patientId: parseInt(patientId)
            }
        });

        io.emit('send-sensor-data', allSensorData)

        return res.status(201).json({ success: true, data: newSensorData })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creating sensor data' });
    }
};

const deleteSensorData = async (req, res) => {
    const { id } = req.params;
    const { patientId } = req.query

    try {
        const sensorData = await SensorData.findOne({
            where: {
                id: parseInt(id),
                patientId: parseInt(patientId)
            }
        });

        if (!sensorData) {
            return res.status(404).json({ error: 'Sensor data not found' });
        }
        await sensorData.destroy();
        res.json({ message: 'Sensor data deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error deleting sensor data' });
    }
};

export {
    getAllSensorData,
    getSensorDataById,
    createSensorData,
    deleteSensorData,
};
