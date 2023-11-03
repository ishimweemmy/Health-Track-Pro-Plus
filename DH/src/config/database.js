import { Sequelize } from "sequelize";

const sequelize = new Sequelize('dhospital', 'ishimweemmy', '', {
  host: 'localhost',
  dialect: 'sqlite',
  storage: './database.sqlite',
});

export default sequelize
