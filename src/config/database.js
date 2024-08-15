const { Sequelize } = require('sequelize')
require('dotenv').config()

const database = process.env.DB_NAME
const username = process.env.DB_USER
const password = process.env.DB_PASSWORD
const host = process.env.DB_HOST
const dialect = 'mysql'

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  logging: false
})

const createDatabase = async () => {
  try {
    const connection = new Sequelize('', username, password, {
      host,
      dialect
    })
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${database}`)
    console.log(`Database ${database} created or already exists.`)

    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to create the database or connect:', error)
    process.exit(1)
  }
}

module.exports = { sequelize, createDatabase }
