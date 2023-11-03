import { DataTypes } from "sequelize";
import sequelize from "../config/database.js"
import Patient from "./patient.model.js";

const SensorData = sequelize.define('SensorData', {
  heartRate: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  bodyTemperature: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  patientId: {
    type: DataTypes.FLOAT,
    allowNull: false,
  }
});

export default SensorData
