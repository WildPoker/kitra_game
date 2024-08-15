require('dotenv').config()
const server = require('./src/server')
const { host, port } = require('./src/config/config')

server.start('', host, port)
