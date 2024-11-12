// src/db.js
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite' 
});

async function initialize() {
    try {
        await sequelize.sync();  
        console.log("Database synchronized!");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

initialize();
module.exports = sequelize;
