const Sequelize = require('sequelize');
// your credentials
DATABASE_URL = 'postgres://postgres_check:postgres_check@postgresql:5432/postgres_check';

const database = new Sequelize(DATABASE_URL);

module.exports = database;
