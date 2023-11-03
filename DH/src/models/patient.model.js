import { DataTypes } from "sequelize";
import sequelize from "../config/database.js"

const Patient = sequelize.define('patient', {
    patientName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    patientNationalID: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    frequentSickness: {
        type: DataTypes.STRING,
    },
});

export default Patient;
