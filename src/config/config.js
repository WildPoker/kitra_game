require('dotenv').config()

module.exports = {
  host: process.env.HOST,
  port: process.env.PORT || 5000,
  jwt_secret: process.env.JWT_SECRET,
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  }
}
