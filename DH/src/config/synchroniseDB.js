import sequelize from "./database.js";

export const synchronizeDB = async () => {
    await sequelize.sync()
        .then(() => {
            console.log('Database synchronized with models.');
        })
        .catch((err) => {
            console.error('Error syncing with the database:', err);
        });
}