const { Sequelize } = require('sequelize')
const dotenv = require('dotenv');
const env = process.env.NODE_ENV || 'development';
dotenv.config();

const config = {
	development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
		port: process.env.DB_PORT,
    dialect: 'postgres'
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
		port: process.env.DB_PORT,
    dialect: 'postgres'
  },
}

const connection = new Sequelize(config[env].database, config[env].username, config[env].password, {
	port: config[env].port,
  host: config[env].host,
  dialect: config[env].dialect,
})

module.exports = {
  ...config,
	connection
}
